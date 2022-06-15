import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

import "../styles/View.css";

const URI = "http://localhost:8000/api/product/";
const UR2 = "http://localhost:8000/api/products";

const ProductView = () => {
  const { id } = useParams();
  const [imagen, setImagen] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);

  const getProductById = async () => {
    const res = await axios.get(URI + id);
    console.log(res);
    setImagen(res.data.imagen);
    setNombre(res.data.nombre);
    setDescripcion(res.data.descripcion);
    setPrecio(
      res.data.precio.toLocaleString("es-CO", {
        style: "decimal",
        currency: "USD",
        minimumFractionDigits: 0,
      })
    );
    setLoading(false);
  };

  const getProducts = async () => {
    const res = await axios.get(UR2);
    setProducts(res.data);
  };

  const style1 = {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    marginBottom: "20px",
    display: "flex",
  };

  const style2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="view">
        <div className="view__carrito">
          {loading ? (
            "Cargando..."
          ) : (
            <div>
              <h1>Carrito de compras</h1>
              <div className="view__carrito--item">
                <div className="view__carrito--item__container">
                  <img
                    src={imagen}
                    alt="Producto"
                    className="view__carrito--item__img"
                  />
                </div>
                <div className="view__carrito--item-1">
                  <div>
                    <p className="view__carrito--item-1__name">{nombre}</p>
                    <p>{descripcion}</p>
                    <p>Precio: ${precio}</p>
                  </div>
                  <div>
                    <button className="main-home__sidebar--tiendas-button">
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="view__products">
          {loading
            ? "Cargando..."
            : products.map((producto) => (
                <Product
                  nombre={producto.nombre}
                  imagen={producto.imagen}
                  url={`/producto/${producto.id}`}
                  key={producto.id}
                  styles1={style1}
                  styles2={style2}
                />
              ))}
        </div>
      </div>
    </>
  );
};

export default ProductView;
