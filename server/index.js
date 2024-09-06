const http = require('http')
const express = require('express')
const { Server: SocketServer } = require('socket.io')
const pty = require('node-pty')

const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows:30,
    cwd: process.env.HOME,
    env: process.env
})

const app = express()
const server = http.createServer(app)
const io  = new SocketServer({
    cors: '*'
})

io.attach(server)

io.on('connection', (socket) => {
    console.log('Socket connected', socket.id)
})

server.listen(9000, () => consoler.log('server running'))