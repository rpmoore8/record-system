// Functions for sorting records

const byLastName = records => {
  records.sort((a, b) => {
    return b.lastName - a.lastName;
  });
};

module.exports.byLastName = byLastName;
