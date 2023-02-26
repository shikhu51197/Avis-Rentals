import React from "react";
import {
  Flex,
  Box,
  Text,
  Stack,
  Avatar,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import "../Styles/Profile.css";

type Props = {};

const Profile = (props: Props) => {
  const [name, setName] = React.useState("Mandar Deshmukh");
  const [email, setEmail] = React.useState("admin123@gmail.com");
  const [password, setPassword] = React.useState("arnabjsd");

  function handleClick() {
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <Flex marginTop="60px">
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto">
        <Text className="title" color="red.600">
          ADMIN DETAILS
        </Text>
        <Stack className="box">
          <Avatar
            size={"lg"}
            name={"Mandar Deshmukh"}
            bg={"red.600"}
            margin="auto"
          />
          <FormLabel>
            Name<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            width={"350px"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>
            Email ID<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          <FormLabel>
            Password<span style={{ color: "red" }}>*</span>
          </FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Flex className="buttons">
            <Button
              variant={"outline"}
              className="button"
              bg={"blue.200"}
              color="white"
              onClick={handleClick}
            >
              Reset
            </Button>
            <Button className="button" bg={"red.600"} color="white">
              Update
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Profile;
