// All strings used by CLI to prompt users

const welcome = "Welcome to the record viewer CLI tool";
const instructions = "Place all files in a common directory";
const directory = "Enter absolute path of directory: ";
const noFilesFound = "Directory empty or does not exist";
const filesFound = total => `Found ${total} files`;
const recordsFound = total => `Uploaded ${total} records`;
const chooseSort =
  "Display records by (G)ender, (b)irth date, or (l)ast name: ";

module.exports.welcome = welcome;
module.exports.instructions = instructions;
module.exports.directory = directory;
module.exports.noFilesFound = noFilesFound;
module.exports.filesFound = filesFound;
module.exports.recordsFound = recordsFound;
module.exports.chooseSort = chooseSort;
