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

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import { CardCart } from "../../components/CartCard";

export const Cart = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  const {
    RemoveCart,
    RemoveAllCart,
    totalProducts,
    priceTotal,
    cart,
    setCart,
  } = useContext(CartContext);

  const history = useHistory();

  return (
    <>
      {isLargerThan769 ? (
        <>
          <Flex
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center"]}
            flexDirection="column"
            mb="20px"
          >
            <VStack mt="8" spacing="10">
              <Heading>Carrinho de compras</Heading>
              <Box
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
                {totalProducts > 0 ? (
                  <>
                    {cart &&
                      cart.map((product) => (
                        <CardCart
                          image={product.link_image}
                          tittle={product.title}
                          price={product.price}
                          pricePromo={product.price_promotional}
                        />
                      ))}
                    <Button
                      width="190px"
                      height="40px"
                      bg="gray.400"
                      color="primary.main"
                      mt="10px"
                      mb="10px"
                      onClick={() => RemoveAllCart()}
                    >
                      Limpar Carrinho
                    </Button>
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
                          Quantidade de produtos: {totalProducts}
                        </Text>
                        <Text fontSize={"15px"} color={"primary.main1"}>
                          Valor Total: R${priceTotal.toFixed(2)}
                        </Text>
                      </Flex>
                      <Button
                        width="290px"
                        height="40px"
                        bg="green.50"
                        color="primary.main"
                        ml="150px"
                        mt="-80px"
                        onClick={() => history.push("/ckeckout")}
                      >
                        Finalizar Compra
                      </Button>
                    </Box>
                  </>
                ) : (
                  <>
                    <Text>Ops carrinho vazio =(</Text>
                    <Button
                      width="290px"
                      height="40px"
                      bg="green.50"
                      color="primary.main"
                      ml="60px"
                      onClick={() => history.push("/")}
                    >
                      escolher produtos
                    </Button>
                  </>
                )}
              </Box>
            </VStack>
          </Flex>
        </>
      ) : (
        <>
          {/* mobile */}

          <Flex
            ml="25px"
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center"]}
            flexDirection="column"
          >
            <VStack mt="8" spacing="10">
              <Heading>Carrinho de compras</Heading>
              <Box
                backgroundColor={"destak.main1"}
                border={"2px"}
                borderColor={"gray.100"}
                borderRadius={"10"}
                alignItems="center"
                paddingX={[4, 4, 10, 10]}
                paddingY={8}
                marginX={[2, 2, 8, 8]}
                marginTop={[10, 10, 0, 0]}
                textAlign="center"
                justifyContent={"center"}
                flexDirection={"column"}
              >
                {totalProducts > 0 ? (
                  <>
                    {cart &&
                      cart.map((product) => (
                        <CardCart
                          image={product.link_image}
                          tittle={product.title}
                          price={product.price}
                          pricePromo={product.price_promotional}
                        />
                      ))}
                    <Button
                      width="190px"
                      height="40px"
                      bg="gray.400"
                      color="primary.main"
                      mt="10px"
                      mb="10px"
                      onClick={() => RemoveAllCart()}
                    >
                      Limpar Carrinho
                    </Button>
                    <Box
                      w="320px"
                      h="100px"
                      bg="primary.main"
                      flexDirection={"column"}
                      align-items="center"
                      borderRadius={"10px"}
                      border="0.5px"
                      borderColor="gray.100"
                    >
                      <Box
                        flexDirection={"column"}
                        textAlign="center"
                        ml="10px"
                      >
                        <Text
                          fontSize={"20px"}
                          fontWeight="bold"
                          color={"primary.main1"}
                        >
                          Dados do carrinho
                        </Text>
                        <Text fontSize={"15px"} color={"primary.main1"}>
                          Quantidade de produtos: {totalProducts}
                        </Text>
                        <Text fontSize={"15px"} color={"primary.main1"}>
                          Valor Total: R${priceTotal.toFixed(2)}
                        </Text>
                        <Button
                          width="190px"
                          height="20px"
                          bg="green.50"
                          color="primary.main"
                          onClick={() => history.push("/ckeckout")}
                        >
                          Finalizar Compra
                        </Button>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <>
                    <Text>Ops carrinho vazio =( </Text>
                    <Button
                      width="190px"
                      height="20px"
                      bg="green.50"
                      color="primary.main"
                      onClick={() => history.push("/")}
                    >
                      escolher produtos
                    </Button>
                  </>
                )}
              </Box>
            </VStack>
          </Flex>
        </>
      )}
    </>
  );
};
