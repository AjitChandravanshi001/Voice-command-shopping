const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample products (mock data)
const products = [
  { id: 1, name: "Phone", price: 15000 },
  { id: 2, name: "Laptop", price: 55000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Smart Watch", price: 3000 },
  { id: 5, name: "Camera", price: 25000 },
];

// ✅ API route to get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Voice Shopping API is running...");
});

// ✅ Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
