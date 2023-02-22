import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
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
