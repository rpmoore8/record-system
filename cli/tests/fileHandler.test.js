// Unit tests for fileHandler.js

const fileHandler = require("../utils/fileHandler");

// use absolute path
const directory = "/Users/RPMOORE/Desktop/record-system/cli/tests/testRecords/";
const files = ["comma", "pipe", "space"];

test("gets file path names from directory", () => {
  let paths = files.map(file => directory + file);
  expect(fileHandler.getFilePaths(directory)).toEqual(paths);
});

test("returns empty list if directory does not exist", () => {
  expect(fileHandler.getFilePaths("/asdf")).toEqual([]);
});

test("obtains text lines from files given path", () => {
  let paths = files.map(file => directory + file);
  let linesOfText = fileHandler.getLinesOfText(paths);

  expect(linesOfText.length).toEqual(8);
  expect(linesOfText).toContain("Smith, Lucy, Female, Purple, 5/14/1977");
  expect(linesOfText).toContain("Smith | Larry | Male | Blue | 6/3/1976");
  expect(linesOfText).toContain("Farris Cindy Female Pink 1/23/1963");
});
