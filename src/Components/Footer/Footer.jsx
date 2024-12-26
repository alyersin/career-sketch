import { Box } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
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
      <Box
        className="borderGreen"
        textAlign="center"
        fontSize="sm"
        color="gray.500"
        py={4}
      >
        © {new Date().getFullYear()} Ersin. All rights reserved.
        <br />
        This app is a personal project created for academic purposes and to
        showcase my skills. It is not intended for commercial use or public
        distribution.
        <br />
        All trademarks, logos, and brand names are the property of their
        respective owners. No data is collected or stored by this app. The
        creator is not responsible for any misuse of this project.
      </Box>
    </Box>
  );
}
