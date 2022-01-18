const chatSchema =require('../../Modal/chat.js')
const create_chat=async(req,res)=>{
try{
    const ChatData=new chatSchema(req.body)
    ChatData.save()
    .then(response=>{
        res.status(200).json({data:response,msg:'sucessfully save data'})
       
      } )
      .catch(err=> res.status(400).json({data:err, msg:'problem with save chatdata in db '}))
}
catch(err){ return res.status(400).send({data:err,msg:"something error occurs during create_chat function called"})}
}
const get_chat=async(req,res)=>{
    try{
        chatSchema.find({SenderID:req.params.SenderID , ReceiverID:req.params.ReceiverID})
        .then(response=>{
            res.status(200).json({data:response,msg:'sucessfully get data'})
           
          } )
          .catch(err=> res.status(400).json({data:err, msg:'problem with get chatdata in db '}))
    }
    catch(err){ return res.status(400).send({data:err,msg:"something error occurs during get_chat function called"})}
    }
module.exports ={create_chat,get_chat}