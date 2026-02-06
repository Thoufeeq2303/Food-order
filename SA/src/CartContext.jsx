import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // ✅ increase qty
  const increase = (item) => {
    setCart(prev => ({
      ...prev,
      [item._id]: {
        ...item,
        qty: (prev[item._id]?.qty || 0) + 1
      }
    }));
  };

  // ✅ decrease qty (IMMUTABLE — no mutation)
  const decrease = (id) => {
    setCart(prev => {
      if (!prev[id]) return prev;

      const newQty = prev[id].qty - 1;

      // remove item if qty becomes 0
      if (newQty <= 0) {
        const { [id]: removed, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [id]: {
          ...prev[id],
          qty: newQty
        }
      };
    });
  };

  // ✅ total price
  const total = Object.values(cart)
    .reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, increase, decrease, total }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ custom hook
export const useCart = () => useContext(CartContext);
