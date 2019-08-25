const mongoose = require('mongoose');

const Provider = mongoose.model('Provider');

module.exports = {
    async findAll(req, res) {
        let providers = await Provider.find();
        return res.json(providers);
    },

    async findById(req, res) {
        let provider = await Provider.findById(req.params.id);
        return res.json(provider);
    },
    async findPlans(req, res) {
        let provider = await Provider.findById(req.params.id);
        return res.json(provider.plans);
    },

    async save(req, res) {
        let provider = await Provider.create(req.body);
        return res.json(provider);
    },

    async update(req, res) {
        let provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(provider);
    },
    async delete(req, res) {
        await Provider.findByIdAndDelete(req.params.id);
        return res.send();
    },
};