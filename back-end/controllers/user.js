const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const models = require("../models");
const config = require("../config/config");
const utils = require("../utils");
const User = require("../models/User");

module.exports = {
  register: {
    //TODO find how to render seperate page to register

    get: (req, res, next) => {
      console.log("u wanna register?");

      // models.User.find()
      //   .then((users) => res.send(users))
      //   .catch(next);
    },

    post: (req, res, next) => {
      const { username, password, rePassword } = req.body;
      //check for errors

      
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        console.log(errors);
        return res.json(errors);
      }

      // //#1 validation. check if passwords match in register field
      if (password != rePassword) {
        return res.json({
          errors: [
            {
              value: `${rePassword}`,
              msg: "Passwords must match",
              param: "repeatPassword",
            },
          ],
        });
      }

      //#2 validation. Check if username exists already
      User.find({ username })
        .lean()
        .then((user) => {
          if (user.length != 0) {
            console.log("User already exists!");
            return res.json({
              errors: [
                {
                  value: `${username}`,
                  msg: "Username already exists",
                  param: "username",
                },
              ],
            });
          }
        });

      //encrypt password and creathe the user
      bcrypt.genSalt(9, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          let password = hash;
          new User({
            username,
            password,
          })
            .save()
            .then((newUser) => {
              res.send(newUser)
            })
            .catch(next);
        });
      });
    },
  },

  login: {
    get: (req, res, next) => {
      //TODO render login page?
      console.log("hey");
    },

    post: (req, res, next) => {
      const { username, password } = req.body;
      console.log(req)
      models.User.findOne({ username })
        .then((user) => {
          Promise.all([user, user.matchPassword(password)]).then(
            ([user, match]) => {
              if (!match) {
                res.status(401).send("Invalid password");
                return;
              }

              const token = utils.jwt.createToken({ id: user._id });
              res.header(
                  "Access-Control-Allow-Headers",
                  "Origin, X-Requested-With, Content-Type, Accept"
                )
                .cookie(config.authCookieName, token)
                .send({
                  id: user._id,
                  cookie: {
                    name: config.authCookieName,
                    token,
                  },
                });
            }
          );
        })
        .catch(next);
    },
  },

  logout: (req, res, next) => {
    const token = req.cookies[config.authCookieName];
    console.log("-".repeat(100));
    console.log(token);
    console.log("-".repeat(100));
    models.TokenBlacklist.create({ token })
      .then(() => {
        res.clearCookie(config.authCookieName).send("Logout successfully!");
      })
      .catch(next);
  },

  getOne: (req, res, next) => {
    const {id} = req.params;
    console.log('HEY', req)
    console.log(id);
    models.User.findById(id)
        .then((user) => res.send(user))
        .catch(next)
},
  // },

  // put: (req, res, next) => {
  //   const id = req.params.id;
  //   const { username, password } = req.body;
  //   models.User.update({ _id: id }, { username, password })
  //     .then((updatedUser) => res.send(updatedUser))
  //     .catch(next);
  // },

  // delete: (req, res, next) => {
  //   const id = req.params.id;
  //   models.User.deleteOne({ _id: id })
  //     .then((removedUser) => res.send(removedUser))
  //     .catch(next);
  // },
};
