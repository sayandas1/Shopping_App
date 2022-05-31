const mongodb = require('mongodb');
const getDB = require('../Database/db').getDB;

module.exports = class Product{

    constructor(p_name,p_price,p_desc,pid){
        this.pName = p_name;
        this.pPrice = p_price;
        this.pDesc = p_desc;
        this.pId = pid;
    }

    saveData(){
        const db = getDB();
        let dbOperation;
        if(this.pId)
        {
            dbOperation = db.collection('Product_Data').updateOne({_id: new mongodb.ObjectId(this.pId)}, {$set: this});
        }
        else{
            dbOperation = db.collection('Product_Data').insertOne(this);
        }
        return dbOperation.then(results=>{
            console.log("Data is inserted successfully",results);
        })
        .catch(err=>{
            console.log("Data is not inserted in the collection",err);
        })
    }
    static fetchData()
    {
        const db = getDB();
        return db.collection('Product_Data').find().toArray()
        .then(products=>{
            return products;
        })
        .catch(err=>{
            console.log("Product not found",err);
        })       
    }

    static findById(product_id)
    {
        const db = getDB();
        return db.collection('Product_Data').find({_id: new mongodb.ObjectId(product_id)}).next()
        .then(singleData=>{
            return singleData;
        })
        .catch(err=>{
            console.log("Product not found",err);
        })       
    }

    static deleteData(prod_id)
    {
        const db = getDB();
        return db.collection('Product_Data').deleteOne({_id: new mongodb.ObjectId(prod_id)})
        .then(result=>{
            console.log("Product deleted successfully",result);
        }).catch(err=>{
            console.log("Error to delete", err);
        })
    }

    static searchByName(product_name){
        const db = getDB();
        return db.collection('Product_Data').find({pName: product_name}).toArray()
        .then(result=>{
            console.log("Search done",result);
            return result;
        })
        .catch(err=>{
            console.log("Product not found",err);
        }) 
    }
}

    