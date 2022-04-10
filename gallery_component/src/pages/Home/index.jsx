import {
  Box,
  Text,
  VStack,
  Flex,
  useMediaQuery,
  Image,
  Input,
  HStack,
} from "@chakra-ui/react";

import { useContext } from "react";
import { CardGaleria } from "../../components/Galery";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProductsContext } from "../../contexts/Products";
import bannerFixo from "../../assets/images/bannerfixo.png";
import bannerDestak from "../../assets/images/bannerdestak.png";
import bannerSofa from "../../assets/images/bannersofa.png";

export const Home = () => {
  const { products } = useContext(ProductsContext);

  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

  return (
    <>
      <Box width="95vw">
        <Header />

        <Flex
          flexDirection="column"
          position="relative"
          top="100px"
          left="-10px"
          textAlign={"center"}
          justifyContent="center"
          alignItems="center"
        >
          {isLargerThan769 ? (
            <>
              <VStack>
                <Flex flexDirection={"column"}>
                  <Image
                    src={bannerFixo}
                    mt="55px"
                    ml="165px"
                    w="1200px"
                    dropShadow="0px 8px 4px rgba(0, 0, 0, 0.25)"
                  />
                  <Image src={bannerDestak} mt="5px" ml="165px" w="1200px" />
                  <Box
                    mt="5px"
                    ml="165px"
                    w="1200px"
                    h="150px"
                    bg="destak.main"
                    borderRadius="5px"
                    flexDirection={"row"}
                  >
                    <HStack mt="45px" ml="60px" spacing={"125px"}>
                      <Text
                        fontSize={"20px"}
                        color="primary.main"
                        fontWeight={"bold"}
                      >
                        Receba ofertas exclusivas por email!
                      </Text>
                      <HStack spacing={"10px"}>
                        <Input
                          variant="outline"
                          w="220px"
                          h="50px"
                          bg="primary.main"
                          placeholder="nome"
                        />
                        <Input
                          variant="outline"
                          w="220px"
                          h="50px"
                          bg="primary.main"
                          placeholder="email"
                        />
                      </HStack>
                      <Text as="button" fontSize={"20px"} color="primary.main">
                        Enviar
                      </Text>
                    </HStack>
                  </Box>
                  <Flex
                    w="1200px"
                    ml="165px"
                    bg="primary.main"
                    borderRadius="5px"
                    flexWrap={"wrap"}
                    flexDirection="row"
                    justifyContent={"space-around"}
                  >
                    {products &&
                      products.map((product) => (
                        <CardGaleria
                          image={product.link_image}
                          tittle={product.title}
                          price={product.price}
                          pricePromo={product.price_promotional}
                        />
                      ))}
                  </Flex>
                  <Image
                    src={bannerSofa}
                    mt="15px"
                    mb="55px"
                    ml="165px"
                    w="1200px"
                    boxShadow="lg"
                  />
                </Flex>
              </VStack>
              <Footer />
            </>
          ) : (
            <>{/* mobile */}</>
          )}
        </Flex>
        <Text id="footer"></Text>
        <Footer />
      </Box>
    </>
  );
};
