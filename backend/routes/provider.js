const ProviderController = require('../controllers/providerController')
const Provider = require('../db/models/providerData.js')

var router = require('express').Router();

router.post('/provider', ProviderController.createProvider);
router.put('/provider/:id', ProviderController.updateProvider);
router.delete('/provider/:id', ProviderController.deleteProvider);
router.get('/provider/:id', ProviderController.getProviderById);
router.get('/providers', ProviderController.getProviders);

module.exports = router;
