import { Box, Button } from "@chakra-ui/react";
import Link from "next/link"; // Import Link from Next.js
import React from "react";
import "/src/app/globals.css";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      className="borderBlue"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth={1280}
      mx="auto"
      py={6}
      px={10}
    >
      <Box className="borderGreen" width="fit-content">
        <Link href="/" passHref>
          <Image src="/logo-2.png" alt="logo" width={180} height={140} />
        </Link>
      </Box>

      <Box
        className="borderGreen"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
      >
        <Link href="/pages/contact-us/" passHref>
          {/* Remove `as="a"` and let Link handle the navigation */}
          <Button colorScheme="blue" variant="outline">
            Contact us
          </Button>
        </Link>
        <Link href="/pages/login/" passHref>
          <Button bgColor="#05A2FF" color="white">
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
