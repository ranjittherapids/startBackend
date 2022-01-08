import app from "./api/services/express.js";
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
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
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})