// Unit tests for fileHandler.js

const fileHandler = require("../actions/fileHandler");

// MUST be set to the absolute path of records folder
const directory = "/Users/RPMOORE/Desktop/record-system/cli/records/";
const files = ["comma", "pipe", "space"];

test("gets files from directory", () => {
  expect(fileHandler.getFiles("records")).toEqual(files);
});

test("obtains text from files given path", () => {
  let text = fileHandler.readFiles(files, directory);

  expect(text["comma"]).toContain("Smith, Lucy, Female, Purple, 5/14/1977");
  expect(text["pipe"]).toContain("Smith | Larry | Male | Blue | 6/3/1976");
  expect(text["space"]).toContain("Farris Cindy Female Pink 1/23/1963");
});

test("converts text object into array of each record's attributes", () => {
  text = fileHandler.readFiles(files, directory);
  let recordAttributes = fileHandler.parseForAttributes(text);

  expect(recordAttributes.length).toBe(7);
  expect(recordAttributes[0].length).toBe(5);
});

test("converts each record's attributes into a record object", () => {
  recordAttributes = [];
  recordAttributes.push(["Lacy", "Drew", "Male", "Orange", "1/2/1990"]);
  let records = fileHandler.createRecords(recordAttributes);
  let record = records[0];

  expect(record.lastName).toBe("Lacy");
  expect(record.firstName).toBe("Drew");
  expect(record.gender).toBe("Male");
  expect(record.favoriteColor).toBe("Orange");
  expect(record.dateOfBirth).toBe("1/2/1990");
  expect(record.dateOfBirthValue()).toBe(19900102);
});

test("parses records from directory into list of record objects", () => {
  let records = fileHandler.convertFilesToRecords(directory);

  expect(records.length).toBe(7);
  records.forEach(record => {
    expect(typeof record.lastName).toBe("string");
    expect(typeof record.firstName).toBe("string");
    expect(typeof record.gender).toBe("string");
    expect(typeof record.favoriteColor).toBe("string");
    expect(typeof record.dateOfBirth).toBe("string");
    expect(typeof record.dateOfBirthValue()).toBe("number");
  });
});
