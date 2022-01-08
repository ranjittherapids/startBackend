import express from 'express'
import nodemailer from 'nodemailer'
import CrudSchema from '../../Modal/crud.js'
const router=express.Router()
export const CreateUser= async(req,res)=>{
    try{
        
        const {name}=req.body
        const UserData=new CrudSchema(req.body)
        UserData.save()
        .then(response=>{
        //  let testAccount =   nodemailer.createTestAccount();
          var transporter= nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "410c76f550f9c7",
              pass: "3516eb88cae10e"
            }
          });
   transporter.sendMail({
    from: 'rk5340347@gmail.com', // sender address
    to: "rapidskumar@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }).then(response=>{
    console.log("Message sent: %s", response);
  })
  .catch(err=>{
    return   res.status(400).json({data:err,
        msg:'problem with send email'})
})


          return  res.status(200).json({data:response,
                msg:'sucessfully save data'})
        })
        .catch(err=>{
            return   res.status(400).json({data:err,
                msg:'problem with save data in db '})
        })
      
    }
  catch(err){
     return res.status(400).send({data:err,msg:"something error occurs during createUser function called"})
  }
}
export const GetUser= async(req,res)=>{
   try{  
     CrudSchema.find()
     .then(response=>{
      return  res.status(200).json({data:response,
        msg:'sucessfully get data'})
    })
    .catch(err=>{
      return   res.status(400).json({data:err,
          msg:'problem with get data in db '})
  })
    }
  catch(err){
    return res.status(400).send({data:err,msg:"something error occurs during GetUser function called"})
 }
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
  .then(response=>{ 
        return  res.status(200).json({data:response,
         msg:" sucessfully get data by id"
    })
  })
  .catch(err=>{
    return   res.status(400).json({data:err,
        msg:'can`t find this id  in db '})
  })
  }
    catch(err){
      return res.status(400).send({data:err,msg:"something error occurs during getdata by id function called"})
    }
  }
export const UpdateDataByID=async(req,res)=>{
  try{
CrudSchema.updateOne(
  { _id: req.params.id },
   { $set:req.body }
   )
   .then(response=>{
    return  res.status(200).json({data:response,
      msg:" sucessfully update user data by id"
 })
   })
   .catch(err=>{
    return   res.status(400).json({data:err,
      msg:'failed to update usedata in db '})
   })
  }
  catch(err){
    return res.status(400).send({data:err,msg:"something error occurs during UpdateDataByID function called"})
  }
}

// 61d93e6efa571e806dc51517