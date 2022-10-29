require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cloudinary= require('cloudinary');
const fileupload=require('express-fileupload');


const app = express();

mongoose.connect(process.env.connectdb,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) =>{
    if(result){
        app.listen(process.env.PORT, ()=> {
            console.log('server up and running');
            console.log(`http://localhost:${process.env.PORT}`);
        });
        console.log('Database Connected');
    } else {
        console.log('Database not connected');
    }
})
.catch((err) => {
    console.log(err);
});

cloudinary.config({
    cloud_name: process.env.cloudname,
    api_key: process.env.apikey,
    api_secret:process.env.apisecret
});



app.set("view engine", "ejs");
app.use(fileupload({useTempFiles:true}))
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
app.use(bodyParser.json({extended:true, limit:'50mb'}));
app.use(session({secret:process.env.sessionsecret,saveUninitialized:true,resave:true,cookie:{expires:2678400000}}))
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})
app.use('/', require('./routes/home'));
app.use('/', require('./routes/index'));
app.use('/', require('./routes/shop'));
app.use('/', require('./routes/login'));
app.use('/', require('./routes/register'));
app.use('/', require('./routes/admin'));











