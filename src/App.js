import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;