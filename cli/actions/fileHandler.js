// Functions for importing files using the file system

const fs = require("fs");

const getFiles = directory => {
  return fs.readdirSync(directory);
};

const readFiles = (files, directory) => {
  let records = {};
  files.forEach(file => {
    contents = fs.readFileSync(directory + file, "utf8");
    records[file] = contents;
  });
  return records;
};

module.exports.getFiles = getFiles;
module.exports.readFiles = readFiles;
