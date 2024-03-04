const { ObjectId } = require("bson");
const {ConnectDB} = require("../db-connection.js");

const deleteAlarm = async function(req,res){
    const db = await ConnectDB();
    const {id} = req.body;
    try {
        const row = await db.collection('alarms').deleteOne({
            _id: new ObjectId(id)
        })
        res.json({status:"ok",alarm:row});
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteAlarm;