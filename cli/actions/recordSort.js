// Functions for sorting records

const byLastNameDesc = records => {
  records.sort((a, b) => {
    if (a.lastName >= b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
};

const byGender = records => {
  records.sort((a, b) => {
    if (a.gender === b.gender) {
      if (a.lastName <= b.lastName) {
        return -1;
      } else {
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

const dateOfBirthValue = record => {
  let value = 0;
  let date = record.dateOfBirth.split("/");
  value += Number(date[1]) + Number(date[0]) * 100 + Number(date[2]) * 10000;
  return value;
};

const byDateOfBirth = records => {
  records.sort((a, b) => {
    return dateOfBirthValue(a) - dateOfBirthValue(b);
  });
};

module.exports.byLastNameDesc = byLastNameDesc;
module.exports.byGender = byGender;
module.exports.dateOfBirthValue = dateOfBirthValue;
module.exports.byDateOfBirth = byDateOfBirth;
