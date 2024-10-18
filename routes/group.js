const express = require("express");
const router = express.Router();
const Group = require("../models/group");

// 查询所有自定义分组
router.get("/", async (req, res, next) => {
  try {
    const list = await Group.find();
    res.sendFormat({ list });
  } catch (err) {
    res.sendFormat({}, err.messgae, 400);
  }
});

// 新增一个分组
router.post("/", async (req, res, next) => {
  try {
    const addGroup = new Group({ ...req.body });
    const newGroup = await addGroup.save();
    res.sendFormat(newGroup);
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

// 删除某个组
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteGroup = await Group.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          isDelete: true,
        },
      }
    );

    res.sendFormat(deleteGroup);
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

module.exports = router;
