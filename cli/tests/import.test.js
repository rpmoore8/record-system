// Unit tests for fileHandler.js

const fileHandler = require("../actions/fileHandler");

test("gets files from directory", () => {
  expect(fileHandler.getFiles("records")).toEqual(["comma", "pipe", "space"]);
});

test("obtains records from files given path", () => {
  directory = "/Users/RPMOORE/Desktop/record-system/cli/records/";
  files = ["comma", "pipe", "space"];
  records = fileHandler.readFiles(files, directory);
  expect(records["comma"]).toContain("Smith, Lucy, Female, Purple, 5/14/1977");
  expect(records["pipe"]).toContain("Smith | Larry | Male | Blue | 6/3/1976");
  expect(records["space"]).toContain("Farris Cindy Female Pink 1/23/1963");
});
