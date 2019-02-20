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

const byDateOfBirth = records => {
  records.sort((a, b) => {
    return a.dateOfBirthValue() - b.dateOfBirthValue();
  });
};

module.exports.byLastNameDesc = byLastNameDesc;
module.exports.byGender = byGender;
module.exports.byDateOfBirth = byDateOfBirth;
