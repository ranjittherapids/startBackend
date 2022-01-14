const  Mongoose  =require ("mongoose")
const CrudSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    },
    imageUrl:{
        type:String,
    },
    password:{
        type:String,
    }
})
module.exports =  Mongoose.model('CrudSchema',CrudSchema) 