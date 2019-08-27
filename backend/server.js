import * as config from '../resources/config'

const Provider = require('./db/models/providerData');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
var cors = require('cors');

const port = config.api.port;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
    'mongodb+srv://jvbeltra:jvbeltraprovider@clusterprovider-y8xlc.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', require('./routes/routes'));
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
