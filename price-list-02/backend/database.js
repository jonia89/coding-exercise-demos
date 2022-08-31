const fruits = [
  { name: "banana", price: 3 },
  { name: "watermelon", price: 7 },
  { name: "pineapple", price: 5 },
  { name: "starfruit", price: 9 },
  { name: "orange", price: 1},
  { name: "strawberry", price: 2 },
];

const vegetables = [
  { name: "cucumber", price: 2 },
  { name: "potato", price: 1 },
  { name: "carrot", price: 6 },
  { name: "zucchini", price: 100 },
  { name: "broccoli", price: 5 },
  { name: "tomato", price: 3 },
  { name: "onion", price: 2 },
];

function getAllFruit() {
  return fruits;
}

function getAllVegetables() {
  return vegetables;
}

function addVegetables(vegetable) {
  vegetables.push(vegetable)
}

module.exports = {
  getAllFruit,
  getAllVegetables,
  addVegetables,
};
