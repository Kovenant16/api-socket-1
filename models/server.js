//Servidor de express
const express = require('express');

//Servidor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //http server
        this.server = http.createServer(this.app)

        //config de sockets
        this.io = socketio(this.server, { /* configs */ });
    }


    middleWares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    configurarSockets() {
        new Sockets(this.io);
    }

    execute() {

        //inicializar middlewares
        this.middleWares();

        //inicializar sockets
        this.configurarSockets();

        //inicializar server
        this.server.listen(this.port, () => {
            console.log("Server coprriendo en puerto", this.port);
        })
    }
}

module.exports = Server;