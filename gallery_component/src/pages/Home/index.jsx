import {
  Box,
  Center,
  Image,
  Text,
  useMediaQuery,
  HStack,
  VStack,
  Flex,
  Link as LinkK,
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { CardGaleria } from "../../components/Galery";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./images.json", {
      headers: {
        Accept: "application.json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <>
      <Box width="95vw">
        <Flex
          flexDirection="row"
          flexWrap={"wrap"}
          justifyContent="space-around"
          position="relative"
          top="70px"
          ml="22px"
        >
          {data &&
            data.map((item) => (
              <>
                <CardGaleria image={item.url} tittle={item.title} />
              </>
            ))}
        </Flex>
      </Box>
    </>
  );
};
