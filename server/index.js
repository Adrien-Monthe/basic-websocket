const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors : {'origin' : '*'}
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (data) => {
        console.log(data);
        io.emit('message', `${socket.id.slice(0, 2)} said ${message}` );

    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
