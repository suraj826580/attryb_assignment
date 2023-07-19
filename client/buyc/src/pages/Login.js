import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Spinner,
  VStack,
  useToast,
  Checkbox,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LoginFun } from "../redux/login/action";

const object = {
  email: "",
  password: "",
};

const Login = () => {
  // Redux Dispatcher Function
  const dispatch = useDispatch();

  // Redyx store
  const store = useSelector((store) => store.LoginReducer);

  // Chakra Toast
  const toast = useToast();

  // Navigation
  const navigate = useNavigate();

  // Form Values
  const [formValue, setformValue] = useState(object);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };

  // Form Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginFun(formValue))
      .then((res) => {
        if (res.type == "LOGIN_REQ_SUCESS") {
          navigate("/dashboard");
          localStorage.setItem("token", JSON.stringify(res.payload));
        } else {
          return toast({
            position: "top",
            title: `Wrong Credential`,
            isClosable: true,
            variant: "subtle",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setformValue(object);
  };

  return (
    <Stack
      fontFamily={"Poppins"}
      bgImage={
        "url(https://www.hdcarwallpapers.com/walls/exotic_lamborghini_car-wide.jpg)"
      }
      backgroundSize={"100% 100%"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      objectFit={"cover"}
      minH="100vh">
      <Flex
        backdropFilter={"blur(10px)"}
        py={10}
        color="#fff"
        flex={1}
        align="center"
        justify="center">
        <Stack spacing={4} alignItems={"center"}>
          <Stack align="center">
            <Heading fontSize={["lg", "lg", "xl", "4xl"]}>
              Sign in to your account
            </Heading>
          </Stack>
          <form onSubmit={handleSubmit}>
            <VStack
              w={"100%"}
              spacing={8}
              boxSize={{ base: "xs", sm: "sm", md: "md" }}
              h="max-content !important"
              rounded="lg"
              boxShadow="5px 5px 5px white,-5px -5px 5px #000"
              borderRadius={"20px"}
              color={"#000"}
              p={{ base: 5, sm: 10 }}>
              <VStack spacing={4} w="100%">
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    isRequired
                    boxShadow="0px 5px 5px white"
                    name="email"
                    onChange={handleChange}
                    value={formValue.email}
                    rounded="md"
                    type="email"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    isRequired
                    name="password"
                    boxShadow="0px 5px 5px white"
                    onChange={handleChange}
                    value={formValue.password}
                    rounded="md"
                    type="password"
                  />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Stack direction="row" justify="space-between" w="100%" mb={2}>
                  <Checkbox colorScheme="green" size="md">
                    Remember me
                  </Checkbox>
                  <Link fontSize={{ base: "md", sm: "md" }}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  bg="transparent"
                  _focus={{
                    bgColor: "transparent",
                  }}
                  color="white"
                  boxShadow="0px 5px 5px white"
                  _hover={{
                    bg: "transparen",
                    boxShadow: "5px 5px 1px white,-5px -5px 5px #000",
                  }}
                  rounded="md"
                  w="100%">
                  {store.isLoading ? <Spinner size="lg" /> : "Sign in"}
                </Button>
                <Stack pt={6}>
                  <Text
                    align={"center"}
                    textDecoration={"underline"}
                    color={"#fff"}>
                    <Link to="/signup">Signup</Link>
                  </Text>
                </Stack>
              </VStack>
            </VStack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;
