import  Mongoose  from "mongoose";
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
export default Mongoose.model('CrudSchema',CrudSchema) 