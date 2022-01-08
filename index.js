import mongoose from 'mongoose'
import   {Socket} from "socket.io";
import app from "./api/services/express.js";
const url="mongodb+srv://ranjit:123@cluster0.dhy0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";//OFFICE ACCOUNT
const URL="mongodb+srv://ranjit:123@cluster0.wypi3.mongodb.net/backendStat?retryWrites=true&w=majority"
const PORT=4000
mongoose.Promise = global.Promise;
 mongoose.connect(URL,{
    useNewUrlParser: true, 

    useUnifiedTopology: true 
    
  })
 mongoose.connection
 .once('open',()=>{
     console.log("db connection ")
 })
 .on('error',(err)=>{
     console.log('err',err)
 })
const server = app.listen(PORT,()=>{
    console.log(`server is running on http://localhost ${PORT}`)
})
const io = new Socket(server);

const activeUsers = new Set();

io.on("connection", function (socket) {
  console.log("Made socket connection");

  socket.on("new user", function (data) {
    socket.userId = data;
    activeUsers.add(data);
    io.emit("new user", [...activeUsers]);
  });

  socket.on("disconnect", () => {
    activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on("chat message", function (data) {
    io.emit("chat message", data);
  });
  
  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});