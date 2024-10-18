var express = require("express");
var router = express.Router();
const User = require("../models/user");

// 查询所有用户
router.get("/", async function (req, res, next) {
  console.log(res.sendFormat);

  try {
    const list = await User.find();
    res.sendFormat({ list });
  } catch (err) {
    res.sendFormat({}, err.message, 500);
  }
});

// 添加用户
router.post("/", async function (req, res, next) {
  const { body } = req;
  const addUser = new User({
    ...body,
  });

  try {
    const user = await User.findOne({
      name: body.name,
    });
    if (user) {
      res.sendFormat({}, "用户名重复", 201);
    } else {
      const newUser = await addUser.save();
      res.sendFormat({ newUser });
    }
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

module.exports = router;
