const express = require('express');
const appServer = express();
const home_routing = require('./Router/homeRouting');
const form_routing = require('./Router/formRouting');


appServer.use(express.urlencoded());


appServer.use(home_routing);
appServer.use(form_routing);
appServer.listen(2000,()=>{
    console.log("Server is connected");
})