const ClientController = require('../controllers/clientController')

var router = require('express').Router();

router.post('/client', ClientController.createClient)
router.put('/client/:id', ClientController.updateClient)
router.delete('/client/:id', ClientController.deleteClient)
router.get('/client/:id', ClientController.getClientById)
router.get('/clients', ClientController.getClients)

module.exports= router;
