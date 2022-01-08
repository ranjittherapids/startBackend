import express from 'express'
import CrudSchema from '../../Modal/crud.js'
const router=express.Router()
export const CreateUser= async(req,res)=>{
    try{
        const UserData=new CrudSchema(req.body)
        UserData.save()
        .then(response=> res.status(200).json({data:response,msg:'sucessfully save data'}))
        .catch(err=> res.status(400).json({data:err, msg:'problem with save data in db '}))
    }
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during createUser function called"})}
}
export const GetUser= async(req,res)=>{
   try{  
     CrudSchema.find()
     .then(response=> res.status(200).json({data:response,msg:'sucessfully get data'}))
    .catch(err=> res.status(400).json({data:err, msg:'problem with get data in db '}))
    }
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during GetUser function called"})}
}
// export const GetDataById=async(req,res)=>{
//   try{
// CrudSchema.find()
// .then(response=>{
//       response.map(data=>{
//     if(data._id==req.params.id)
//     {
//       return  res.status(200).json({data:data,
//         msg:'sucessfully get data by id'})
//     }
//     else{
//       return  res.status(200).json({
//         msg:'can`t find this id '})
//     }
//   })
// })
// .catch(err=>{
//   return   res.status(400).json({data:err,
//       msg:'problem with get by id  in db '})
// })
// }
//   catch(err){
//     return res.status(400).send({data:err,msg:"something error occurs during getdata by id function called"})
//   }
// }

export const GetDataById=async(req,res)=>{
    try{
  CrudSchema.find({_id:req.params.id})
  .then(response=> {
    if(response.length==0)res.status(200).json({ msg:" data is not aviliable on this id "})
    else res.status(200).json({data:response, msg:" sucessfully get data by id"})
  }  )
  .catch(err=> res.status(400).json({data:err, msg:'can`t find this id  in db '}))
  }
    catch(err){  return res.status(400).send({data:err,msg:"something error occurs during getdata by id function called"})}
  }
export const UpdateDataByID=async(req,res)=>{
  try{
CrudSchema.updateOne(
  { _id: req.params.id },
   { $set:req.body }
   )
   .then(response=>   res.status(200).json({data:response,msg:" sucessfully update user data by id"}))
   .catch(err=>  res.status(400).json({data:err,msg:'failed to update usedata in db '}))
  }
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during UpdateDataByID function called"}) }
}

export const DeleteDataById=async(req,res)=>{
  try{
    CrudSchema.deleteOne({_id:req.params.id})
    .then(response=>res.status(200).json({data:response,msg:'sucessfully delete data'}))
    .catch(err=>res.status(400).json({data:err,msg:"failed to delete this is data"}))
  }
  catch(err){ return res.status(400).send({data:err,msg:"something error occurs during DeleteDataById function called"}) }
}
