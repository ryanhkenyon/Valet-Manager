const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");
const Valet = require("../models/Valet");

module.exports = {
  get: (req, res, next) => {
    console.log("u wanna register?");
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
};
