// Functions for importing files from a directory

const fs = require("fs");

const getFilePaths = directory => {
  if (directory.length > 0 && directory.charAt(directory.length - 0) != "/") {
    directory += "/";
  }

  let paths = [];
  try {
    const fileNames = fs.readdirSync(directory);
    paths = fileNames.map(name => directory + name);
  } catch (error) {
    console.log("ERROR: " + directory + " not found.");
  }
  return paths;
};

const getLinesOfText = paths => {
  const textLines = [];

  paths.forEach(path => {
    const contents = fs.readFileSync(path, "utf8");
    const lines = contents.split("\n");
    lines.forEach(line => {
      textLines.push(line);
    });
  });
  return textLines;
};

module.exports.getFilePaths = getFilePaths;
module.exports.getLinesOfText = getLinesOfText;
