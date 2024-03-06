const { ObjectId } = require("bson");
const {ConnectDB} = require("../db-connection.js");

const deleteAlarm = async function(req,res){
    const db = await ConnectDB();
    const {collectionName} = req.body;
    try {
        let row = await db.collection(collectionName).find({}).project({_id:1}).toArray();
        row = row.sort(()=>Math.random()-0.5);
        await db.collection(collectionName).deleteOne({
            _id: new ObjectId(row[0]["_id"])
        })
        res.json({status:"ok",id:row[0]["_id"]});
    } catch (error) {
        console.log(error);
    }
}

module.exports = deleteAlarm;