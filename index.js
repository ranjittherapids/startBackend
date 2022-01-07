import app from "./api/services/express.js";
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
const url="mongodb+srv://ranjit:123@cluster0.dhy0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 mongoose.connect(url,{
    keepAlive: 1,
    useNewUrlParser: true,
  })
 mongoose.connection
 .once('open',()=>{
     console.log("db connection ")
 })
 .on('error',(err)=>{
     console.log('err',err)
 })
const PORT=6000
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})