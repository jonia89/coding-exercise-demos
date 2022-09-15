const { Pool } = require("pg");

const pool = new Pool();

async function readPersons() {
  const res = await pool.query("SELECT * FROM person ORDER BY id ASC;");
  return res.rows;
}

async function readPerson(id) {
  const res = await pool.query("SELECT * FROM person WHERE id = $1;", [id]);
  return res.rows[0];
}

async function createPerson(name, age) {
  await pool.query("INSERT INTO person(name, age) VALUES($1, $2);", [name, age]);
  return;
}

async function updatePerson(name, age, id) {
  await pool.query("UPDATE person SET name = $1, age = $2 WHERE id = $3;", [name, age, id]);
  return;
}

async function deletePerson(id) {
  await pool.query("DELETE FROM person WHERE id = $1;", [id]);
  return;
}

async function main() {
  //await deletePerson(11);
  //await createPerson('Andreas', 35);
  //await updatePerson('Andy', 35, 1);
  console.log(await readPersons());
  pool.end();
}

main();
