import express from "express";
const router =express.Router()
import crud from './crud.js'
router.use('/crud',crud)
router.get('/',(req,res)=>res.send("backend working fine"))
export default router