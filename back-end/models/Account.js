const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const accountSchema = new Schema({

    location: {
        type: String,
        unique: true,
        required: true
    },

    valets: [{ type: ObjectId, ref: "Valet" }]

});


module.exports = new Model('Account', accountSchema);