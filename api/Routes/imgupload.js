const router=require('express').Router()
const multiparty=require('connect-multiparty');
const path = require('path');
const fs = require('fs');
 
 const MultipartMiddleware=multiparty({uploadDir:'./images'})
router.post('/upload_image',MultipartMiddleware,(req, res,)=> {

  var TempFile = req.files.upload;
    var TempPathfile = TempFile.path;

   const targetPathUrl = path.join(__dirname,"./uploads/"+TempFile.name);

   if(path.extname(TempFile.originalFilename).toLowerCase() === ".png" || ".jpg"){
     
    fs.rename(TempPathfile, targetPathUrl, err =>{
      console.log(TempFile.originalFilename)
          res.status(200).json({
         uploaded: true,
          url: `${TempFile.originalFilename}`
        });

        if(err) return console.log(err,'wow');
    })
  }
})
module.exports=router