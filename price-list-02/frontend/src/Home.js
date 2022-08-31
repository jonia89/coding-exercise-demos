import React from 'react';
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2><Link to="fruit">Fruit 🥝</Link></h2>
      <h2><Link to="vegetable">Vegetables 🥕</Link></h2>
    </div>
  );
}
