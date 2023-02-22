import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  //To be used for showing User Picture in Navbar
  const [isLogged, setIsLogged] = React.useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"0px 15px"}
        >
          <Box className="logoBox">
            <img
              className="logo"
              src="https://64.media.tumblr.com/cd014008c2508e751dd7a4a02ce03a52/c70f2603c91255de-07/s400x600/1d705b0cebbc41a66d39b5e0c27b0586d37e4ff0.pnj"
              alt="logo"
            />{" "}
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                display={{ sm: "none", base: "none", md: "block", lg: "block" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <div className={isLogged ? "show" : "hide"}>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    display={{
                      sm: "none",
                      base: "none",
                      md: "block",
                      lg: "block",
                    }}
                  >
                    <Flex>
                      <Avatar
                        size={"sm"}
                        name={"Mandar Deshmukh"}
                        bg={"red.600"}
                      />
                      <Flex
                        flexDirection={"column"}
                        textAlign={"left"}
                        marginLeft={"15px"}
                      >
                        <Text>Mandar Deshmukh</Text>
                        <Text fontSize={"xs"} color={"red.600"}>
                          Admin
                        </Text>
                      </Flex>
                    </Flex>
                  </MenuButton>
                </Menu>
              </div>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color={"red.600"}>
            <Stack as={"nav"} spacing={4}>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/">Dashboard</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/cars">Cars</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/users">Users</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/bookings">Bookings</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/feedback">Feedback</Link>
              </Button>
              <Flex>
                <Button className="smlogout" variant={"outline"}>
                  Logout
                </Button>
                <Button onClick={toggleColorMode} variant={"outline"}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
