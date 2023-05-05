import { useState, useEffect } from "react";

const useProducts = () => {
    // Obtener el arreglo de productos del Local Storage o inicializarlo como un arreglo vacío si no hay nada en el Local Storage
    const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')) || []);
  
    // Actualizar el Local Storage cuando se modifique el arreglo de productos
    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
    }, [products]);
  
    // Agregar un nuevo producto al arreglo de productos
    const addProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    return [products, addProduct];
  };
  
  export default useProducts;