const router =require ("express").Router()


router.get('/',(req,res)=>{
    res.send("hello socket io")
})
module.exports = router