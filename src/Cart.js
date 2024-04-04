// components/Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            {item.name} - {item.category}
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
