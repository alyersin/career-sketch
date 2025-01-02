import Card from "@/Components/Card/Card";
import { Box, Text, Heading, Image, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";

import React from "react";

export default function page() {
  return (
    <Box className="borderRed" maxWidth="1280px" margin="auto">
      <Box
        className="borderBlue"
        display="flex"
        flexDirection="column"
        gap={4}
        margin="0 60px"
        padding="40px 20px"
        textAlign="center"
      >
        <Heading
          as="h2"
          fontSize={{ base: "26px", md: "54px" }}
          fontWeight="bold"
          fontFamily="Roboto Slab, serif"
        >
          Standout resume templates for success
        </Heading>
        <Text fontSize="18px" color="gray.700" mt="4">
          Easy-to-use, professionally designed resume templates to help you land
          your dream job — get started for free today!
          <Text as="span" color="blue.500" fontWeight="600" cursor="pointer">
            &nbsp;&nbsp;&nbsp;Explore later
          </Text>
        </Text>
      </Box>

      <Box
        className="borderBlue"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        padding="20px 0"
        gap={4}
      >
        <Divider borderWidth={1.5} my="8" />
        <Text fontSize={"18px"}>Recommended</Text>
        <Divider borderWidth={1.5} my="8" />
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        <Card
          title="Resume Template 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://via.placeholder.com/300x200"
          buttonText="Download"
        />

        <Card
          title="Resume Template 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://via.placeholder.com/300x200"
          buttonText="Download"
        />

        <Card
          title="Resume Template 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://via.placeholder.com/300x200"
          buttonText="Download"
        />

        <Card
          title="Resume Template 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          image="https://via.placeholder.com/300x200"
          buttonText="Download"
        />
      </Box>

      <Box
        className="borderBlue"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        padding="20px 0"
        gap={4}
      >
        <Divider borderWidth={1.5} my="8" />
        <Text fontSize={"18px"}>All</Text>
        <Divider borderWidth={1.5} my="8" />
      </Box>
    </Box>
  );
}
