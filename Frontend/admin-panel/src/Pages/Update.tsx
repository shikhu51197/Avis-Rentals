import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FormLabel,
  Input,
  Select,
  useToast,
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  Image,
} from "@chakra-ui/react";
import "../Styles/Update.css";
import { updateCar, updateCarDone } from "../Redux/Cars/cars.actions";
import { carDataType, carState } from "../Redux/Cars/cars.reducer";
import { RootState } from "../Redux/Store";
import { useAppDispatch } from "../Redux/app.hooks";

export interface updateType {
  model: string;
  image: string;
  value: number;
  location: string;
}

const UpdateInfo = () => {
  const { id } = useParams();

  const state: carState = useSelector((state: RootState) => state.CarManager);
  const { carData, update_success, update_error, page } = state;

  const car = carData.filter((el: carDataType) => el._id == id);

  const [model, setModel] = React.useState(car[0].model);
  const [image, setImage] = React.useState(car[0].image);
  const [Value, SetValue] = React.useState(car[0].value);
  const [location, setLocation] = React.useState(car[0].location);

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
  ];

  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data: updateType = {
      model,
      image,
      value: +Value,
      location,
    };
    dispatch(updateCar(id!, data, page));
  };

  const toast = useToast({
    title: `Update Successful`,
    status: "success",
    isClosable: true,
    position: "top",
  });

  const Error = useToast({
    title: `Unable to Update`,
    status: "error",
    isClosable: true,
    position: "top",
  });

  const navigate = useNavigate();
  if (update_success) {
    toast();
    dispatch(updateCarDone());
    navigate("/cars");
  }
  if (update_error) {
    Error();
    dispatch(updateCarDone());
  }

  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box width={"80%"} margin="auto">
        <Text className="head">UPDATE CAR DETAILS</Text>
        <form style={{ width: "80%", margin: "auto" }} onSubmit={handleSubmit}>
          <FormLabel className="label">Model Name</FormLabel>
          <Input
            value={model}
            onChange={(e) => {
              setModel(e.target.value);
            }}
          />

          <FormLabel className="label">Location</FormLabel>
          <Select
            placeholder={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            {city.map((el) => {
              if (el != location) {
                return <option>{el}</option>;
              }
            })}
          </Select>
          <FormLabel className="label">Rental Fee/Day</FormLabel>
          <Input
            type="number"
            value={Value}
            onChange={(e) => {
              SetValue(+e.target.value);
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

          <Input type="submit" bg="red.600" color="white" marginTop="20px" />
        </form>
      </Box>
    </Flex>
  );
};

export default UpdateInfo;
