import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../../assets/assets";
import BuscadorAnime from "./buscadorAnime";

const Home = ({ dato }) => {
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
    <div className="text-center">
      <BuscadorAnime setSearch={setSearch} setOrden={setOrden} />
      {resultadoBusqueda.length === 0 ? (
        <div className="text-white mt-4 bg-cyan-800 p-4 w-fit mx-auto rounded-lg text-xl">
          <img src={assets.marinSearch} alt="" className="w-96 mx-auto" />
          <p className="text-center">No se encontraron resultados.</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 gap-2 justify-center mt-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {resultadoBusqueda.map((item) => (
            <Link key={item.mal_id} to={"/CardAnime/" + item.mal_id}>
              <div className="bg-cyan-800  p-4 w-64 h-fit grid justify-center items-center mx-auto rounded-xl shadow-2xl shadow-cyan-950">
                <img src={item.images.jpg.image_url} alt="imagen anime" />
                <p className="text-white font-thin text-lg">{item.title}</p>
                <ul>
                  <li className="text-white inline-flex">
                    <img className="w-6 h-fit" src={assets.film} />
                    <span className="px-2 text-lg">{item.episodes}</span>
                  </li>
                  <li className="text-white inline-flex">
                    <img className="w-6 h-fit" src={assets.star} />
                    <span className="px-2 text-lg">{item.score}</span>
                  </li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="sm:mt-24 mt-32" />
    </div>
  );
};

export default Home;
