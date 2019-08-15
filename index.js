const mongo = require('mongodb').MongoClient;

import * as config from './resources/config.json';
import * as httpServer from './src/httpServer/HttpServer';

// const url = 'mongodb://localhost:27017';

var port = config.http.port;

httpServer.createHttpServer(port);

// mongo.connect(url, (err, client) => {
// if (err) {
//     console.error(err)
//     return
//   }
//   //...
// });

