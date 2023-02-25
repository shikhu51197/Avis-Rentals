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
  Image,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/Users/user.actions";
import Loader from "../Components/Loader";

type Props = {};

const Users = (props: Props) => {
  const dispatch: any = useDispatch();
  const state = useSelector((state: any) => state.UserManager);
  const { userData, loading } = state;

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(userData);

  const city = [
    "Mumbai",
    "Pune",
    "Nashik",
    "Nagpur",
    "Indore",
    "Delhi",
    "Bhopal",
    "Ahmedabad",
    "Goa",
  ];

  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <Box margin="auto" width={"80%"} marginTop="25px">
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>Avatar</Th>
                <Th>User Name</Th>
                <Th>User ID</Th>
                <Th>Email</Th>
                <Th>Location</Th>
                <Th>No of Bookings</Th>
              </Tr>
            </Thead>
            <Tbody>
              {userData.map((el: any) => {
                return (
                  <Tr>
                    <Th>
                      <Image
                        src={el.image}
                        alt="user"
                        width={"30%"}
                        borderRadius={"50%"}
                      />
                    </Th>
                    <Th>{el.name}</Th>
                    <Th>{el._id}</Th>
                    <Th>{el.email}</Th>
                    <Th>{city[Math.floor(Math.random() * (7 - 0) + 0)]}</Th>
                    <Th>{el.NumberOfOrders}</Th>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
      )}
    </Flex>
  );
};

export default Users;
