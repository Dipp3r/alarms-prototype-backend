const { MongoClient } = require("mongodb");
const url = "mongodb://admin:password@localhost:27017/";
const dbName = "my-db";

let db;

const ConnectDB = async function(){
    try {
        const client = await MongoClient.connect(url);
        console.log("Connected to the database sucessfully!");
        db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error while setting up connection: ",error);
        return;
    }
}

db = ConnectDB();

module.exports = { db, ConnectDB };



