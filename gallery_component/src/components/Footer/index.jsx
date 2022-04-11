import "./index.css";
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

export const Footer = () => {
  const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const [isLargerThan769] = useMediaQuery("(min-width: 913px)");

  const target = document.querySelectorAll("[data-anime]");
  const animationClass = "animate";

  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function (element) {
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    });
  }

  animeScroll();

  if (target.length) {
    window.addEventListener(
      "scroll",
      debounce(function () {
        animeScroll();
      }, 200)
    );
  }

  let isHome = true;

  return (
    <>
      {isLargerThan769 ? (
        <Flex
          width="100vw"
          h="40px"
          flexDirection="row"
          justifyContent="space-between"
          px="5"
          py="1"
          bg="destak.main"
          boxShadow="0px 1px 4px"
          position="fixed"
          bottom="0px"
          left="0px"
          right="0px"
          zIndex="100"
          data-anime="bottom"
        >
          <Flex alignItems="center" ml="930px" color="primary.main">
            <HStack spacing="5">
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#">TOPO</Link>
                ) : (
                  <Link href="/">TOPO</Link>
                )}
              </Text>
            </HStack>
          </Flex>
        </Flex>
      ) : (
        /* mobile */

        <Flex
          width="100vw"
          h="40px"
          flexDirection="row"
          justifyContent="space-between"
          px="5"
          py="1"
          bg="destak.main"
          boxShadow="0px 1px 4px"
          position="fixed"
          bottom="0px"
          left="0px"
          right="0px"
          zIndex="100"
          data-anime="bottom"
        >
          <Flex alignItems="center" ml="140px" color="primary.main">
            <HStack spacing="5">
              <Text as="button" _hover={{ transform: "translateY(-4px)" }}>
                {isHome ? (
                  <Link href="#">TOPO</Link>
                ) : (
                  <Link href="/">TOPO</Link>
                )}
              </Text>
            </HStack>
          </Flex>
        </Flex>
      )}
    </>
  );
};
