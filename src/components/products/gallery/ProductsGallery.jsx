//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//import useContact from "../../../hooks/useContact";
import useProducts from "../../../hooks/useProducts";
//import { incrementProductsPage } from "../../../redux/slices/productsSlice";
import { peruvianCurrencyFormat } from "../../../utils/utils";
import ContainersImage from "../../common/containers/ContainersImage";
//import { fetchReadProductId } from "../../../redux/thunks/productsThunk";
//import { useEffect } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
//import { resetProducts } from "../../../redux/slices/productsSlice";

const ProductsGallery = ({ products }, props) => {
  //const dispatch = useDispatch()

  //const [products, addProduct] = useLocalStorage();

  const handleAddProduct = () => {
    const newProduct = {}; // Reemplaza esto con tu lógica para agregar un nuevo producto
    addProduct(newProduct);
  };

  return (
    products.length > 0 ?
      <div className="d-flex f-direction-column gap-lg">
        <ul className="list g-elements g-elements--products-gallery gap-md">
          {products.map(element => {
            const { id, nombre, precio, imagen, procedencia, stock, slug } = element;
            return (
              <li key={id} className="card card--products">
                {/* <button
                  className="button button--primary button--circle button--products"
                >
                  <BsCartPlus />
                </button> */}
                <Link to={`/productos/${slug}`}>
                  <ContainersImage
                    src={imagen}
                    alt={nombre}
                    className="card__header-img card__header-img--products"
                  />
                </Link>
                <div className="card__body card__body--products">
                  <h3 className="card__subtitle card__subtitle--sm">Calzado Dep</h3>
                  <Link to={`/productos/${slug}`} className="card__title">{nombre}</Link>
                  <div className="f-elements gap-3xs">
                    <p className="badge">{procedencia}</p>
                    <p className="badge badge--primary">{stock}</p>
                  </div>
                  <h4 className="card__highlighted mt-auto">{peruvianCurrencyFormat(precio)}</h4>
                  <button
                    className="button button--primary"
                    onClick={handleAddProduct}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </li>
            );
          })}
        </ul >
        
        {/*
          productsPage < productsMeta.pagination?.pageCount
          &&
          <button
            className="button button--primary button--lg a-self-center"
            onClick={() => dispatch(incrementProductsPage())}
          >
            Ver más
          </button>
        */}
      </div >
      :
      <h3 className="section__subtitle t-align-center f-elements f-elements--center">😢 No hay productos disponibles 😢</h3>
  );
};

export default ProductsGallery;