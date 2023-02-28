import React from "react";
import {
  Flex,
  Box,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/Auth/auth.reducers";
import { getCars } from "../Redux/Cars/cars.actions";
import { Progress } from "@chakra-ui/react";
import "../Styles/Dashboard.css";
import { AiFillCar } from "react-icons/ai";
import Loader from "../Components/Loader";
import { carDataType } from "../Redux/Cars/cars.reducer";
import { RootState } from "../Redux/Store";
import { useAppDispatch } from "../Redux/app.hooks";

interface CityWiesData {
  [key: string]: number;
}

const Dashboard = () => {
  const state = useSelector((state: RootState) => state.CarManager);
  const user = useSelector((state: RootState) => state.UserManager);
  const dispatch = useAppDispatch();
  const { carData, page, loading } = state;

  console.log(carData);

  const [Booked, setBooked] = React.useState<CityWiesData>({});
  const [Available, setAvailble] = React.useState<CityWiesData>({});

  let booked: CityWiesData = {};
  let available: CityWiesData = {};
  let count = 0;

  React.useEffect(() => {
    dispatch(getCars(1, 100, "", "", false));
  }, []);

  React.useEffect(() => {
    carData.map((el: carDataType) => {
      count++;
      if (el.DropDate && booked[el.location] == undefined) {
        booked[el.location] = 1;
      } else if (el.DropDate && booked[el.location] != undefined) {
        booked[el.location]++;
      } else if (!el.DropDate && available[el.location] == undefined) {
        available[el.location] = 1;
      } else if (!el.DropDate && available[el.location] != undefined) {
        available[el.location]++;
      }
    });

    if (count == carData.length) {
      setBooked(booked);
      setAvailble(available);
    }
  }, [carData]);

  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto">
        {loading ? (
          <Loader />
        ) : (
          <>
            <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }}>
              <Box margin="20px">
                <Text className="title" color="green">
                  AVAILABLE CARS{" "}
                </Text>
                <Flex flexWrap="wrap" justifyContent={"center"}>
                  {Object.keys(Available).map(function (key) {
                    return (
                      <Box className="city">
                        <Stat>
                          <StatLabel>{key}</StatLabel>
                          <StatNumber></StatNumber>
                          <StatHelpText>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Text color="green" fontSize={"20px"}>
                                <AiFillCar color="green" />
                              </Text>
                              &nbsp;
                              <Text fontSize={"20px"} fontWeight={"bold"}>
                                {Available[key]}
                              </Text>{" "}
                            </Flex>
                          </StatHelpText>
                        </Stat>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
              <Box margin={"20px"}>
                <Text className="title" color="red">
                  BOOKED CARS
                </Text>
                <Flex flexWrap="wrap" justifyContent={"center"}>
                  {Object.keys(Booked).map(function (key) {
                    return (
                      <Box className="city">
                        <Stat>
                          <StatLabel>{key}</StatLabel>
                          <StatNumber></StatNumber>
                          <StatHelpText>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Text color="red" fontSize={"20px"}>
                                <AiFillCar color="red" />
                              </Text>
                              &nbsp;
                              <Text fontSize={"20px"} fontWeight={"bold"}>
                                {Booked[key]}
                              </Text>{" "}
                            </Flex>
                          </StatHelpText>
                        </Stat>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </SimpleGrid>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Dashboard;
