const mongoose =require('mongoose')
const server =require('./api/services/SocketIo')
const URL="mongodb+srv://ranjit:123@cluster0.wypi3.mongodb.net/backendStat?retryWrites=true&w=majority"
const PORT=8000
mongoose.Promise = global.Promise;
 mongoose.connect(URL,{ useNewUrlParser: true,  useUnifiedTopology: true })
 mongoose.connection
 .once('open',()=>console.log("db connection "))
 .on('error',(err)=>console.log('err',err))

 
 server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})
