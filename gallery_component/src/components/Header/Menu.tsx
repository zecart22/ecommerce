import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useHistory, useLocation } from "react-router-dom";

interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: IMenuProps) => {
  const history = useHistory();

  const location = useLocation();
  let isHome = true;

  if (location.pathname !== "/") {
    isHome = false;
  }

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Lojas VendMais</DrawerHeader>
        <DrawerBody>
          <VStack spacing="5">
            <Text as="button">
              {isHome ? (
                <Link onClick={() => history.push("/login")}>LOGIN</Link>
              ) : (
                <Link onClick={() => history.push("/login")}>LOGIN</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link onClick={() => history.push("/signup")}>CADASTRO</Link>
              ) : (
                <Link onClick={() => history.push("/signup")}>CADASTRO</Link>
              )}
            </Text>
            <Text as="button">
              {isHome ? (
                <Link onClick={() => history.push("/cart")}>CARRINHO</Link>
              ) : (
                <Link onClick={() => history.push("/cart")}>CARRINHO</Link>
              )}
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
