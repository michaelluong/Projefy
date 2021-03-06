const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../../models/Task');

// @route  GET api/tasks
// @desc   GET All Tasks
// @access Public
router.get('/', (req, res) => {
  Task.find()
    .sort({ assignedDate: -1 })
    .then(tasks => res.json(tasks));
});

// @route  POST api/tasks
// @desc   Create a Task
// @access Public
router.post('/', (req, res) => {
  const newTask = new Task({
    title: req.body.title
  });
  newTask.save().then(task => res.json(task));
});

// @route  DELETE api/tasks/:id
// @desc   Delete a Task
// @access Public
router.delete('/:id', (req, res) => {
  Task.findById(req.params.id).then(task =>
    task
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ success: false }))
  );
});

module.exports = router;
