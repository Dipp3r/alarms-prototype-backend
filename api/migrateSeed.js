const {migrate} = require("../migrations/migrate-alarms");

const migrateAndSeed = async function(req,res){
    const {collectionName, ColNum, rowNum} = req.body;
    try {
        await migrate(collectionName);
    } catch (error) {
        console.log("Error: ",error);
    }
}

module.exports = migrateAndSeed;