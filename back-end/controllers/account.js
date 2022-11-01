const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require('../models/User');
const Account  = require('../models/Account');

module.exports = {
  get: {
    
    register: (req, res, next) => {
      console.log('u wanna register?')
      
    }
  },

  post: {
    
    register: (req, res, next) => {
      const location = req.body;
      console.log(req.body)
      new Account(location).save()
        .then((newAccount) => res.send(newAccount))
        .catch(next);
    },
  }
};