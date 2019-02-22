// Server for REST API - currently using JSON doc as placeholder for DB

const express = require("express");
const bodyParser = require("body-parser");

const parseText = require("../cli/utils/parseText");
const recordSort = require("../cli/utils/recordSort");
const dataStore = require("./dataStore");

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/records", (req, res) => {
  const attributes = parseText.parseForAttributes(req.body.text);
  const record = parseText.createRecord(attributes);
  dataStore.appendRecord(record);

  res.send(JSON.stringify(record, null, 1));
});

app.get("/records/gender", (req, res) => {
  const records = dataStore.getRecords();
  recordSort.byGender(records);
  res.send(JSON.stringify(records, null, 1));
});

app.get("/records/birthdate", (req, res) => {
  const records = dataStore.getRecords();
  recordSort.byDateOfBirth(records);
  res.send(JSON.stringify(records, null, 1));
});

app.get("/records/name", (req, res) => {
  const records = dataStore.getRecords();
  recordSort.byLastNameDesc(records);
  res.send(JSON.stringify(records, null, 1));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
