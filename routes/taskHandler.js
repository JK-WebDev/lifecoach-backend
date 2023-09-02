'use strict'

const Task = require('../models/Task');

const taskHandler = {};

taskHandler.getTasks = function(req, res, next) {
    Task.find({ owner: req.user.email })
        .then((data) => { res.status(200).send(data) })
        .catch((err) => next(err));
};

taskHandler.createTask = async function (req, res, next) {
    const { title, isCompleted, notes, owner } = req.body;

    Task.findOneAndUpdate(
      { title: title },
      { $set: { isCompleted: isCompleted, notes: notes, owner: owner } },
      { upsert: true, new: true }
    )
      .then((doc) => res.status(201).send(doc))
      .catch((err) => next(err));
  };

module.exports = taskHandler;