import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Cars = (props: Props) => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Text>Cars</Text>
      </Box>
    </Flex>
  );
};

export default Cars;
