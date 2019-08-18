// const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Plan = require('./planData');

const ProviderSchema = new Schema({
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        // plans: [{
        //     type: Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'Plan'
        // }],
        cnpj: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    },
);
module.exports = mongoose.model("Provider", ProviderSchema);