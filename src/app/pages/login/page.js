import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function page() {
  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(189,208,230,1) 0%, rgba(250,250,250,1) 100%)"
      p={4}
      minH="100vh" // Ensures the background gradient covers the full height of the viewport
    >
      <Heading textAlign="center" mt={8} fontSize="2xl" color="blue.700">
        Login
      </Heading>
    </Box>
  );
}
