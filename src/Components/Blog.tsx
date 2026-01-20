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
  SimpleGrid,
} from "@chakra-ui/react";
import Footer from "./shared/footer";
import Header from "./shared/header";
        import { IoIosArrowRoundForward } from "react-icons/io";
  import { IoEllipseSharp } from "react-icons/io5";
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
        {[
          "All",
          "Web Development",
          "Mobile Development",
          "Technology",
          "Career",
        ].map((cat) => (
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
        ))}
      </Center>
      <SimpleGrid
  columns={{ base: 1, md: 2, lg: 3 }}
  spacing="2em"
  w="100%"
>
  {/* CARD 1 */}
  <Box maxW="sm" borderRadius="xl" overflow="hidden" boxShadow="lg">
    <Box
      bgGradient="linear(to-r, blue.400, purple.500)"
      px={8}
      py={10}
      position="relative"
      minH="180px"
    >
      <Box
        position="absolute"
        bottom={6}
        left={8}
        bg="blue.400"
        px={4}
        py={1.5}
        borderRadius="full"
        boxShadow="md"
      >
        <Text fontSize="sm" fontWeight="bold" color="gray.800">
          Web Development
        </Text>
      </Box>
    </Box>

    <Box bg="gray.800" color="white" px={5} py={4}>
      <Flex align="center" gap={3} fontSize="sm" color="gray.400" mb={3}>
        <Text>1/15/2024</Text>
        <IoEllipseSharp size={6} />
        <Text>5 min read</Text>
      </Flex>

      <Heading fontSize="lg" mb={2}>
        Building Scalable Web Application with Next.js
      </Heading>

      <Text fontSize="sm" color="gray.300" mb={4}>
        Learn how to create performant and scalable web application using Next.js
        and modern development practices
      </Text>

      <Flex align="center" gap={2} color="blue.400" cursor="pointer">
        <Text fontWeight="semibold">Read More</Text>
        <IoIosArrowRoundForward size={22} />
      </Flex>
    </Box>
  </Box>

  {/* CARD 2 */}
  <Box maxW="sm" borderRadius="xl" overflow="hidden" boxShadow="lg">
    <Box
      bgGradient="linear(to-r, blue.400, purple.500)"
      px={8}
      py={10}
      position="relative"
      minH="180px"
    >
      <Box
        position="absolute"
        bottom={6}
        left={8}
        bg="blue.400"
        px={4}
        py={1.5}
        borderRadius="full"
        boxShadow="md"
      >
        <Text fontSize="sm" fontWeight="bold" color="gray.800">
          Mobile Development
        </Text>
      </Box>
    </Box>

    <Box bg="gray.900" color="white" px={5} py={4}>
      <Flex align="center" gap={3} fontSize="sm" color="gray.400" mb={3}>
        <Text>1/10/2024</Text>
        <IoEllipseSharp size={6} />
        <Text>8 min read</Text>
      </Flex>

      <Heading fontSize="lg" mb={2}>
        Flutter vs React Native: Developer's Perspective
      </Heading>

      <Text fontSize="sm" color="gray.300" mb={4}>
        Comparing two popular cross-platform mobile development frameworks from a
        practical standpoint
      </Text>

      <Flex align="center" gap={2} color="blue.400" cursor="pointer">
        <Text fontWeight="semibold">Read More</Text>
        <IoIosArrowRoundForward size={22} />
      </Flex>
    </Box>
  </Box>

  {/* CARD 3 */}
  <Box maxW="sm" borderRadius="xl" overflow="hidden" boxShadow="lg">
    <Box
      bgGradient="linear(to-r, blue.400, purple.500)"
      px={8}
      py={10}
      position="relative"
      minH="180px"
    >
      <Box
        position="absolute"
        bottom={6}
        left={8}
        bg="blue.400"
        px={4}
        py={1.5}
        borderRadius="full"
        boxShadow="md"
      >
        <Text fontSize="sm" fontWeight="bold" color="gray.800">
          Technology
        </Text>
      </Box>
    </Box>

    <Box bg="gray.900" color="white" px={5} py={4}>
      <Flex align="center" gap={3} fontSize="sm" color="gray.400" mb={3}>
        <Text>1/5/2024</Text>
        <IoEllipseSharp size={6} />
        <Text>6 min read</Text>
      </Flex>

      <Heading fontSize="lg" mb={2}>
        The Future of Full-Stack Development
      </Heading>

      <Text fontSize="sm" color="gray.300" mb={4}>
        Exploring emerging trends and technologies shaping the future of full
        stack development
      </Text>

      <Flex align="center" gap={2} color="blue.400" cursor="pointer">
        <Text fontWeight="semibold">Read More</Text>
        <IoIosArrowRoundForward size={22} />
      </Flex>
    </Box>
  </Box>
</SimpleGrid>

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
          maxW="400px"
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
