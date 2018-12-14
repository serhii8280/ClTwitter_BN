"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const port = process.env.PORT || 3000;
const socketPort = process.env.SOCKET_PORT || 3001;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
const server = require('http').Server(App_1.default);
const io = require('socket.io')(server);
// Socket.io
server.listen(socketPort);
io.on('connection', function (socket) {
    // socket.emit('news', {  });
    socket.on('get-new-post', function (data) {
        io.emit('new-post', data);
    });
});
