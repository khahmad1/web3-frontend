"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context for the app
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const {quantityCart,setQuantityCart} = useState(1);
  const addToCart = (medicineId, quantity, image, price,name) => {
    setCart([...cart, { medicineId, quantity, image, price,name }]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        quantityCart,
        setQuantityCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
