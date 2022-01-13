const app =require('./express');
const uuid = require("uuid");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
},{ transports: ['websocket', 'polling']});
var users=[]
let clientSocketIds = [];
let connectedUsers= [];
const adduser=(userId,socketId)=>{
    !users.some(user=>user.userId===userId) &&
    users.push({userId,socketId})

}
const removeuser=(socketId)=>{
users=users.filter(user=>user.socketId !==socketId)
}
const getuser=(userId)=>{
    return users.filter(user=>user.userId==userId)
}
io.on('connection', function(socket) {
   //console.log("user")
   io.emit("welcome",'hi ranjit')
    //  for connect
   socket.on('adduser',(user)=>{
        adduser(user.userId,socket.id)
        io.emit('getuser',users)
        console.log(users,'wow')
   })
  // send message
  socket.on('sendmessage',({senderId,receiverId,text})=>{
const user=getuser(receiverId)
console.log(text,receiverId,'text')
console.log(user[0].socketId,'user')
io.to(user && user[0].socketId).emit('getmessage',{senderId,text})
  })
 //  for disconnect
   socket.on('disconnect',(user)=>{
    removeuser(user.userId,socket.id)
    io.emit('getuser',users)
})
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

});
module.exports=server