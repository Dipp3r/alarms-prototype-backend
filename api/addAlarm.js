const {ConnectDB} = require("../db-connection.js");

const addAlarm = async function(req,res){
    const db = await ConnectDB();
    let {attributes, collectionName} = await req.body;
    attributes = {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...attributes
    }
    try {
        const row = await db.collection(collectionName).insertOne(attributes);
        res.json({status:true, id:row.insertedId});
    } catch (error) {
        console.log(error);
    }
}

module.exports = addAlarm;