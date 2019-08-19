var router = require('express').Router();

const provider = require('./provider');
const client = require('./client');
const plan = require('./plan');

router.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'});
});

router.use('/provider', provider);
router.use('/client', client);
router.use('/plan', plan);

module.exports = router;
