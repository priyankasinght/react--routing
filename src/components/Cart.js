import { useContext } from "react";
import { Cartcontext } from "./Context";
import "./Cart.css";

const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  if (state.length === 0) {
    return <p className="emty-cart">No item to show in cart</p>;
  }

  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

