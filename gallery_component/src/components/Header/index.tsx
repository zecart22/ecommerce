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

export const Header = () => {
  const [isLargerThan769] = useMediaQuery("(min-width: 769px)");

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
                  <Link href="#footer">RODAPÉ</Link>
                ) : (
                  <Link href="#footer">RODPÉ</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link
                    color="destak.main"
                    href="https://bit.ly/3I4Q6WR"
                    isExternal
                  >
                    PORTFÓLIO
                  </Link>
                ) : (
                  <Link
                    href="#https://bit.ly/3I4Q6WR"
                    color="destak.main"
                    isExternal
                  >
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
        /* mobile */
        <>
          <Flex ml="45px">
            <HStack spacing="5">
              <Text
                as="button"
                color="primary.main"
                _hover={{ transform: "translateY(-4px)" }}
              >
                {isHome ? (
                  <Link href="#footer">RODAPÉ</Link>
                ) : (
                  <Link href="#footer">RODPÉ</Link>
                )}
              </Text>
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link
                    color="destak.main"
                    href="https://bit.ly/3I4Q6WR"
                    isExternal
                  >
                    PORTFÓLIO
                  </Link>
                ) : (
                  <Link
                    href="#https://bit.ly/3I4Q6WR"
                    color="destak.main"
                    isExternal
                  >
                    PORTFÓLIO
                  </Link>
                )}
              </Text>
              <Text
                color="primary.main"
                as="button"
                _hover={{ transform: "translateY(-4px)" }}
              >
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
