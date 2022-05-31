const express =  require('express');
const appServer = express();
const path = require('path');
const adminRouting = require('./Router/adminRoute');
const userRouting = require('./Router/userRoute')


appServer.use(express.urlencoded());

appServer.set('view engine', 'ejs');
appServer.set('views', 'View');

appServer.use(express.static(path.join(__dirname,'Public')));

appServer.use(adminRouting);
appServer.use(userRouting);
appServer.listen(4000,()=>{
    console.log("Server is connected");
})