import express from "express";
const router =express.Router()
import createData from './crud.js'
router.use('/crud',createData)
router.get('/crud1',()=>{
    console.log("hello man")
})

export default router