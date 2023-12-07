import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Home from "../pages/home";
import Lista from "../pages/Lista";
import CardAnime from "../pages/CardAnime";
import Default from "../pages/Default";
import BuscadorAnime from "../pages/buscadorAnime";
import Conexion from "../../config/Conexion";

export const MisRutas = () => {
  const [dato, setDato] = useState([]);
  const [search, setSearch] = useState("");
  const [orden, setOrden] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={
            <Home
              dato={dato}
              orden={orden}
              setSearch={setSearch}
              setOrden={setOrden}
            />
          }
        />
        <Route
          path="/Home"
          element={
            <Home
              dato={dato}
              orden={orden}
              setSearch={setSearch}
              setOrden={setOrden}
            />
          }
        />
        <Route
          path="/Lista"
          element={
            <Lista
              dato={dato}
              orden={orden}
              setSearch={setSearch}
              setOrden={setOrden}
            />
          }
        />
        <Route
          path="/BuscadorAnime"
          element={<BuscadorAnime setSearch={setSearch} setOrden={setOrden} />}
        />
        <Route path="/CardAnime/:id" element={<CardAnime dato={dato} />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
      <Conexion setDato={setDato} />
    </BrowserRouter>
  );
};
