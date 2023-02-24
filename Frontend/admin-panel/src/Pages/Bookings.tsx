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

const Bookings = (props: Props) => {
  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto" width="80%" marginTop="25px">
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>Car</Th>
              <Th>CarNo.</Th>
              <Th>UserID</Th>
              <Th>Pickup Date</Th>
              <Th>Drop Date</Th>
              <Th>Rent Charge</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th>spresso</Th>
              <Th>MH05BN4469</Th>
              <Th>34K2D3A9K</Th>
              <Th>24/05/2022</Th>
              <Th>28/05/2022</Th>
              <Th>₹ 5600</Th>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Bookings;
