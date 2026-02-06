import { useEffect, useState } from "react";
import "./success.css";

const OrderTracking = () => {

  // 10 minutes = 600 seconds
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) {
          clearInterval(timer);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="success-page">

      <div className="success-card">

        <div className="checkmark">✓</div>

        <h2>Order Confirmed</h2>
        <p>Your food is being prepared</p>

        <div className="big-timer">
          {mins}:{secs.toString().padStart(2, "0")}
        </div>

        <p>Estimated delivery time</p>

      </div>

    </div>
  );
};

export default OrderTracking;
