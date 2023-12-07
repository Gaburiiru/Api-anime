import { useEffect } from "react";

function Conexion({ setDato }) {
  const getDatos = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      const anime = await response.json();
      const datosAnime = anime.data;
      setDato(datosAnime);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);
}

export default Conexion;