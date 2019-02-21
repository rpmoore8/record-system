// Functions for importing files from a directory and parsing them into a list of record objects

const fs = require("fs");
const dbPath = "/Users/RPMOORE/Desktop/record-system/dataStore.json";

const convertFilesToRecords = directory => {
  let files = getFiles(directory);
  let text = readFiles(files, directory);
  let recordAttributes = parseForAttributes(text);
  let records = createRecords(recordAttributes);

  return records;
};

const getFiles = directory => {
  return fs.readdirSync(directory);
};

const readFiles = (files, directory) => {
  let text = {};
  files.forEach(file => {
    contents = fs.readFileSync(directory + file, "utf8");
    text[file] = contents;
  });
  return text;
};

const parseForAttributes = text => {
  let recordAttributes = [];
  for (let file of Object.keys(text)) {
    let content = text[file];
    let lines = content.split("\n");
    lines.forEach(line => {
      const charsToRemove = /(,|\| )/g;
      let strippedLine = line.replace(charsToRemove, "");
      let attributes = strippedLine.split(" ");
      if (attributes.length == 5) {
        recordAttributes.push(attributes);
      } else {
        // Handle incompatibility error: wrong number of attributes
      }
    });
  }
  return recordAttributes;
};

const createRecords = recordAttributes => {
  let records = [];
  recordAttributes.forEach(attributes => {
    let record = {
      lastName: attributes[0],
      firstName: attributes[1],
      gender: attributes[2],
      favoriteColor: attributes[3],
      dateOfBirth: attributes[4]
    };
    records.push(record);
  });
  return records;
};

const appendRecordsToDataStore = records => {
  let data = fs.readFileSync(dbPath);
  try {
    let dataStore = JSON.parse(data);
    records.forEach(record => {
      dataStore.push(record);
    });
    fs.writeFileSync(dbPath, JSON.stringify(dataStore));
  } catch (SyntaxError) {
    // dataStore is empty
    fs.appendFileSync(dbPath, JSON.stringify(records));
  }
};

module.exports.convertFilesToRecords = convertFilesToRecords;
module.exports.getFiles = getFiles;
module.exports.readFiles = readFiles;
module.exports.parseForAttributes = parseForAttributes;
module.exports.createRecords = createRecords;
module.exports.appendRecordsToDataStore = appendRecordsToDataStore;
