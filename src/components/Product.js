import { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Cartcontext } from "./Context";

const Product = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { dispatch } = useContext(Cartcontext);
  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button className="add-to-cart-btn" onClick={() => {
              dispatch({ type: "ADD", payload: item });
              alert("Item successfully added to the cart!");
            }}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
