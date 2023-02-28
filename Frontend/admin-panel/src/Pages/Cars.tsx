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
  Select,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import "../Styles/Cars.css";
import { useDispatch, useSelector } from "react-redux";
import { carDataType, carState } from "../Redux/Cars/cars.reducer";
import React from "react";
import { deleteCar, getCars, PageChange } from "../Redux/Cars/cars.actions";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { BiSort } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { RootState } from "../Redux/Store";

const Cars = () => {
  const dispatch: any = useDispatch();
  const state: carState = useSelector((state: RootState) => state.CarManager);
  const { carData, page, loading, count } = state;

  const city = [
    "Mumbai",
    "Nashik",
    "Nagpur",
    "Delhi",
    "Lucknow",
    "Bhopal",
    "Indore",
    "Goa",
    "Hydarabad",
  ];

  const [location, setLocation] = React.useState("");
  const [sort, SetSort] = React.useState(false);

  React.useEffect(() => {
    dispatch(getCars(page, 4, "", location, sort));
  }, [page, location, sort]);

  const handlePageChange: (n: number) => void = (change: number) => {
    dispatch(PageChange(change));
  };

  const navigate = useNavigate();

  return (
    <Flex marginTop={"60px"}>
      <Box>
        <Sidebar />
      </Box>
      <Box overflow={"auto"} width="90%">
        {loading ? (
          <Box margin="auto" marginTop="230px">
            <Loader />
          </Box>
        ) : (
          <>
            {" "}
            <Table variant="simple" fontSize={"sm"}>
              <Thead>
                <Tr>
                  <Th>Picture</Th>
                  <Th>Car</Th>
                  <Th display={"flex"} justifyContent={"space-around"}>
                    <Text>Retal Fee/Day</Text>
                    <Button onClick={() => SetSort(!sort)} color="red">
                      <BiSort />
                    </Button>
                  </Th>
                  <Th>Car No.</Th>
                  <Th>Status</Th>
                  <Th>
                    <Select
                      placeholder="LOCATION"
                      variant="flushed"
                      onChange={(e) => {
                        dispatch(PageChange(1));
                        setLocation(e.target.value);
                      }}
                      fontSize="12px"
                      fontWeight="bold"
                      width="100px"
                    >
                      {city.map((el) => {
                        return <option>{el}</option>;
                      })}
                    </Select>
                  </Th>
                  <Th color={"red.600"} textAlign={"center"}>
                    <Button onClick={() => navigate("/addcar")}>
                      <MdAddCircle />
                    </Button>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {carData &&
                  carData.map((el: carDataType) => {
                    return (
                      <Tr>
                        <Td width={"150px"}>
                          <img src={el.image} alt={el.model} />
                        </Td>
                        <Td>{el.model}</Td>
                        <Td>{"₹" + " " + el.value}</Td>
                        <Td>{el.RegNo}</Td>
                        <Td>
                          <Flex alignItems={"center"}>
                            <Box color={el.DropDate ? "red" : "green"}>
                              <RxDotFilled />
                            </Box>

                            {el.DropDate == "" ? `Available` : "Booked"}
                          </Flex>
                        </Td>
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
                              onClick={() => dispatch(deleteCar(el._id!, page))}
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
            {Pagination(page, count, handlePageChange)}{" "}
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Cars;
