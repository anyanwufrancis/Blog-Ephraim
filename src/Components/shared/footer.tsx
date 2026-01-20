import { Flex, Box, Heading, Text, Divider, Link } from '@chakra-ui/react'
// import { Links } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Flex
        fontSize="md"
        color="gray.400"
        backgroundColor="blackAlpha.900"
        gap="2em"
        flexDirection="column"
        // alignItems="center"
        padding="2em"
        mt={"2em"}
      >
        <Flex
          width="100%"
          maxW="1200px"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box flex="1" minWidth="250px" textAlign={"left"}>
            <Heading>Ephraim Umunnakwe</Heading>
            <Text w="38em" mt="1em">
              Hi, I’m Ephraim Umunnakwe, but most people know me as King Raym. I’m a
              Mobile developer from Nigeria, passionate about turning ideas into
              beautiful, functional apps. Through Raym Universe, I bring creativity
              and precision together to build digital experiences that inspire,
              solve problems, and stand out.
            </Text>
          </Box>
          <Box mt="1em" textAlign="left" ml="3em" minWidth="150px">
            <Heading fontSize="lg">Quick Links</Heading>
            <Link href="/about  ">
            <Text mt="0.5em">About</Text>
            </Link>
            <Link href='/project'>
            <Text mt="0.5em">Project</Text>         
            </Link>
            <Link href='/service'>         
            <Text mt="0.5em">Service</Text>
            </Link>
            <Link href='/contact'>
            <Text mt="0.5em">Contact</Text>  
            </Link>
          </Box>
          <Box mt="1em" textAlign="left" ml="3em" minWidth="150px">
            <Heading fontSize="lg">Services</Heading>
            <Text mt="0.5em">Web Development</Text>
            <Text mt="0.5em">Mobile Apps</Text>
            <Text mt="0.5em">API Development</Text>
            <Text mt="0.5em">Consulting</Text>
          </Box>
        </Flex>
        {/* Horizontal line */}
        <Divider w="100%" borderColor="gray.600" my="2em" />
        {/* Centered copyright */}
        <Text textAlign="center" fontSize="sm" color="gray.500">
          © 2026 Ephraim Umunnakwe. All rights reserved.
        </Text>
      </Flex>
    </>
  )
}

export default Footer;