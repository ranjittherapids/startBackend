const router =require ("express").Router()
const {CreateUser,GetUser,GetDataById,UpdateDataByID,DeleteDataById,DeleteAllData} =require ("../Controller/crud/crud.js")
 router.post('/create_user',CreateUser) //for create user
 router.get('/get_user',GetUser) //for create user
 router.get('/get_user/:id',GetDataById)
 router.patch('/update_user/:id',UpdateDataByID)
 router.delete('/delete_user/:id',DeleteDataById)
 router.delete('/delete_all',DeleteAllData)
module.exports = router
