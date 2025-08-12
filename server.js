const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('Un utente si è connesso');

    socket.on('message', (data) => {
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('Utente disconnesso');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server attivo su http://localhost:${PORT}`));
