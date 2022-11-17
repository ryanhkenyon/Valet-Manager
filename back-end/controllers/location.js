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
  getUser:(req,res,next) =>{
    const id = req.body.id;
    models.Location.find({creatorId:id})
        .then((locations) => {
          res.send(locations)})
        .catch(next);
},

  post: (req, res, next) => {
    const location = req.body;
    new Location(location)
      .save()
      .then((newLocation) => res.send(newLocation))
      .catch(next);
  },

  addToValet: (req, res, next) => {
    
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    console.log('yooosoa', id)
    models.Location.deleteOne({_id: id})
    .then((removedLocation)=>res.send(removedLocation))
    .catch(next);
  }
};
