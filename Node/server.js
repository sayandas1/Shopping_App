const httpServer = require('http');
const requestHandler = require('./home');
const appServer = httpServer.createServer(requestHandler);
    
appServer.listen(1000,()=>{
    console.log("Server is connected");
})