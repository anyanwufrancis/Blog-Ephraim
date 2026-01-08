import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Center,
  Button,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import Footer from "./shared/footer";
import Header from "./shared/header";

export default function BlogSection() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubscribe = () => {
    alert("Subscribed with: " + search);
  };

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="gray.900">
        <Text color="white">Loading...</Text>
      </Flex>
    );
  }

  return (
    <Box bg="gray.900" color="white" minH="100vh" overflowX="hidden">
      {/* Header */}
      <Header />

      {/* Main Heading */}
      <Box textAlign="center" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={4}>
          My Blog
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color="gray.300"
          maxW="800px"
          mx="auto"
        >
          Thoughts, tutorials, and insights about software development,
          technology trends, and my journey as a developer.
        </Text>
      </Box>

      {/* Categories */}
      <Center flexWrap="wrap" gap={4} mb={12} px={{ base: 4, md: 8 }}>
        {["All", "Web Development", "Mobile Development", "Technology", "Career"].map(
          (cat) => (
            <Text
              key={cat}
              px={4}
              py={2}
              rounded="full"
              cursor="pointer"
              _hover={{ bg: "blue.500", color: "white" }}
              bg="gray.700"
              color="gray.200"
              textAlign="center"
            >
              {cat}
            </Text>
          )
        )}
      </Center>

      {/* Subscribe Section */}
      <Box
        py={{ base: "3em", md: "4em" }}
        px={{ base: 4, md: 8 }}
        textAlign="center"
        bgGradient="linear(to-r, blue.900, purple.900)"
        opacity={0.95}
        rounded="2xl"
        mb={12}
        mx="auto"
        maxW="900px"
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }} mb={2} color="white">
          Stay Updated
        </Heading>

        <Text
          maxW="600px"
          mx="auto"
          fontSize={{ base: "sm", md: "md" }}
          color="whiteAlpha.800"
          mb={6}
        >
          Subscribe to get notified about new blog posts and updates.
        </Text>

        {/* Search + Subscribe */}
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={4}
          maxW="600px"
          mx="auto"
          justify="center"
        >
          <InputGroup flex="1">
            <Input
              placeholder="Enter your email..."
              value={search}
              onChange={handleSearchChange}
              bg="gray.700"
              color="white"
              _placeholder={{ color: "gray.400" }}
            />
          </InputGroup>

          <Button
            size="lg"
            bgGradient="linear(to-r, blue.500, purple.600)"
            color="white"
            px={8}
            onClick={handleSubscribe}
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
              bgGradient: "linear(to-r, blue.400, purple.500)",
            }}
            _active={{
              bgGradient: "linear(to-r, blue.600, purple.700)",
              transform: "scale(0.98)",
            }}
            _focus={{ boxShadow: "none" }}
          >
            Subscribe
          </Button>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" pt={12}>
        <Footer />
      </Box>
    </Box>
  );
}
