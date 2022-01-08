import express from "express";
import crud from './crud.js';
import chat from './chat.js'
const router =express.Router()
router.use('/crud',crud)
router.use('/chat',chat)
router.get('/',(req,res)=>res.send("backend working fine"))
export default router