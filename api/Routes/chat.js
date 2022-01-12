const router =require ("express").Router()
const path =require('path')
router.get('/chat',(req,res)=>{
  const   __dirname = path.resolve();
    res.sendFile('/index.html', { root: __dirname });

})
module.exports = router