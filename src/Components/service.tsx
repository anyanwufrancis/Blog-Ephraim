import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";
import { MdOutlineEmojiObjects, MdBuild as WrenchIcon } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
// import { Link as RouterLink } from "react-router-dom";
import Footer from "./shared/footer";
// import { motion } from "framer-motion";
import Header from "./shared/header"; // <-- Import your Ephraim header

// const MotionBox = motion(Box);

const Service = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <Box overflowX="hidden">
      {" "}
      {/* Prevent horizontal overflow */}
      {/* Use the new Ephraim Header */}
      <Header />
      {/* Main Page Content */}
      <Box bg="blackAlpha.900" color="white" px={{ base: 4, md: 10 }} py={16}>
        {/* Section Header */}
        <Box textAlign="center" mb={12}>
          <Heading fontSize={{ base: "2xl", md: "4xl" }} mb={3}>
            My Services
          </Heading>
          <Text
            maxW="650px"
            mx="auto"
            fontSize={{ base: "sm", md: "md" }}
            color="whiteAlpha.800"
          >
            I offer comprehensive development services to help bring your
            digital ideas to life. From concept to deployment, I've got you
            covered.
          </Text>
        </Box>

        {/* Services Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={{ base: 4, md: 5 }}
          justifyItems="center"
        >
          {[
            {
              icon: <CiGlobe size="2.5em" color="aqua" />,
              title: "Web Development",
              desc: "Modern, responsive websites built with React, Next.js, and cutting-edge technologies.",
              price: "Starting at $2,500",
              items: [
                "Responsive Design",
                "SEO Optimization",
                "Performance Focused",
                "Modern UI/UX",
              ],
            },
            {
              icon: "/mobile.png",
              title: "Mobile App Development",
              desc: "Cross-platform mobile applications using Flutter and React Native.",
              price: "Starting at $5,000",
              items: [
                "iOS & Android",
                "Native Performance",
                "Custom UI Design",
                "App Store Deployment",
              ],
            },
            {
              icon: <AiOutlineThunderbolt size="2.5em" color="orange" />,
              title: "API Development",
              desc: "Robust backend APIs and microservices for your applications.",
              price: "Starting at $1,500",
              items: [
                "RESTful APIs",
                "Database Design",
                "Authentication",
                "Documentation",
              ],
            },
            {
              icon: (
                <Box position="relative" w="60px" h="60px">
                  <FaShoppingCart size="2.5em" color="gray" />
                  <Box
                    position="absolute"
                    bottom="2px"
                    left="6px"
                    w="6px"
                    h="6px"
                    bg="blue.400"
                    rounded="full"
                  />
                  <Box
                    position="absolute"
                    bottom="2px"
                    right="6px"
                    w="6px"
                    h="6px"
                    bg="blue.400"
                    rounded="full"
                  />
                </Box>
              ),
              title: "E-commerce Solutions",
              desc: "Complete online stores with payment integration and inventory management.",
              price: "Starting at $4,000",
              items: [
                "Payment Gateway",
                "Inventory System",
                "Admin Dashboard",
                "Mobile Responsive",
              ],
            },
            {
              icon: <MdOutlineEmojiObjects size="2.5em" color="yellow" />,
              title: "Technical Consulting",
              desc: "Expert advice on technology stack, architecture, and development strategy.",
              price: "$150/hour",
              items: [
                "Technology Assessment",
                "Architecture Planning",
                "Code Review",
                "Team Training",
              ],
            },
            {
              icon: <WrenchIcon size="2.5em" color="gray" />,
              title: "Maintenance & Support",
              desc: "Ongoing support, updates, and maintenance for your applications.",
              price: "Custom Packages",
              items: [
                "Bug Fixes",
                "Security Updates",
                "Performance Optimization",
                "24/7 Support",
              ],
            },
          ].map((service, i) => (
            <Box
              key={i}
              bg="whiteAlpha.200"
              backdropFilter="blur(12px)"
              rounded="2xl"
              p={6}
              minH="24em"
              w="100%"
              maxW={{ base: "100%", md: "360px" }}
              boxShadow="xl"
              minW={0} // fix overflow in grid
            >
              {/* Icon */}
              <Box mb={3}>
                {typeof service.icon === "string" ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    maxW="60px"
                    w="100%"
                    h="auto"
                  />
                ) : (
                  service.icon
                )}
              </Box>

              {/* Title */}
              <Heading fontSize={{ base: "lg", md: "xl" }} mb={1}>
                {service.title}
              </Heading>

              {/* Price */}

              {/* Description */}
              <Text
                fontSize={{ base: "sm", md: "sm" }}
                mb={3}
                color="whiteAlpha.800"
              >
                {service.desc}
              </Text>

              {/* Features List */}
              {service.items.map((item, idx) => (
                <Flex key={idx} align="center" gap={2} mb={1}>
                  <GiCheckMark color="lime" />
                  <Text fontSize={{ base: "xs", md: "sm" }}>{item}</Text>
                </Flex>
              ))}
              {/* Horizontal Line */}
              <Box
                borderBottom="1px solid"
                borderColor="whiteAlpha.400"
                mt={10}
                mb={2}
              ></Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: "sm", md: "md" }}
                color="green.400"
                mb={2}
              >
                {service.price}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* Development Process Section */}
        <Box mt={20} textAlign="center">
          <Heading mb={2} fontSize={{ base: "xl", md: "2xl" }}>
            My Development Process
          </Heading>
          <Text
            mb={8}
            color="whiteAlpha.800"
            fontSize={{ base: "sm", md: "md" }}
          >
            A Proven methodology that ensures successful project delivery
          </Text>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={{ base: 6, md: 8 }}
            justifyItems="center"
          >
            {[
              {
                title: "01",
                desc: "Discovery",
                content:
                  "We discuss your project requirements, goals, and timeline.",
              },
              {
                title: "02",
                desc: "Planning",
                content:
                  "I create a detailed project plan with milestones and deliverables.",
              },
              {
                title: "03",
                desc: "Development",
                content:
                  "Building your solution with regular updates and feedback sessions.",
              },
              {
                title: "04",
                desc: "Testing",
                content:
                  "Thorough testing to ensure quality and performance standards.",
              },
              {
                title: "05",
                desc: "Deployment",
                content:
                  "Launch your project and provide training and documentation.",
              },
              {
                title: "06",
                desc: "Support",
                content:
                  "Ongoing maintenance and support to keep everything running smoothly.",
              },
            ].map((step, i) => (
              <Box key={i} textAlign="center" maxW="260px" w="100%">
                <Box
                  w="50px"
                  h="50px"
                  borderRadius="full"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="auto"
                  mb={3}
                  boxShadow="md"
                >
                  <Text fontWeight="bold" fontSize="lg" color="white">
                    {step.title}
                  </Text>
                </Box>
                <Text
                  fontWeight="semibold"
                  fontSize={{ base: "sm", md: "md" }}
                  mb={1}
                >
                  {step.desc}
                </Text>
                <Text
                  fontSize={{ base: "xs", md: "sm" }}
                  color="whiteAlpha.800"
                >
                  {step.content}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>

       <Box
  py={{ base: "3em", md: "4em" }}
  px={{ base: 4, md: 8 }}
  textAlign="center"
  bgGradient="linear(to-r, blue.900, purple.900)"
  opacity={0.95}
  rounded="2xl"
>
  <Heading
    fontSize={{ base: "xl", md: "2xl" }}
    mb={2}
  >
    Ready to Start Your Projects?
  </Heading>

  <Text
    maxW="600px"
    mx="auto"
    fontSize={{ base: "sm", md: "md" }}
    color="whiteAlpha.800"
    mb={6}
  >
    Let's work together to bring your ideas to life with cutting-edge technology
  </Text>

  <Flex
    justify="center"
    gap={4}
    direction={{ base: "column", sm: "row" }}
  >
    {/* View My Work */}
    <Button
      size="lg"
      bgGradient="linear(to-r, blue.500, purple.600)"
      color="white"
      px={8}
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
      View My Work
    </Button>

    {/* Get In Touch */}
    <Button
      size="lg"
      variant="outline"
      borderColor="whiteAlpha.400"
      color="white"
      px={8}
      transition="all 0.3s ease"
      _hover={{
        bg: "whiteAlpha.200",
        transform: "translateY(-2px)",
      }}
      _active={{
        bg: "whiteAlpha.300",
      }}
      _focus={{ boxShadow: "none" }}
    >
      Get In Touch
    </Button>
  </Flex>
</Box>


        <Footer />
      </Box>
    </Box>
  );
};

export default Service;
