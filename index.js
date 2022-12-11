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
const conversationsRouter = require("./src/routes/conversation");

const app = express();
app.use(express.static("frontend/build"));
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

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
app.use("/api/conversations", conversationsRouter);
app.use(unknownEndpoint);
app.use(errorHandler);

console.log(config.MONGODB_URI);

let connectedUsers = [];

io.on("connection", (socket) => {
  const connectedUser = {
    username: socket.handshake.query.username,
    socketId: socket.id,
  };
  connectedUsers.push(connectedUser)
  socket.emit("connected_users", connectedUsers)
  socket.broadcast.emit("connected_users", connectedUsers);

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
    socket.broadcast.emit("update_connected_users", connectedUsers);
  });
});

httpServer.listen(config.PORT, () => {
  console.log(`Sever running on port number ${config.PORT}`);
});
