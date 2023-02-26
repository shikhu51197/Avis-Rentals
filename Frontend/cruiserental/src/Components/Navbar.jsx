import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Switch,
  Divider,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {NavLink} from "react-router-dom"

import "../styles/Navbar.css"
import logo from "../assest/CRuise (1)-modified.png"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleUserLogin } from '../Redux/Auth/action';

export default function WithSubnavigation() {
  const { isOpen, onToggle ,onOpen ,onClose } = useDisclosure();
  const [wallet,setWallet]=useState(0)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = () => {
    let userObj = {
      email,
      password,
    };
    dispatch(handleUserLogin(userObj));
    setEmail('')
    setPassword('')
  };

    // Login Model functionality
    const [size, setSize] = useState("md");
  
    const handleSizeClick = (newSize) => {
      setSize(newSize);
      onOpen();
    };
  
    const sizes = ["xl"];

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        border="0px solid red "
        position="fixed"
        top="0"
        zIndex="999"
        backgroundColor="white"
        width="100%"
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>

        <NavLink to="/"><Image src={logo} boxSize="70px"  borderRadius='full'/></NavLink>  

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
        
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* <Button
            as={'a'}
            
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'rgb(65, 67, 73)'}
            href={'/login'}
            _hover={{
              bg: 'grey',
            }}>
           {wallet}
          </Button> */}
          <Button
          
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            _hover={{
              bg: 'grey',
            }}
            color={'white'}
            bg={'rgb(65, 67, 73)'}
            href={'/signup'}>
            SIGN UP
          </Button>
          {sizes.map((size) => ( 
          <Button
            as={'a'}
            onClick={() => handleSizeClick(size)}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'rgb(65, 67, 73)'}
            _hover={{
              bg: 'grey',
            }}>
           LOG IN
          </Button>
          ))} 
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>


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
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} align="center" justifyContent='center' textAlign="center" alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <div className='navbar'>
        <Box key={navItem.label} alignItems="center" justifyContent="center" textAlign="center" >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                marginTop={"10px"}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                alignItems={'center'}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
        </div>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'Reservations',
    href:"/reservation"
  },
  {
    label: 'Car Sales',
    href:"/cars"
  },
  {
    label: 'Locations',
    href: '/',
  },
  { 
  label: 'Admin',
  href: 'https://cruise-rental-admin-panel.vercel.app/login',

  },
  {
    label: 'Help',
    href: '#',
  },
];
