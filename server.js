const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serviamo la cartella 'public' per i file statici (CSS, JS, ecc.)
app.use(express.static(path.join(__dirname, 'public')));

// Quando un utente visita "/", mandiamo chat.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

// Gestione della connessione WebSocket
io.on('connection', (socket) => {
    console.log('Un utente si è connesso');

    // Ricezione messaggi e invio a tutti
    socket.on('message', (data) => {
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('Utente disconnesso');
    });
});

// Porta (Render usa process.env.PORT automaticamente)
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server attivo su http://localhost:${PORT}`));
