const express = require('express');
const router = express.Router();
const user = require('../models/uesrModel');
const bcrypt = require('bcrypt')

router.get('/login', (req, res)=>{  
    res.render('login',{msg:''});
})

const items = [
    {
        id:1,
        name:"Football Boot",
        img:"/IMG/item2.jpeg",
        price:"$35.67",
    },
    {
        id:2,
        name:"Exercise Bench",
        img:"/IMG/Exercise Bench.jpeg",
        price:"$63.00",
    },
    {
        id:3,
        name:"Workout Sneaker",
        img:"/IMG/workout.png",
        price:"$23.75",
    },
    {
        id:4,
        name:"Bike Helmet",
        img:"/IMG/Bike Helmet.jpeg",
        price:"$23.13",
    },
    {
        id:5,
        name:"Tennies Ball",
        img:"/IMG/item3.jpeg",
        price:"$12.77",
    },
    {
        id:6,
        name:"Football Jersery",
        img:"/IMG/birds feather jersey.png",
        price:"$19.54",
    },
    {
        id:7,
        name:"Abs Carver",
        img:"/IMG/Ab Carverjpeg",
        price:"$15.90",
    },
    {
        id:8,
        name:"Golf Clipart",
        img:"/IMG/Golf Clipart.jpeg",
        price:"$27.12",
    },
    {
        id:9,
        name:"Basketball",
        img:"/IMG/basketball.jpeg",
        price:"$14.00",
    },
]

router.post('/login', async (req, res) => {
    const sass = req.session;
    const collect = req.body;
    if(collect.username!=null && collect.password!=null){
        if(collect.username.length>4 && collect.password.length>4){
            const checker = await user.findOne({username:collect.username})
            if(checker) {
                const comparePassword = bcrypt.compareSync(collect.password, checker.password)
                if(comparePassword == true) {
                    sass.username = collect.username
                    return res.render('index',{shop:items});
                }
            }
        } else {
            console.log('done con 2')
            return res.render('login',{msg:'please fill form ooh'})
        }
    } else {
        console.log('done con 1')
        return res.render('login',{msg:'please fill form'})
    }
})


module.exports = router;