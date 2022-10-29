const express = require('express');
const router = express.Router();
const shopeItems = require('../models/additemModel');
const cloudinary = require('cloudinary')


router.get('/admin', (req, res) => {
    const sass = req.session;
    if(sass.email){
        return res.render('admin',{msg:''})
    }
    res.render('adminlogin',{msg:''});
});


router.post('/adminlogin', (req, res) => {
    const adminEmail = process.env.adminEmail;
    const adminPassword = process.env.adminPassword

    const sass = req.session;
    const collect = req.body;
    if(collect.email!=null && collect.password!=null){
        if(collect.email.length >4 && collect.password.length >4){
            if(collect.email === adminEmail && collect.password === adminPassword){
                sass.email = collect.email;
                return res.render('admin',{msg:'welcome our beloved admin', user:'Admin'})
            } else {
                return res.render('adminlogin',{msg:'invild email or password'})
            }

        } else {
            return res.render('adminlogin',{msg:'inputs to short'});
        }
    } else {
        return res.render('adminlogin',{msg:'fill all field'});
    }
})


router.post('/additem', (req, res) => {
    const items = req.body;
    try{
        const files = req.files.pic
        if(items.name!=null && items.desc!=null && items.price!=null && items.oldprice!=null && files!=null){
            if(true){
                console.log('level 1');
                if(items.name.length >4 && items.desc.length >4 && items.price.length >4){
                    console.log(files);
                    console.log('level 2');
                    if(files.mimetype=='image/jpeg' || files.mimetype=='image/png' || files.mimetype=='image/gif'){
                        console.log('uploading file now')
                        cloudinary.v2.uploader.upload(files.tempFilePath,{resource_type:'image',folder:'product/itemImg/'},(err, result) => {
                           if(err) {
                             console.log(err)
                           } else {
                                const savedItem = new shopeItems({
                                    name:items.name,
                                    desc:items.desc,
                                    price:items.price,
                                    oldprice:items.oldprice,
                                    pic:result.secure_url,
                                    publicID:result.public_id
                                })
                                savedItem.save()
                                    res.redirect('/shop');
                                    console.log(savedItem) 
                           } 
                             
                        })
                    }
                } else {
                    return res.render('admin',{msg:'to short'})
                }
               
              } 
        } else {
            return res.render('admin',{msg:'fill all fields'});
        } 
    } catch(err){
        console.log(err);
        return res.render('admin',{msg:'error while posting item'})
    }   
})


module.exports = router;



