const { ObjectId } = require("bson");
const {ConnectDB} = require("../db-connection");

const updateAlarm = async function(req,res){
    const db = await ConnectDB();
    const {id,attributes} = req.body;
    try {
        const row = await db.collection("alarms").updateOne(
            {_id:new ObjectId(id)},
            {
                $set: attributes,
            }
        );
        res.json({status:"ok",alarm:row});
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateAlarm;