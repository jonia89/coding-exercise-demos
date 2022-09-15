const { Pool } = require("pg");

const pool = new Pool();

async function createPerson(person) {
  await pool.query(
    "INSERT INTO person(name, age, student) VALUES ($1, $2, $3);",
    [person.name, person.age, person.student]
  );
  return;
}
async function readPerson(id) {
  const res = await pool.query(
    "SELECT * FROM person WHERE id = $1;",
    [id]
  );
  return res.rows[0];
}
async function readPersons() {
  const res = await pool.query(
    "SELECT * FROM person;",
    []
  );
  return res.rows;
}
async function updatePerson(id, person) {
  await pool.query(
    "UPDATE person SET name = $1, age = $2, student = $3 WHERE id = $4;",
    [person.name, person.age, person.student, id]
  );
  return;
}
async function deletePerson(id) {
  await pool.query(
    "DELETE FROM person WHERE id = $1;",
    [id]
  );
  return;
}

async function getCertificates(personId) {
  const res = await pool.query(
    `
    SELECT
      c.id as certificateId,
      p.id as personId,
      c.name as name
    FROM
      certificates c
      join person p on c.person_id = p.id
    where
      p.id = $1;
    `,
    [personId]
  );
  return res.rows;
}

module.exports = {
  createPerson,
  readPerson,
  readPersons,
  updatePerson,
  deletePerson,
  getCertificates,
}