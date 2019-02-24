// Express API routes for server

const express = require("express");
const bodyParser = require("body-parser");

const parseText = require("../cli/utils/parseText");
const recordSort = require("../cli/utils/recordSort");
const dataStore = require("./dataStore");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// line must be sent in JSON format with "text" as the key
// Ex: {"text": "Davis, Jane, Female, Blue, 2/30/1987"}
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

module.exports = app;
