import express from "express"
import {CreateUser,GetUser,GetDataById,UpdateDataByID,DeleteDataById} from "../Controller/crud/crud.js"
const router =express.Router()
 router.post('/create_user',CreateUser) //for create user
 router.get('/get_user',GetUser) //for create user
 router.get('/get_user/:id',GetDataById)
 router.patch('/update_user/:id',UpdateDataByID)
 router.delete('/delete_user/:id',DeleteDataById)
export default router
