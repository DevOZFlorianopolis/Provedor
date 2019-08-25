const express = require('express');
const routes = express.Router();
const clientController = require('../controller/ClientController');


routes.get('/', clientController.findAll);
routes.get('/:id', clientController.findById);
routes.put('/:id', clientController.update);
routes.delete('/:id', clientController.delete);
routes.post('/', clientController.save);
module.exports = routes;