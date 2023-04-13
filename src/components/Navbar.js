import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {

  return (
    <div className="nav">
      <div id="title">
        <h2>React Routing</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/cart">Add to Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;