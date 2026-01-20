import  { useRef, useState,  } from "react";
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
  Textarea,
  useToast,
} from "@chakra-ui/react";
// import { IoRocketSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
import Header from "./shared/header";
import Footer from "./shared/footer";
import { CiLocationOn } from "react-icons/ci";

const ContactPage = () => {
  const firstNameRef = useRef(null);
    const toast = useToast();
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
    const { firstName, lastName, email, subject, message } = formData;

    if (!firstName || !lastName || !email || !subject || !message) {
      toast({
        title: "Please fill all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      (firstNameRef.current as unknown as HTMLInputElement)?.focus();
      return;
    }
    toast({
      title: "Your email client has been opened.",
      description: "Please send the pre-filled email to complete your message.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    // Implement email API or mailto: link here if needed
  };

  return (
    <Box overflowX="hidden" width="100%" bg="gray.900" color="white">
      {/* Header */}
      <Header />

      {/* Main Heading */}
      <Box
        mb={16}
        textAlign="center"
        px={4}
        maxW="1200px"
        mx="auto"
        width="100%"
        mt={6}
      >
        <Heading fontSize={{ base: "4xl", md: "6xl" }}>Get In Touch</Heading>
        <Text fontSize="lg" color="gray.400" maxW="37em" mx="auto" mt={4}>
        Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
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
            Let's Connect
          </Heading>

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
            <Flex mt={"-2em"} p={4} rounded="md">
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
              <FormLabel color="whiteAlpha.800">Name</FormLabel>
              <Input
                ref={firstNameRef}
                name="firstName"
                placeholder="Your first name"
                value={formData.firstName}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              />
            </FormControl>
            {/* <FormControl isRequired>
              <FormLabel color="whiteAlpha.800">Last Name</FormLabel>
              <Input
                name="lastName"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              /> */}
            {/* </FormControl> */}
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
            <FormControl isRequired>
              <FormLabel color="whiteAlpha.800">Subject</FormLabel>
              <Input
                type="Subjet"
                name="subject"
                placeholder="what's all about"
                value={formData.email}
                onChange={handleChange}
                focusBorderColor="green.500"
                bg="gray.700"
                color="white"
              />
            </FormControl>
             {/* Message */}
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Tell me about your project"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    focusBorderColor="green.500"
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
