const { ConnectDB } = require("../db-connection");
const { faker } = require("@faker-js/faker");

async function seed(numberOfAlarms){
    const db = await ConnectDB();
    const alarms = [];
    for(var i = 0; i<numberOfAlarms; i++){
      alarms.push({
        ActStack: faker.lorem.sentence(),
        PriorityLevel: faker.number.int({min:1,max:4}),
        Severity: faker.number.int({min:100,max:1000}),
        AlarmState: faker.lorem.sentence(),
        ObjectName: faker.lorem.sentence(),
        Condition: faker.lorem.sentence(),
        Message: faker.lorem.sentence(),
        EventTime: faker.date.past(),
        ActiveTime: faker.date.past(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      });
    }
    try {
      await db.collection("alarms").insertMany(alarms);
    } catch (error) {
      console.log(error);
    }
}

seed(1000000).then(()=>{
    console.log("Seeding of alarm samples complete!");
    process.exit(0);
}).catch(err=>{
    console.log("Seeding error!: ",err);
    process.exit(1);
});

module.exports = {seed};