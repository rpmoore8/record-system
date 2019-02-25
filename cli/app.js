// CLI prompts and interaction logic

const readlineSync = require("readline-sync");
const { getFilePaths, getLinesOfText } = require("./utils/fileHandler");
const { mapTextLinesToRecords } = require("./utils/parseText");
const recordSort = require("./utils/recordSort");
const tableBuilder = require("./utils/tableBuilder");
const prompts = require("./prompts");

const main = () => {
  welcome();

  const paths = findFiles();
  const records = getRecords(paths);
  display(records);
};

const welcome = () => {
  console.log(prompts.welcome);
  console.log(prompts.instructions);
};

const findFiles = () => {
  let directory = readlineSync.question(prompts.directory);
  let paths = getFilePaths(directory);

  // Directory empty or does not exist
  while (paths.length === 0) {
    console.log(prompts.noFilesFound);
    directory = readlineSync.question(prompts.directory);
    paths = getFilePaths(directory);
  }
  console.log(prompts.filesFound(paths.length));
  return paths;
};

const getRecords = paths => {
  const records = mapTextLinesToRecords(getLinesOfText(paths));
  console.log(prompts.recordsFound(records.length));
  return records;
};

const display = records => {
  let sortType = readlineSync.question(prompts.chooseSort).toLowerCase();

  if (sortType.indexOf("b") > -1) {
    recordSort.byDateOfBirth(records);
  } else {
    if (sortType.indexOf("l") > -1) {
      recordSort.byLastNameDesc(records);
    } else {
      recordSort.byGender(records);
    }
  }
  console.log(tableBuilder(records));
};

main();
