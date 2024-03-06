const { ObjectId } = require("bson");
const {ConnectDB} = require("../db-connection");

const updateAlarm = async function(req,res){
    const db = await ConnectDB();
    const {collectionName,attributes} = req.body;
    try {
        let row = await db.collection(collectionName).find({}).project({_id:1}).toArray();
        row = row.sort(()=>Math.random()-0.5);
        await db.collection(collectionName).updateOne(
            {
                _id:new ObjectId(row[0]["_id"])
            },
            {
                $set: attributes,
            }
        );
        res.json({status:"ok",id:row[0]["_id"]});
    } catch (error) {
        console.log(error);
    }
}

module.exports = updateAlarm;