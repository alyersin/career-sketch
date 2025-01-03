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
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
