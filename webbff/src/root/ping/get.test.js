const supertest = require("supertest");
const express = require("express");
const app = express();
app.use("/", require("./get"));

it("should work", () =>
  supertest(app)
    .get("/")
    .then((result) => {
      expect(result.status).toEqual(200);
    }));
