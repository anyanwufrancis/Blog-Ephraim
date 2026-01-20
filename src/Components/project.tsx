"use client";

import {
  Box,
  Text,
  Flex,
  Badge,
  Heading,
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";
import Footer from "./shared/footer";
import Header from "./shared/header";

const technologies = [
  { count:2},
  { name: "Android", count: 2 },
  { name: "AppLinks", count: 1 },
  { name: "Dart", count: 1 },
  { name: "Deep-Linking", count: 1 },
  { name: "DeepLink", count: 1 },
  { name: "Firebase", count: 5 },
  { name: "Flutter", count: 3 },
  { name: "MongoDB", count: 1 },
  { name: "Nextjs", count: 1 },
  { name: "Notifications", count: 4 },
  { name: "OneSignal", count: 2 },
  { name: "Pagination", count: 1 },
  { name: "PayStack", count: 1 },
  { name: "PostgreSQL", count: 1 },
  { name: "PushNotifications", count: 1 },
  { name: "React-Native", count: 1 },
  { name: "Rest-API", count: 3 },
  { name: "Retrofit", count: 1 },
  { name: "Rive", count: 1 },
  { name: "Supabase", count: 2 },
  { name: "iOS", count: 1 },
];
const list = [
  { name: "All", count: 2 },
  { count: 2 },
  { name: "Android", count: 2 },
  { name: "AppLinks", count: 1 },
  { name: "Dart", count: 3 },
  { name: "Deep-Linking", count: 1 },
  { name: "DeepLink", count: 1 },
];

const Project = () => {
  // const handleSearch = () => {
  //   // Implement your search logic here
  //   alert('Searching...');
  // };
  return (
    <>
    
      <Header />
      <Box bg="#000" color={"white"} py={10} px={4} textAlign="center">
       {/* <Flex> */}
       <Box maxW="35em" mx="auto" textAlign="center">
  <Heading fontSize={"7xl"} mb={4}>My Projects</Heading>
  <Text>
    A showcase of my work in mobile and web development. Each project
    represents a unique challenge and solution, built with modern
    technologies and best practices.
  </Text>
</Box>
  <Button
  display={{base:"none", md:"block"}}
  position={"absolute"}
  top={{base:"", md:"10em"}}
  left={{base:"",md:"65em"}}
    bg="#2b6cb0" // or use colorScheme="blue"
    color="#fff"
    _hover={{ bg: "#2c5282" }}
    // leftIcon={<span className="material-icons">refresh</span>}
    onClick={() => window.location.reload()}
  >
    Please Refresh
  </Button>
       {/* </Flex> */}
        <Flex align={"center"} textAlign={"center"}>
          <Box p={4}>
            <HStack spacing={2} maxW="400px" mx="auto">
              <Input
                placeholder="Search for projects..."
                variant="outline"
                size="md"
                // Add more props as needed
              />
              {/* <Button colorScheme="blue" onClick={handleSearch}>
          Search
        </Button> */}
            </HStack>
          </Box>
          <Flex flexWrap="wrap" justify="center" gap={3}>
            {list.map((tech, index) => (
              <Badge
                key={index}
                bg="#222"
                color="#fff"
                px={3}
                h={"3em"}
                py={2}
                borderRadius="md"
                fontSize="sm"
                _hover={{ bg: "#444", cursor: "pointer" }}
              >
                {tech.name} ({tech.count})
              </Badge>
            ))}
          </Flex>
        </Flex>
        {/* Title */}
        <Text fontSize="3xl" fontWeight="bold" color="#fff" mb={4}>
          Technologies I Use
        </Text>
        {/* Subtitle */}
        <Text fontSize="md" color="#ccc" mb={8}>
          The tools and frameworks that power my projects
        </Text>
        {/* Technologies Badges */}
        <Flex flexWrap="wrap" justify="center" gap={3}>
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              bg="#222"
              color="#fff"
              px={3}
              py={2}
              borderRadius="md"
              fontSize="sm"
              _hover={{ bg: "#444", cursor: "pointer" }}
            >
              {tech.name} ({tech.count})
            </Badge>
          ))}
        </Flex>
        <Box color={"white"} bgGradient="linear(to-r, blue.500, purple.600)">
          <Heading fontSize={"2xl"} >Have a Project In Mind</Heading>
          <Text>
            i'm always excited to work on new challenges and bring innovative
            ideas to life
          </Text>
          <Button
            as="a"
            href="/contact"
            mt="2em"
            size="lg"
            bgGradient="linear(to-r, blue.400, purple.500)"
            color="white"
            _hover={{ opacity: 0.9 }}
          >
            Let's discuss Your Project
          </Button>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Project;
