const router =require ("express").Router()
const path =require('path')
const {create_chat,get_chat}=require('../Controller/chat/chat')
router.post('/create_chat',create_chat)
router.get('/get_chat/:SenderID/:ReceiverID',get_chat)
module.exports = router