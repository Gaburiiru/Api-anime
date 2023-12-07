import React, { useEffect, useState } from "react";
import Default from "./Default";
import { useParams } from "react-router-dom";
import assets from "../../assets/assets";

function CardAnime({ dato }) {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    let animeEncontrado = dato.find((anime) => anime.mal_id.toString() === id);
    if (animeEncontrado) {
      setAnime(animeEncontrado);
    }
  }, [id]);

  if (!anime) {
    return <Default />;
  }

  return (
    <div key={anime.mal_id} className="sm:my-20 my-5">
      <div className="bg-cyan-800 p-4 lg:w-180 md:w-150 sm:w-96 w-screen h-fit grid mx-auto rounded-xl shadow-2xl shadow-cyan-950">
        <div className="flex flex-col sm:flex-row items-start">
          <img
            className="sm:w-130 sm:mr-4 mx-auto"
            src={anime.images.jpg.image_url}
            alt="imagen anime"
          />
          <span className="text-white mt-4 mb-4">
            <p className="text-white font-thin text-3xl mb-4">{anime.title}</p>
            <div className="flex flex-wrap mb-4">
              {anime.genres.map((genre) => (
                <p
                  className="text-white bg-violet-800 p-2 rounded-lg m-2 inline-block"
                  key={genre.mal_id}
                >
                  <a href={genre.url} target="_blank" rel="noopener noreferrer">
                    {genre.name}
                  </a>
                </p>
              ))}
            </div>
            <p className="truncate whitespace-pre-wrap">
              <img className="w-6 inline " src={assets.synopsis} alt="" />
              {anime.synopsis}
            </p>
            <iframe
              src={anime.trailer.embed_url}
              className="w-fit h-fit my-4"
              allowFullScreen
            />
          </span>
        </div>

        <ul className="mt-4 truncate whitespace-pre-wrap">
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.film} />
            <span className="px-2 text-lg">{anime.episodes}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.star} />
            <span className="px-2 text-lg">{anime.score}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.trophy} />
            <span className="px-2 text-lg">{anime.rank}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.popularidad} />
            <span className="px-2 text-lg">{anime.popularity}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.edad} />
            <span className="px-2 text-lg">{anime.rating}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.calendario} />
            <span className="px-2 text-lg">{anime.year}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.palomitas} />
            <span className="px-2 text-lg">{anime.season}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.tv} />
            <span className="px-2 text-lg">{anime.type}</span>
          </li>
          <li className="text-white inline-flex">
            <img className="w-6 h-fit" src={assets.documental} />
            <span>
              {anime.studios.map((studio) => (
                <span className="px-2 text-lg" key={studio.mal_id}>
                  <a
                    href={studio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {studio.name}
                  </a>
                </span>
              ))}
            </span>
          </li>
        </ul>
      </div>
      <div className="sm:mt-24 mt-32"/>
    </div>
  );
}

export default CardAnime;
