// Functions for parsing text into record objects

const mapTextLinesToRecords = textLines => {
  let attributesArray = textLines.map(parseForAttributes);
  let records = attributesArray.map(createRecord);

  return records;
};

const parseForAttributes = line => {
  const charsToRemove = /(,|\| )/g;
  let strippedLine = line.replace(charsToRemove, "");
  let attributes = strippedLine.split(" ");

  // Handle records with missing information
  while (attributes.length < 5) attributes.push("unknown");

  return attributes;
};

const createRecord = attributes => {
  return {
    lastName: attributes[0],
    firstName: attributes[1],
    gender: attributes[2],
    favoriteColor: attributes[3],
    dateOfBirth: attributes[4]
  };
};

module.exports.mapTextLinesToRecords = mapTextLinesToRecords;
module.exports.parseForAttributes = parseForAttributes;
module.exports.createRecord = createRecord;
