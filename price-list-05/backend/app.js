const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const {
  readFruit,
  readAllFruit,
  readVegetable,
  readAllVegetables,
  createFruit,
  updateFruit,
  updateVegetables,
  createVegetables,
  searchFruit,
  searchVegetables,
} = require("./database");

app.use(cors());
app.use(express.json());

app.get("/store/fruit", async (req, res) => {
  console.log(`${new Date()} - INFO - Called fruit /store/fruit`);
  if (req.query.search) {
    res.json(await searchFruit(req.query.search));
  } else {
    res.json(await readAllFruit());
  }
});

app.get("/store/fruit/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`${new Date()} - INFO - Called fruit /store/fruit/${id}`);
  res.json(await readFruit(id));
});

app.post("/store/fruit", async (req, res) => {
  console.log(`${new Date()} - INFO - Called fruit POST /store/fruit`);
  await createFruit(req.body);
  res.sendStatus(200);
});

app.put("/store/fruit/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`${new Date()} - INFO - Called fruit PUT /store/fruit/${id}`);
  await updateFruit(id, req.body);
  res.sendStatus(200);
});

app.get("/store/vegetables", async (req, res) => {
  console.log(`${new Date()} - INFO - Called vegetables /store/vegetables`);
  if (req.query.search) {
    res.json(await searchVegetables(req.query.search));
  } else {
    res.json(await readAllVegetables());
  }
});

app.get("/store/vegetables/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`${new Date()} - INFO - Called fruit /store/vegetables/${id}`);
  res.json(await readVegetable(id));
});

app.post("/store/vegetables", async (req, res) => {
  console.log(`${new Date()} - INFO - Called fruit POST /store/vegetables`);
  await createVegetables(req.body);
  res.sendStatus(200);
});

app.put("/store/vegetables/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`${new Date()} - INFO - Called fruit PUT /store/vegetables/${id}`);
  await updateVegetables(id, req.body);
  res.sendStatus(200);
});

// ----

app.get("/", (req, res) => {
  console.log(`${new Date()} - INFO - Called /`);
  res.redirect("/store/fruit");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
