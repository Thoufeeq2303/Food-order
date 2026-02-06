import { useEffect, useState } from "react";
import "./success.css";

const OrderSuccess = ({ onClose }) => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const t = setInterval(() => {
      setTime(v => {
        if (v <= 1) {
          clearInterval(t);
          return 0;
        }
        return v - 1;
      });
    }, 60000); // 1 min

    return () => clearInterval(t);
  }, []);

  return (
    <div className="success-overlay">
      <div className="success-card">

        <div className="checkmark">✓</div>

        <h2>Order Confirmed</h2>
        <p>Your order is being prepared</p>

        <div className="timer">
          Ready in {time} minutes
        </div>

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default OrderSuccess;
