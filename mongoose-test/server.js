const express =  require('express');
const appServer = express();
const path = require('path');


const session = require('express-session');
const moongodb_session = require('connect-mongodb-session')(session);

const flash = require('connect-flash');

const multer = require('multer');

const mongoose = require('mongoose');
const dbDriver = 'mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/ItemDetails?retryWrites=true&w=majority';

const userModel = require('./Model/auth');

const adminRouting = require('./Router/adminRoute');
const authRouting = require('./Router/authRoute');


appServer.use(express.urlencoded());
appServer.use(flash());

const storeValue = new moongodb_session({
    uri: 'mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/ItemDetails',
    collection: 'my-session'
})

appServer.use(session({secret:'secret-key',resave:false,saveUninitialized:false,store:storeValue}));
appServer.use(express.static(path.join(__dirname,'Public')));

appServer.use('/Uploaded_images',express.static(path.join(__dirname,'Uploaded_images')));

const fileStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'Uploaded_images')
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
});

const fileFilter=(req,file,callback)=>{
    if(file.mimetype.includes("png")||
    file.mimetype.includes("jpg")||
    file.mimetype.includes("jfif")||
    file.mimetype.includes("pjp")||
    file.mimetype.includes("webp")||
    file.mimetype.includes("jpeg"))
    {
        callback(null,true)
    }
    else
    {
        callback(null,false)
    }
}

appServer.use(multer({storage:fileStorage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('image'));

appServer.set('view engine', 'ejs');
appServer.set('views', 'View');

appServer.use((req,res,next) =>{
    if(!req.session.user)
    {
        return next();
    }
    userModel.findById(req.session.user._id)
    .then(userValue=>{
        req.user = userValue;
        console.log('User details: ',req.user)
        next();
    }).catch(err => console.log("User not found",err));
});

appServer.use((req,res,next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
})

appServer.use(adminRouting);
appServer.use(authRouting);

mongoose.connect(dbDriver,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>{
    appServer.listen(4300,()=>{
        console.log("Server is connected at localhost:4300");
    })
}).catch(err=>{
    console.log("Database is not connected");
})