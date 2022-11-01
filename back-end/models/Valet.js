const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const valetSchema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },

    locations: [{ type: ObjectId, ref: "Location" }],

    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }

});

module.exports = new Model('Valet', valetSchema);