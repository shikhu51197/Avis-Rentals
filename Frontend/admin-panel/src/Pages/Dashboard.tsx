import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/Auth/auth.reducers";
import { getCars } from "../Redux/Cars/cars.actions";

type Props = {};

const Dashboard = (props: Props) => {
  const state = useSelector((state: any) => state.CarManager);
  const dispatch: any = useDispatch();
  const { carData, page } = state;

  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto">
        <Box>
          <Text>City wise Car Availability Data</Text>
        </Box>
        <Box>
          <Text>Booked Car Data</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Dashboard;
