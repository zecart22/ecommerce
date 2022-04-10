import { createContext } from "react";
import { useState, useEffect } from "react";
import { api } from "../../services";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        console.log(response);
        setProductsData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(productsData);

  const products = productsData.map((product) => product.attributes);

  const AddCart = (name) => {
    const findedProduct = products.find((element) => element.title === name);
    setCart([...cart, findedProduct]);
  };

  return (
    <ProductsContext.Provider value={{ products, cart, setCart, AddCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
