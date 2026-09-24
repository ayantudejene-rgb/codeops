import { useReducer, useMemo, createContext, useContext } from "react";
import { cartReducer } from "./cartReducer";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Exercise 4, 5, 6
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const total = state.items.reduce((sum, d) => sum + d.price, 0);

    const value = useMemo(
    () => ({ items: state.items, dispatch, total }),
    [state.items, total]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}