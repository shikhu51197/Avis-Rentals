import React from "react";
import "../Styles/Sidebar.css";
import { Link } from "react-router-dom";
import { Button, Text, Flex, Box } from "@chakra-ui/react";
import { AiFillDashboard } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { CiMemoPad } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdFeedback } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <Box
      className="sidebar"
      display={{ sm: "none", md: "block", lg: "block", base: "none" }}
      color="red.600"
    >
      <Link to="/">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <AiFillDashboard className="icon" />
            &nbsp;&nbsp;
            <Text>Dashboard</Text>
          </Flex>
        </Button>
      </Link>
      <Link to="/cars">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <IoCarSportSharp className="icon" />
            &nbsp;&nbsp;
            <Text>Cars</Text>
          </Flex>
        </Button>
      </Link>

      <Link to="/users">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <FiUsers className="icon" />
            &nbsp;&nbsp;
            <Text>Users</Text>
          </Flex>
        </Button>
      </Link>
      <Link to="/bookings">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <CiMemoPad className="icon" />
            &nbsp;&nbsp;
            <Text>Bookings</Text>
          </Flex>
        </Button>
      </Link>
      <Link to="/feedback">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <MdFeedback className="icon" />
            &nbsp;&nbsp;
            <Text>Feedback</Text>
          </Flex>
        </Button>
      </Link>
      <Link to="/profile">
        <Button className="link" variant={"outline"}>
          <Flex width={"150px"}>
            <CgProfile className="icon" />
            &nbsp;&nbsp;
            <Text>Profile</Text>
          </Flex>
        </Button>
      </Link>
      <Button className="link" marginTop={"30px"} variant={"outline"}>
        <Flex width={"150px"}>
          <FiLogOut />
          &nbsp;&nbsp;
          <Text>Logout</Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default Sidebar;
