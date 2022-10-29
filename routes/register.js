const express = require('express');
const router = express.Router();
const user = require('../models/uesrModel')
const bcrypt = require('bcrypt')

router.get('/register', (req, res) => {
    res.render('register',{msg:''});
})

router.post('/register', async(req, res)=> {
    const sass = req.session;
    const collect = req.body;
    if(collect.username!=null && collect.email!=null && collect.password!=null){
        if(collect.username.length>4 && collect.email.length>4 && collect.password>4){
                user.find({username:collect.username},(err,data)=>{
                    if(err){
                        console.log(err);
                    } else {
                        if(data.length>0){
                            return res.render('register',{msg:'Username already exist'});
                        } else {
                            user.find({email:collect.email},(err,data)=>{
                                if(err){
                                    console.log(err);
                                } else {
                                    if(data.length>0){
                                        return res.render('register',{msg:'email already exist'});
                                    } else {

                                        const hashPassword = bcrypt.hashSync(collect.password, 10);

                                        const savedUser = new user({
                                            username:collect.username,
                                            email:collect.email,
                                            password:hashPassword
                                        }) 
                                        savedUser.save();
                                        sass.username = collect.username
                                        return res.redirect('/login');
                                    }
                                }
                            })
                        }
                    }
                })
        } else{
            console.log('done con 2')
            return res.render('register',{msg:process.env.emptyForm})
        }
    } else {
        console.log('done con 1')
        return res.render('register',{msg:process.env.emptyForm})
    }
})


module.exports = router;