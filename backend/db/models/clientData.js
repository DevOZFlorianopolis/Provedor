const {Schema, model} = require('mongoose');
const Plan = require('./planData');

const ClientSchema = new Schema({
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        plans: [{
            type:  Schema.Types.ObjectId,
            required: true,
            ref: 'Plan'
        }],
        signDate: {
            type: Date,
            default: Date.now,
            required: true
        }
    },
    {
        timestamps: true
    },
);

module.exports = model("Client", ClientSchema);