import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormLabel, Input, Select, useToast } from "@chakra-ui/react";
import "../Styles/Update.css";
import { updateCar, updateCarDone } from "../Redux/Cars/cars.actions";
import { carState } from "../Redux/Cars/cars.reducer";
import { CAR_UPDATE_DONE } from "../Redux/Cars/cars.actionTypes";

export interface updateType {
  model: string;
  image: string;
  value: number;
  location: string;
}

const UpdateInfo = () => {
  const { id } = useParams();

  const state: carState = useSelector((state: any) => state.CarManager);
  const { carData, update_success, update_error } = state;

  const car = carData.filter((el: any) => el._id == id);

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

  const dispatch: any = useDispatch();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data: updateType = {
      model,
      image,
      value: Value,
      location,
    };
    dispatch(updateCar(id!, data));
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

  if (update_success) {
    toast();
    dispatch(updateCarDone());
  }
  if (update_error) {
    Error();
    dispatch(updateCarDone());
  }

  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box width={"80%"}>
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
            value={Value}
            onChange={(e) => {
              SetValue(e.target.value);
            }}
          />
          <FormLabel className="label">Image URL</FormLabel>
          <Input
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <Input type="submit" bg="red.600" color="white" marginTop="20px" />
        </form>
      </Box>
    </Flex>
  );
};

export default UpdateInfo;
