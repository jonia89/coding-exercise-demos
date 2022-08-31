import React, { useState, useEffect } from "react";

export function Fruit() {
  const [fruits, setFruits] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/store/fruit")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFruits(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Fruit</h1>
      <table>
        {fruits.map((fruit) => {
          return (
            <tr key={fruit.name}>
              <td>{fruit.name}</td>
              <td>{fruit.price} €</td>
            </tr>
          )
        })}
      </table>
    </>
  );
}
