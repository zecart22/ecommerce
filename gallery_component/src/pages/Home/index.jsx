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

export const Home = () => {
  const [data, setData] = useState([]);

  const [selectedCats, setSelectedCats] = useState([]);

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

  console.log(selectedCats);

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
            data.map((cat) => (
              <Box
                as="button"
                onClick={() =>
                  AddandRemovetoSelectedCat(cat.url, cat.title, cat.image_id)
                }
              >
                <CardGaleria
                  as="button"
                  image={cat.url}
                  tittle={cat.title}
                  image_id={cat.image_id}
                  data={data}
                />
              </Box>
            ))}
        </Flex>
      </Box>
    </>
  );
};
