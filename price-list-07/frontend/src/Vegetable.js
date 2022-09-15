import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";

export function Vegetable() {
  const [vegetables, setVegetables] = useState([]);

  const onSubmit = (data) => {
    console.log("Searching for this:", data.searchText);
    fetch(
      "http://localhost:3000/store/vegetables?" +
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
        setVegetables(data);
      });
  };

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

      <SearchBar onSubmit={onSubmit} />

      <table>
        <tbody>
          {vegetables.map((vegetable) => {
            return (
              <tr key={vegetable.name}>
                <td>{vegetable.name}</td>
                <td>{vegetable.price} €</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
