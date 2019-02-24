// Placeholder for actual database - used to test API

const appendRecord = record => {
  fakeStore.push(record);
};

const getRecords = () => {
  return fakeStore;
};

const deleteRecord = record => {
  for (let i = 0; i < fakeStore.length; i++) {
    if (
      record.lastName === fakeStore[i].lastName &&
      record.firstName === fakeStore[i].firstName &&
      record.gender === fakeStore[i].gender &&
      record.favoriteColor === fakeStore[i].favoriteColor &&
      record.dateOfBirth === fakeStore[i].dateOfBirth
    ) {
      fakeStore.splice(i);
      return i;
    }
  }
  return -1;
};

const fakeStore = [
  {
    lastName: "Small",
    firstName: "Ricky",
    gender: "Male",
    favoriteColor: "Green",
    dateOfBirth: "10/1/1970"
  },
  {
    lastName: "Smiles",
    firstName: "Carl",
    gender: "Male",
    favoriteColor: "Purple",
    dateOfBirth: "10/2/1970"
  },
  {
    lastName: "August",
    firstName: "Delilah",
    gender: "Female",
    favoriteColor: "Red",
    dateOfBirth: "1/21/1990"
  },
  {
    lastName: "Fraiser",
    firstName: "Thomas",
    gender: "Male",
    favoriteColor: "Blue",
    dateOfBirth: "1/1/1971"
  },
  {
    lastName: "Anderson",
    firstName: "Grace",
    gender: "Female",
    favoriteColor: "Blue",
    dateOfBirth: "11/12/1980"
  }
];

module.exports.appendRecord = appendRecord;
module.exports.getRecords = getRecords;
module.exports.deleteRecord = deleteRecord;
