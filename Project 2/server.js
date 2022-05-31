const express = require('express');
const appServer = express();
const form_routing = require('./Router/formrouting');
const path = require('path');

appServer.use(express.urlencoded());
appServer.set('view engine','ejs');
appServer.set('views','Views');

appServer.use(express.static(path.join(__dirname,'Public')));


appServer.use(form_routing);
//from routing project will get the controller portion

appServer.listen(3000,()=>{
    console.log("Server is Connected");
})