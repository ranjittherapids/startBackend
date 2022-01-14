const  Mongoose  =require ("mongoose")
const CrudSchema=new Mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone_no:{
        type:Number,
    },
    imageUrl:{
        type:String,
    },
    socketId:{
        type:String,
    },
    password:{
        type:String,
    }
})
module.exports =  Mongoose.model('CrudSchema',CrudSchema) 