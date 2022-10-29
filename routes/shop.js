const express = require('express');
const router = express.Router();
const shopeItems = require('../models/additemModel');


// const shopItems = [ {
//         id:1,
//         name:'Bike Helmet',
//         img: '/IMG/item111.jpeg',
//         price: '$17.00',
//         stock: 'instock',
//         desc:'A quality mountain bike helmet to keep your skull protected during a thrilling and sometimes dangerous ride out on the trail.'
//     },
//     {
//         id:2,
//         name:'Trainning Can',
//         img: '/IMG/trainning can.jpeg',
//         price: '$22.78',
//         stock: 'instock',
//         desc: 'Mens Soccer Cleats Football Trainning can, Spikes Shoes High-Top Unisex Outdoor/Indoor Training Athletic Sneaker'
//     }, 
//     {
//         id:3,
//         name:'Vollyball',
//         img: '/IMG/item33.jpeg',
//         price: '$16.67',
//         oldprice: '$19.89',
//         stock: 'instock',
//         desc: 'Misaka Volleyball, Waterproof Indoor Outdoor Volleyball for Beach Game Gym Training (Official Size 5).'
//     }, 
//     {
//         id:4,
//         name:'Abs Carver',
//         img: '/IMG/item4.jpeg',
//         price: '$47.00',
//         stock: 'instock',
//         desc: 'Perfect Fitness Ab Carver Pro Roller Wheel With Built In Spring Resistance, At Home Core Workout Equipment'
//     }, {
//         id:5,
//         name:'Tennis Racket',
//         img: '/IMG/item5.jpeg',
//         price: '$11.79',
//         oldprice: '$15.45',
//         desc: 'STIGA Evolution Performance-Level Table Tennis Racket Made with Approved Rubber for Tournament Play'

//     },
//     {
//         id:6,
//         name:'Baseball bat',
//         img: '/IMG/item6.jpeg',
//         price: '$16.15',
//         stock: 'instock',
//         desc: 'A good aluminum bat can work well for players of any skill level. This one is especially well-suited for kids.A good aluminum bat can work well for players of any skill level. This one is especially well-suited for kids.'
//     }, 
//     {
//         id:7,
//         name:'Soccer Cone',
//         img: '/IMG/item7.jpeg',
//         price: '$25.55',
//         oldprice: '$31.00',
//         stock: 'instock',
//         desc: 'Pro Disc Cones (Set of 50) - Agility Soccer Cones with Holder for Sports Training, Football, Basketball, Coaching, Practice Equipment, Kids - Includes 15 Best Cone Drills Book'
        
//     }, 
//     {
//         id:8,
//         name:'Football Jersey',
//         img: '/IMG/item8.jpeg',
//         price: '$15.99',
//         stock: 'instock',
//         desc: 'Nike 2020-2021 Holland Away Football Soccer T-Shirt Jersey'
//     }, {
//         id:9,
//         name:'Baseball Bat',
//         img: '/IMG/item9.jpeg',
//         price: '$19.85',
//         oldprice: '$23.00',
//         stock: 'instock',
//         desc: 'Looking for a bat that will past the test of time? This wooden bat is a excellent choice for athletic play or self-defense.Looking for a bat that will past the test of time? This wooden bat is a excellent choice for athletic play or self-defense.'
//     },{
//         id:10,
//         name:'Soccer Boot',
//         img: '/IMG/item10.jpeg',
//         price: '$18.00',
//         stock: 'instock',
        
//     }, 
//     {
//         id:11,
//         name:'Shoulder Adjuster',
//         img: '/IMG/item11.jpeg',
//         price: '$75.99',
//         oldprice: '$80.00',
//         stock: 'instock'
//     }, 
//     {
//         id:12,
//         name:'Basketball Jersey',
//         img: '/IMG/item12.jpeg',
//         price: '$21.55',
//         stock: 'instock'
//     }, {
//         id:13,
//         name:'Stomach adjuster',
//         img: '/IMG/item13.jpeg',
//         price: '$43.80',
//         oldprice: '$48.00',
//         stock: 'instock'
//     },
//     {
//         id:14,
//         name:'Basketball',
//         img: '/IMG/item14.jpeg',
//         price: '$14.00',
//         stock: 'instock'
//     }, {
//         id:15,
//         name:'Football',
//         img: '/IMG/_ (1).jpeg',
//         price: '$10.00',
//         oldprice: '$11.55',
//         stock: 'instock'
//     },
// ]

router.get('/shop', (req, res) =>{

    const shopData = shopeItems.find(({},(err, data) =>{
        if(err){
            console.log(err);
        } else {
            if(data){
                console.log(shopData);
                return res.render('shop',{shopData:shopData, msg:''});
            }
        }
    }));
})

router.get('/shopItems/:id', (req, res) => {
    const id = req.params.id
    const shopData = shopItems.find(b=>b.id==id);
    if(shopData){
        console.log(shopData)
        return res.render('shopitem',{shopData:shopData});
    } else {
        return res.status(404).send('Page Not Found');
    }
})



module.exports = router;
