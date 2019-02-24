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
  records.sort((a, b) => {
    return dateToValue(a.dateOfBirth) - dateToValue(b.dateOfBirth);
  });
};

const dateToValue = string => {
  let date = string.split("/");
  let day = Number(date[1]),
    month = Number(date[0]),
    year = Number(date[2]);
  return day + month * 100 + year * 10000;
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
