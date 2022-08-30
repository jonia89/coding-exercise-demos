import React, { useState, useEffect } from "react";

export function Vegetable() {
  const [vegetables, setVegetables] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:3000/store/vegetables")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVegetables(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Vegetables</h1>
      <table>
        {vegetables.map((vegetable) => {
          return (
            <tr key={vegetable.name}>
              <td>{vegetable.name}</td>
              <td>{vegetable.price} €</td>
            </tr>
          )
        })}
      </table>
    </>
  );
}
