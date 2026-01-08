"use client";

import {
  Box,
  Text,
  Heading,
  Flex,
  Grid,
  Progress,
  Stack,
} from "@chakra-ui/react";
import Header from "./shared/header";
import Footer from "./shared/footer";

export default function About() {
  const skills = [
    { name: "Flutter/Dart", value: 90 },
    { name: "Next.js", value: 80 },
    { name: "Node.js", value: 85 },
    { name: "Python", value: 86 },
    { name: "TypeScript", value: 90 },
    { name: "PostgreSQL", value: 85 },
  ];

  return (
    <>
      <Header />
    <Box
      bg="linear-gradient(135deg, #05070F, #0A0F24)"
      color="white"
      py={{ base: "4em", md: "6em" }}
      px={{ base: "1.5em", md: "5em" }}
    >
      {/* TOP SECTION */}
      <Grid
        templateColumns={{ base: "1fr", md: "1.2fr 1fr" }}
        gap={10}
        alignItems="center"
      >
        {/* LEFT CONTENT */}
        <Box>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
            About Me
          </Heading>

          <Text color="whiteAlpha.800" lineHeight="1.8" maxW="600px">
            Hi, I’m Ephraim Umunnakwe, but most people know me as King Raym.
            I’m a Flutter-focused mobile developer from Nigeria, passionate
            about turning ideas into beautiful, functional apps. Through
            Raym Universe, I bring creativity and precision together to
            build digital experiences that inspire, solve problems, and
            stand out.
          </Text>

          {/* STATS */}
          <Flex gap={6} mt={8} flexWrap="wrap">
            <Box
              bg="whiteAlpha.100"
              px={6}
              py={4}
              rounded="lg"
              textAlign="center"
              minW="150px"
            >
              <Heading fontSize="2xl" color="blue.400">
                20+
              </Heading>
              <Text fontSize="sm" color="whiteAlpha.700">
                Projects
              </Text>
            </Box>

            <Box
              bg="whiteAlpha.100"
              px={6}
              py={4}
              rounded="lg"
              textAlign="center"
              minW="150px"
            >
              <Heading fontSize="2xl" color="green.400">
                8+
              </Heading>
              <Text fontSize="sm" color="whiteAlpha.700">
                Years Experience
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* RIGHT CIRCLE */}
        <Flex justify="center">
          <Box
            w={{ base: "220px", md: "280px" }}
            h={{ base: "220px", md: "280px" }}
            rounded="full"
            bg="linear-gradient(135deg, #4F7CFF, #8A2BE2)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            fontSize="lg"
            color="whiteAlpha.900"
          >
            Umunnakwe
          </Box>
        </Flex>
      </Grid>

      {/* SKILLS SECTION */}
      <Box mt="6em">
        <Heading textAlign="center" mb={8}>
          Skills & Expertise
        </Heading>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          maxW="1000px"
          mx="auto"
        >
          {skills.map((skill) => (
            <Box
              key={skill.name}
              bg="whiteAlpha.100"
              p={5}
              rounded="lg"
            >
              <Flex justify="space-between" mb={2}>
                <Text fontWeight="medium">{skill.name}</Text>
                <Text color="blue.400">{skill.value}%</Text>
              </Flex>

              <Progress
                value={skill.value}
                height="6px"
                rounded="full"
                bg="whiteAlpha.200"
                sx={{
                  "& > div": {
                    background:
                      "linear-gradient(90deg, #4F7CFF, #8A2BE2)",
                  },
                }}
              />

            </Box>
          ))}
        </Grid>
      </Box>
      {/* RECENT EXPERIENCES */}
<Box mt="7em">
  <Heading textAlign="center" mb={12}>
    Recent Experiences
  </Heading>

  <Stack spacing={6} maxW="1100px" mx="auto">
    {[
      {
        role: "Flutter Developer",
        company: "Coder's Triangle",
        date: "Apr 2025 – Present",
        desc: `Collaborated with a cross-functional team to maintain and enhance "Confide" (Social Media App) and "CTLearn" (Ed-Tech Platform). Integrated push and in-app notifications using Firebase Cloud Messaging, improving user engagement by 25%. Implemented secure user authentication and optimized app performance, reducing ANR rates to below 0.5%.`,
      },
      {
        role: "Senior Flutter Developer",
        company: "Xeno Technologies",
        date: "Oct 2023 – Jan 2025",
        desc: `Developed and maintained a cross-platform crypto mining application using Flutter, achieving over 150k installations and 17k+ daily active users. Implemented JWT-based authentication, notifications using FCM and OneSignal, and CRUD API operations. Optimized app performance to achieve less than 1% ANR reports and a 4.0 rating on the Play Store.`,
      },
      {
        role: "Flutter Developer",
        company: "ProjKonnect",
        date: "Apr 2023 – Nov 2024",
        desc: `Built a scalable Ed-Tech Flutter application with features like notifications, chat, video streaming, media download, and payment integration. Deployed on Play Store and App Store; currently runs on over 500 devices nationwide. Integrated Paystack for in-app purchases and secured user data using encryption algorithms.`,
      },
    ].map((exp, index) => (
      <Box
        key={index}
        position="relative"
        bg="whiteAlpha.100"
        backdropFilter="blur(8px)"
        rounded="lg"
        p={{ base: 5, md: 6 }}
        pl={{ base: 5, md: 6 }}
        _hover={{ bg: "whiteAlpha.200" }}
      >
        {/* Left accent line */}
        <Box
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          w="4px"
          bg="linear-gradient(to bottom, #4F7CFF, #8A2BE2)"
          roundedLeft="lg"
        />

        {/* Header */}
        <Flex
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          flexDir={{ base: "column", md: "row" }}
          mb={3}
        >
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {exp.role}
            </Text>
            <Text color="blue.400" fontSize="sm">
              {exp.company}
            </Text>
          </Box>

          <Text fontSize="sm" color="whiteAlpha.700" mt={{ base: 2, md: 0 }}>
            {exp.date}
          </Text>
        </Flex>

        {/* Description */}
        <Text
          fontSize="sm"
          lineHeight="1.8"
          color="whiteAlpha.800"
          maxW="95%"
        >
          {exp.desc}
        </Text>
      </Box>
    ))}
  </Stack>
</Box>

    </Box>
    <Footer />
    </>
  );
}
