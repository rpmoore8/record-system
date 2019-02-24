// CLI prompts and interaction logic

const readlineSync = require("readline-sync");
const fileHandler = require("./utils/fileHandler");
const parseText = require("./utils/parseText");
const recordSort = require("./utils/recordSort");

const prompts = require("./prompts");

const runApp = () => {
  console.log(prompts.welcome);

  let records = {};
  let filesToUpload = [];
  let task = "upload";

  while (task === "upload") {
    let directory = readlineSync.question(prompts.directory);
    let paths = fileHandler.getFilePaths(directory);
    if (paths.length === 0) {
      console.log(prompts.noFilesFound);
    } else {
      paths.forEach(path => {
        filesToUpload.push(path);
      });
      let uploadMore = readlineSync.question(prompts.filesFound(paths.length));
      if (uploadMore.toLowerCase().indexOf("y") < 0) {
        const textLines = fileHandler.getLinesOfText(filesToUpload);
        records = parseText.mapTextLinesToRecords(textLines);
        task = "display";
      }
    }
  }
  while (task === "display") {
    let type = readlineSync.question(prompts.chooseDisplay);
    if (type.toLowerCase().indexOf("g") > -1) {
      recordSort.byGender(records);
    } else if (type.toLowerCase().indexOf("l") > -1) {
      recordSort.byLastNameDesc(records);
    } else {
      recordSort.byDateOfBirth(records);
    }
    console.log("Second");
    displayRecords(records);

    let exit = readlineSync.question(prompts.exit);
    if (exit.toLowerCase().indexOf("y") > -1) {
      task = "EXIT";
    }
  }
};

function displayRecords(records) {
  console.log("(lastName) (firstName) (gender) (favoriteColor) (dateOfBirth)");
  console.log("-------------------------------------------------------");
  records.forEach(record => {
    console.log(
      record.lastName +
        " " +
        record.firstName +
        " " +
        record.gender +
        " " +
        record.favoriteColor +
        " " +
        record.dateOfBirth
    );
  });
  console.log();
}

runApp();
