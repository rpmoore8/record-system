// Unit tests for recordSort.js

const records = [
  {
    firstName: "Smith",
    lastName: "Lucy",
    gender: "Female",
    favoriteColor: "Purple",
    dateOfBirth: "5/14/1977"
  },
  {
    firstName: "Thomas",
    lastName: "Michael",
    gender: "Male",
    favoriteColor: "Blue",
    dateOfBirth: "10/1/1987"
  },
  {
    firstName: "Grey",
    lastName: "Florence",
    gender: "Female",
    favoriteColor: "Green",
    dateOfBirth: "3/23/1980"
  },
  {
    firstName: "Smith",
    lastName: "Larry",
    gender: "Male",
    favoriteColor: "Blue",
    dateOfBirth: "6/3/1976"
  },
  {
    firstName: "Farris",
    lastName: "Cindy",
    gender: "Female",
    favoriteColor: "Pink",
    dateOfBirth: "1/23/1963"
  }
];

const recordSort = require("../actions/recordSort");
