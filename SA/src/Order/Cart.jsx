import { useCart } from "../CartContext.jsx";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const items = Object.values(cart);

  const navigate = useNavigate();

  const handleBuy = () => {
    if (items.length === 0) return;
    navigate("/tracking");  
  };

  return (
    <div className="cart-page">

      <h2>YOUR ORDER</h2>

      {items.length === 0 && (
        <p className="empty-msg">
          Your cart is empty
        </p>
      )}

      {items.map(item => (
        <div key={item._id} className="cart-row">

          <img
            src={item.image}
            alt={item.name}
            className="cart-img"
          />

          <div className="cart-info">

            <h4 className="item-name">
              {item.name}
            </h4>

            <p className="unit-price">
              ₹{item.price} each
            </p>

            <p className="calc-line">
              {item.qty} × ₹{item.price}
            </p>

            <p className="line-total">
              ₹{item.price * item.qty}
            </p>

            <div className="Counter">
              <button onClick={() => decrease(item._id)}>
                -
              </button>

              <span>{item.qty}</span>

              <button onClick={() => increase(item)}>
                +
              </button>
            </div>

          </div>
        </div>
      ))}

      {items.length > 0 && (
        <>
          <h3 className="cart-total">
            Total: ₹{total}
          </h3>

          <button
            className="buy-now"
            onClick={handleBuy}
          >
            BUY NOW
          </button>
        </>
      )}

    </div>
  );
};

export default Cart;
