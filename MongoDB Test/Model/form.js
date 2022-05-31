const mongodb = require('mongodb');
const getDB = require('../Database/db').getDB;

module.exports = class Form{

    constructor(f_name,l_name,city,pin,phone,email,password){
        this.fName = f_name;
        this.lName = l_name;
        this.city = city;
        this.pin = pin;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

    saveData(){
        const db = getDB();
        let dbOperation = db.collection('Form_Data').insertOne(this)
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
        return db.collection('Form_Data').find().toArray()
        .then(data=>{
            return data;
        })
        .catch(err=>{
            console.log("Data not found",err);
        })       
    }

    static searchByCity(city_name){
        const db = getDB();
        return db.collection('Form_Data').find({city: city_name}).toArray()
        .then(result=>{
            console.log("Search done",result);
            return result;
        })
        .catch(err=>{
            console.log("City not found",err);
        }) 
    }
}