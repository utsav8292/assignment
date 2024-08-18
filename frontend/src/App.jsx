import React from "react";
import "./style.css";
import Hero from "./Hero";
import Detail from "./Detail";
import Create from "./Create";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/detail/:title" element={<Detail />} />
          <Route path="/cards"  element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
