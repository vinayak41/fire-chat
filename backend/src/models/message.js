const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true
  },
  receiver: {
    type: String,
    required: true
  }
}, {collection: "messages"});


module.exports = mongoose.model("Message", messageSchema)