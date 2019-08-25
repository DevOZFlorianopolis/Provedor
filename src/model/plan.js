const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Provider'
    },
    clients: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Client'
    }],

});

mongoose.model('Plan', PlanSchema)