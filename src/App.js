import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  return (
    <BrowserRouter>
      {user && <Navbar cartCount={cart.length} />}
      <Routes>
        {!user ? (
          <Route path="*" element={<Register onRegister={setUser} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
