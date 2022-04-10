import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { CartProvider } from "./Cart";
import theme from "../style/theme";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: IAppProviderProps) => (
  <ProductsProvider>
    <CartProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CartProvider>
  </ProductsProvider>
);
