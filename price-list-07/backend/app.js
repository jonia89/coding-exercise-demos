const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const {
  readAllFood,
  createFood,
  searchFruit,
  updateFood,
  readFood,
} = require("./database");

app.use(cors());
app.use(express.json());

function exceptionBarrier(cb) {  
  const routeFn = async (req, res) => {
    try {
      await cb(req, res);
    } catch (error) {
      console.log('Handled by exception barrier');
      console.log(error);
      res.sendStatus(500);
    }
  }
  return routeFn;
}

app.get("/store/:type", exceptionBarrier(async (req, res) => {
  console.log(`${new Date()} - INFO - Called /store/${req.params.type}`);
  if (req.query.search) {
    res.json(await searchFruit(req.query.search));
  } else {
    res.json(await readAllFood(req.params.type));
  }
}));

app.get("/store/:type/:id", exceptionBarrier(async (req, res) => {
  const id = req.params.id;
  const type = req.params.type;
  console.log(`${new Date()} - INFO - Called fruit /store/${type}/${id}`);
  res.json(await readFood(id));
}));

app.post("/store/:type", exceptionBarrier(async (req, res) => {
  const type = req.params.type;
  console.log(`${new Date()} - INFO - Called POST /store/${type}`);
  await createFood(req.body);
  res.sendStatus(200);
}));

app.put("/store/:type/:id", exceptionBarrier(async (req, res) => {
  const id = req.params.id;
  const type = req.params.type;
  console.log(`${new Date()} - INFO - Called PUT /store/${type}/${id}`);
  await updateFood(id, req.body);
  res.sendStatus(200);
}));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
