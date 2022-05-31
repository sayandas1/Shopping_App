const mongodb = require('mongodb');
const  getDB = require('../Database/db').getDB;

module.exports = class Product{
    constructor(p_name,p_price,p_desc){
        this.pName = p_name;
        this.pPrice = p_price;
        this.pDesc = p_desc;
        this.pID = p_id;
    }
    saveData(){
        const db = getDB();
        let dbOperation = db.collection('Practice_Data').insertOne(this)
        return dbOperation.then(result=>{
            console.log("Data is inserted successfully",result);
        }).catch(err=>{
            console.log("Data is not inserted",err);
        })
    }

    static fetchData(product_id){
        const db = getDB();
        return db.collection('Practice_Data').find({_id:})
    }
}
