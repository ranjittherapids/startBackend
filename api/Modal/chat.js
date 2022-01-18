const mongoose = require('mongoose');
const chatSchema=new mongoose.Schema({
    Text:{
        type: 'string',
    },
    SenderID:{
        type: 'string',
    },
    ReceiverID:{
        type: 'string',
    }
},{ timestamps: true })
module.exports =  mongoose.model('chatSchema',chatSchema) 
 