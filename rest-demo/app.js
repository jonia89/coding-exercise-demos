const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const {
  readPersons,
  createPerson,
  deletePerson,
  readPerson,
  updatePerson,
} = require("./database");

app.use(express.json());

app.get("/api/person", async (req, res) => {
  res.json(await readPersons());
});

app.get("/api/person/:id", async (req, res) => {
  res.json(await readPerson(req.params.id));
});

app.post("/api/person", async (req, res) => {
  await createPerson(req.body);
  res.statusCode(200);
});

app.put("/api/person/:id", async (req, res) => {
  await updatePerson(req.params.id, req.body);
  res.statusCode(200);
});

app.delete("/api/person/:id", async (req, res) => {
  await deletePerson(req.params.id);
  res.statusCode(200);
});

// ----

app.get("/api/person/:personId/certificates", async (req, res) => {
  res.json(await getCertificates(req.params.personId));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
