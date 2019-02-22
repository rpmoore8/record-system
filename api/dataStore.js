// Functions for interacting with the makeshift db - dataStore.json

const fs = require("fs");

const storePath = "dataStore.json";

const appendRecord = record => {
  let data = fs.readFileSync(storePath);
  try {
    let dataStore = JSON.parse(data);
    dataStore.push(record);
    fs.writeFileSync(storePath, JSON.stringify(dataStore, null, 1));
  } catch (SyntaxError) {
    // dataStore is empty
    fs.appendFileSync(storePath, JSON.stringify([record], null, 1));
  }
};

const getRecords = () => {
  const data = fs.readFileSync("dataStore.json");
  let records = {};
  try {
    records = JSON.parse(data);
  } catch (SyntaxError) {
    // dataStore is empty
  }
  return records;
};

module.exports.appendRecord = appendRecord;
module.exports.getRecords = getRecords;
