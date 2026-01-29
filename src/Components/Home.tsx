"use client";

import { useEffect,  useState } from "react";
import {
  Box,
  Flex,
  Text,

  Heading,
  Button,
  Icon,
  Image,
  Grid,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import { BsMouse } from "react-icons/bs";
import { motion } from "framer-motion";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";
import Footer from "./shared/footer";
import Header from "./shared/header";
const MotionIcon = motion(Icon);

const slides = [
  {
    initials: "C",
    name: "Chinaemerem U",
    role: "Owner @IOSPINE",
    text: "I hired Ephraim U. as a Flutter developer and CTO to help in building our company mobile application. He handled everything from scratch to launch.",
  },
  {
    initials: "E",
    name: "Emmanuel O",
    role: "Senior Product Designer",
    text: "Working with Ephraim was a great experience. He’s professional, skilled, and very reliable.",
  },
  {
    initials: "E",
    name: "Ezediniru D",
    role: "Product Designer @RaymUniverse",
    text: "Ephraim consistently delivers high-quality, scalable projects following clean coding standards.",
  },
  {
    initials: "C",
    name: "Chinonso I",
    role: "Lead Engineer @Forextainment",
    text: "He connected our Flutter app to Firebase and resolved dependency issues efficiently.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const duration = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box mx="auto">
      <Header />
      {/* HERO SECTION */}
      <Box
        minH="100vh"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        px={{ base: 4, md: 6 }}
        bgGradient="linear(to-br, #0B1026, #1A0B3C, #2A0E5E)"
        color="white"
      >
        <Box maxW="900px" w="100%">
          {/* Badge */}
          <Box
            w="90px"
            h="90px"
            mx="auto"
            mb={6}
            rounded="full"
            bgGradient="linear(to-r, blue.400, purple.500)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="2xl"
          >
            EU
          </Box>

          <Heading fontSize={{ base: "3xl", md: "5xl" }} mb={4}>
            Hi, I'm{" "}
            <Box
              as="span"
              bgGradient="linear(to-r, blue.400, purple.400)"
              bgClip="text"
            >
              Ephraim Umunnakwe
            </Box>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            mb={6}
          >
            Software Engineer
          </Text>

          <Text
            maxW="800px"
            mx="auto"
            fontSize={{ base: "md", md: "lg" }}
            color="whiteAlpha.700"
            lineHeight="1.8"
            mb={10}
          >
            Hi, I’m Ephraim Umunnakwe, but most people know me as King Raym. I’m
            a Mobile developer from Nigeria, passionate about turning ideas into
            beautiful, functional apps. Through Raym Universe, I bring
            creativity and precision together to build digital experiences that
            inspire, solve problems, and stand out.
          </Text>

          {/* Buttons */}
          <Flex justify="center" gap={4} flexWrap="wrap" mb={12}>
            <Button
              size="lg"
              bgGradient="linear(to-r, blue.400, purple.500)"
              color="white"
              _hover={{ opacity: 0.9 }}
            >
              View My Work
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="whiteAlpha.400"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Get In Touch
            </Button>
          </Flex>

          {/* Motion Mouse */}
          <MotionIcon
            as={BsMouse}
            boxSize={8}
            color="whiteAlpha.700"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </Box>
       <Button
       position={"absolute"}
       top={"15em"}
       left={"75em"}
          bg="#2b6cb0" // or use colorScheme="blue"
          color="#fff"
          _hover={{ bg: "#2c5282" }}
          // leftIcon={<span className="material-icons">refresh</span>}
          onClick={() => window.location.reload()}
        >
          Please Refresh
        </Button>
      </Box>

      {/* TECHNICAL EXPERTISE */}
      <Box backgroundColor={"blackAlpha.900"}>
        <Box color={"white"}py={"4em"} mt={"0em"}>
          <Heading textAlign="center" mb={10}>
            Technical Expertise
          </Heading>
          <Text mb={"2em"} textAlign={"center"}>
            I specialize in mobile and web development with a focus on creating
            scalable, user-friendly applications.
          </Text>
          <Grid mx={"auto"} templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} w={{base:"19em",md:"55em"}} gap={6}>
            {[
              {
                title: "Mobile Development",
                icon: "/mobile.png",
                desc: "Flutter & Dart applications",
                tools: ["Flutter", "Dart", "Firebase"],
              },
              {
                title: "Web Development",
                icon: <CiGlobe size="2.5em" />,
                desc: "Modern React & Next.js apps",
                tools: ["React", "Next.js", "TypeScript"],
              },
              {
                title: "Backend & Cloud",
                icon: <AiOutlineThunderbolt size="2.5em" />,
                desc: "Scalable APIs & services",
                tools: ["Node.js", "Supabase", "REST"],
              },
            ].map((card, i) => (
              <Box
                key={i}
                border="1px solid"
                borderColor="gray.200"
                rounded="lg"
                p={5}
                textAlign="center"
              >
                {typeof card.icon === "string" ? (
                  <Image src={card.icon} w="50px" mx="auto" mb={3} />
                ) : (
                  <Box mb={3}>{card.icon}</Box>
                )}

                <Heading fontSize="lg">{card.title}</Heading>
                <Text fontSize="sm" color="gray.600" mt={2}>
                  {card.desc}
                </Text>

                <HStack justify="center" spacing={3} mt={3} wrap="wrap">
                  {card.tools.map((tool) => (
                    <Text key={tool} fontSize="sm" color="blue.500">
                      {tool}
                    </Text>
                  ))}
                </HStack>
              </Box>
            ))}
          </Grid>
        </Box>

{/* TESTIMONIALS */}
<Box color="white" mt={24} textAlign="center">
  <Heading mb={2}>What Clients Say</Heading>
  <Text mb={10} color="white">
    Feedback from people I’ve worked with
  </Text>

  <GridItem
    display="flex"
    justifyContent="center"
    rounded="2xl"
    p={{ base: 6, md: 10 }}
    color="white"
    position="relative"
    overflow="hidden"
  >
    <Box
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
      rounded="2xl"
      p={6}
      maxW="500px"
      textAlign="center"
      boxShadow="2xl"
    >
      {/* Quote icon at top */}
      <Box mb={4}>
        <Icon as={FaQuoteLeft} boxSize={8} color="whiteAlpha.700" />
      </Box>
      {/* 5 Stars */}
      <HStack justify="center" spacing={1} mb={3}>
        {[...Array(5)].map((_, i) => (
          <Icon key={i} as={FaStar} color="yellow.400" />
        ))}
      </HStack>
      {/* Testimonial text */}
      <Text mb={4} fontStyle="italic">
        {slides[current].text}
      </Text>

      {/* Initials and Name/Role in Row */}
      <Flex align="center" justify="center" gap={4} mt={4}>
        {/* Initials circle */}
        <Box
          w="50px"
          h="50px"
          rounded="full"
          bg="whiteAlpha.300"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          fontSize="xl"
          flexShrink={0} // prevents compression
        >
          {slides[current].initials}
        </Box>

        {/* Name and Role */}
        <Box textAlign="left">
          <Text fontWeight="bold" mb={1}>
            {slides[current].name}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.700">
            {slides[current].role}
          </Text>
        </Box>
      </Flex>
    </Box>
  </GridItem>

  {/* DOTS */}
  <HStack justify="center" mt={6}>
    {slides.map((_, i) => (
      <Box
        key={i}
        w="10px"
        h="10px"
        mb="2em"
        rounded="full"
        bg={i === current ? "blue.400" : "gray.300"}
        cursor="pointer"
        onClick={() => setCurrent(i)}
      />
    ))}
  </HStack>
</Box>



      </Box>
      <Box
        py={"2em"}
        // mt={"2em"}
        mb={"-2em"}
        h={"13em"}
        textAlign={"center"}
        bgGradient="linear(to-r, blue.500, purple.600)"
      >
        <Heading>Ready to Start Your Projects?</Heading>
        <Text>
          Let's work together to bring your ideas to life with cutting-edge
          technology{" "}
        </Text>
        <Button
          size="lg"
          bgGradient="linear(to-r, blue.400, purple.500)"
          color="white"
          _hover={{ opacity: 0.9 }}
        >
          View My Work
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}
