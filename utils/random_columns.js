const { faker } = require("@faker-js/faker");

function randomColSample(cols,num){
    const shuffledCols = cols.sort(()=>Math.random()-0.5);
    const selectedCols = shuffledCols.slice(0,num);
    return selectedCols;
};

module.exports = {randomColSample}