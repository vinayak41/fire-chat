const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/user");
const config = require("./src/utils/config");
const { errorHandler, unknownEndpoint } = require("./src/utils/middlewares");
const cors = require("cors");
// const Message = require("./src/models/message");
const Conversations = require("./src/models/conversations");

const app = express();
app.use(express.static("frontend/build"))
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

let connectedUsers = [];

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/users", usersRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

io.on("connection", (socket) => {
  socket.on("user_connected", async (payload) => {
    //add new user connected user list
    connectedUsers = connectedUsers.filter(
      (user) => user.username !== payload.username
    );
    connectedUsers.push({ username: payload.username, socketId: socket.id });

    //send connected user list to every connected user
    socket.emit("connected_users", connectedUsers);
    socket.broadcast.emit("connected_users", connectedUsers);

    //send previous conversation of connected user to that user
    const previousConversations = await Conversations.find(
      {
        senderReceiver: { $in: [payload.username] },
      },
      { _id: 0 }
    );
    io.to(socket.id).emit("previous_conversations", previousConversations);
  });

  socket.on("send_message", async (message) => {
    //send message to receiver
    const receiverSocketId = connectedUsers.find(
      (user) => user.username === message.receiver
    )?.socketId;
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("new_message", message);
    }

    // save message in database
    await Conversations.findOneAndUpdate(
      {
        senderReceiver: {
          $all: [
            { $elemMatch: { $eq: message.sender } },
            { $elemMatch: { $eq: message.receiver } },
          ],
        },
      },
      {
        senderReceiver: [message.sender, message.receiver],
        $push: { messages: message },
      },
      {
        upsert: true,
        new: true,
      }
    );
  });

  socket.on("disconnect", () => {
    //after usr diconnecting send updated userlist to every connected user
    connectedUsers = connectedUsers.filter(
      (user) => user.socketId !== socket.id
    );
    socket.broadcast.emit("connected_users", connectedUsers);
  });
});

httpServer.listen(config.PORT, () => {
  console.log(`Sever running on port number ${config.PORT}`);
});
