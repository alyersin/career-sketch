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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const isLoginPage = usePathname();
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
      py={{ base: 4, md: 6 }}
      px={{ base: 4, md: 10 }}
    >
      <Box className="borderGreen" width="fit-content">
        <Link href="/" passHref>
          <Image src="/logo-2.png" alt="logo" width={180} height={140} />
        </Link>
      </Box>

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={<HamburgerIcon />}
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          aria-label="Open menu"
        />
      </Box>

      {isLoginPage !== "/pages/login" && (
        <Box
          className="borderGreen"
          display={{ base: "none", md: "flex" }}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={{ base: 4, md: 8 }}
        >
          <Link href="/pages/contact-us/" passHref>
            <Button
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              padding={{ base: "6px 12px", md: "8px 16px", lg: "10px 20px" }}
              colorScheme="blue"
              variant="outline"
            >
              Contact us
            </Button>
          </Link>

          <Link href="/pages/login/" passHref>
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
        </Box>
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Link href="/pages/contact-us/" passHref>
                <Button
                  width="100%"
                  colorScheme="blue"
                  variant="outline"
                  onClick={onClose}
                >
                  Contact us
                </Button>
              </Link>

              <Link href="/pages/login/" passHref>
                <Button
                  width="100%"
                  bgColor="#05A2FF"
                  color="white"
                  _hover={{ bgColor: "#047ACC" }}
                  onClick={onClose}
                >
                  Login
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
