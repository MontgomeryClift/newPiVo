/**
 * Created by salva on 3/05/16.
 */

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var aio = require('asterisk.io'),
    ami = null;

ami = aio.ami(
    '172.30.0.3',
    5038,
    'webadmin',
    'asterisk'
);

ami.on('error', function(err){
   throw err;
});

// ami.on('eventPeerStatus', function(data){
//     console.log(data.Event, data);
// });
// ami.on('eventPickup', function(data){
//     console.log(data.Event, data);
// });

// ami.on('eventQueueMemberStatus', function(data){
//     if(data.MemberName == 'araceli.rodriguez'){
//       if(data.Status == '6'){
//         console.log('sonando');
//         io.sockets.emit('asterisk', 'sonando');
//       }
//       if(data.Status == '2'){
//           console.log('hablando');
//           io.sockets.emit('asterisk', 'hablando');
//       }
//       if(data.Status == '1'){
//           console.log('preparado');
//           io.sockets.emit('asterisk', 'preparado');
//       }
//     }
// });

var clients = [];

io.on('connection', function(socket) {
    clients.push(socket.id);
    console.log(socket.handsshakeData);

    console.log('Alguien se ha conectado con Sockets', socket.id);
    socket.on('disconnect', function(event) {
    });
});

server.listen(8080, function() {
  console.log("Servidor corriendo en http://localhost:8080");
});
