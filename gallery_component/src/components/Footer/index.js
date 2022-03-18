import "./index.css";
import { Flex } from "@chakra-ui/react";

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
      bottom="0px"
      left="0px"
      right="0px"
      width="100%"
      zIndex="100"
      data-anime="bottom"
    >
      data-anime
    </Flex>
  );
};
