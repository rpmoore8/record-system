// Unit tests for import.js

const sum = require("../actions/import");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
