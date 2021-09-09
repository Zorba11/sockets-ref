const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => console.log(`listening to ${PORT}`));

// Static files

app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log('made the socket connection!', socket.id);
});
