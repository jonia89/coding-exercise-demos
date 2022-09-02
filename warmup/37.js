const orders = [
  { name: "Coca-cola", qty: 3 },
  { name: "Quarter Pounder", qty: 2 },
  { name: "Fries", qty: 4 },
];

function printAllOrders(orders) {
  orders.sort((orderA, orderB) => {
    return orderA.qty - orderB.qty;
  });

  orders.forEach((order) => {
    console.log(`${order.person}, ${order.name}, ${order.qty}`);

    if (order.name === "Fries" && order.qty > 3) {
      console.log("Oho! Jollakin on nälkä!");
    }
  });
}

printAllOrders(orders);
