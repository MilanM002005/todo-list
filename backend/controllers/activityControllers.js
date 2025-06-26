const taskModel = require('../models/activity');

const createActivity = async (req, res) => {
  const body = {
    task_id: req.body.task_id,
    task_name: req.body.task_name,
  };
  // console.log(body);
  await taskModel.insertOne(body);

  res.status(200).json({
    id: body.task_id,
    name: body.task_name,
    message: 'Activity created successfully',
  });
};
const getActivity = async (_req, res) => {
  const activityList = await taskModel.find({});
  res.status(200).json(activityList);
};
const deleteActivity = async (req, res) => {
  const id = req.params.id;
  await taskModel.findOneAndDelete({ task_id: id });
  res.status(200).json({
    message: 'Activity deleted successfully',
  });
};
module.exports = {
  createActivity,
  getActivity,
  deleteActivity,
};
