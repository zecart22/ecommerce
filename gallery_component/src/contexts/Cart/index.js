import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ProductsContext } from "../Products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { cart, setCart } = useContext(ProductsContext);

  function RemoveCart(name) {
    const index = cart.findIndex((product) => product.title === name);
    const rvCart = cart.splice(index, 1);
    setCart([...cart]);
  }

  function RemoveAllCart() {
    setCart([]);
  }

  const totalProducts = cart.length;

  const priceTotal = cart.reduce(function (acc, curr) {
    return acc + curr.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        RemoveCart,
        RemoveAllCart,
        totalProducts,
        priceTotal,
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
