import express from "express";
import path from 'path';
const router=express.Router()
router.get('/chat',(req,res)=>{
  const   __dirname = path.resolve();
    res.sendFile('/index.html', { root: __dirname });

})
export default router