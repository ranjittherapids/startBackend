const router=require('express').Router()
const path =require('path')
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })
// router.get('/image',(req,res)=>{
//     const   __dirname = path.resolve();
// res.sendFile('/uploadimg.html',{root:__dirname})

// })
router.post('/upload_image', upload.single('profile-file'),(req, res,)=> {
    // req.file is the `profile-file` file
    // req.body will hold the text fields, if there were any
    console.log(JSON.stringify(req.file))
    // var response = '<a href="/">Home</a><br>'
    // response += "Files uploaded successfully.<br>"
    // response += `<img src="${req.file.path}" /><br>`
    // return res.send(response)
  })
router.get('/get_image',(req,res)=>{
    res.send('wow image')
})
module.exports=router