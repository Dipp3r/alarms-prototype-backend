const {ConnectDB} = require("../db-connection.js");
const { optimized_paginate,Paginate } = require("../utils/paginate.js");

const getAlarms = async function(req,res){
    const db = await ConnectDB();
    const {sortOrder,limit,pageSize,pages} = await req.body;
    try {
        const alarms = await db.collection("alarms").find().sort(sortOrder).limit(limit).toArray();
        const pagintaed_alarms =  await optimized_paginate(alarms,pages,pageSize);
        res.json(pagintaed_alarms);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAlarms;