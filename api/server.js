const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const fileHandler = require("../cli/actions/fileHandler");
const recordSort = require("../cli/actions/recordSort");
const dbPath = "/Users/RPMOORE/Desktop/record-system/dataStore.json";

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/records", (req, res) => {
  let text = { line: req.body.text };
  let attributes = fileHandler.parseForAttributes(text);
  let records = fileHandler.createRecords(attributes);
  fileHandler.appendRecordsToDataStore(records);

  res.send(JSON.stringify(records[0]));
});

app.get("/records/gender", (req, res) => {
  let data = fs.readFileSync(dbPath);
  try {
    let records = JSON.parse(data);
    recordSort.byGender(records);
    res.send(JSON.stringify(records));
  } catch (SyntaxError) {
    // dataStore is empty
    res.send({});
  }
});

app.get("/records/birthdate", (req, res) => {
  let data = fs.readFileSync(dbPath);
  try {
    let records = JSON.parse(data);
    recordSort.byDateOfBirth(records);
    res.send(JSON.stringify(records));
  } catch (SyntaxError) {
    // dataStore is empty
    res.send({});
  }
});

app.get("/records/name", (req, res) => {
  let data = fs.readFileSync(dbPath);
  try {
    let records = JSON.parse(data);
    recordSort.byLastNameDesc(records);
    res.send(JSON.stringify(records));
  } catch (SyntaxError) {
    // dataStore is empty
    res.send({});
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
