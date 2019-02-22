// Functions for interacting with the makeshift db - dataStore.json

let storePath = "/Users/RPMOORE/Desktop/record-system/dataStore.json";

const appendRecordsToDataStore = records => {
  let data = fs.readFileSync(storePath);
  try {
    let dataStore = JSON.parse(data);
    records.forEach(record => {
      dataStore.push(record);
    });
    fs.writeFileSync(storePath, JSON.stringify(dataStore));
  } catch (SyntaxError) {
    // dataStore is empty
    fs.appendFileSync(storePath, JSON.stringify(records));
  }
};

const clearDataStore = () => {
  fs.writeFileSync(storePath, "");
};

module.exports.appendRecordsToDataStore = appendRecordsToDataStore;
module.exports.clearDataStore = clearDataStore;
