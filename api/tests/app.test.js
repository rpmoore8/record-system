// Tests API routes

// use supertest for testing HTTP requests/responses
const request = require("supertest");

const app = require("../app");
const dataStore = require("../dataStore");

describe("POST /records", () => {
  test("Converts line with commas to record object", async () => {
    const response = await request(app)
      .post("/records")
      .send("text=Lawrence, Olivia, Female, Black, 4/12/1992")
      .set("Accept", "application/json");
    const record = {
      lastName: "Lawrence",
      firstName: "Olivia",
      gender: "Female",
      favoriteColor: "Black",
      dateOfBirth: "4/12/1992"
    };
    expect(response.text).toEqual(JSON.stringify(record, null, 1));
    expect(response.statusCode).toBe(200);

    // Signifies the object was inserted into the dataStore
    expect(dataStore.deleteRecord(record)).toBeGreaterThan(-1);
  });

  test("Converts line with pipes to record object", async () => {
    const response = await request(app)
      .post("/records")
      .send("text=Thomas | Michael | Male | Blue | 10/1/1987")
      .set("Accept", "application/json");
    const record = {
      lastName: "Thomas",
      firstName: "Michael",
      gender: "Male",
      favoriteColor: "Blue",
      dateOfBirth: "10/1/1987"
    };
    expect(response.text).toEqual(JSON.stringify(record, null, 1));
    expect(response.statusCode).toBe(200);
    expect(dataStore.deleteRecord(record)).toBeGreaterThan(-1);
  });

  test("Converts line with spaces to record object", async () => {
    const response = await request(app)
      .post("/records")
      .send("text=Farris Cindy Female Pink 1/23/1963")
      .set("Accept", "application/json");
    const record = {
      lastName: "Farris",
      firstName: "Cindy",
      gender: "Female",
      favoriteColor: "Pink",
      dateOfBirth: "1/23/1963"
    };
    expect(response.text).toEqual(JSON.stringify(record, null, 1));
    expect(response.statusCode).toBe(200);
    expect(dataStore.deleteRecord(record)).toBeGreaterThan(-1);
  });
});

describe("GET /records/gender", () => {
  test("Responds with array of objects", async () => {
    const response = await request(app).get("/records/gender");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(typeof records).toBe("object");
    expect(records.length).toBe(5);
  });

  test("Records are in correct order", async () => {
    const response = await request(app).get("/records/gender");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    for (let i = 0; i < records.length - 1; i++) {
      if (records[i].gender === records[i + 1].gender) {
        expect(records[i].lastName <= records[i + 1].lastName).toBe(true);
      } else {
        expect(records[i].gender < records[i].gender);
      }
    }
  });
});

describe("GET /records/birthdate", () => {
  test("Responds with array of objects", async () => {
    const response = await request(app).get("/records/birthdate");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(typeof records).toBe("object");
    expect(records.length).toBe(5);
  });

  test("Records are in correct order", async () => {
    const response = await request(app).get("/records/birthdate");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    for (let i = 0; i < records.length - 1; i++) {
      dateA = records[i].dateOfBirth.split("/");
      dateB = records[i + 1].dateOfBirth.split("/");

      // compare years
      expect(dateA[2] <= dateB[2]).toBe(true);
      if (dateA[2] === dateB[2]) {
        // compare months
        expect(dateA[0] <= dateB[0]).toBe(true);
        if (dateA[0] === dateB[0]) {
          // compare days
          expect(dateA[1] <= dateB[1]).toBe(true);
        }
      }
    }
  });
});

describe("GET /records/name", () => {
  test("Responds with array of objects", async () => {
    const response = await request(app).get("/records/name");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(typeof records).toBe("object");
    expect(records.length).toBe(5);
  });

  test("Records are in correct order", async () => {
    const response = await request(app).get("/records/name");
    const records = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    for (let i = 0; i < records.length - 1; i++) {
      expect(records[i].lastName >= records[i + 1].lastName).toBe(true);
    }
  });
});
