const express = require ('express');
const fileSystem = require('fs');
const home_router = express.Router();

home_router.get('/home',(req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<h1>Welcome</h1>');
    res.end();
})

home_router.get('/form',(req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<form method="POST" action="/addValue">');
    res.write('<label for="email">Email:</label><br>');
    res.write('<input type="email" name="email"><br>');
    res.write('<label for="password">Password:</label><br>');
    res.write('<input type="password" name="pwd"<br><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.end();
})

home_router.post('/addValue',(req,res)=>{
    const arr=[];
    req.on('data',(chunk)=>{
        arr.push(chunk);
    })
    req.on('end',()=>{
        let data = Buffer.concat(arr).toString();
        let newData = data.split('&');
        let mail = newData[0];
        let pwd = newData[1];
        let value = mail+ "\n" +pwd;
        console.log(value);
        fileSystem.writeFile('datafile.txt',value,(err)=>{
            if(err){
                console.log("Submission error",err);
                res.setHeader('Location','/form');
                res.end();
            }else{
                res.statusCode=301;
                console.log("Data stored successfully");
                res.setHeader('Location','/success');
                res.end();
            }
        })
    })
})

home_router.get('/success',(req,res)=>{
    res.setHeader('Content-type','text/html');
    res.write('<h1>Data collected successfully</h1>');
    res.end();
})

module.exports = home_router;