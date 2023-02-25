import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto">
        <Text>Profile</Text>
      </Box>
    </Flex>
  );
};

export default Profile;
