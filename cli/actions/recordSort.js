// Functions for sorting records

const byGender = records => {
  records.sort((a, b) => {
    if (a.gender === b.gender) {
      if (a.lastName <= b.lastName) {
        // a comes first
        return -1;
      } else {
        // b comes first
        return 1;
      }
    } else {
      if (a.gender <= b.gender) {
        return -1;
      } else {
        return 1;
      }
    }
  });
};

const byDateOfBirth = records => {
  // create map to represent date text as comparable value
  let dateToValue = {};
  records.forEach(record => {
    if (!(record.dateOfBirth in dateToValue)) {
      let value = 0;
      let date = record.dateOfBirth.split("/");
      let day = Number(date[1]),
        month = Number(date[0]),
        year = Number(date[2]);
      value += day + month * 100 + year * 10000;
      dateToValue[record.dateOfBirth] = value;
    }
  });

  records.sort((a, b) => {
    return dateToValue[a.dateOfBirth] - dateToValue[b.dateOfBirth];
  });
};

const byLastNameDesc = records => {
  records.sort((a, b) => {
    if (a.lastName >= b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
};

module.exports.byGender = byGender;
module.exports.byDateOfBirth = byDateOfBirth;
module.exports.byLastNameDesc = byLastNameDesc;
