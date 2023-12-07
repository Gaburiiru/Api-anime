import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import BuscadorAnime from "./buscadorAnime";

const Lista = ({ dato }) => {
  const [search, setSearch] = useState("");
  const [orden, setOrden] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  useEffect(() => {
    let busqueda = dato;

    if (search) {
      busqueda = dato.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.synopsis.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (orden === "ordAZ") {
      busqueda.sort((a, b) =>
        a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      );
    } else if (orden === "ordZA") {
      busqueda.sort((a, b) =>
        a.title < b.title ? 1 : a.title > b.title ? -1 : 0
      );
    }

    setResultadoBusqueda([...busqueda]);
  }, [dato, search, orden]);

  return (
    <div>
      <BuscadorAnime setSearch={setSearch} setOrden={setOrden} />
      {resultadoBusqueda.length === 0 ? (
        <div className="text-white mt-4 bg-cyan-800 p-4 w-fit mx-auto rounded-lg text-xl">
          <img src={assets.marinSearch} alt="" className="w-96 mx-auto" />
          <p className="text-center">No se encontraron resultados.</p>
        </div>
      ) : (
        <ul className="flex flex-col items-center">
          {resultadoBusqueda.map((item) => (
            <li
              key={item.mal_id}
              className="md:w-150 sm:w-96 w-screen bg-cyan-800 p-2 m-2 rounded-xl shadow-2xl shadow-cyan-950"
            >
              <Link to={"/CardAnime/" + item.mal_id} className="">
                <div className="text-white inline-flex items-center">
                  <img
                    className="w-16 h-fit"
                    src={item.images.jpg.image_url}
                    alt="imagen anime"
                  />
                  <p className="text-white text-center font-thin text-lg px-6 truncate whitespace-pre-line">
                    {item.title}
                  </p>
                  <img className="w-6 h-fit" src={assets.film} />
                  <span className="px-2 text-lg">{item.episodes}</span>
                  <img className="w-6 h-fit" src={assets.star} />
                  <span className="px-2 text-lg">{item.score}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="sm:mt-24 mt-32" />
    </div>
  );
};

export default Lista;
