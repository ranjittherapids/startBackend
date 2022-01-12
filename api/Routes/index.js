const router =require("express").Router()
const crud =require('./crud.js')
const chat =require('./chat.js')
const socket =require('./Socket.js')
router.use('/crud',crud)
router.use('/chat',chat)
router.use('/socket',socket)
router.get('/',(req,res)=>res.send("backend working fine"))
module.exports = router