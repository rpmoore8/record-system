// CLI prompts and interaction logic

const readlineSync = require("readline-sync");
const fileHandler = require("./utils/fileHandler");

const runApp = () => {
  let statusCode = 0;

  while (statusCode < 1) {
    let directory = getDirectory();
    let records = fileHandler.convertFilesToRecords(directory);
    statusCode = insertRecords(records);
    if (statusCode === 1) {
      // display records
    }
  }
};

const getDirectory = () => {
  let directory = readlineSync.question(
    `Welcome to the record viewer CLI tool!
 
Please place all of your utf-8 records files into a 
common directory, then enter the path name to proceed.
(ex: "/Users/RPMOORE/Desktop/record-system/cli/records/")

Absolute path of directory: `
  );

  return directory;
};

const insertRecords = records => {
  if (records.length > 0) {
    let insertRecords = readlineSync.question(
      `${records.length} records found. Insert into data store? (Y/n) `
    );
    insertRecords.toLowerCase();
    if (!insertRecords.includes("n")) {
      fileHandler.appendRecordsToDataStore(records);
      return 0;
    } else {
      return 1;
    }
  } else {
    let retry = readlineSync.question(`No records found. Try again? (Y/n) `);
    retry.toLowerCase();
    if (!retry.includes("n")) {
      return 1;
    } else {
      return 2;
    }
  }
};

runApp();
