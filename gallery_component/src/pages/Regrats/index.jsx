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

import logo from "../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

export const Regrats = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const history = useHistory();

  let orderNumber = getRandomInt(100000, 10000000);

  return (
    <>
      {isLargerThan769 ? (
        <>
          <Flex
            height="100vh"
            justifyContent="center"
            alignItems={["flex-start", "flex-start", "center"]}
            flexDirection="column"
          >
            <VStack mt="8" spacing="5">
              <Heading fontSize={"45px"}>Tudo certo :) </Heading>
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
                <Text fontSize={"35px"} color={"primary.main1"} mb="12px">
                  Compra realizada com sucesso!
                </Text>
                <Text fontSize={"35px"} color={"secondary.main"} mb="12px">
                  Recebemos seu pedido {orderNumber}
                </Text>
                <Text fontSize={"25px"} color={"primary.main1"}>
                  Nossa equipe já está trabalhando para que sua entrega chegue o
                  mais rápido possivel, em breve você receberá no seu email o
                  resumo do pedido e sua nota fiscal, enviaremos também um email
                  para cada atulização no status de seu pedido.
                </Text>
              </Box>
            </VStack>
            <Button
              mt="10px"
              bg="green.50"
              type="submit"
              w="250px"
              h="60px"
              color={"primary.main"}
              fontWeight={"bold"}
              onClick={() => history.push("/")}
            >
              Continuar comprando
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
            ml="22px"
          >
            <VStack mt="8" spacing="1">
              <Heading fontSize={"40px"}>Tudo certo :) </Heading>
              <Box
                backgroundColor={"destak.main1"}
                border={"2px"}
                borderColor={"gray.100"}
                borderRadius={"10"}
                w="330px"
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
                <Text fontSize={"35px"} color={"primary.main1"} mb="12px">
                  Compra realizada com sucesso!
                </Text>
                <Text fontSize={"35px"} color={"secondary.main"} mb="12px">
                  Recebemos seu pedido {orderNumber}
                </Text>
                <Text fontSize={"20px"} color={"primary.main1"}>
                  Nossa equipe já está trabalhando para que sua entrega chegue o
                  mais rápido possivel, em breve você receberá no seu email o
                  resumo do pedido e sua nota fiscal, enviaremos também um email
                  para cada atulização no status de seu pedido.
                </Text>
              </Box>

              <Button
                mt="10px"
                ml="40px"
                bg="green.50"
                type="submit"
                w="250px"
                h="45px"
                color={"primary.main"}
                fontWeight={"bold"}
                onClick={() => history.push("/")}
              >
                Continuar comprando
              </Button>
            </VStack>
          </Flex>
        </>
      )}
    </>
  );
};
