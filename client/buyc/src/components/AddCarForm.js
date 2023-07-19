import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Checkbox,
  FormLabel,
  useToast,
  HStack,
  Spinner,
  Heading,
  Input,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { action_add_car } from "../redux/inventory/action";

const carsDetailsObject = {
  image: "",
  title: "",
  kmInOdometer: "",
  accidentsReports: "",
  previousBuyers: "",
  registrationPlace: "",
  originalPaint: false,
  majorScratches: false,
  price: "",
  description: "",
  oem_specification_id: "",
};

const AddCarForm = () => {
  const navigate = useNavigate();
  const [carDetails, setcarDetails] = useState(carsDetailsObject);
  const [object, setObject] = useState({});
  //   Catch id from URL
  const { id } = useParams();
  const toast = useToast();

  // redux dispatcher
  const dispatch = useDispatch();
  // redux store
  const store = useSelector((store) => store.addCarReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = { ...carDetails, oem_specification_id: object._id };
    dispatch(action_add_car(newObject))
      .then((res) => {
        if (res) {
          setTimeout(() => {
            navigate("/inventory");
          }, 1000);
          return toast({
            title: `Car Details Added`,
            status: "success",
            isClosable: true,
            duration: 1000,
            position: "top",
          });
        } else {
          return toast({
            title: `Something Wrong`,
            status: "error",
            isClosable: true,
            duration: 1000,
            position: "top",
          });
        }
      })
      .catch((err) => console.log(err));

    setcarDetails(carsDetailsObject);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setcarDetails({ ...carDetails, [name]: value });
  };

  useEffect(() => {
    (() => {
      axios
        .get(`http://localhost:8080/oem/${id}`)
        .then((res) => {
          setObject(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <Box minH={"110vh"} bgColor={"#00171F"} fontFamily={"Poppins"}>
      <Box pt={"90px"} px={10}>
        <Flex gap={10} minH={"80vh"} color={"#fff"}>
          <Box flex={1} p={5}>
            <Center>
              <Heading fontSize={"lg"}>Add Your Car Details</Heading>
            </Center>
            <form onSubmit={handleSubmit}>
              <FormControl pb={2}>
                <FormLabel>Image</FormLabel>
                <Input
                  isRequired
                  type="url"
                  value={carDetails.image}
                  name="image"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Title</FormLabel>
                <Input
                  isRequired
                  value={carDetails.title}
                  name="title"
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl py={2}>
                {" "}
                <Stack direction="row" spacing={5}>
                  <Checkbox
                    defaultChecked={carDetails.majorScratches}
                    onChange={(e) =>
                      setcarDetails({
                        ...carDetails,
                        majorScratches: e.target.checked,
                      })
                    }>
                    Major Scratches
                  </Checkbox>
                  <Checkbox
                    defaultChecked={carDetails.originalPaint}
                    onChange={(e) =>
                      setcarDetails({
                        ...carDetails,
                        originalPaint: e.target.checked,
                      })
                    }>
                    Original Parents
                  </Checkbox>
                </Stack>
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Km in Odometer</FormLabel>
                <Input
                  isRequired
                  type="number"
                  value={carDetails.kmInOdometer}
                  name="kmInOdometer"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Number of Accidents reported</FormLabel>
                <Input
                  isRequired
                  type="number"
                  value={carDetails.accidentsReports}
                  name="accidentsReports"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Number of Previous buyers</FormLabel>
                <Input
                  isRequired
                  value={carDetails.previousBuyers}
                  name="previousBuyers"
                  onChange={handleChange}
                  type="number"
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Registration Place</FormLabel>
                <Input
                  isRequired
                  value={carDetails.registrationPlace}
                  name="registrationPlace"
                  onChange={handleChange}
                  type="text"
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Price</FormLabel>
                <Input
                  isRequired
                  value={carDetails.price}
                  name="price"
                  onChange={handleChange}
                  type="number"
                />
              </FormControl>
              <FormControl pb={2}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  isRequired
                  value={carDetails.description}
                  name="description"
                  onChange={handleChange}
                />
              </FormControl>
              <Center>
                <Button
                  type="submit"
                  _hover={{ bg: "trasnparent" }}
                  _focus={{ bgColor: "#00171F" }}
                  color={"#fff"}
                  variant={"outline"}>
                  {store.isLoading ? (
                    <Spinner size="lg" />
                  ) : (
                    "Submit Car Information"
                  )}
                </Button>
              </Center>
            </form>
          </Box>
          <Box border={"1px solid"}></Box>
          <Box flex={1} p={5}>
            <Center>
              <Heading fontSize={"lg"}>OEM Car Specification</Heading>
            </Center>
            <FormControl pb={2}>
              <FormLabel>Model Name</FormLabel>
              <Input type="url" value={object.modelName} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Year</FormLabel>
              <Input type="text" value={object.year} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Listing Price</FormLabel>
              <Input type="number" value={object.listPrice} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Available Colors</FormLabel>
              <HStack alignItems={"center"}>
                {object.availableColors?.map((element, ind) => {
                  return (
                    <Box
                      key={ind}
                      height={"15px"}
                      width={"15px"}
                      bgColor={`${element}`}></Box>
                  );
                })}
              </HStack>
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Milage</FormLabel>
              <Input type="number" value={object.milage} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Max Speed</FormLabel>
              <Input type="text" value={object.maxSpeed} />
            </FormControl>
            <FormControl pb={2}>
              <FormLabel>Power In BHP</FormLabel>
              <Input type="number" value={object.power} />
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default AddCarForm;
