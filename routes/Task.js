const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
});

router.post("/", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save().then(() => {
      res.status(200).json({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  let task = await Task.findById(req.params.id);
  task.task = req.body.task;
  try {
    await task.save().then(() => {
      res.status(200).json({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
  });
});

module.exports = router;
