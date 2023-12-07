import React from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center bg-cyan-900 p-2">
        <Link to={"/Home"}>
          <img className="w-10" src={assets.home} alt="home" />
        </Link>
      <h1 className="ml-2 text-center text-white font-medium text-3xl">
        Anime Date
      </h1>
    </div>
  );
}

export default Header;
