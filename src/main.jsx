import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import GetShelters from "./components/getALL.jsx";
import GetShelterById from "./components/getById.jsx";
import UpdateShelter from "./components/updateShelter.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shelters" element={<GetShelters />} />
        <Route path="/shelter" element={<GetShelterById />} />
        <Route path="/shelter/update/:id" element={<UpdateShelter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
