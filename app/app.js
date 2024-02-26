const socket = io('ws://localhost:3000');

let userId ;

socket.on('userId', (data) => {
    console.log(data);
    userId = data;
});

/*document.querySelector('button').addEventListener('click', () => {
    socket.emit('message', document.querySelector('input').value);
}); */

const messageList = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

socket.on('message', (data) => {
    console.log("Sending message to server");
    console.log(userId);
    console.log(data);
    console.info(data.includes(userId));
    if (!data.includes(userId)) {
        appendMessage(data);
    }
});

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.emit('message', `${userId} : ${message}`);
        messageInput.value = '';
    }
});

function appendMessage(message) {
    console.log("Did you enter here?")
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messageList.appendChild(listItem);
    messageList.scrollTop = messageList.scrollHeight;
}

