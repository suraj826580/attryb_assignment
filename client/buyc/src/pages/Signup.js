import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Text,
  useToast,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingupFun } from "../redux/signup/action";

const object = {
  email: "",
  password: "",
  name: "",
};
const Signup = () => {
  // Redux Dispatcher
  const dispatch = useDispatch();
  // Redux store
  const store = useSelector((store) => store.signupReducer);
  // Navigation hook
  const navigate = useNavigate();
  // Chakra Toast
  const toast = useToast();
  const [formValue, setformValue] = useState(object);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SingupFun(formValue))
      .then((res) => {
        if (
          res.type == "SIGNUP_REQ_SUCESS" &&
          res.payload == "Registered_Successfully"
        ) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
          return toast({
            position: "top",
            title: `${res.payload}`,
            status: "success",
            duration: 1000,
            isClosable: true,
            variant: "subtle",
          });
        } else {
          return toast({
            position: "top",
            title: `Something Wrong try again later`,
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
        "url(https://res.cloudinary.com/jerrick/image/upload/c_scale%2cq_auto/ea83aexehracikgp8vj1.jpg)"
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
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize={["lg", "lg", "xl", "4xl"]}>
              Create your account
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
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    isRequired
                    boxShadow="2px 2px 1px white,-2px -2px 5px #000"
                    name="name"
                    onChange={handleChange}
                    value={formValue.name}
                    rounded="md"
                    type="text"
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    isRequired
                    boxShadow="2px 2px 1px white,-2px -2px 5px #000"
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
                    boxShadow="2px 2px 1px white,-2px -2px 5px #000"
                    isRequired
                    name="password"
                    onChange={handleChange}
                    value={formValue.password}
                    rounded="md"
                    type="password"
                  />
                </FormControl>
              </VStack>

              <Button
                type="submit"
                bg="transparent"
                color="white"
                boxShadow="2px 2px 1px white,-2px -2px 5px #000"
                _hover={{
                  bg: "transparen",
                }}
                rounded="md"
                w="100%">
                {store.isLoading ? <Spinner size="lg" /> : "Sign up"}
              </Button>
              <Stack pt={6}>
                <Text align={"center"} color={"#fff"}>
                  Already a user? <Link to="/">Login</Link>
                </Text>
              </Stack>
            </VStack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Signup;
