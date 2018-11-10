const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  assignedDate: {
    type: Date,
    default: Date.now
  },
  completedDate: {
    type: Date
  },
  assignee: {
    type: String
  },
  priority: {
    type: Number,
    default: 1
  },
  complete: {
    type: Boolean,
    default: false
  }
});

module.exports = Task = mongoose.model('task', TaskSchema);
