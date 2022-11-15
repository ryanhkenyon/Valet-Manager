const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");
const Location = require("../models/Location");

module.exports = {
  get: (req, res, next) => {
    models.Location.find()
            .then((location) => res.send(location))
            .catch(next);
  },

  post: (req, res, next) => {
    const location = req.body;
    new Location(location)
      .save()
      .then((newLocation) => res.send(newLocation))
      .catch(next);
  },
};
