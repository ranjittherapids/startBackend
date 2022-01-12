const  Mongoose  =require ("mongoose")
const CrudSchema=new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
module.exports =  Mongoose.model('CrudSchema',CrudSchema) 