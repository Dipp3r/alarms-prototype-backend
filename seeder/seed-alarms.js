const { ConnectDB } = require("../db-connection");
const { faker } = require("@faker-js/faker");
const { randomColSample } = require("../utils/random_columns");

async function seed(numberOfAlarms,collectionName,colCount){
    const db = await ConnectDB();
    const alarms = [];
    const actualColumns = [
      "actState",
      "type",
      "model",
      "signal",
      "description",
      "priorityLevel",
      "severity",
      "alarmState",
      "objectName",
      "condition",
      "message",
      "eventTime",
      "activeTime",
      "createdAt",
      "updatedAt"
    ]

    const randomCol = randomColSample(actualColumns,colCount);

    for(var i = 0; i<numberOfAlarms; i++){
      let result = {};
      randomCol.forEach(async(col)=>{
        if(["priorityLevel","severity"].includes(col)){
          result[col] = faker.number.int({min:100,max:1000});
        } else if(["eventTime","activeTime","createdAt","updatedAt"].includes(col)){
          result[col] = faker.date.past();
        }else{
          result[col] = faker.lorem.sentence(1);
        }
      });

      alarms.push(result);
    }
    try {
      await db.collection(collectionName).insertMany(alarms);
    } catch (error) {
      console.log(error);
    }
}

// seed(1000000).then(()=>{
//     console.log("Seeding of alarm samples complete!");
//     process.exit(0);
// }).catch(err=>{
//     console.log("Seeding error!: ",err);
//     process.exit(1);
// });

module.exports = {seed};