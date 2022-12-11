const Conversations = require("../models/conversations");

const getConversations = async (req, res, next) => {
  try {
    const previousConversations = await Conversations.find(
      {
        senderReceiver: { $in: [req.username] },
      },
      { _id: 0 }
    );

    const data = previousConversations.map((conversation) => ({
      ...conversation.toObject(),
      partner: conversation
        .toObject()
        .senderReceiver.find((username) => username !== req.username),
    }));

    res.json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getConversations,
};
