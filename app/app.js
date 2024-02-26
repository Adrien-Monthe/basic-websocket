const socket = io('ws://localhost:3000');

socket.on('message', (data) => {
    console.log(data);
    document.querySelector('ul').innerHTML += `<li>${data}</li>`;
});

document.querySelector('button').addEventListener('click', () => {
    socket.emit('message', document.querySelector('input').value);
});
