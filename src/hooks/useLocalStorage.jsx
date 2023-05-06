import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useLocalStorage = () => {
  const [localProducts, setLocalProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // Obtener los productos del Local Storage cuando se monta el componente
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setLocalProducts(storedProducts);
      dispatch({ type: 'SET_PRODUCTS', payload: storedProducts });
    }
  }, [dispatch]);

  // Actualizar el Local Storage cuando se modifique el arreglo de productos
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(localProducts));
  }, [localProducts]);

  // Agregar un nuevo producto al Local Storage y al estado de Redux
  const addProduct = (newProduct) => {
    const updatedProducts = [...localProducts, newProduct];
    setLocalProducts(updatedProducts);
    dispatch({ type: 'SET_PRODUCTS', payload: updatedProducts });
  };

  // Obtener los productos del carrito a partir del estado de Redux
  const getCartProducts = () => {
    return products.filter((product) => product.isInCart);
  };

  return [products, addProduct, getCartProducts];
};

export default useLocalStorage;