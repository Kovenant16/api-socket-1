
class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();


    }

    socketEvents() {

        //on conecction
        this.io.on('connection', (socket) => {

            //escuchar evento: mensahe-to-server
            socket.on("mensaje-to-server", (data) => {
                console.log("Cliente emitio algo :", data);

                this.io.emit("mensaje-from-server", data)
            })
        });


    }

}

module.exports = Sockets;