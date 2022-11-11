const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        minLength: 5
    },

    password: {
        type: String,
        //TODO regex password
        require: true
        
    },

    rePassword: {
        type: String,
        require: true
    },

    locations: [{ type: ObjectId, ref: "Location" }],

    valets: [{ type: ObjectId, ref: "Valet" }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

// userSchema.pre('save', function (next) {
//     if (this.isModified('password')) {
//         bcrypt.genSalt(saltRounds, (err, salt) => {
//             bcrypt.hash(this.password, salt, (err, hash) => {
//                 if (err) { next(err); return }
//                 this.password = hash;
//                 next();
//             });
//         });
//         return;
//     }
//     next();
// });


module.exports = new Model('User', userSchema);