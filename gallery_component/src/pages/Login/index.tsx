import {
  Box,
  Button,
  Text,
  VStack,
  Flex,
  useMediaQuery,
  Image,
  Input,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";

import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/images/logo.png";

export const Login = () => {
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Senha deve ter no mínimo 6 caracteres"),
  });

  return (
    <>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center"]}
      >
        <Grid
          as="form"
          border={"2px"}
          borderColor={"gray.100"}
          width="340px"
          alignItems="center"
          paddingX={[4, 4, 10, 10]}
          paddingY={8}
          marginX={[2, 2, 8, 8]}
          marginTop={[10, 10, 0, 0]}
          bgColor="rgba(254, 251, 251, 0.85)"
          textAlign="center"
          align-items="center"
        >
          <VStack spacing={"-120px"}>
            <Image src={logo} h="300px" w="389"></Image>
            <Heading>Faça seu Login</Heading>
          </VStack>
          <VStack mt="8" spacing="5">
            <Input
              w="240px"
              h="60px"
              /* label="Email" */
              placeholder="Digite seu email"
              /* error={"erro"} */
              /*  {...register("email")} */
            />
            <Input
              w="240px"
              h="60px"
              /* label="Senha" */
              placeholder="Digite sua senha"
              type="password"
              /* error={"erro"} */
              /* {...register("password")} */
            />
            <Button type="submit" w="250px" h="60px">
              Entrar
            </Button>
            <Text>
              Novo por aqui? <br />{" "}
              <Link color="destak.main" href="/signup">
                Clique aqui
              </Link>{" "}
              e faça seu cadastro
            </Text>
          </VStack>
        </Grid>
      </Flex>
    </>
  );
};
