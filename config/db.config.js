const mongoose = require("mongoose");
const linkUrl = "mongodb://127.0.0.1:27017/todo_list";

mongoose.set("strictQuery", true);

const connectDb = async () => {
  try {
    await mongoose.connect(linkUrl, {});
    console.log("mongodb连接成功!");
  } catch (err) {
    console.log("mongodb连接失败!");
    process.exit(1); // 退出进程
  }
};

module.exports = connectDb;
