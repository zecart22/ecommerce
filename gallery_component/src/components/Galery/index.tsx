import {
  Box,
  Button,
  VStack,
  Image,
  Text,
  useMediaQuery,
  HStack,
  Link as LinkK,
} from "@chakra-ui/react";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/Products";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface GaleriaProps {
  image: string;
  tittle: string;
  description: string;
  price: number;
  pricePromo: number;
  image_id: number;
  selected: boolean;
}

export const CardGaleria = ({
  image,
  tittle,
  selected,
  price,
}: GaleriaProps) => {
  const history = useHistory();

  const { products, cart, setCart, AddCart } = useContext(ProductsContext);

  const [isLargerThan913] = useMediaQuery("(min-width: 913px)");

  const [titleColor, setTitleColor] = useState("primary.main1");

  const [backColor, setBackColor] = useState("primary.main");

  const [IsSelected, setIsSelected] = useState(false);

  const ChangeStateColor = () => {
    if (titleColor === "primary.main1" && !selected) {
      setTitleColor("negative.main");

      setIsSelected(true);
    } else {
      setTitleColor("primary.main1");

      setIsSelected(false);
    }
  };

  return (
    <>
      {isLargerThan913 ? (
        <Box
          onClick={() => ChangeStateColor()}
          border="1px"
          borderColor="primary.main"
          mt="8px"
          cursor="pointer"
          _hover={{
            transform: "translateY(1px)",
            borderColor: "gray.400",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="225px"
          textAlign={"center"}
          justifyContent="column"
          boxShadow="lg"
        >
          <HStack spacing="-170px" marginTop={6}>
            <Box
              width="225px"
              h="225px"
              marginBottom={6}
              align-items="center"
              bgImage={image}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
            />
          </HStack>

          <HStack mb="17px" flexDirection={"column"}>
            <VStack spacing={"10px"}>
              <VStack spacing={"-5px"}>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                  color={titleColor}
                >
                  {tittle}
                </Text>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                  color={titleColor}
                >
                  R${price.toFixed(2)}
                </Text>
              </VStack>

              <Button
                width="190px"
                height="40px"
                bg="gray.400"
                color="primary.main"
                onClick={() => AddCart(tittle)}
              >
                Adicionar no carrinho
              </Button>
              <Button
                width="190px"
                height="40px"
                bg="green.50"
                color="primary.main"
                onClick={() => history.push("/ckeckout")}
              >
                Finalizar Compra
              </Button>
            </VStack>
          </HStack>
        </Box>
      ) : (
        /* mobile */
        <Box
          onClick={() => ChangeStateColor()}
          border="1px"
          borderColor="primary.main"
          mt="8px"
          cursor="pointer"
          _hover={{
            transform: "translateY(1px)",
            borderColor: "gray.400",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="220px"
          textAlign={"center"}
          alignItems={"center"}
          justifyContent="column"
          boxShadow="lg"
        >
          <HStack spacing="-170px" marginTop={6}>
            <Box
              width="225px"
              h="225px"
              marginBottom={6}
              bgImage={image}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
            />
          </HStack>

          <HStack mb="17px" flexDirection={"column"}>
            <VStack spacing={"10px"}>
              <VStack spacing={"-5px"}>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                  color={titleColor}
                >
                  {tittle}
                </Text>
                <Text
                  as="span"
                  w="400px"
                  h="70px"
                  display="inline-block"
                  white-space="nowrap"
                  overflow="hidden"
                  text-overflow="ellipsis"
                  color={titleColor}
                >
                  R${price.toFixed(2)}
                </Text>
              </VStack>

              <Button
                width="190px"
                height="40px"
                bg="gray.400"
                color="primary.main"
                onClick={() => AddCart(tittle)}
              >
                Adicionar no carrinho
              </Button>
              <Button
                width="190px"
                height="40px"
                bg="green.50"
                color="primary.main"
                onClick={() => history.push("/ckeckout")}
              >
                Finalizar Compra
              </Button>
            </VStack>
          </HStack>
        </Box>
      )}
    </>
  );
};
