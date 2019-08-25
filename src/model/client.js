const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    plan: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Plan',
    },
    sign_date: {
        type: Date,
        required: true,
    },
});

mongoose.model('Client', ClientSchema)