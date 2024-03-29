const express = require("express");
const getAlarms = require("./api/readAlarms.js");
const addAlarm = require("./api/addAlarm.js");
const updateAlarm = require("./api/updateAlarm.js");
const deleteAlarm = require("./api/deleteAlarm.js");
const bodyParser = require('body-parser');
const migrateAndSeed = require("./api/migrateSeed.js");
const cors = require("cors");
const getFieldNames = require("./api/fieldNames.js");
const app = express();
const HTTP_PORT = 8000;


app.use(bodyParser.json());
app.use(cors());

app.listen(HTTP_PORT, ()=>{
    console.log("The server is running on port http://localhost:"+HTTP_PORT);
})

app.get("/",async(req, res)=>{
    res.json({message:"ok"})
});

app.post('/alarms', getAlarms);

app.post("/addalarm", addAlarm);

app.put("/updatealarm", updateAlarm);

app.post("/deletealarm", deleteAlarm);

app.post("/migrate-seed", migrateAndSeed);

app.post("/get-field-names", getFieldNames);