// Unit tests for recordSort.js

const recordSort = require("../actions/recordSort");

const records = [
  {
    lastName: "Lawrence",
    firstName: "Olivia",
    gender: "Female",
    favoriteColor: "Black",
    dateOfBirth: "4/12/1992"
  },
  {
    lastName: "Thompson",
    firstName: "Chris",
    gender: "Male",
    favoriteColor: "Red",
    dateOfBirth: "2/24/1999"
  },
  {
    lastName: "Smith",
    firstName: "Lucy",
    gender: "Female",
    favoriteColor: "Purple",
    dateOfBirth: "2/24/1999"
  },
  {
    lastName: "Smith",
    firstName: "Larry",
    gender: "Male",
    favoriteColor: "Blue",
    dateOfBirth: "6/3/1976"
  },
  {
    lastName: "Farris",
    firstName: "Cindy",
    gender: "Female",
    favoriteColor: "Pink",
    dateOfBirth: "1/23/1963"
  }
];

test("sort record object by gender, then last name ascending", () => {
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
  recordSort.byDateOfBirth(records);
  for (let i = 0; i < records.length - 1; i++) {
    dateA = records[i].dateOfBirth.split("/");
    dateB = records[i + 1].dateOfBirth.split("/");

    // compare years
    expect(dateA[2] <= dateB[2]).toBe(true);
    if (dateA[2] === dateB[2]) {
      // compare months
      expect(dateA[0] <= dateB[0]).toBe(true);
      if (dateA[0] === dateB[0]) {
        // compare days
        expect(dateA[1] <= dateB[1]).toBe(true);
      }
    }
  }
});

test("sort record objects by last name, descending", () => {
  recordSort.byLastNameDesc(records);
  for (let i = 0; i < records.length - 1; i++) {
    expect(records[i].lastName >= records[i + 1].lastName).toBe(true);
  }
});
