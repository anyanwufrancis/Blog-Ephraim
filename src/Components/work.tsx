"use client";

import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  VStack,
  Center,
  Circle,
  HStack,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa6";
import { IoEllipseSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const MotionBox = motion(Box);
const MotionIcon = motion(IoEllipseSharp);
const MotionCircle = motion(Circle);

export const Work = () => {
  return (
    <>
      {/* Header Section */}
        {/* Header Navigation */}
        <Box overflowX="hidden" width="100%">

            <Flex
              alignItems="center"
              justifyContent="space-between"
              p={4}
              bg="white"
              boxShadow="md"
              borderRadius="md"
            >
              {/* Logo */}
              <Flex align="center" gap={2} w="9em" color="green.600">
                <Image src="ahiaoma_text_logo.png" alt="Logo" />
              </Flex>
      
       <Flex gap={6} display={{ base: "none", md: "flex" }}>
        {/* Features Link */}
        <Link href="/">
          <Text
            _hover={{ color: "green.500" }}
            fontWeight="semibold"
            color="gray.700"
            cursor="pointer"
          >
            Home
          </Text>
        </Link>
      
      
        {/* About Us Link */}
        <Link href="/about">
          <Text
            _hover={{ color: "green.500" }}
            fontWeight="semibold"
            color="gray.700"
            cursor="pointer"
          >
            About Us
          </Text>
        </Link>
      
        {/* Contact Us Link */}
        <Link href="/contact">
          <Text
            _hover={{ color: "green.500" }}
            fontWeight="semibold"
            color="gray.700"
            cursor="pointer"
          >
            Contact Us
          </Text>
        </Link>
      </Flex>
      
      
      
              {/* Join Waitlist Button */}
              <Button
                bg="green.600"
                rounded="full"
                px={4}
                py={2}
                color="white"
                _hover={{ bg: "green.700" }}
                display={{ base: "none", md: "block" }}
              >
                Join Waitlist
              </Button>
            </Flex>
      <Box bg="linear-gradient(to top right, #eeeeeeff, #ffffff)"

        mb={"2em"} py={"0.5em"}>
      <Box display="block" textAlign="center" height="15vh" position="relative">
        <Box
          rounded="1em"
          backgroundColor="lightgreen"
          w="7em"
          px="0.5em"
          py="0.1em"
          position="absolute"
          top="79%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Text color="green" textAlign="center" fontSize="md">
            How it Works
          </Text>
        </Box>
      </Box>

      {/* Steps Header */}
      <Flex
        align="center"
        justify="center"
        textAlign="center"
        flexDir="column"
        mb="4em"
        position="relative"
      >
        {/* Floating Animated Ellipses */}
        <MotionBox position="absolute" left="10%" top="65%">
          <MotionIcon
            color={"rgb(70, 116, 161)"}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </MotionBox>

        <MotionBox  position="absolute" right="15%" bottom="60%">
          <MotionIcon
         
            color="aqua"
          //  width={"70em"}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </MotionBox>

        <MotionBox position="absolute" left="5%" top="10%">
          <MotionIcon
          
            color="lightgreen"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </MotionBox>

        <VStack align="center" spacing={4} mt={8}>
          <Heading
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="bolder"
            color="black"
            textAlign="center"
          >
            Simple Steps To Shop Smart
          </Heading>
          <Box
            mt="0.5em"
            fontWeight="normal"
            fontSize="lg"
            w={{ base: "90%", md: "37.5em" }}
            textAlign="center"
            color="gray"
          >
            <Text>
              Discover how easy it is to buy and sell on Ahiaoma. Follow our
              step-by-step guide to get started.
            </Text>
          </Box>
        </VStack>
      </Flex>
</Box>
      {/* Buyer Label */}
      <Center flexDirection="column">
        <Flex
          gap="0.3em"
          w="8em"
          rounded="2em"
          py="0.2em"
          px="0.6em"
          align="center"
          backgroundColor="aqua"
        >
          <Box w="1.3em">
            <Image src="shopping_cart.svg" alt="cart" />
          </Box>
          <Box color="blue" fontWeight="bold" fontSize="md">
            <Text>For Buyers</Text>
          </Box>
        </Flex>

        <Heading fontSize="5xl" mt="0.5em" mb="0.2em" textAlign="center">
          How to Buy on Ahiaoma
        </Heading>

        <Text textAlign="center" color="gray.600" mb="2em">
          From browsing to delivery, here’s your complete buying journey
        </Text>
      </Center>

      {/* Step 1: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}
        <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
              1
            </Circle>
            <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="4xl" mb="0.5em">
              Browse Products
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Explore thousands of products from verified sellers across Nigeria
            </Text>
          </Box>
        </Box>

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="60%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            1
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
              p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/products_page_view_products.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
      </Flex>
      {/* Step 2: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="64%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            2
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
             p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/view_proucts_details.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
        <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              2
            </Circle>
            <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="3xl" mb="0.5em">
              View Product Details
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Check detailed product information, prices, and seller ratings{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* Step 3: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}
        <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              3
            </Circle>
            <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="4xl" mb="0.5em">
              Add to Cart
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Select your desired items and add them to your shopping cart{" "}
            </Text>
          </Box>
        </Box>

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="62%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            3
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
            p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/add_to_your_card.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
      </Flex>
      {/* Step 4: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="64%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            4
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
             p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/chat_seller_and_negotiate.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
        <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              4
            </Circle>
            <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="3xl" mb="0.5em">
              Chat with Seller
            </Heading>
            <Text fontSize="1.1em" color="gray.600">
              Negotiate prices and ask questions directly with the seller
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* Step 5: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}
        <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              5
            </Circle>
            <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="4xl" mb="0.5em">
              Confirm Cart
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Review your art items and proceed to checkout{" "}
            </Text>
          </Box>
        </Box>

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="62%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            5
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
            p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/confirm_cart_items.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
      </Flex>
      {/* Step 6: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="64%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            6
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
             p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/make_payment.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
        <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              6
            </Circle>
            <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="3xl" mb="0.5em">
              Make Payment
            </Heading>
            <Text fontSize="1.1em" color="gray.600">
              Complete your purchase with secure payment options{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
      {/* Step 7: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}
        <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              7
            </Circle>
            <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="4xl" mb="0.5em">
              Track Orders
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Monitor your order status and delivery progress{" "}
            </Text>
          </Box>
        </Box>

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="62%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            7
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
              p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/view_orders.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
      </Flex>
      {/* Step 8: Browse Products */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: "2em", md: "8em" }}
        mt="2em"
        mb="4em"
        position="relative"
      >
        {/* Left Text Section */}

        {/* Right Image Section with bouncing number 1 */}
        <Box
          flex="1"
          textAlign="center"
          mt={{ base: "2em", md: "0" }}
          position="relative"
        >
          {/* Bouncing Number 1 at the Top of Phone */}
          <MotionCircle
            size="3.5em"
            bg="blue.500"
            color="white"
            fontWeight="bold"
            position="absolute"
            top="1.9em"
            left="64%"
            transform="translateX(-50%)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            zIndex="2"
          >
            8
          </MotionCircle>

          {/* Phone container with smooth ease in-out hover effect */}
          <MotionBox
            display="inline-block"
              p="0.7em"
            borderRadius="2.3em"
            backgroundColor="black"
            mt={"3em"}
            boxShadow="xl"
            w={{ base: "17em", md: "13em" }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="ahiaoma_buyer_app_screenshots/reject_or_confirm_receipt.png"
              alt="Browse Products screen"
              borderRadius="1.5em"
              w="100%"
              h={"26em"}
            />
          </MotionBox>
        </Box>
        <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
          <Flex align="center" mb="1.5em">
            <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
              8
            </Circle>
            <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
          </Flex>
          <Box>
            <Heading fontSize="3xl" mb="0.5em">
              Confirm Receipt
            </Heading>
            <Text fontSize="1.1em" color="gray.600">
              Confirm delivery and rate your shopping experience{" "}
            </Text>
          </Box>
        </Box>
      </Flex>
      <Box backgroundColor={"green.50"} py={"2em"}>
        <Box textAlign={"center"}>
          <Box fontSize={"3xl"} fontWeight={"bold"}>
            <Heading>How to Sell on Ahiaoma</Heading>
          </Box>
          <Box fontSize={"xl"} color={"gray.600"}>
            <Text>
              Start your selling journey and reach millions of customers across
              Nigeria
            </Text>
          </Box>
        </Box>
        {/* Step 1: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}
          <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
                1
              </Circle>
              <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="4xl" mb="0.5em">
                Browse Products
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Explore thousands of products from verified sellers across
                Nigeria
              </Text>
            </Box>
          </Box>

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="62%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              1
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
                p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/smart_dashboard_with_dynamic_insights_and_suggestions.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
        </Flex>
        {/* Step 2: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="64%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              2
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
               p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/get_access_to_quick_actions_and_recent_activities.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
          <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
                2
              </Circle>
              <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="3xl" mb="0.5em">
                Make Payment
              </Heading>
              <Text fontSize="1.1em" color="gray.600">
                Complete your purchase with secure payment options{" "}
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Step 3: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}
          <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
                3
              </Circle>
              <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="4xl" mb="0.5em">
                Browse Products
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Explore thousands of products from verified sellers across
                Nigeria
              </Text>
            </Box>
          </Box>

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="62%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              3
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
               p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/list_product.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
        </Flex>
        {/* Step 4: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="64%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              4
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_incoming_orders.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
          <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
                4
              </Circle>
              <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="3xl" mb="0.5em">
                Make Payment
              </Heading>
              <Text fontSize="1.1em" color="gray.600">
                Complete your purchase with secure payment options{" "}
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Step 5: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}
          <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
                5
              </Circle>
              <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="4xl" mb="0.5em">
                Browse Products
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Explore thousands of products from verified sellers across
                Nigeria
              </Text>
            </Box>
          </Box>

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="62%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              5
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_reject_or_confirm_order.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
        </Flex>
        {/* Step 6: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="64%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              6
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_detailed_order_information.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
          <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
                6
              </Circle>
              <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="3xl" mb="0.5em">
                Make Payment
              </Heading>
              <Text fontSize="1.1em" color="gray.600">
                Complete your purchase with secure payment options{" "}
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Step 7: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}
          <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
                7
              </Circle>
              <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="4xl" mb="0.5em">
                Browse Products
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Explore thousands of products from verified sellers across
                Nigeria
              </Text>
            </Box>
          </Box>

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="62%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              7
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_buyer_detail.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
        </Flex>
        {/* Step 8: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="64%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              8
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_real_time_performance.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
          <Box ml={"9em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="3em" bg="green.400" color="white" fontWeight="bold">
                8
              </Circle>
              <Box h="4px" w="4em" bg="green.400" rounded={"1em"} ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="3xl" mb="0.5em">
                Make Payment
              </Heading>
              <Text fontSize="1.1em" color="gray.600">
                Complete your purchase with secure payment options{" "}
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Step 9: Browse Products */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "2em", md: "8em" }}
          mt="2em"
          mb="4em"
          position="relative"
        >
          {/* Left Text Section */}
          <Box ml={"-3em"} flex="1" textAlign={{ base: "center", md: "left" }}>
            <Flex align="center" mb="1.5em">
              <Circle size="2em" bg="green.400" color="white" fontWeight="bold">
                9
              </Circle>
              <Box h="2px" w="4em" bg="green.400" ml="0.5em" />
            </Flex>
            <Box>
              <Heading fontSize="4xl" mb="0.5em">
                Browse Products
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Explore thousands of products from verified sellers across
                Nigeria
              </Text>
            </Box>
          </Box>

          {/* Right Image Section with bouncing number 1 */}
          <Box
            flex="1"
            textAlign="center"
            mt={{ base: "2em", md: "0" }}
            position="relative"
          >
            {/* Bouncing Number 1 at the Top of Phone */}
            <MotionCircle
              size="3.5em"
              bg="blue.500"
              color="white"
              fontWeight="bold"
              position="absolute"
              top="1.9em"
              left="62%"
              transform="translateX(-50%)"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              zIndex="2"
            >
              9
            </MotionCircle>

            {/* Phone container with smooth ease in-out hover effect */}
            <MotionBox
              display="inline-block"
              p="0.7em"
              borderRadius="2.3em"
              backgroundColor="black"
              mt={"3em"}
              boxShadow="xl"
              w={{ base: "17em", md: "13em" }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="seller_screenshots/view_processed_orders.png"
                alt="Browse Products screen"
                borderRadius="1.5em"
                w="100%"
                h={"26em"}
              />
            </MotionBox>
          </Box>
        </Flex>
      </Box>
         {/* Footer */}
            <Box bg="#000" color={"gray.300"} p={8} fontFamily="Arial, sans-serif">
              <Flex justify="space-between" gap={"3em"} flexWrap="wrap" maxW="1200px" mx="auto">
                {/* About Section */}
                <Box flex="1" minW="200px" mb={4}>
                  <Text fontWeight="bold" fontSize="xl" color="#00C853">
                    Ahiaoma
                  </Text>
                  <Text mt={2}  fontSize="xl" w={"29em"}>
                    Nigeria's premier marketplace connecting millions of buyers and
                    sellers. Shop with confidence, sell with ease.
                  </Text>
                  <Flex mt={4} gap={3}>
                    <Box bg="#3b5998" borderRadius="50%" p={2}>
                      <Image src="facebook.svg" boxSize="40px" borderRadius="50%" />
                    </Box>
                    <Box bg="#E1306C" borderRadius="50%" p={2}>
                      <Image src="instagram.svg" boxSize="40px" borderRadius="50%" />
                    </Box>
                    <Box bg="#1DA1F2" borderRadius="50%" p={2}>
                      <Image src="x_icon_twitter.svg" boxSize="40px" borderRadius="50%" />
                    </Box>
                  </Flex>
                </Box>
      
                {/* Quick Links */}
                <Box minW="200px" mb={4}>
                  <Text fontWeight="bold" color={"white"} fontSize="lg" mb={4}>
                    Quick Links
                  </Text>
                  <VStack align="start" gap={2}>
                    <Text cursor="pointer" fontSize="sm">
                      About Us
                    </Text>
                    <Text cursor="pointer" fontSize="sm">
                      How It Works
                    </Text>
                    <Text cursor="pointer" fontSize="sm">
                      Seller Center
                    </Text>
                    <Text cursor="pointer" fontSize="sm">
                      Help Center
                    </Text>
                  </VStack>
                </Box>
      
                {/* Contact */}
                <Box  minW="200px" mb={4}>
                  <Text fontWeight="bold" color={"white"} fontSize="lg" mb={4}>
                    Contact
                  </Text>
                  <VStack align="start" gap={2}>
                    <HStack align="center" gap={2}>
                      <Box bg="#4CAF50" p={2} borderRadius="md">
                        <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
                      </Box>
                      <Text fontSize="sm">ahiaoma37@gmail.com</Text>
                    </HStack>
                    <HStack align="center" gap={2}>
                      <Box bg="#2196F3" p={2} borderRadius="md">
                        <Icon as={FaPhone} color="#fff" boxSize={4} />
                      </Box>
                      <Text fontSize="sm">+234 907 940 5147</Text>
                    </HStack>
                  </VStack>
                </Box>
              </Flex>
              <Box border={"1px"} ml={"3em"} w={"75em"} borderColor={" grey"}  h={"-0.1em"} />
              <Flex fontSize={"xs"} gap={"2em"} mt={"1em"}>
              <Text ml={"3.5em"} fontSize="sm">
                © 2025 Ahiaoma. All rights reserved.
              </Text>
              <Text ml={"55em"}>Privacy Policy</Text>
              <Text>Terms of Policy</Text>
              <Text>Cookies and Policy</Text>
            </Flex>
            </Box>
        </Box>
    </>
  );
};
