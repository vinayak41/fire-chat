const User = require("../models/user");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../utils/config");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

const getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new User({ username, password: hashedPassword });
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      next(error);
    }
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch)
        return res.status(400).json({ message: "Incorrect password" });
      const token = await jwt.sign(
        { userId: user._id, username: user.username },
        JWT_SECRET
      );
      return res
        .status(200)
        .json({ token, message: "Signin successful", user });
    } else {
      return res.status(400).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, createUser, login, getAllUsers };
