const { Pool } = require("pg");

const pool = new Pool();

async function readFruit(id) {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'fruit' AND id = $1;",
    [id]
  );
  return res.rows;
}

async function readVegetable(id) {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'vegetable' AND id = $1;",
    [id]
  );
  return res.rows;
}

async function readAllFruit() {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'fruit';"
  );
  return res.rows;
}

async function readAllVegetables() {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'vegetable';"
  );
  return res.rows;
}

async function createVegetables(vegetable) {
  await pool.query("INSERT INTO food (type, name, price) VALUES ($1, $2, $3)", [
    "vegetable",
    vegetable.name,
    vegetable.price,
  ]);
}

async function createFruit(fruit) {
  await pool.query("INSERT INTO food (type, name, price) VALUES ($1, $2, $3)", [
    "fruit",
    fruit.name,
    fruit.price,
  ]);
}

async function updateFruit(id, fruit) {
  await pool.query(
    "UPDATE food SET type = $2, name = $3, price = $4 WHERE id = $1;",
    [id, "fruit", fruit.name, fruit.price]
  );
}

async function updateVegetables(id, vegetable) {
  await pool.query(
    "UPDATE food SET type = $2, name = $3, price = $4 WHERE id = $1;",
    [id, "vegetable", vegetable.name, vegetable.price]
  );
}

async function searchFruit(searchText) {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'fruit' AND name LIKE $1;",
    [`%${searchText}%`]
  );
  return res.rows;
}

async function searchVegetables(searchText) {
  const res = await pool.query(
    "SELECT id, name, price FROM food WHERE type = 'vegetable' AND name LIKE $1%;",
    [`%${searchText}%`]
  );
  return res.rows;
}

module.exports = {
  readAllFruit,
  readAllVegetables,
  createVegetables,
  createFruit,
  searchFruit,
  searchVegetables,
  updateFruit,
  updateVegetables,
  readVegetable,
  readFruit,
};
