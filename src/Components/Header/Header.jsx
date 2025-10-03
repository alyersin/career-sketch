"use client";

import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box
      className="borderBlue"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth={1280}
      mx="auto"
      py={{ base: 1, md: 3 }}
      px={{ base: 4, md: 10 }}
    >
      {/* Logo Section */}
      <Box className="borderGreen" width="fit-content">
        <Link href="/" passHref>
          <Image src="/logo1234.png" alt="logo" width={200} height={20} />
        </Link>
      </Box>

      {/* Hamburger Menu for Small Screens */}
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          aria-label="Open menu"
        />
      </Box>

      {/* Main Navigation for Larger Screens */}
      <Box
        className="borderGreen"
        display={{ base: "none", md: "flex" }}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={{ base: 4, md: 8 }}
      >
        {/* Smooth Scrolling "Contact Us" Button */}
        <ScrollLink
          to="contact-us" // Target the section with id="contact-us"
          smooth={true}
          duration={800} // Smooth scrolling duration (in ms)
          offset={-50} // Optional offset to adjust position
        >
          <Button
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            padding={{ base: "6px 12px", md: "8px 16px", lg: "10px 20px" }}
            colorScheme="blue"
            variant="outline"
            transition="all 0.2s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              bg: "blue.500",
              color: "white",
            }}
          >
            Contact us
          </Button>
        </ScrollLink>

        {/* User Menu */}
        {session ? (
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                name={session.user.name}
                src={session.user.image}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href="/pages/profile/" passHref>
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/pages/cv/" passHref>
                  CV
                </Link>
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link href="/pages/login" passHref>
            <Button
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              padding={{ base: "6px 12px", md: "8px 16px", lg: "10px 20px" }}
              bgColor="#05A2FF"
              color="white"
              _hover={{ bgColor: "#047ACC" }}
            >
              Login
            </Button>
          </Link>
        )}
      </Box>

      {/* Drawer for Small Screens */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              {/* Drawer "Contact Us" Button */}
              <ScrollLink
                to="contact-us"
                smooth={true}
                duration={800}
                offset={-50}
                onClick={onClose}
              >
                <Button width="100%" colorScheme="blue" variant="outline">
                  Contact us
                </Button>
              </ScrollLink>

              {/* Drawer User Menu */}
              {session ? (
                <>
                  <Link href="/pages/profile/" passHref>
                    <Button width="100%" onClick={onClose}>
                      Profile
                    </Button>
                  </Link>
                  <Link href="/pages/cv/" passHref>
                    <Button width="100%" onClick={onClose}>
                      CV
                    </Button>
                  </Link>
                  <Button
                    width="100%"
                    colorScheme="blue"
                    onClick={() => signOut()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  width="100%"
                  bgColor="#05A2FF"
                  color="white"
                  _hover={{ bgColor: "#047ACC" }}
                  onClick={() => signIn()}
                >
                  Login
                </Button>
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
