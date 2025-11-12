import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>🧺 Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {item.name} — ₹{item.price}
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
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
