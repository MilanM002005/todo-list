const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
  task_id: {
    type: Number,
    required: true,
    unique: true,
  },
  task_name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Activity', activitySchema);
