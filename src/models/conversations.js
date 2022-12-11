const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const conversationSchema = new mongoose.Schema(
  {
    senderReceiver: [{ type: String, required: true }],
    messages: [messageSchema],
  },
  { collection: "Conversations" }
);

conversationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
conversationSchema.set("toObject", {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Conversation", conversationSchema);
