'use strict'

const Task = require('../models/Task');

const taskHandler = {};

taskHandler.getTasks = function(req, res, next) {
    Task.find({ owner: req.user.email })
        .then((data) => { res.status(200).send(data) })
        .catch((err) => next(err));
};

taskHandler.createOrUpdateTask = async function (req, res, next) {
  Task.findOneAndUpdate(
    { _id: id },
    { $set: { ...req.body, owner: req.user.email } },
    { upsert: true, new: true }
  )
    .then((doc) => res.status(201).send(doc))
    .catch((err) => next(err));
};

bookHandler.deleteTask = async function (req, res, next) {
    const { id } = req.params;
  
    Task.findOneAndDelete({ _id: id, owner: req.user.email })
      .then((data) => res.status(204).send())
      .catch((error) => next(error));
  };

module.exports = taskHandler;
