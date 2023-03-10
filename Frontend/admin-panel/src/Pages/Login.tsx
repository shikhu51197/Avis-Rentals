import React, { useState } from "react";
import {
  Text,
  SimpleGrid,
  Box,
  Input,
  Checkbox,
  Flex,
  Link,
  Image,
  Alert,
  AlertIcon,
  useToast,
  Button,
} from "@chakra-ui/react";
import "../Styles/Login.css";
import admin from "../assets/admin.jpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { stateType } from "../Redux/Auth/auth.reducers";
import { auth_login } from "../Redux/Auth/auth.actions";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Redux/Store";
import { useAppDispatch } from "../Redux/app.hooks";

interface Props {
  email: string;
  password: string;
}

const formData: Props = {
  email: "admin123@gmail.com",
  password: "admin@123",
};

const Login = () => {
  // State maintained for Input tags
  const [Form, setForm] = useState<Props>(formData);

  const state: stateType = useSelector((state: RootState) => state.AuthManager);
  const { isAuth, loading, error } = state;
  console.log(isAuth);

  //Login Success toast
  const toast = useToast({
    title: `Login Successful`,
    status: "success",
    isClosable: true,
    position: "top",
  });

  //Partially filled form
  const partial = useToast({
    title: `Kinldy fill all the detials`,
    status: "warning",
    isClosable: true,
    position: "top",
  });

  //Error Loggin In
  const Error = useToast({
    title: `Error! Wrong Email or Password`,
    status: "error",
    isClosable: true,
    position: "top",
  });

  //Login API call

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    if (Form.email == "" || Form.password == "") {
      partial();
    } else {
      dispatch(auth_login(Form.email, Form.password));
    }
  };

  const navigate = useNavigate();
  if (isAuth && !error) {
    navigate("/");
  }
  // Change state "form" as per changes in input tags
  return (
    <div style={{ padding: "10px", marginTop: "60px" }}>
      {error ? (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      ) : isAuth ? (
        <Alert status="success">
          <AlertIcon />
          Login Successful
        </Alert>
      ) : (
        ""
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, base: 1 }}
        spacing={10}
        paddingTop="15px"
      >
        <Box className="formbox">
          <Text fontSize={"2xl"} fontWeight={"bold"} marginBottom={"15px"}>
            LOG INTO YOUR ADMIN ACCOUNT
          </Text>
          <form>
            <Text className="Tags">
              Email Address <span style={{ color: "red" }}>*</span>
            </Text>
            <Input
              placeholder="Enter Email address here"
              className="ipbox"
              type={"email"}
              name="email"
              value={Form.email}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }
            />
            <Text className="Tags">
              Password <span style={{ color: "red" }}>*</span>
            </Text>
            <Input
              placeholder="Enter Password here"
              className="ipbox"
              type={"password"}
              name="password"
              value={Form.password}
              onChange={(e) =>
                setForm({ ...Form, [e.target.name]: e.target.value })
              }
            />
            <Flex className="forgot">
              <Checkbox defaultChecked colorScheme={"red"}>
                Remember Me
              </Checkbox>
              <Link color="red.600">Forgot Password ?</Link>
            </Flex>

            {/* <Input type="submit" className="submit" bg="red.600"  /> */}
            <Button
              bg="red.600"
              className="submit"
              onClick={handleSubmit}
              isLoading={loading}
            >
              Submit
            </Button>
          </form>
        </Box>
        <Box>
          <Image src={admin} alt="admin" />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Login;
