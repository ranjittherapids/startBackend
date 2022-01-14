const app =require('./express');
const uuid = require("uuid");
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const CrudSchema =require('../Modal/crud');
const { ppid } = require('process');
const { application } = require('express');
//const CrudSchema =require ('../../Modal/crud.js')
app.get("/get",(req,res)=>{

})
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
io.on('connection', function async(socket) {
  console.log(socket.id," new users connected" );

   
    //  for connect
   socket.on('adduser',(user)=>{
     var data=user;
     data.socketId=socket.id
    io.emit('AddUserSocketId',data)
        // adduser(user._id,socket.id)
        // // io.emit('getuser',users)
        // // console.log(users,'wow')
   })
  // send message
  socket.on('sendmessage',(data)=>{
  console.log(data,'text')
  //io.emit('getmessage',text)
 io.to(data.receiverId).emit('getmessage',data.text)
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