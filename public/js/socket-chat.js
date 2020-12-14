var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', () => {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {

        console.log('Usuarios conectados', resp);
    })
});
socket.on('disconnect', () => {
    console.log('Perdimos conexion con el servidor');
});

//ENVIAR INFORMACION

/*socket.emit('crearMensaje', {
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('RESPUETA SERVER:', resp)
});
*/

//ESCUCHAR INFORMACION
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje)
});

//ESCUCHAR CAMBIOS DE USUARIOS, CUANDO UN USUARIO SALE O ENTRA AL CHAT

socket.on('listaPersona', function(personas) {
    console.log('Servidor:', personas);
});

//MENSAJES PRIVADOS

socket.on('mensajePrivado', (mensaje) => {
    console.log('Mensaje Privado', mensaje);
})