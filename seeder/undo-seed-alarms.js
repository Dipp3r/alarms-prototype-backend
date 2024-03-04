const { ConnectDB } = require("../db-connection");

async function undoSeed(){
    const db = await ConnectDB();
    try {
      const result = await db.collection("alarms").deleteMany({});
      console.log(`Seeds undone! Removed ${result.deletedCount} from alarms collection.`)
    } catch (error) {
      console.log(error);
    }
}

undoSeed().then(()=>{
    console.log("Undone all seed samples!");
    process.exit(0);
}).catch(err=>{
    console.log("unseeding error!: ",err);
    process.exit(1);
});

module.exports = {undoSeed};