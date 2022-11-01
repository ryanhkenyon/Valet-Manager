const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const locationSchema = new Schema({

    location: {
        type: String,
        unique: true,
        required: true
    },

    valets: [{ type: ObjectId, ref: "Valet" }],

    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

});


module.exports = new Model('Location', locationSchema);