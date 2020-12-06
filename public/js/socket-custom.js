var socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

//ENVIAR INFORMACION

socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('RESPUETA SERVER:', resp)
});

//ESCUCHAR INFORMACION
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
});