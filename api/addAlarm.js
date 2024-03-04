const {ConnectDB} = require("../db-connection.js");

const addAlarm = async function(req,res){
    const db = await ConnectDB();
    const attributes = {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        ...req.body
    }
    try {
        const row = await db.collection("alarms").insertOne(attributes);
        res.json({alarm:row});
    } catch (error) {
        console.log(error);
    }
}

module.exports = addAlarm;