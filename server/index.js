const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors : {'origin' : '*'}
});

io.on('connection', (socket) => {
    console.log('a user connected');

    io.emit('userId', socket.id);

    socket.on('message', (data) => {
        console.log(data);
        io.emit('message', `${data}` );

    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
