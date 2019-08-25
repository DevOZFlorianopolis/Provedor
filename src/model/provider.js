const mongoose = require('mongoose');

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    plans: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Plan'
    }],

});

mongoose.model('Provider', ProviderSchema);