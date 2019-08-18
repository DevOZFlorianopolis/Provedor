const mongo = require('mongodb').MongoClient;

import * as config from './resources/config.json';
import * as httpServer from './src/httpServer/HttpServer';

var port = config.http.port;

httpServer.createHttpServer(port);

