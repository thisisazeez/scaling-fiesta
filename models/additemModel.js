const mongoose = require('mongoose');

const ShopShema = new mongoose.Schema({
    name:   {
        type:String,
        required: true,
    },
    desc: {
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    },
    oldprice: {
        type:String,
    },
    pic: {
        type:String,
        required: true
    },
    publicID: {
        type:String,
        required: true
    }
},{timestamps:true});

module.exports = mongoose.model('shopItems',ShopShema);





