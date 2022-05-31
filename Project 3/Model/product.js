const fileSystem = require('fs');
const path = require('path');

module.exports = class Product{

    constructor(p_name,p_price,p_desc){
        this.pName = p_name;
        this.pPrice = p_price;
        this.pDesc = p_desc;
    }

    saveData(){
        const fileLocation = path.join(__dirname,'..','Data','productValue.json');
        fileSystem.readFile(fileLocation,(err,fileContent)=>{
            let productData = [];
            if(!err)
            {
                productData = JSON.parse(fileContent);
                //JSON.parse -> Converts a JavaScript Object Notation (JSON) string into an object.
            }
            productData.push(this);
            fileSystem.writeFile(fileLocation,JSON.stringify(productData),(err)=>{
                console.log("Error to write file", err);
            })
            //JSON.stringify -> Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        })
    }
    static fetchData(callback)
    {
        let fileLocation = path.join(__dirname,'..','Data','productValue.json');
        fileSystem.readFile(fileLocation,(err,fileContent)=>{
            if(err)
            {
                callback([])
            }else{
                callback(JSON.parse(fileContent))
            }
        })
    }
}