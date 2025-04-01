import React, { useContext} from "react";
import { CartContext } from "../context/CartContext";

import "./Cart.css";

function Cart({ setShowCart}) {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
  return (
    <div className="container my-5 border cart-container" style={{ position: "fixed", top: "40px", right: "0", width: "400px", backgroundColor: "#fff", zIndex: 1000 }}>

      <div className="row cart-header">
        <button className="btn cart-hide-button" onClick={() => setShowCart(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          <p>close</p>
        </button>
        {cart.length > 0 && <h2 className="cart-header-text">Shopping Cart</h2>}
      </div>
      
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul className="cart-list" style={{ height: "400px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
          {cart.map((item) => (
            <li key={item._id} className="cart-item">
              <img src={`${process.env.REACT_APP_API_URL}/${item.image}`} alt={item.name} className="cart-item-image" />
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
              <button onClick={() => removeFromCart(item._id)} className="item-remove-btn">Remove</button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && <div className="cart-total">
        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      </div>}
      {cart.length > 0 && <button className="btn btn-danger cart-btn-bottom" onClick={clearCart}>Clear Cart</button>}
      {cart.length > 0 && <button className="nav-btn cart-btn-bottom">Checkout</button>}
    </div>
  );
}

export default Cart;
