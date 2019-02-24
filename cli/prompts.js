// All strings used by CLI to prompt users

const welcome = "Welcome to the record viewer CLI tool!";
const directory = "Enter absolute path of directory: ";
const noFilesFound = "Directory empty or does not exist.";
const filesFound = total => `Uploaded ${total} files. Upload more? (y/N): `;
const chooseDisplay =
  "Display records by (B)irthdate, (g)ender, or (l)astName: ";
const exit = "Exit? (y/N): ";

module.exports.welcome = welcome;
module.exports.directory = directory;
module.exports.noFilesFound = noFilesFound;
module.exports.filesFound = filesFound;
module.exports.chooseDisplay = chooseDisplay;
module.exports.exit = exit;
