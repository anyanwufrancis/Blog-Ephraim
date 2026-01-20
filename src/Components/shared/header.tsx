import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiX, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Project", path: "/project" },
    { label: "Service", path: "/service" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Box position="relative" w="100%" bg="gray.900" color="white">
      {/* Header Navigation */}
      <Flex
        align="center"
        justify="space-between"
        p={4}
        bg="gray.900"
        boxShadow="lg"
        flexWrap="wrap"
        position="relative"
      >
        {/* Logo */}
        <Flex align="center" gap={2} w="9em">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Ephraim
          </Text>
        </Flex>

        {/* Desktop Menu */}
        <Flex gap={6} display={{ base: "none", md: "flex" }} flexWrap="wrap">
          {navItems.map((item) => (
            <ChakraLink
              key={item.label}
              as={RouterLink}
              to={item.path}
              _hover={{ textDecoration: "none", color: "teal.400" }}
              fontWeight="semibold"
              color="gray.200"
            >
              {item.label}
            </ChakraLink>
          ))}
        </Flex>

        {/* Mobile Menu Icon */}
        {!isOpen && (
          <Box
            display={{ base: "block", md: "none" }}
            position="absolute"
            top={4}
            right={4}
            zIndex={20}
            cursor="pointer"
            w="2em"
            h="3em"
            alignItems="center"
            justifyContent="center"
          >
            <FiMenu
              size={28}
              color="white"
              onClick={toggleDropdown}
            />
          </Box>
        )}
      </Flex>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={15}
          bg="gray.800"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          px={4}
          py={6}
          color="white"
        >
          <Flex justify="space-between" mb={6} align="center">
            <Text fontSize="2xl" fontWeight="bold" color="white">
              Ephraim
            </Text>
            <Box cursor="pointer" onClick={toggleDropdown}>
              <FiX size={28} color="white" />
            </Box>
          </Flex>

          <Flex direction="column" gap={4}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.label}
                as={RouterLink}
                to={item.path}
                _hover={{ textDecoration: "none", color: "teal.400" }}
                fontWeight="semibold"
                color="gray.200"
                onClick={toggleDropdown}
              >
                {item.label}
              </ChakraLink>
            ))}
          </Flex>
        </MotionBox>
      )}
    </Box>
  );
};

export default Header;
