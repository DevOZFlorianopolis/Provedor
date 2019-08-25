const mongoose = require('mongoose');

const Client = mongoose.model('Client');

module.exports = {
    async findAll(req, res) {
        let clients = await Client.find();
        return res.json(clients);
    },

    async findById(req, res) {
        let client = await Client.findById(req.params.id);
        return res.json(client);
    },

    async save(req, res) {
        try {
            let client = await Client.create(req.body);
            return res.json(client);
        }
        catch (err) {
            console.log(err);
            return res.send("Erro no payload");
    }

    },

    async update(req, res) {
        let client = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(provider);
    },
    async delete(req, res) {
        await Client.findByIdAndDelete(req.params.id);
        return res.send("Deletado com sucesso.");
    },
};