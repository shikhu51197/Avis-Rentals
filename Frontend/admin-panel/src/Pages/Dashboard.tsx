import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/Auth/auth.reducers";

type Props = {};

const Dashboard = (props: Props) => {
  const state: stateType = useSelector((state: any) => state.AuthManager);
  const { isAuth } = state;
  console.log(isAuth);
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Text>Dashboard</Text>
      </Box>
    </Flex>
  );
};

export default Dashboard;
