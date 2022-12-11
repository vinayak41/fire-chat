const express = require("express");
const router = express.Router();

const { getConversations } = require("../controllers/conversations");
const { requireSignIn } = require("../controllers/common-controllers");

router.get("/", requireSignIn, getConversations);

module.exports = router;
