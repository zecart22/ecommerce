import {
  Box,
  Center,
  Image,
  Text,
  useMediaQuery,
  HStack,
  VStack,
  Link as LinkK,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { useState, useEffect } from "react";

interface GaleriaProps {
  image: string;
  tittle: string;
  image_id: number;
  selected: boolean;
}

export const CardGaleria = ({ image, tittle, selected }: GaleriaProps) => {
  const [isLargerThan913] = useMediaQuery("(min-width: 913px)");

  const [titleColor, setTitleColor] = useState("primary.main1");

  const [backColor, setBackColor] = useState("primary.main");

  const [IsSelected, setIsSelected] = useState(false);

  const ChangeStateColor = () => {
    if (
      titleColor === "primary.main1" &&
      backColor === "primary.main" &&
      !selected
    ) {
      setTitleColor("negative.main");
      setBackColor("gray.10");
      setIsSelected(true);
    } else {
      setTitleColor("primary.main1");
      setBackColor("primary.main");
      setIsSelected(false);
    }
  };

  return (
    <>
      {isLargerThan913 ? (
        <Box
          onClick={() => ChangeStateColor()}
          border="1px"
          borderColor="gray.100"
          mt="40px"
          ml="100px"
          cursor="pointer"
          _hover={{
            transform: "translateY(2px)",
            borderColor: "primary.main",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="330px"
          boxShadow="lg"
          textAlign={"center"}
          justifyContent="column"
        >
          <HStack spacing="-170px" marginTop={6}>
            <Box
              width="270px"
              h="300px"
              marginBottom={6}
              align-items="center"
              ml="30px"
            >
              <Image
                borderRadius="10px 10px 0px 0px"
                src={image}
                w="270px"
                h="300px"
                objectFit="cover"
              />
            </Box>
          </HStack>

          <HStack spacing="122px" mb="17px" ml="15px">
            <Box mt="-40px">
              <IoIosArrowDropleftCircle />
              {selected ? (
                ""
              ) : (
                <>
                  {IsSelected ? (
                    <>
                      <BsPatchCheckFill />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Box>

            <Text
              as="span"
              w="200px"
              h="70px"
              display="inline-block"
              white-space="nowrap"
              overflow="hidden"
              text-overflow="ellipsis"
              color={titleColor}
            >
              {tittle}
            </Text>
          </HStack>
        </Box>
      ) : (
        <Box
          onClick={() => ChangeStateColor()}
          border="1px"
          borderColor="gray.100"
          mt="20px"
          cursor="pointer"
          _hover={{
            transform: "translateY(2px)",
            borderColor: "primary.main",
          }}
          bg={backColor}
          transition="border 0.2s, ease 0s, transform 0.2s"
          borderRadius="10px  10px 0px 0px"
          width="330px"
          boxShadow="lg"
          textAlign={"center"}
          justifyContent="column"
        >
          <HStack spacing="-170px" marginTop={6}>
            <Box
              width="270px"
              h="300px"
              marginBottom={6}
              align-items="center"
              ml="30px"
            >
              <Image
                borderRadius="10px 10px 0px 0px"
                src={image}
                w="270px"
                h="300px"
                objectFit="cover"
              />
            </Box>
          </HStack>

          <HStack spacing="122px" mb="17px" ml="15px">
            <Box mt="-40px">
              <IoIosArrowDropleftCircle />

              {IsSelected ? (
                <>
                  <BsPatchCheckFill />
                </>
              ) : (
                <></>
              )}
            </Box>

            <Text
              as="span"
              w="200px"
              h="70px"
              display="inline-block"
              white-space="nowrap"
              overflow="hidden"
              text-overflow="ellipsis"
              color={titleColor}
            >
              {tittle}
            </Text>
          </HStack>
        </Box>
      )}
    </>
  );
};
