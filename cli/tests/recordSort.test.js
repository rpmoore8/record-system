// Unit tests for recordSort.js

const recordSort = require("../actions/recordSort");
const fileHandler = require("../actions/FileHandler");

test("sort record objects by last name, descending", () => {
  let records = fileHandler.convertFilesToRecords(
    "/Users/RPMOORE/Desktop/record-system/cli/records/"
  );
  recordSort.byLastNameDesc(records);
  for (let i = 0; i < records.length - 1; i++) {
    expect(records[i].lastName >= records[i + 1].lastName).toBe(true);
  }
});

test("sort record object by gender, then last name ascending", () => {
  let records = fileHandler.convertFilesToRecords(
    "/Users/RPMOORE/Desktop/record-system/cli/records/"
  );
  recordSort.byGender(records);
  for (let i = 0; i < records.length - 1; i++) {
    if (records[i].gender === records[i + 1].gender) {
      expect(records[i].lastName <= records[i + 1].lastName).toBe(true);
    } else {
      expect(records[i].gender < records[i].gender);
    }
  }
});

test("sort record object by day of birth ascending", () => {
  let records = fileHandler.convertFilesToRecords(
    "/Users/RPMOORE/Desktop/record-system/cli/records/"
  );
  recordSort.byDateOfBirth(records);
  console.log(records);
  for (let i = 0; i < records.length - 1; i++) {
    expect(
      records[i].dateOfBirthValue() < records[i + 1].dateOfBirthValue()
    ).toEqual(true);
  }
});
