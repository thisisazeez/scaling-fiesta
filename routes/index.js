const express = require('express')
const router = express.Router()

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

// router.get('/index', (req, res) => {
//     res.render('index',{shop:items});
// })

router.get('/index', (req, res)=>{
    const sass = req.session;
    if(sass.username){
        res.render('index',{shop:items})
    }
    res.redirect('/register')
})

router.get('/item/:id', (req, res) => {
    const id = req.params.id

    const shop = items.find(item=>item.id==id)
    if(shop) {
        console.log(shop)
        res.render('itemshop',{shop:shop});
    } else {
        res.status('404').send('page not found');
    }
})






module.exports = router;