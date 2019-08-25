const mongoose = require('mongoose');

const Plan = mongoose.model('Plan');

module.exports = {
    async findAll(req, res) {
        let plans = await Plan.find();
        return res.json(plans);
    },

    async findById(req, res) {
        let plan = await Plan.findById(req.params.id);
        return res.json(provider);
    },
    async findClients(req, res) {
        let plan = await Plan.findById(req.params.id);
        return res.json(provider.clients);
    },

    async save(req, res) {
        try {
            let plan = await Plan.create(req.body);
            return res.json(plan);
            
        } catch (error) {
            return res.status(400).send({
                message: "Erro no payload."
            });
        }
    },

    async update(req, res) {
        let plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(plan);
    },
    async delete(req, res) {
        await Plan.findByIdAndDelete(req.params.id);
        return res.send();
    },
};