const Provider = require('../db/models/providerData')

let createProvider = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Não foi enviada uma requisição válida',
        })
    }

    const provider = new Provider(body)

    if (!provider) {
        return res.status(400).json({ success: false, error: err })
    }

    provider
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: provider._id,
                message: 'Provedor criado!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Provedor não criado!',
            })
        })
}

let updateProvider = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Sem requisição',
        })
    }

    Provider.findOne({ _id: req.params.id }, (err, provider) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Provedor não encontrado!',
            })
        }
        provider.name = body.name
        provider.time = body.time
        provider.rating = body.rating
        provider
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: provider._id,
                    message: 'Provedor atualizado!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Provedor não atualizado!',
                })
            })
    })
}

let deleteProvider = async (req, res) => {
    await Provider.findOneAndDelete({ _id: req.params.id }, (err, provider) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!provider) {
            return res
                .status(404)
                .json({ success: false, error: `Provedor não encontrado` })
        }

        return res.status(200).json({ success: true, data: provider })
    }).catch(err => console.log(err))
}

let getProviderById = async (req, res) => {
    await Provider.findOne({ _id: req.params.id }, (err, provider) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: provider })
    }).catch(err => console.log(err))
}

let getProviders = async (req, res) => {
    await Provider.find({}, (err, providers) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!providers.length) {
            return res
                .status(404)
                .json({ success: false, error: `Provedor não encontrado` })
        }
        return res.status(200).json({ success: true, data: providers })
    }).catch(err => console.log(err))
}

module.exports = {
    createProvider,
    updateProvider,
    deleteProvider,
    getProviders,
    getProviderById,
}