// Creates record tables using cli-table library

const Table = require("cli-table");

module.exports = records => {
  const table = new Table({
    head: ["Last Name", "First Name", "Gender", "Favorite Color", "Birth Date"]
  });

  records.forEach(record => {
    table.push([
      record.lastName,
      record.firstName,
      record.gender,
      record.favoriteColor,
      record.dateOfBirth
    ]);
  });
  return table.toString();
};
