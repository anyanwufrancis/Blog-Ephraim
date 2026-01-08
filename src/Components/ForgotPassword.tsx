import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Alert,
  AlertIcon,
  Text,
} from "@chakra-ui/react";
import { IoArrowBackOutline } from "react-icons/io5";
import { BiError } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image
          src="src/assets/45.svg"
          alt="Loading..."
          boxSize="50px"
        />
      </Flex>
    );
  }

  const handleContinue = () => {
    if (!email) {
      setError("Please enter your email before continuing.");
      return;
    }
    setError(""); 
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <Flex
      minH="100vh"
      direction={{ base: "column", md: "row" }}
      bg="gray.50"
    >
      {/* Left Section - Image */}
      <Box flex="1" position="relative" h={{ base: "40vh", md: "100vh" }}>
        <Image
          src="src/assets/welcome_md.jpeg"
          alt="School"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blue.900"
          opacity="0.7"
        />
      </Box>

      {/* Right Section - Reset Form */}
      <Flex
        flex="1.9"
        align="center"
        justify="center"
        p={{ base: 6, md: 8 }}
        bg="white"
      >
        <Box w="full" maxW="md">
          <VStack spacing={6} align="stretch">
            {/* Title */}
            <Heading
              color="blue.700"
              size="lg"
              textAlign="center"
              fontFamily="'Playfair Display', serif"
            >
              Reset Password
            </Heading>

            {/* 🔶 Error Alert (shows when no email is entered) */}
            {error && (
              <Alert status="warning" borderRadius="md">
                <AlertIcon as={BiError} />
                <Text color="orange.700" fontWeight="medium">
                  {error}
                </Text>
              </Alert>
            )}

            {/* Reset Form */}
            <Box as="form" mt={2}>
              <VStack spacing={5}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="lg"
                    type="email"
                    placeholder="e.g. james@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <Button
                  colorScheme="blue"
                  w="full"
                  size="lg"
                  onClick={handleContinue}
                >
                  Continue
                </Button>

                {/* Navigation Link - Back to Login */}
                <Flex
                  justify="flex-start"
                  w="full"
                  fontSize="lg"
                  align="center"
                  gap={1}
                  mt={10}
                >
                  <IoArrowBackOutline color="blue.600" />
                  <Link
                    as={RouterLink}
                    to="/login"
                    color="blue.500"
                    fontWeight="medium"
                    _hover={{
                      textDecoration: "underline",
                      color: "blue.600",
                    }}
                  >
                    Back to Login
                  </Link>
                </Flex>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
