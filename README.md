# record-system
CLI used to upload and display records. REST API for accessing records.

HOW TO RUN:
In development: can be run with node. 
To start CLI, cd into 'cli' folder and enter 'node app'.
To start API, cd into 'api' folder and enter 'node server'.

CLI:
Takes a directory as input and uploads 'record' files within directory.
Records should have UTF-8 encoding and follow one of the following formats:

LastName | FirstName | Gender | FavoriteColor | DateOfBirth
LastName, FirstName, Gender, FavoriteColor, DateOfBirth
LastName FirstName Gender FavoriteColor DateOfBirth

Extra space and missing attributes will likely lead to errors (fixes to come).

After records are uploaded, they can be sorted and displayed. Sorting methods: 

1. gender (female before male, then last name ascending) DEFAULT
2. birth date, ascending
3. last name, descending


API:
Shares functionality of CLI. Currently requires files from CLI folder.
Not connected to a database. Tested using a data object within dataStore.js.

REST style with the following routes:

POST /records - takes single line of record data in one of the 3 supported formats.
(NOTE: must be submitted in JSON format with key of "text")
(Example: { "text": "Smith, Brittany, Female, Green, 4/14/1989" })
GET /records/gender - returns records (JSON style) sorted by gender
GET /records/birthdate - returns records sorted by birthdate
GET /records/name - returns records sorted by last name descending
