import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Feedback = (props: Props) => {
  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto">
        <Text>Feedback</Text>
      </Box>
    </Flex>
  );
};

export default Feedback;
