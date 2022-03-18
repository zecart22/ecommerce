import {
  Center,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
  Button,
  Slide,
  Box,
  ScaleFade,
} from "@chakra-ui/react";

import React from "react";
import { useState, useEffect } from "react";

export const Bar = () => {
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    class ScrollAwareDiv extends React.Component {
      constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = { scrollTop: 0 };
      }

      onScroll = () => {
        const scrollY = window.scrollY;
        const scrollTop = this.myRef.current.scrollTop;

        console.log(
          `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
        );
        this.setState({
          scrollTop: scrollTop,
        });
      };
    }
  });

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 4 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <Text>Gatinhos aqui</Text>
        </Box>
      </Slide>
    </>
  );
};
