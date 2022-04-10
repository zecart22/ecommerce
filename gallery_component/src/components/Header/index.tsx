import {
  Center,
  Flex,
  Box,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
  Input,
} from "@chakra-ui/react";

import { useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { TiShoppingCart } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory, useLocation, useParams } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Menu } from "./Menu";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

export const Header = () => {
  const { totalProducts } = useContext(CartContext);

  const { isOpen, onClose, onToggle } = useDisclosure();
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");
  const history = useHistory();
  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Flex
      h="110px"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      px="5"
      py="1"
      bg="primary.main"
      position="fixed"
      width="100%"
      zIndex="100"
    >
      <Flex
        h="40px"
        px="5"
        py="1"
        bg="destak.main"
        position="fixed"
        width="100%"
        zIndex="100"
        mt="150px"
      ></Flex>
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center>
              <Image src={logo} h="272px" w="389" mt="35px" />
            </Center>
          </Flex>
          <Flex alignItems="flex-end">
            <HStack spacing="-7">
              <Input
                placeholder="O que deseja procurar ? "
                size="md"
                w="880px"
              />
              <BiSearch />
            </HStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <Center as="button" onClick={onToggle}>
              <GiHamburgerMenu
                color="#010084"
                style={{ width: "40px", height: "48px" }}
              />
            </Center>

            <Center>
              <Image src={logo} h="200px" w="329" mt="20px" />
            </Center>
          </Flex>
          <Menu isOpen={isOpen} onClose={onClose} />
        </>
      )}

      <Flex flexDirection={"row"} ml="40px">
        <Center
          flexDirection="column"
          as="button"
          onClick={() => history.push("/login")}
        >
          <FaUserCircle
            color="#010084"
            style={{ width: "27px", height: "28px" }}
          />
          <Text color="#010084">Login</Text>
        </Center>
        <Center as="button" onClick={() => history.push("/cart")} ml="20px">
          <TiShoppingCart
            color="#010084"
            style={{ width: "40px", height: "48px" }}
          />
          {totalProducts > 0 ? (
            <>
              <Box
                w="26px"
                h="26px"
                borderRadius={"100"}
                bg="green.50"
                ml="-10px"
                mt="5px"
              >
                {totalProducts}
              </Box>
            </>
          ) : (
            <></>
          )}
        </Center>
      </Flex>
    </Flex>
  );
};
