const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const usersRouter = require("./src/routes/user");
const config = require("./src/utils/config");
const { errorHandler, unknownEndpoint } = require("./src/utils/middlewares");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000/",
    methods: ["GET", "POST"],
  },
});

app.use(cors())
app.use(express.json())

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

app.use("/api/users", usersRouter)
app.use(unknownEndpoint)
app.use(errorHandler);

io.on("connection", (socket) => {
  console.log("user connected");
  console.log(socket);
});

httpServer.listen(config.PORT, () => {
  console.log(`Sever running on port number ${config.PORT}`);
});
