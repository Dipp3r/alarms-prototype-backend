const {ConnectDB} = require("../db-connection.js");

const getFieldNames = async function(req,res){
    const db = await ConnectDB();
    const {collectionName} = await req.body;
    try {
        const field_names = await db.collection(collectionName).find().limit(1).toArray();
        res.json(Object.keys(field_names[0]).filter((e)=>!["_id"].includes(e)));
    } catch (error) {
        console.log(error);
    }
}

module.exports = getFieldNames;