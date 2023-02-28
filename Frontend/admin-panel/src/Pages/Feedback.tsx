import React from "react";
import { Flex, Box, Text, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/Users/user.actions";
import { userTypes } from "../Redux/Users/user.reducer";
import { RootState } from "../Redux/Store";
import { useAppDispatch } from "../Redux/app.hooks";

type Props = {};

const Feedback = (props: Props) => {
  const dispatch = useAppDispatch();
  const state = useSelector((state: RootState) => state.UserManager);
  const { userData } = state;
  console.log(userData);
  React.useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <Flex marginTop="60px" overflow={"auto"}>
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto" width="90%" marginTop="18px">
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>User</Th>
              <Th>UserID</Th>
              <Th>Feedback</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData &&
              userData.map((el: userTypes) => {
                return (
                  <Tr>
                    <Th>{el.name}</Th>
                    <Th>{el._id}</Th>
                    <Th>
                      Good vehicle no doubt in that, But i don't know they have
                      charging station in short distance.
                    </Th>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Feedback;
