const app =require('./express');
const uuid = require("uuid");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var users=[]
let clientSocketIds = [];
let connectedUsers= [];
io.on('connection', function(socket) {
    // console.log(socket.id,'socket connected...');
    // socket.on('loggedin', function(user) {
    //     clientSocketIds.push({socket: socket, userId:  user.user_id});
    //     connectedUsers = connectedUsers.filter(item => item.user_id != user.user_id);
    //     connectedUsers.push({...user, socketId: socket.id})
    //     io.emit('updateUserList', connectedUsers)
    // });
    //     socket.on("connected", function (userId) {
    //         users[userId] = socket.id;
            
    //     });
        socket.on('message', function(data) {
            //console.log(data)
            socket.broadcast.to(data.id).emit('message', data.msg);
        })
    // socket.on('chat message', (msg) => { 
    //     socket.broadcast.emit('chat message', msg) 
    //   });
       
    //   socket.on('join', function (data) {    
    //     socket.join(data.email);
    //   });
    //   io.to(socket.id).emit('message', {msg: 'hello world.'});

      

      
      
});
module.exports=server