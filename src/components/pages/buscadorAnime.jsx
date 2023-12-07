import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

function BuscadorAnime({ setSearch, setOrden }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [ordenAscendente, setOrdenAscendente] = useState(true);
  const [vista, setVista] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearch(value);
  };

  const toggleOrden = () => {
    setOrdenAscendente((prev) => !prev);
    setOrden(ordenAscendente ? "ordZA" : "ordAZ");
  };

  const toggleVista = () => {
    setVista((prev) => !prev);

    if (location.pathname === "/Home") {
      navigate("/Lista");
    } else {
      navigate("/Home");
    }
  };

  return (
    <nav className="bg-cyan-950 flex justify-between items-center">
      <div className="flex items-center">
        <button
          className="w-fit p-2 bg-slate-800 m-2 sm:w-60 font-medium text-white cursor-pointer hover:bg-slate-900 rounded-lg"
          onClick={toggleOrden}
        >
          <span className="hidden  sm:inline">Ordenar nombre </span>
          <img
            className="inline w-8"
            src={ordenAscendente ? assets.AaZ : assets.ZaA}
            alt=""
          />
        </button>
      </div>
      <div className="flex items-center">
        <button onClick={toggleVista}>
          {location.pathname === "/Home" ? (
            <img src={assets.lista} alt="" />
          ) : (
            <img src={assets.cuadricula} alt="" />
          )}
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Buscar anime por título"
          className="p-2 m-2 sm:w-64 rounded-lg italic"
        />
      </div>
    </nav>
  );
}

export default BuscadorAnime;
