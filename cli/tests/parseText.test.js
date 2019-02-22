// Unit tests for parseText.js

const parseText = require("../actions/parseText");

test("maps lines of text to record objects", () => {
  const linesOfText = [
    "Lawrence, Olivia, Female, Black, 4/12/1992",
    "Thomas | Michael | Male | Blue | 10/1/1987",
    "Farris Cindy Female Pink 1/23/1963",
    "Moore, Ryan, Male"
  ];

  const records = parseText.mapTextLinesToRecords(linesOfText);

  expect(records.length).toBe(4);
  records.forEach(record => {
    expect(typeof record).toBe("object");
    const attributes = [
      "lastName",
      "firstName",
      "gender",
      "favoriteColor",
      "dateOfBirth"
    ];
    let total = 0;
    for (var attribute in record) {
      total++;
      expect(attributes.includes(attribute)).toBe(true);
    }
    expect(total).toBe(5);
  });
});

test("converts text line with commas into array of attributes", () => {
  const line = "Lawrence, Olivia, Female, Black, 4/12/1992";
  const attributes = parseText.parseForAttributes(line);

  expect(typeof attributes).toBe("object");
  expect(attributes.length).toBe(5);
  expect(attributes[0]).toBe("Lawrence");
  expect(attributes[1]).toBe("Olivia");
});

test("converts text line with pipes into array of attributes", () => {
  const line = "Thomas | Michael | Male | Blue | 10/1/1987";
  const attributes = parseText.parseForAttributes(line);

  expect(typeof attributes).toBe("object");
  expect(attributes.length).toBe(5);
  expect(attributes[1]).toBe("Michael");
  expect(attributes[2]).toBe("Male");
});

test("converts text line with spaces into array of attributes", () => {
  const line = "Farris Cindy Female Pink 1/23/1963";
  const attributes = parseText.parseForAttributes(line);

  expect(typeof attributes).toBe("object");
  expect(attributes.length).toBe(5);
  expect(attributes[1]).toBe("Cindy");
  expect(attributes[3]).toBe("Pink");
});

test("converts each record's attributes into a record object", () => {
  attributes = ["Lacy", "Drew", "Male", "Orange", "1/2/1990"];
  let record = parseText.createRecord(attributes);

  expect(record.lastName).toBe("Lacy");
  expect(record.firstName).toBe("Drew");
  expect(record.gender).toBe("Male");
  expect(record.favoriteColor).toBe("Orange");
  expect(record.dateOfBirth).toBe("1/2/1990");
});
