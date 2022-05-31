const express =  require('express');
const appServer = express();
const path = require('path');

const session = require('express-session');
//session-package used to store info in memory but it has not infinite resource.
const moongodb_session = require('connect-mongodb-session')(session);
//used to store data in mongodb in a session package.

const flash = require('connect-flash');

const csurf = require('csurf');

const cookieParser = require('cookie-parser');

const multer = require('multer');
//Multer is a nodejs middleware for handling multipart formdata,
//which is primarily used for uploading files.

const csurfProtection = csurf();

const mongoose = require('mongoose');
const dbDriver = 'mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/mongoose_project?retryWrites=true&w=majority';

const userModel = require('./Model/auth');

const adminRouting = require('./Router/adminRoute');
const userRouting = require('./Router/userRoute');
const authRouting = require('./Router/authRoute');
const homeRouting = require('./Router/homeRoute');


appServer.use(express.urlencoded());
appServer.use(flash());



//to store data in mongodb session collection
const storeValue = new moongodb_session({
    uri: 'mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/mongoose_project',
    collection: 'user-session'
})

appServer.use(session({secret:'secret-key',resave:false,saveUninitialized:false,store:storeValue}));
//session is function here. to stop resaving, resave value false.
//to stop storing uninitialized value, saveUninitialized:false

appServer.use(express.static(path.join(__dirname,'Public')));

appServer.use('/Uploaded_images',express.static(path.join(__dirname,'Uploaded_images')));
//to store images

//to use the images folder after adding it to database
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
        // console.log('User details: ',req.user)
        next();
    }).catch(err => console.log("User not found",err));
});

appServer.use(csurfProtection);

appServer.use(cookieParser());

appServer.use((req,res,next)=>{
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrf_token = req.csrfToken();
    next();
})

appServer.use(adminRouting);
appServer.use(userRouting);
appServer.use(authRouting);
appServer.use(homeRouting);

mongoose.connect(dbDriver,{useNewUrlParser: true, useUnifiedTopology: true})
.then(result=>{
    appServer.listen(4500,()=>{
        console.log("Server is connected at localhost:4500");
    })
}).catch(err=>{
    console.log("Database is not connected");
})