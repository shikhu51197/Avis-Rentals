import React from "react";
import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

type Props = {};

const Users = (props: Props) => {
  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto" width={"80%"} marginTop="25px">
        <Table variant="simple" width={"100%"}>
          <Thead>
            <Tr>
              <Th>User ID</Th>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>Order</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>KSJIGIEN</Th>
              <Th>Abhilash</Th>
              <Th>abhilash@gmail.com</Th>
              <Th>1</Th>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Users;
