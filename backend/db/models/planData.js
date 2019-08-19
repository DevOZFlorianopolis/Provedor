const {Schema, model} = require('mongoose');
// const Client = require('./clientData');

const PlanSchema = new Schema({
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },

        value: {
            type: String,
            required: true
        },
        provider: {
            type: String,
            required: true
        },
        clients: [{
            type:  Schema.Types.ObjectId,
            ref: 'Client'
        }],
    },
    {
        timestamps: true
    },
    );
module.exports = model("Plan", PlanSchema);