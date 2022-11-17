const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");
const Valet = require("../models/Valet");

module.exports = {
  get: (req, res, next) => {
    models.Valet.find()
      .then((valets)=> res.send(valets)).catch(next);
  },

  getUser:(req,res,next) =>{
    const id = req.body.id;
    console.log('AM I ALIVE', id)
    models.Valet.find({creatorId:id})
        .then((locations) => {
          console.log(locations)
          res.send(locations)})
        .catch(next);
},

  post: (req, res, next) => {
    console.log(req.cookies)
    const valet = req.body;
    new Valet(valet)
      .save()
      .then((newValet) => res.send(newValet))
      .catch(next);
  },
  addToLocation: (req, res, next) => {
    
    models.Valet.find({name:req.body.valetName}).
    then((valets)=>{
      models.Location.find({_id:req.body.locationId})
      .then((locations)=>{
        valets[0].locations.push(locations[0]._id);
        locations[0].valets.push(valets[0]._id);
        locations[0].save();
        valets[0].save();
      });
        
    });
  },
  
  delete: (req, res, next) => {
    const id = req.params.id;
    models.Valet.deleteOne({_id: id})
    .then((removedValet)=>res.send(removedValet))
    .catch(next);
  }
};
