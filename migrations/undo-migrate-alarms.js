const { ConnectDB } = require("../db-connection");

async function undoMigrate(){
    const db = await ConnectDB();
    try {
        const alarms = await db.dropCollection("alarms");
    } catch (error) {
        console.log("Error while creating the collection alarms,",error);
    }
}

undoMigrate().then(()=>{
    console.log("Migration undone!");
    process.exit(0);
}).catch(err=>{
    console.log("Migration error!: ",err);
    process.exit(1);
});

module.exports = {undoMigrate};