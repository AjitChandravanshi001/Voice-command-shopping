import React from "react";

const ProductList = ({ products, addToCart }) => {
  if (!products.length) return <p>No products yet. Try saying “show products”.</p>;

  return (
    <div>
      <h2>🛒 Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
