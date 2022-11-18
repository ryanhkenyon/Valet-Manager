const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");
const Valet = require("../models/Valet");

module.exports = {
  get: (req, res, next) => {
    models.Valet.find()
      .then((valets) => res.send(valets))
      .catch(next);
  },
  getOne: (req, res, next) => {
    console.log('hello?', req.body)
    let id = Object.keys(req.body)[0]
    console.log(id)
    models.Valet.find({_id:id})
      .then((valet) => {
        res.send(valet)
      })
      .catch(next);
  },

  getUser: (req, res, next) => {
    const id = req.body.id;
    models.Valet.find({ creatorId: id })
      .then((locations) => {
        console.log(locations);
        res.send(locations);
      })
      .catch(next);
  },
  getLocations: (req, res, next) => {
    console.log(req.body);
  },

  post: (req, res, next) => {
    console.log(req.cookies);
    const valet = req.body;
    new Valet(valet)
      .save()
      .then((newValet) => res.send(newValet))
      .catch(next);
  },
  addToLocation: (req, res, next) => {
    models.Valet.find({ name: req.body.valetName }).then((valets) => {
      models.Location.find({ _id: req.body.locationId }).then((locations) => {
        valets[0].locations.push(locations[0]);
        locations[0].valets.push(valets[0]);
        locations[0].save();
        valets[0].save();
        res.send(valets[0])
      });
    });
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Valet.deleteOne({ _id: id })
      .then((removedValet) => res.send(removedValet))
      .catch(next);
  },
};
