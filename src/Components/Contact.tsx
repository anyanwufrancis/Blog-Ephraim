import  { useState,  } from "react";
import {
  // Image,
  Box,
  Flex,
  Heading,
  VStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";
// import { IoRocketSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
import Header from "./shared/header";
import Footer from "./shared/footer";
import { CiLocationOn } from "react-icons/ci";

const ContactPage = () => {
  // const firstNameRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Message submitted!"); // Replace with your form logic
  };

  return (
    <Box overflowX="hidden" width="100%" bg="gray.900" color="white">
      {/* Header */}
      <Header />

      {/* Main Heading */}
      <Box
        mb={12}
        textAlign="center"
        px={4}
        maxW="1200px"
        mx="auto"
        width="100%"
      >
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>Contact Us</Heading>
        <Text fontSize="lg" color="gray.400" maxW="37em" mx="auto" mt={4}>
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </Text>
      </Box>

      {/* Content */}
      <Flex
        gap={8}
        flexDirection={{ base: "column", md: "row" }}
        px={4}
        maxW="1200px"
        mx="auto"
        mb={16}
        width="100%"
      >
        {/* Contact Info */}
        <Box flex="1" mb={{ base: 8, md: 0 }} width="100%">
          <Heading fontSize="2xl" mb={4}>
            Let's Start a Conversation
          </Heading>
          <Text mb={6} maxW="30em" fontSize="lg" color="gray.400">
            Whether you're a buyer looking for products or a seller wanting to
            join our marketplace, we're here to help you succeed.
          </Text>

          <VStack spacing={4} align="stretch">
            <Flex
              align="center"
              p={4}
              rounded="md"
            >
              <Box border="1px" p={2} rounded="0.4em" bg="cyan.500" mr={4}>
                <MdEmail size="24px" />
              </Box>
              <VStack align="start" gap={0}>
                <Text fontWeight="bold" fontSize="lg">
                  Email
                </Text>
                <Text fontSize="md">ephraimumunnakwe3@gmail.com</Text>
              </VStack>
            </Flex>
            <Flex mt={"-2em"} p={4} rounded="md" shadow="md">
              <Box>
                <Image src="/mobile.png" maxW="60px" w="100%" h="auto" />
              </Box>
              <VStack align="start" ml={4} gap={0}>
                <Text>Phone</Text>
                <Text>+234 (0) 8116369105</Text>
              </VStack>
            </Flex>
            <Flex mt={"-1.5em"} align={"center"}>
              <Box ml={"1em"}>
                <CiLocationOn  size={"34px"}/>
              </Box>
              <VStack align="start" ml={4} gap={0}>
                <Text>Location</Text>
                <Text>Abuja, Nigeria</Text>
              </VStack>
            </Flex>
          </VStack>
        </Box>

        {/* Contact Form */}
        <Box
          flex="1"
          bg="gray.800"
          p={6}
          borderRadius="md"
          shadow="2xl"
          w="full"
          maxW="500px"
          mx="auto"
          width="100%"
        >
          <Heading fontSize="xl" mb={4}>
            Send us a Message
          </Heading>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.800">First Name</FormLabel>
              <Input
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.800">Last Name</FormLabel>
              <Input
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.800">Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              />
            </FormControl>
            <Button colorScheme="green" onClick={handleSubmit} width="full">
              Send Message
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ContactPage;
