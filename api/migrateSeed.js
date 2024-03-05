const {migrate} = require("../migrations/migrate-alarms");
const {seed} = require("../seeder/seed-alarms");

const migrateAndSeed = async function(req,res){
    const {collectionName, ColNum, rowNum} = req.body;
    try {
        await migrate(collectionName);
        await seed(numberOfAlarms=rowNum,collectionName,colCount=ColNum);
        res.json({status:true,message:"ok"});
    } catch (error) {
        res.json({error:error.message});
    }
}

module.exports = migrateAndSeed;