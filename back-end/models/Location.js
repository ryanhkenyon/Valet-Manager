const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const locationSchema = new Schema({

    //change this to name?
    location: {
        type: String,
        unique: true,
        required: true
    },
    //add address and maybe other things

    valets: [{ type: ObjectId, ref: "Valet" }],

    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

});


module.exports = new Model('Location', locationSchema);