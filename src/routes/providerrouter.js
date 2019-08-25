const express = require('express');
const routes = express.Router();
const providerController = require('../controller/ProviderController');


routes.get('/', providerController.findAll);
routes.get('/:id', providerController.findById);
routes.get('/:id/plans', providerController.findPlans);
routes.put('/:id', providerController.update);
routes.delete('/:id', providerController.delete);
routes.post('/', providerController.save);
module.exports = routes;