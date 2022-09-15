import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";


export function Fruit() {
  const [fruits, setFruits] = useState([]);

  const onSubmit = (data) => {
    console.log("Searching for this:", data.searchText);
    fetch(
      "http://localhost:3000/store/fruit?" +
        new URLSearchParams({
          search: data.searchText,
        }),
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFruits(data);
      });
  };

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

      <SearchBar onSubmit={onSubmit} />

      <table>
        <tbody>
          {fruits.map((fruit) => {
            return (
              <tr key={fruit.name}>
                <td>{fruit.name}</td>
                <td>{fruit.price} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
