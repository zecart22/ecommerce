import {
  Box,
  Button,
  Text,
  VStack,
  Flex,
  useMediaQuery,
  Image,
  Input,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { CardCart } from "../../components/CartCard";
import { useHistory } from "react-router-dom";

export const Checkout = () => {
  const history = useHistory();

  const {
    RemoveCart,
    RemoveAllCart,
    totalProducts,
    priceTotal,
    cart,
    setCart,
  } = useContext(CartContext);

  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
        flexDirection="column"
      >
        <VStack mt="8" spacing="5">
          <Heading>Finalizar Compra</Heading>
          <Box
            as="form"
            backgroundColor={"destak.main1"}
            border={"2px"}
            borderColor={"gray.100"}
            borderRadius={"10"}
            w="1300px"
            alignItems="center"
            paddingX={[4, 4, 10, 10]}
            paddingY={8}
            marginX={[2, 2, 8, 8]}
            marginTop={[10, 10, 0, 0]}
            textAlign="center"
            align-items="center"
            justifyContent={"center"}
            flexDirection={"column"}
          >
            {cart &&
              cart.map((product) => (
                <CardCart
                  image={product.link_image}
                  tittle={product.title}
                  price={product.price}
                  pricePromo={product.price_promotional}
                />
              ))}

            <Box
              w="777px"
              h="100px"
              bg="primary.main"
              ml="225px"
              flexDirection={"row"}
              align-items="center"
              borderRadius={"10px"}
              border="0.5px"
              borderColor="gray.100"
            >
              <Flex flexDirection={"column"} textAlign="left" ml="10px">
                <Text
                  fontSize={"20px"}
                  fontWeight="bold"
                  color={"primary.main1"}
                >
                  Dados do carrinho
                </Text>
                <Text fontSize={"15px"} color={"primary.main1"}>
                  Quantidade de produtos:{totalProducts}
                </Text>
                <Text fontSize={"15px"} color={"primary.main1"}>
                  Valor Total:{priceTotal}
                </Text>
              </Flex>
              <Button
                width="290px"
                height="40px"
                bg="green.50"
                color="primary.main"
                ml="150px"
                mt="-80px"
                onClick={() => history.push("/regrats")}
              >
                Finalizar Compra
              </Button>
            </Box>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
