import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import axios from "axios";

import "../styles/Home.css";

const URI = "http://localhost:8000/api/products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [tablaProducts, setTablaProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [busqueda, setBusqueda] = useState("");

  const getProducts = async () => {
    const res = await axios.get(URI);
    setProducts(res.data);
    setTablaProducts(res.data);
    setLoading(false);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProducts.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProducts(resultadosBusqueda);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="main-home">
        <div className="main-home__sidebar">
          <div className="main-home__sidebar--tiendas">
            <p>Nuestra tienda</p>
            <img
              src="https://fastly.4sqi.net/img/general/600x600/61087068_uiUs9bexjtX3gf7lCsPaLzQUSgxGikJcXjzmvdixxmg.jpg"
              alt="Unico"
              className="main-home__sidebar--tiendas-img"
            />
            <button className="main-home__sidebar--tiendas-button">
              Nuestras tiendas
            </button>
          </div>
          <div className="main-home__sidebar--categorias">
            <strong>Categorias</strong>
            <div className="main-home__sidebar--categorias__items">
              <p>
                <i className="fa fa-tags icon"></i>Moda mujer
              </p>
              <p>
                <i className="fa fa-female icon"></i>Calzado mujer
              </p>
              <p>
                <i className="fa fa-diamond icon"></i>Accesorios mujer
              </p>
              <hr size="8px" color="black" />
              <p>
                <i className="fa fa-tags icon"></i>Moda hombre
              </p>
              <p>
                <i className="fa fa-male icon"></i>Calzado hombre
              </p>
              <p>
                <i className="fa fa-futbol-o icon"></i> Accesorios hombre
              </p>
            </div>
          </div>
        </div>
        <div className="main-home__content">
          <div className="main-home__content--search">
            <div></div>
            <div>
              <i className="fa fa-search icon"></i>
              <input
                type="text"
                value={busqueda}
                placeholder="Buscar"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="main-home__content--items">
            {loading
              ? "Cargando..."
              : products &&
                products.map((producto) => (
                  <Product
                    nombre={producto.nombre}
                    imagen={producto.imagen}
                    url={`/producto/${producto.id}`}
                    key={producto.id}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
