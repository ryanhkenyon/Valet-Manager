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
    models.Valet.find({_id:req.body.valetId}).
    then((valets)=>{
      models.Location.find({location:req.body.locationName})
      .then((locations)=>{
        console.log(locations, valets)
        valets[0].locations.push(locations[0]._id);
        locations[0].valets.push(valets[0]._id);
        locations[0].save();
        valets[0].save();
      });
        
    });
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    console.log('yooosoa', id)
    models.Location.deleteOne({_id: id})
    .then((removedLocation)=>res.send(removedLocation))
    .catch(next);
  }
};
