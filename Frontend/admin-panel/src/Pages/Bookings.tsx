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
import { useDispatch, useSelector } from "react-redux";
import { carState } from "../Redux/Cars/cars.reducer";
import { getCars } from "../Redux/Cars/cars.actions";
import { PageChange } from "../Redux/Cars/cars.actions";
import Loader from "../Components/Loader";

type Props = {};

const Bookings = (props: Props) => {
  const state: carState = useSelector((state: any) => state.CarManager);
  const { carData, loading } = state;

  const dispatch: any = useDispatch();

  React.useEffect(() => {
    dispatch(PageChange(1));
    dispatch(getCars(1, 100, "", ""));
  }, []);

  return (
    <Flex marginTop="60px" overflow={"auto"}>
      <Box>
        <Sidebar />
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <Box margin="auto" width="90%" marginTop="18px">
          <Table variant="simple" width="100%">
            <Thead>
              <Tr>
                <Th>Car</Th>
                <Th>CarNo.</Th>
                <Th>UserID</Th>
                <Th width="150px">Pickup Date</Th>
                <Th width="150px">Drop Date</Th>
                <Th>Pickup Location</Th>
                <Th>Drop Location</Th>
                <Th>Rent Charge</Th>
              </Tr>
            </Thead>
            <Tbody>
              {carData &&
                carData.map((el: any) => {
                  if (el.PickupDate) {
                    return (
                      <Tr>
                        <Th>{el.model}</Th>
                        <Th>{el.RegNo}</Th>
                        <Th>{el.UserId}</Th>
                        <Th>{el.PickupDate}</Th>
                        <Th>{el.DropDate}</Th>
                        <Th>{el.PickupLocation}</Th>
                        <Th>{el.DropLocation}</Th>
                        <Th>{"₹" + " " + el.value}</Th>
                      </Tr>
                    );
                  }
                })}
            </Tbody>
          </Table>
        </Box>
      )}
    </Flex>
  );
};

export default Bookings;
