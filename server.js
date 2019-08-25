const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Provedor', {useNewUrlParser: true});

requireDir('./src/model');

const Provider = mongoose.model('Provider');

app.use('/api/provider', require('./src/routes/providerrouter'));
app.use('/api/client', require('./src/routes/clientrouter'));
app.use('/api/plan', require('./src/routes/planrouter'));

app.listen(3001);