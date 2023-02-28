import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormLabel,
  Input,
  Select,
  useToast,
  Flex,
  Box,
  Text,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverContent,
  Button,
  Image,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { carState } from "../Redux/Cars/cars.reducer";
import { addCarDone, addCars } from "../Redux/Cars/cars.actions";
import { AppDispatch, RootState } from "../Redux/Store";

const AddCar = () => {
  const [model, setModel] = React.useState("");
  const [image, setImage] = React.useState("");
  const [value, SetValue] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [RegNo, setRegNo] = React.useState("");

  const dispatch: any = useDispatch();
  const state: carState = useSelector((state: RootState) => state.CarManager);
  const { add_success, add_error } = state;

  const city = [
    "Mumbai",
    "Nashik",
    "Nagpur",
    "Delhi",
    "Lucknow",
    "Bhopal",
    "Indore",
    "Goa",
    "Hydarabad",
    "Pune",
  ];

  const newcar = {
    Ac: "non A/C",
    Availibilty: "Available",
    DropDate: "",
    DropLocation: "",
    Engine: "SI Engine",
    PickupDate: "",
    PickupLocation: "",
    RegNo: "CG05BN8709",
    Transmission: "Automatic Transmission",
    UserId: "",
    Wheel: "Front-Wheel Drive",
    bodycolor: "Black",
    brand: "Nissan X-Trail or similar",
    carId: 8,
    color: "Exterior color",
    date: "Tue Dec 27, 2022",
    door: "3 door",
    feature: "Smoke Free",
    fuelcapacity: "1.4L I-4 cyl",
    image:
      "https://pictures.dealer.com/a/avisregioncolumbus/0707/e9363438cf6365e0a72c9a96e3f1f0e3x_-2519378.jpg?impolicy=downsize&w=322",
    largebag: "4  Large  Bags",
    location: "Agra",
    miles: "20,991 miles",
    model: "2021 Chevrolet Trax LS SUV",
    seats: "5 seats",
    smallbag: "9  Small  Bags",
    type: "Automatic",
    value: 14397,
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
    const data = { ...newcar, model, image, value: +value, location, RegNo };
    dispatch(addCars(data));
  };

  const toast = useToast({
    title: `Car added successfully`,
    status: "success",
    isClosable: true,
    position: "top",
  });

  const Error = useToast({
    title: `There was error processing your request`,
    status: "error",
    isClosable: true,
    position: "top",
  });

  if (add_success) {
    toast();
    dispatch(addCarDone());
  }
  if (add_error) {
    Error();
    dispatch(addCarDone());
  }

  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box width={"80%"} padding="25px" margin="auto">
        <Text className="head">ADD A NEW CAR</Text>
        <form style={{ width: "80%", margin: "auto" }} onSubmit={handleSubmit}>
          <FormLabel className="label">Model Name</FormLabel>
          <Input
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
          />

          <FormLabel className="label">Registration Number</FormLabel>
          <Input
            value={RegNo}
            onChange={(e) => {
              setRegNo(e.target.value);
            }}
          />

          <FormLabel className="label">Location</FormLabel>
          <Select
            placeholder={"Select Location"}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            {city.map((el) => {
              return <option>{el}</option>;
            })}
          </Select>
          <FormLabel className="label">Rental Fee/Day</FormLabel>
          <Input
            value={value}
            onChange={(e) => {
              SetValue(e.target.value);
            }}
          />
          <FormLabel className="label">Image URL</FormLabel>
          <Flex>
            {" "}
            <Input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <Popover>
              <PopoverTrigger>
                <Button width="200px" marginLeft={"10px"} bg={"red.600"}>
                  Image Preview
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton color="black" />
                <Image
                  src={
                    image ||
                    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  }
                  alt="Car Image"
                />
              </PopoverContent>
            </Popover>
          </Flex>
          <Input type="submit" bg="red.600" color="white" margin="20px 0px" />
        </form>
      </Box>
    </Flex>
  );
};

export default AddCar;
