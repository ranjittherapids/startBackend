const app =require('./express');
const http = require('http');
const axios = require('axios');
const server = http.createServer(app);
const { Server } = require("socket.io");

// const io = new Server(server,{
//     cors: {
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//       }
// },{ transports: ['websocket', 'polling']});
// var uniqueSocketId=''
// io.on('connection', function async(socket) {
//   //console.log(socket.id," new users connected" );
//   uniqueSocketId=socket.id
//       socket.on('adduser',(user)=>{
//         var data=user;
//         data.socketId=socket.id 
//         socket.emit('AddUserSocketId',data)
//       })
//   // send message
//   socket.on('sendmessage',(data)=>{
//     console.log(data,'ll')
//  io.to(data.receiverId).emit('getmessage',data.text)
//   })
//  //  for disconnect
// socket.on('disconnect',()=>{
//   setTimeout(()=>{ 
//      axios.patch(`http://localhost:8000/crud/update_user/SocketId/${socket.id}`,{socketId:uniqueSocketId})
//   },1000)
//   })
// socket.on("connect_error", (err) => {
//   console.log(`connect_error due to ${err.message}`);
// });
// });
module.exports=server