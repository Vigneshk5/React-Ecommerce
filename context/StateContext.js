import React, { createContext, useContext, useState, useEffect } from "react";
import { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);
  return (
    <Context.Provider
      value={{
        showCart,
        cartItem,
        totalPrice,
        totalQuantities,
        qty,
      }}
    >
      {children}
    </Context.Provider>
  );
};