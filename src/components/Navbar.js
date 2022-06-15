import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="content">
        <div className="content__items">
          <Link to="/">
            <img
              src="https://static.unico.com.co/img/unicocomco-logo-1650300464.jpg"
              alt="Unico"
            />
          </Link>
          <ul className="content__items__ul">
            <li className="content__items--item">Quienes somos</li>
            <li className="content__items--item">Categoria</li>
            <li className="content__items--item">Visitanos</li>
          </ul>
        </div>
        <div className="content__user">
          <img
            src="https://avatars.githubusercontent.com/u/46503539?s=400&u=ff4331e3295d4dcf88838851d60812417b0406ed&v=4"
            alt="User"
            className="content__user--img"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
