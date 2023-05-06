import useCart from "../hooks/useCart";


const CartPage = () => {
  const [handleRemoveProduct, cartProducts] = useCart();

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartProducts.length === 0 ? (
        <div>No hay productos en el carrito</div>
      ) : (
        <ul>
          {cartProducts.map((productId) => (
            <li key={productId}>
              <p>Producto {productId}</p>
              <button onClick={() => handleRemoveProduct(productId)}>Eliminar del carrito</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;