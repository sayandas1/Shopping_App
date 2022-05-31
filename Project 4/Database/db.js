const mongodb = require('mongodb');
const mongo_client = mongodb.MongoClient;

let db_url = "mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/Products?retryWrites=true&w=majority";

let _db;

const mongo_connect = (callback)=>{
    mongo_client.connect(db_url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(clientData=>{
        console.log("Database is connected");
        _db = clientData.db('Products');
        callback();
    })
    .catch(err=>{
        console.log("Database is not connected", err);
    })
}

const getDB = ()=>{
    if(_db)
    {
        console.log("Database found");
        return _db;
    }
    else{
        console.log("Database not found");
    }
}

exports.mongo_connect = mongo_connect;
exports.getDB = getDB;
