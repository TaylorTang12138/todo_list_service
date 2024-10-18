const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// 根据传参获取任务
router.get("/", async (req, res, next) => {
  try {
    const { type } = req.query;
    const list = await Task.find({ type, isDelete: false });
    res.sendFormat({ list });
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

// 添加任务
router.post("/", async (req, res, next) => {
  const { body } = req;
  const addTask = new Task({ ...body, isDelete: false });
  try {
    const newTask = await addTask.save();
    res.sendFormat(newTask);
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

// 删除任务
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    // const deleteTask = await Task.findOne({ _id: id });
    const result = await updateTask({ id, isDelete: true });
    if (result) {
      res.sendFormat(result);
    } else {
      res.sendFormat({}, "删除失败", 400);
    }
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

// 更新任务
router.put("/", async (req, res, next) => {
  try {
    // req.body._id = req.body.id;
    // delete req.body.id;
    const result = await updateTask({
      ...req.body,
      isDelete: false,
    });
    if (result) {
      res.sendFormat({ ...req.body });
    } else {
      res.sendFormat({}, "更新失败", 400);
    }
  } catch (err) {
    res.sendFormat({}, err.message, 400);
  }
});

const updateTask = async (task) => {
  const { id } = task;
  delete task.id;
  try {
    let updateTask = await Task.findOneAndUpdate(
      { _id: id },
      {
        $set: { ...task },
      }
    );
    return updateTask ? updateTask : true;
  } catch (err) {
    return false;
  }
};

module.exports = router;
