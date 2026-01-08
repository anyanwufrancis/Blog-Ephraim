// import {
//   Box,
//   Flex,
//   HStack,
//   Link as ChakraLink,
//   IconButton,
//   Image,
//   Text,
//   Icon,
//   useDisclosure,
//   useColorModeValue,
//   Drawer,
//   DrawerBody,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   VStack,
//   Divider,
// } from "@chakra-ui/react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaClock,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const navItems = ["About", "Contact", "Gallery", "Blog", "Login"];

// const Header = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const linkColor = useColorModeValue("gray.700", "gray.100");
//   const hoverColor = "blue.600";
//   const bgColor = useColorModeValue("white", "gray.900");

//   return (
//     <Box
//       w="100%"
//       position="sticky"
//       top="0"
//       zIndex="1000"
//       boxShadow="md"
//       bg={bgColor}
//     >
//       {/* ===== Navbar ===== */}
//       <Flex
//         justify="space-between"
//         align="center"
//         px={{ base: 4, md: 4 }}
//         py={1}
//         bg={bgColor}
//       >
//         <Image
//           src="src/assets/benny_logo_300x300.png"
//           alt="Benny Schools Logo"
//           boxSize="80px"
//           objectFit="contain"
//         />

//         {/* Desktop Nav */}
//         <HStack
//           as="nav"
//           spacing={{ base: 8, md: 14 }}
//           fontWeight="medium"
//           fontSize="xl"
//           display={{ base: "none", md: "flex" }}
//         >
//           {navItems.map((item) => (
//             <NavLink key={item} to={`/${item.toLowerCase()}`}>
//               {({ isActive }: { isActive: boolean }) => (
//                 <ChakraLink
//                   position="relative"
//                   px={2}
//                   py={1}
//                   borderRadius="md"
//                   color={isActive ? "blue.600" : linkColor}
//                   _hover={{ color: hoverColor, textDecoration: "none" }}
//                   transition="color 0.2s ease"
//                   _after={{
//                     content: '""',
//                     position: "absolute",
//                     bottom: "-3px",
//                     left: 0,
//                     width: isActive ? "100%" : "0%",
//                     height: "2px",
//                     bg: "blue.600",
//                     transition: "width 0.3s ease",
//                   }}
//                 >
//                   {item}
//                 </ChakraLink>
//               )}
//             </NavLink>
//           ))}
//         </HStack>

//         {/* Mobile Hamburger */}
//         <IconButton
//           aria-label="Toggle Menu"
//           icon={isOpen ? <FaTimes /> : <FaBars />}
//           display={{ base: "flex", md: "none" }}
//           onClick={isOpen ? onClose : onOpen}
//           variant="ghost"
//           fontSize="24px"
//         />
//       </Flex>

//       {/* ===== Mobile Drawer ===== */}
//       <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth="1px">
//             <Flex align="center" gap={3}>
//               <Image src="src/assets/benny_logo_300x300.png" alt="Logo" boxSize="50px" objectFit="contain" />
//               <Text fontWeight="bold" color="blue.600">
//                 Benny Int’l Schools
//               </Text>
//             </Flex>
//           </DrawerHeader>

//           <DrawerBody>
//             <VStack align="start" spacing={4} mt={4}>
//               {navItems.map((item) => (
//                 <NavLink key={item} to={`/${item.toLowerCase()}`}>
//                   {({ isActive }: { isActive: boolean }) => (
//                     <Box w="100%">
//                       <ChakraLink
//                         display="block"
//                         py={2}
//                         w="100%"
//                         color={isActive ? "blue.600" : linkColor}
//                         onClick={onClose}
//                         _hover={{ color: hoverColor, textDecoration: "none" }}
//                         borderLeft={isActive ? "4px solid #3182ce" : "4px solid transparent"}
//                         pl={2}
//                         transition="all 0.3s ease"
//                       >
//                         {item}
//                       </ChakraLink>
//                       <Divider />
//                     </Box>
//                   )}
//                 </NavLink>
//               ))}
//             </VStack>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// };

// export default Header;
