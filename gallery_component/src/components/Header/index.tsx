import {
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import { useHistory, useLocation } from "react-router-dom";

import { Menu } from "./Menu";

export const Header = () => {
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
      h="72px"
      flexDirection="row"
      justifyContent="space-between"
      px="5"
      py="1"
      bg="primary.main1"
      boxShadow="0px 1px 4px"
      position="fixed"
      left="0px"
      right="0px"
      width="100%"
      zIndex="100"
      _scroll-overscrollBehaviorY={{
        transform: "translateY(-40px), opacity: 0",
      }}
    >
      {isLargerThan769 ? (
        <>
          <Flex>
            <Center>
              <Image
                src={""}
                h="50px"
                w="57"
                _hover={{ transform: "translateX(4px)" }}
              />
            </Center>
          </Flex>
          <Flex alignItems="flex-end" color="primary.main">
            <HStack spacing="5">
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#">INICIO</Link>
                ) : (
                  <Link href="/">INICIO</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link color="destak.main" href="#portifolio">
                    PORTFÓLIO
                  </Link>
                ) : (
                  <Link href="#portifolio" color="destak.main">
                    PORTFÓLIO
                  </Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link
                    href="https://www.linkedin.com/in/robertpupo/"
                    isExternal
                  >
                    CONTATO
                  </Link>
                ) : (
                  <Link
                    href="https://www.linkedin.com/in/robertpupo/"
                    isExternal
                  >
                    CONTATO
                  </Link>
                )}
              </Text>
            </HStack>
          </Flex>
        </>
      ) : (
        <>
          <Flex>
            <Center>
              <Image
                src={""}
                h="40px"
                w="47"
                ml="15px"
                _hover={{ transform: "translateY(-4px)" }}
              />
            </Center>
            <Text
              color="destak.main"
              fontSize="19px"
              fontFamily="Monoton"
              as="button"
              ml="35px"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Link href="#portifolio">Portifolio</Link>
            </Text>
          </Flex>
        </>
      )}

      <Flex>
        <HStack spacing="15px">
          <Link href="https://github.com/zecart22">
            <Image
              src={""}
              h="40px"
              w="47"
              ml="25px"
              _hover={{ transform: "translateY(-15px)" }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/robertpupo/">
            <Image
              src={""}
              h="42px"
              w="59"
              _hover={{ transform: "translateY(-4px)" }}
            />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};
