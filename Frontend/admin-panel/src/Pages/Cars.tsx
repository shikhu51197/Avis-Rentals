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
import { MdAddCircle } from "react-icons/md";
import "../Styles/Cars.css";
import { useDispatch, useSelector } from "react-redux";
import { carState } from "../Redux/Cars/cars.reducer";
import React from "react";
import { deleteCar, getCars, PageChange } from "../Redux/Cars/cars.actions";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";

const Cars = () => {
  const dispatch: any = useDispatch();
  const state: carState = useSelector((state: any) => state.CarManager);
  const { carData, page } = state;
  console.log(carData);

  React.useEffect(() => {
    dispatch(getCars(page, "", ""));
  }, [page]);

  const handlePageChange: (n: number) => void = (change: number) => {
    dispatch(PageChange(change));
  };

  const navigate = useNavigate();

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
              <Th>Retal Fee/Day</Th>
              <Th>Car No.</Th>
              <Th>Status</Th>
              <Th>Location</Th>
              <Th color={"red.600"} textAlign={"center"}>
                <Button onClick={() => navigate("/addcar")}>
                  <MdAddCircle />
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
                      <img src={el.image} alt={el.model} />
                    </Td>
                    <Td>{el.model}</Td>
                    <Td>{"₹" + " " + el.value}</Td>
                    <Td>{el.RegNo}</Td>
                    <Td>{el.DropDate == "" ? "Available" : "Booked"}</Td>
                    <Td>{el.location}</Td>
                    <Td className="ope">
                      <Flex>
                        <Button
                          variant={"outline"}
                          onClick={() => navigate(`/update/${el._id}`)}
                        >
                          <FiEdit />
                        </Button>
                        <Button
                          variant={"outline"}
                          marginLeft="5px"
                          onClick={() => dispatch(deleteCar(el._id))}
                        >
                          <MdDeleteForever />
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
        {Pagination(page, handlePageChange)}
      </Box>
    </Flex>
  );
};

export default Cars;
