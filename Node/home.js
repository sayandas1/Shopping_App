const fileSystem = require('fs');
const requestHandler = (req,res)=>{
    if (req.url === '/home'){
        res.setHeader('Content-type','text/html');
        res.write('<h1>Welcome to my page</h1>');
        res.write('<h2>My first node project</h2>');
        res.end();
    }else if(req.url === '/form')
    {
        res.setHeader('Content-type','text/html');
        res.write('<form action="/addData" method="POST">');
        res.write('<form><label for="fname">First Name:</label>');
        res.write('<input type="text" name="fName"><br><br>');
        res.write('<label for="lname">Last name:</label>');
        res.write('<input type="text" name="lName"><br><br>');
        res.write('<input type="submit" value="Submit"></form>');
        res.end();
    }else if(req.url === '/addData' && req.method === 'POST'){
        const arr=[];
        req.on('data',(chunk)=>{
            console.log("Chunk Value :",chunk);
            arr.push(chunk);
        })
        req.on('end',()=>{
            let data = Buffer.concat(arr).toString();
            // let newData = data.split('&');
            let newData = data.split('&');
            let fName = newData[0];
            let lName = newData[1];
            let value = fName+" "+lName;
            console.log(value);
            // let newDatas = newData.toString();
            // console.log(newDatas);
            fileSystem.writeFile('dataFile.txt',value,(err)=>{
                if(err){
                    console.log("Submission error,",err);
                    res.end();
                }else{
                    req.statusCode =  301;
                    res.write('<h1>Data stored successfully.</h1>');
                    res.end();
                }
            })
        })
    }
    else{
        res.write('<h1>Sorry page not found</h1>');
        res.end();
    }
}

module.exports = requestHandler;