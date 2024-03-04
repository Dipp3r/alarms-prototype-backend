const { ConnectDB } = require("../db-connection");

async function migrate(collectionName){
    const db = await ConnectDB();
    try {
        const alarms = await db.createCollection(collectionName);
        await db.collection(collectionName).createIndex({PriorityLevel:1, Severity:1, EventTime:1, ActiveTime:1});
    } catch (error) {
        console.log(`Error while creating the collection ${collectionName},`,error);
    }
}

migrate("alarms").then(()=>{
    console.log("Migration complete!");
    process.exit(0);
}).catch(err=>{
    console.log("Migration error!: ",err);
    process.exit(1);
});

module.exports = {migrate};