const express = require('express');
const fileSystem = require('fs');
const form_router = express.Router();
const path = require('path');

form_router.get('/htmlform',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','View','form.html'));
})

// form_router.post('/formData',(req,res)=>{
// //     const arr=[];
// //     req.on('data',(chunk)=>{
// //         arr.push(chunk);
// //     })
// //     req.on('end',()=>{
// //         let data = Buffer.concat(arr).toString();
// //         fileSystem.writeFile('formData',data,(err)=>{
// //             if(err){
// //                 console.log("Submission error,",err);
// //                 res.end();
// //             }
// //             else{
// //                 res.statusCode = 301;
// //                 console.log("Submit Successfully");
// //                 res.end();
// //             }
// //         })
// //     })
// // })

form_router.post('/formData',(req,res)=>{
    console.log("Collected Value ",req.body);
    res.redirect('/success');
})

module.exports = form_router;