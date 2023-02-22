import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Bookings = (props: Props) => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Text>Bookings</Text>
      </Box>
    </Flex>
  );
};

export default Bookings;
