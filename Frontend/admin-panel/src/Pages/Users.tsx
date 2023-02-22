import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Users = (props: Props) => {
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Text>Users</Text>
      </Box>
    </Flex>
  );
};

export default Users;
