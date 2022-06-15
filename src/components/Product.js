import React from "react";
import "../styles/Product.css";
import { Link } from "react-router-dom";

const Product = ({ nombre, imagen, url, styles1, styles2 }) => {
  return (
    <div className="producto" style={styles1}>
      <img src={imagen} alt="Producto" className="producto-img" />
      <div style={styles2}>
        <p className="producto-nombre">{nombre}</p>
        <div className="producto__button">
          <Link to={url} className="main-home__sidebar--tiendas-button link">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
