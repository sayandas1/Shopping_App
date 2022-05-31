const express =  require('express');
const appServer = express();
const path = require('path');
const userRouting = require('./Router/userRouting')
const mongoConnect = require('./Database/db').mongo_connect;


appServer.use(express.urlencoded());

appServer.set('view engine', 'ejs');
appServer.set('views', 'View');

appServer.use(express.static(path.join(__dirname,'Public')));

appServer.use(userRouting);

mongoConnect(()=>{
    appServer.listen(5000,()=>{
        console.log("Server is connected");
    })
})