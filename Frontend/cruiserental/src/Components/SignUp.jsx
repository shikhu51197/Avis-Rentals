import React, { useState } from "react";
import "../styles/SignUp.css";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Link,
  Select,
  Switch,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "../styles/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { handleUserLogin, handleUserRegister } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // Signup Functionality
  const [name, setFirsName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setcountry] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [Address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleRegisterSubmit = async () => {
    let userObj = {
      name,
      email,
      password,
      country,
      confirmPass,
      Address,
      image,
    };
    dispatch(handleUserRegister(userObj));
    alert("Signup Successfull")
    navigate("/")
  };



  // LOgin Functionlity
  // const token = useSelector((store) => store.reducer.token);

  // const [showToast, setShowToast] = useState(false);

  // const token = useSelector((store) => store.reducer.token);
  const handleLogin = () => {
    let userObj = {
      email,
      password,
    };
    dispatch(handleUserLogin(userObj));
    setEmail('')
    setPassword('')
  };
  // console.log("loginpge",token)
  // console.log("loginpge",token)

  // Login Model functionality
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xl"];

  return (
    <Box>


      <Box className="JoinAvisDiv">
        <Text className="join">JOIN AVIS PREFERRED®</Text>
        <Text className="already">
          If you already have a 6-character Avis Wizard Number,{" "}
          <spam style={{ color: "#d4002a" }}>go here</spam> to upgrade to Avis
          Preferred.
        </Text>
      </Box>
      <Box className="LineS"></Box>

      <Box className="formS">
        <FormControl>
          <FormLabel mt="40px">Country</FormLabel>
          <Select
            placeholder="Select country"
            cursor="pointer"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
            bg="#F7F7F7"
            w="35%"
          >
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Australia">Australia</option>
            <option value="Puerto Rico">Puerto Rico</option>
            <option value="US Virgin Islands (St Croix)">
              US Virgin Islands (St Croix)
            </option>
            <option value="US Virgin Islands (St Thomas)">
              US Virgin Islands (St Thomas)
            </option>
            <option value="Anguilla">Anguilla</option>
            <option value="Antigua">Antigua</option>
            <option value="Aruba">Aruba</option>
            <option value="Bolivia">Bolivia</option>
            <option value="India">India</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Nigeria">Nigeria</option>
          </Select>
          <FormLabel mt="40px">First Name</FormLabel>
          <Input
            bg="#F7F7F7"
            type="text"
            value={name}
            onChange={(e) => setFirsName(e.target.value)}
          />
          <FormLabel mt="40px">Last Name</FormLabel>
          <Input bg="#F7F7F7" type="text" />
          <FormLabel mt="40px">Mobile Number</FormLabel>
          <Input bg="#F7F7F7" maxLength="10" type="number" />
        </FormControl>
        <Box className="afterMobileNoDiv">
          <Text className="mobile">
            If you provide your mobile phone number you can opt-in to receiving
            text messages about your reservations.
          </Text>
          <FormControl display="flex" w="51%" mt="25px" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Receive texts about reservations and rentals?See our
              <spam style={{ color: "#d4002a" }}> Terms and Conditions.</spam>
            </FormLabel>
            <Switch id="email-alerts" size="lg" />
          </FormControl>
          <FormLabel mt="40px">Email Address</FormLabel>
          <Input
            bg="#F7F7F7"
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Checkbox className="chekbox" defaultChecked>
            Use Email address as Username
          </Checkbox>
          <Box className="captchabox">
            <Image
              className="Image"
              src="https://th.bing.com/th/id/OIP.mWKUKEtJ2eVR1pvKwehxJAHaBv?pid=ImgDet&rs=1"
              alt="captcha"
            />
          </Box>
          <FormControl display="flex" mt="40px" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Receive email offers?
            </FormLabel>
            <Switch id="email-alerts" size="lg" />
          </FormControl>
          <FormLabel mt="40px">Password</FormLabel>
          <Input
            bg="#F7F7F7"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormLabel mt="40px">Confirm Password</FormLabel>
          <Input
            bg="#F7F7F7"
            type="password"
            value={confirmPass}
            onChange={(e) => setconfirmPass(e.target.value)}
          />
          <FormLabel mt="40px">Address Line</FormLabel>
          <Input
            bg="#F7F7F7"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormLabel mt="40px">User Image</FormLabel>
          <Box className="ZipCodeBox">
            <Input
              bg="#F7F7F7"
              w="35%"
              value={image}
              type="url"
              onChange={(e) => setImage(e.target.value)}
            />
            <Text>Enter your Zip/Postal Code to confirm City and State.</Text>
          </Box>
          <FormLabel mt="40px">AWD Number (optional)</FormLabel>
          <Input
            bg="#F7F7F7"
            placeholder="7-digit letter and number combo"
            display="flex"
            w="35%"
          />
          <Text display="flex" fontSize="17px" mt="5px" color="#d4002a">
            What is an AWD Number?
          </Text>
        </Box>
      </Box>
      <Box
        className="LineS"
        style={{ margin: "auto", marginTop: "40px" }}
      ></Box>
      <Box className="saveBox">
        <Text textAlign="justify">
          Please read our{" "}
          <span style={{ color: "#d4002a" }}>Terms and Conditions.</span> Please
          verify the spelling of your username, email and password before
          saving. Please be advised, username cannot be changed once submitted.
        </Text>
        <Button
          className="save-btn"
          onClick={handleRegisterSubmit}
          backgroundColor="#d4002a"
          _hover={{ backgroundColor: "#c20128" }}
          borderRadius="none"
        >
          SAVE
        </Button>
      </Box>

      {/* Login portion starts here */}

      <>
        {/* {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >Login</Button>
        ))} */}

        {/* {token &&
          toast({
            title: "Logged in Successfully",
            description: "Enjoy",
            status: "success",
            duration: 3000,
            isClosable: true,
          })} */}

        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton size="lg" />
            <ModalBody>
              <Box>
                <Text className="LogInto">LOG INTO YOUR AVIS ACCOUNT.</Text>
              </Box>
              <Box className="InputBoxDiv">
                <Input
                  placeholder="Username/Wizard Number"
                  size="lg"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  mt="30px"
                  bg="#F7F7F7"
                />
                <Input
                  placeholder="Password (Case Sensitive)"
                  size="lg"
                  mt="30px"
                  bg="#F7F7F7"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </Box>
              <Box className="Remember">
                <Text className="me">Remember Me</Text>
                <Stack align="center" direction="row">
                  <Switch size="lg" />
                </Stack>
              </Box>
              <Box className="textBox">
                <Text>
                  This site is protected by reCAPTCHA Enterprise and the Google{" "}
                  <span style={{ color: "#d4002a" }}>Privacy Policy</span> and{" "}
                  <span style={{ color: "#d4002a" }}>Terms of Service</span>{" "}
                  apply.
                </Text>
              </Box>
              <Box className="Btn-Box">
                <Button
                  className="login-btnn"
                  bgColor="#D4002A"
                  _hover={{ bg: "#c60229" }}
                  color="white"
                  onClick={handleLogin}
                  size="lg"
                >
                  LOG IN
                </Button>
              </Box>
              <Box className="forgot">
                <Link
                  fontSize="16.4px"
                  color="#d4002a"
                  _hover={{ textDecoration: "none" }}
                >
                  Forgot username?
                </Link>
                <Divider
                  orientation="vertical"
                  direction="row"
                  h="5px"
                  w="10px"
                  p={4}
                />
                <Link
                  fontSize="16.4px"
                  color="#d4002a"
                  _hover={{ textDecoration: "none" }}
                >
                  Forgot username?
                </Link>
              </Box>
              <Box
                className="Line"
                style={{ margin: "auto", marginTop: "30px" }}
              ></Box>
              <Box className="amazonBox">
                <Image
                  className="amazonImage"
                  src="https://www.avis.com/content/dam/avis/na/us/common/amazon-login-btn.png"
                  alt="amazon"
                />
              </Box>
              <Box
                className="Line"
                style={{ margin: "auto", marginTop: "40px" }}
              ></Box>
              <Box className="NeedAcountBox">
                <Text className="NeedAcount">
                  Need an account?{" "}
                  <Link href="./SignUp.jsx" _hover={{ textDecoration: "none" }}>
                    <span style={{ color: "#d4002a", fontWeight: "500" }}>
                      Create one now
                    </span>
                  </Link>
                </Text>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default SignUp;
