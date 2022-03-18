import {
  Box,
  Center,
  Image,
  Text,
  useMediaQuery,
  HStack,
  VStack,
  Flex,
  Link,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { CardGaleria } from "../../components/Galery";
import { Header } from "../../components/Header";
import { Bar } from "../../components/Header2";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [data, setData] = useState([]);

  const [selectedCats, setSelectedCats] = useState([]);

  const [isOnSelected, setIsOnSelected] = useState(false);

  useEffect(() => {
    fetch("./images.json", {
      headers: {
        Accept: "application.json",
      },
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const TakeId = (id) => {
    console.log(id);
  };

  function RemoveCat(id) {
    const index = selectedCats.findIndex((cat) => cat.id === id);
    const removedCat = selectedCats.splice(index, 1);
    setSelectedCats([...selectedCats]);
  }

  const AddandRemovetoSelectedCat = (url, title, image_id) => {
    if (!selectedCats.some((cat) => cat.id === image_id)) {
      setSelectedCats([
        ...selectedCats,
        { url: url, title: title, id: image_id, selected: true },
      ]);
    } else if (selectedCats.some((cat) => cat.id === image_id)) {
      RemoveCat(image_id);
    }
  };

  const LookSelecteds = () => {
    setIsOnSelected(true);
  };

  const LookAll = () => {
    setIsOnSelected(false);
  };

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
        >
          <Text w="1000px" ml="400px" textAlign="center" fontSize={"18px"}>
            {/*  Confira aqui os gatinhos disponiveis, para selecionar clique no
            gatinho escolhido e para desmarcar clique nos gatinhos destacados.
            Confira na aba "selecionados" os gatinhos que escolheu e caso queira
            excluir dê um clique no gatinho que deseja tirar da sua lista. */}
          </Text>
          <VStack>
            <Flex
              flexDirection="row"
              position="relative"
              top="50px"
              left="-10px"
            >
              <Box
                as="button"
                color="primary.main"
                bg="primary.main1"
                w="200px"
                h="70px"
                onClick={() => LookAll()}
                border="1px"
                borderColor={"primary.main"}
              >
                Ver todos
              </Box>

              <Box
                as="button"
                color="primary.main"
                bg="primary.main1"
                w="200px"
                h="70px"
                onClick={() => LookSelecteds()}
                border="1px"
                borderColor={"primary.main"}
              >
                Ver selecionados
              </Box>
            </Flex>
          </VStack>

          {isOnSelected ? (
            <>
              {/* section selecteds*/}
              <Flex
                flexDirection="row"
                flexWrap={"wrap"}
                justifyContent="space-around"
                position="relative"
                top="70px"
                ml="22px"
              >
                {selectedCats &&
                  selectedCats.map((cat) => (
                    <Box as="button" onClick={() => RemoveCat(cat.image_id)}>
                      <CardGaleria
                        as="button"
                        image={cat.url}
                        tittle={cat.title}
                        image_id={cat.image_id}
                        data={data}
                        selected={isOnSelected}
                      />
                    </Box>
                  ))}
              </Flex>
            </>
          ) : (
            /* section All */
            <>
              <Flex
                flexDirection="row"
                flexWrap={"wrap"}
                justifyContent="space-around"
                position="relative"
                top="70px"
                ml="22px"
              >
                {data &&
                  data.map((cat) => (
                    <Box
                      as="button"
                      onClick={() =>
                        AddandRemovetoSelectedCat(
                          cat.url,
                          cat.title,
                          cat.image_id
                        )
                      }
                    >
                      <CardGaleria
                        as="button"
                        image={cat.url}
                        tittle={cat.title}
                        image_id={cat.image_id}
                        data={data}
                        selected={isOnSelected}
                      />
                    </Box>
                  ))}
              </Flex>
            </>
          )}
        </Flex>
        <Footer />
      </Box>
    </>
  );
};
