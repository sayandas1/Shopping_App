const express = require('express');
const appServer = express();
const form_router = require('./Router/adminRoute');
const userform_router = require('./Router/userRoute')
const path = require('path');

const mongoconnect = require('./Database/db').mongo_connect;


appServer.use(express.urlencoded());
appServer.set('view engine','ejs');
appServer.set('views','Views');

appServer.use(express.static(path.join(__dirname,'Public')));


appServer.use(form_router);
// appServer.use(userform_router);


mongoconnect(()=>{
    appServer.listen(1500,()=>{
        console.log("Server is running on localhost:1500");
    })
})