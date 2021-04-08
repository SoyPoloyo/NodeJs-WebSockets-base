

const socketController = (socket) => {
            
    console.log('CLiente conectado', socket.id);


    socket.on('disconnect', () => {

        console.log('cliente desconectado', socket.id);

    })

    socket.on('enviar-mensaje', (payload, callback) => {

        // supongamos que guardamos el payload en db y esta nos devuelve un id
        const id = socket.id;

        callback(id)

        socket.broadcast.emit('enviar-mensaje', payload);

    })

}

module.exports = {
    socketController
}