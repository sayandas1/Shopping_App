const mongodb = require('mongodb');
const mongo_client = mongodb.MongoClient;

let db_url = "mongodb+srv://sayandas:sd123@cluster0.9eruc.mongodb.net/Practice?retryWrites=true&w=majority";
let _db;

const mongo_connect = (callback)=>{
    mongo_client.connect(db_url,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(clientData=>{
        console.log("Database is connected",clientData);
        _db = clientData.db('Practice');
        callback();
    }).catch(err=>{
        console.log("Failed to connect database",err);
    })
}

const getDB=()=>{
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