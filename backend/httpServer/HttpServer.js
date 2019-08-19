import { createServer } from 'http';

//create a server object:
export function createHttpServer(port) {
    createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
    }).listen(port);
}