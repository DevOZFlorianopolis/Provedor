const express = require('express');
const routes = express.Router();
const planController = require('../controller/PlanController');


routes.get('/', planController.findAll);
routes.get('/:id', planController.findById);
routes.get('/:id/clients', planController.findClients);
routes.put('/:id', planController.update);
routes.delete('/:id', planController.delete);
routes.post('/', planController.save);
module.exports = routes;