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
import { CartContext } from "../../contexts/Cart";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { useState } from "react";
import { useHistory } from "react-router-dom";

interface CardCartProps {
  image: string;
  tittle: string;
  description: string;
  price: number;
  pricePromo: number;
  image_id: number;
  selected: boolean;
}

export const CardCart = ({ image, tittle, selected, price }: CardCartProps) => {
  const history = useHistory();

  const { RemoveCart } = useContext(CartContext);

  const [isLargerThan913] = useMediaQuery("(min-width: 913px)");

  const [titleColor, setTitleColor] = useState("primary.main1");

  const [backColor, setBackColor] = useState("primary.main");

  const [IsSelected, setIsSelected] = useState(false);

  return (
    <>
      {isLargerThan913 ? (
        <Box
          border="1px"
          borderColor="gray.100"
          mt="8px"
          cursor="pointer"
          _hover={{
            transform: "translateY(2px)",
            borderColor: "primary.main",
            boxShadow: "lg",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="1220px"
          textAlign={"center"}
          flexDirection={"row"}
        >
          <Box
            width="225px"
            h="225px"
            ml="20px"
            
            marginBottom={6}
            marginTop={6}
            align-items="center"
            bgImage={image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
          />

          <HStack mb="17px" flexDirection={"column"} mt="-220px">
            <VStack spacing={"10px"}>
              <VStack spacing={"-5px"}>
                <Text
                  as="span"
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
                bg="primary.main"
                color="primary.main1"
                onClick={() => RemoveCart(tittle)}
              >
                Tirar do carrinho
              </Button>
            </VStack>
          </HStack>
        </Box>
      ) : (
        /* mobile */
        <Box
          border="1px"
          borderColor="gray.100"
          mt="20px"
          cursor="pointer"
          _hover={{
            transform: "translateY(2px)",
            borderColor: "primary.main",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="330px"
          boxShadow="lg"
          textAlign={"center"}
          justifyContent="column"
          ml="20px"
        >
          <HStack spacing="-170px" marginTop={6}>
            <Box
              width="270px"
              h="300px"
              marginBottom={6}
              align-items="center"
              ml="30px"
            >
              <Image
                borderRadius="10px 10px 0px 0px"
                src={image}
                w="270px"
                h="300px"
                objectFit="cover"
              />
            </Box>
          </HStack>

          <HStack spacing="122px" mb="17px" ml="15px">
            <Box mt="-40px">
              <IoIosArrowDropleftCircle />

              {IsSelected ? (
                <>
                  <BsPatchCheckFill />
                </>
              ) : (
                <></>
              )}
            </Box>

            <Text
              as="span"
              w="200px"
              h="70px"
              display="inline-block"
              white-space="nowrap"
              overflow="hidden"
              text-overflow="ellipsis"
              color={titleColor}
            >
              {tittle}
            </Text>
          </HStack>
        </Box>
      )}
    </>
  );
};
