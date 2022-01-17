const router =require ("express").Router()
const {CreateUser,GetUser,GetDataById,UpdateDataByID,UpdateDataBySocketID,DeleteDataById,DeleteDataBySocketId,DeleteAllData} =require ("../Controller/crud/crud.js")
 router.post('/create_user',CreateUser) //for create user
 router.get('/get_user',GetUser) //for create user
 router.get('/get_user/:id',GetDataById)
 router.patch('/update_user/userId/:id',UpdateDataByID)
 router.patch('/update_user/SocketId/:id',UpdateDataBySocketID)
 router.delete('/delete_user/userId:id',DeleteDataById)
 router.delete('/delete_user/SocketId/:id',DeleteDataBySocketId)
 router.delete('/delete_all',DeleteAllData)
module.exports = router
