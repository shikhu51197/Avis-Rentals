import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import "../Styles/Cars.css";
import { useDispatch, useSelector } from "react-redux";
import { carState } from "../Redux/Cars/cars.reducer";
import React from "react";
import { getCars } from "../Redux/Cars/cars.actions";

const Cars = () => {
  const dispatch: any = useDispatch();
  const state: carState = useSelector((state: any) => state.CarManager);
  const { carData } = state;
  console.log(carData);

  React.useEffect(() => {
    dispatch(getCars("", 1, "Mumbai"));
  }, []);
  return (
    <Flex>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Table variant="simple" fontSize={"sm"}>
          <Thead>
            <Tr>
              <Th>Picture</Th>
              <Th>Car</Th>
              <Th>Fare/Day</Th>
              <Th>Car No.</Th>
              <Th>Status</Th>
              <Th>Location</Th>
              <Th color={"red.600"} textAlign={"center"}>
                <Button>
                  <BiRefresh />
                </Button>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {carData &&
              carData.map((el: any) => {
                return (
                  <Tr>
                    <Td width={"150px"}>
                      <img src={el.image} />
                    </Td>
                    <Td>{el.model}</Td>
                    <Td>{el.value}</Td>
                    <Td>{el.RegNo}</Td>
                    <Td>Not Booked</Td>
                    <Td>{el.location}</Td>
                    <Td className="ope">
                      <Flex>
                        <Button variant={"outline"}>
                          <FiEdit />
                        </Button>
                        <Button variant={"outline"} marginLeft="5px">
                          <MdDeleteForever />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Cars;
