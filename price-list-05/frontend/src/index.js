import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Fruit } from "./Fruit";
import { Vegetable } from "./Vegetable";
import { Home } from "./Home";
import { Add } from "./Add";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <strong>Pihi Group ©️ Fruit Market Viewer</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="fruit">Fruits</Link>
        </li>
        <li>
          <Link to="vegetable">Vegetables</Link>
        </li>
        <li>
          <Link to="add">➕ Add</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="fruit" element={<Fruit />} />
      <Route path="vegetable" element={<Vegetable />} />
      <Route path="add" element={<Add />} />
    </Routes>
  </BrowserRouter>
);
