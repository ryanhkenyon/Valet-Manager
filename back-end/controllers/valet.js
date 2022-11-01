const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");
const Valet = require("../models/Valet");

module.exports = {
  get: (req, res, next) => {
    console.log("u wanna register?");
  },

  post: (req, res, next) => {
    const valet = req.body;
    new Valet(valet)
      .save()
      .then((newValet) => res.send(newValet))
      .catch(next);
  },
};
