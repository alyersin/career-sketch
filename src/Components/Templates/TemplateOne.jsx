"use client";

import React from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function TemplateOne() {
  return (
    <Box
      maxWidth="960px"
      mx="auto"
      py={8}
      px={4}
      border="1px solid #E2E8F0"
      borderRadius="md"
    >
      {/* Header Section */}
      <Box textAlign="center" mb={8}>
        <Heading as="h1" size="lg" fontWeight="bold" mb={4}>
          CV Builder
        </Heading>
        <HStack spacing={4}>
          <Input placeholder="Full Name" />
          <Input placeholder="Job Title (e.g., Web Developer)" />
        </HStack>
        <HStack spacing={4} mt={4}>
          <Input placeholder="Location (e.g., City, Country)" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
        </HStack>
        <Input placeholder="LinkedIn Profile (Optional)" mt={4} />
      </Box>

      {/* Work Experience Section */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Work Experience
        </Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <Input placeholder="Job Title (e.g., Software Engineer)" />
            <Input placeholder="Company Name" mt={2} />
            <Input placeholder="Dates (e.g., Jun 2022 - Present)" mt={2} />
            <Textarea placeholder="Responsibilities and Achievements" mt={2} />
          </Box>
          <Button colorScheme="blue" mt={4}>
            Add Another Work Experience
          </Button>
        </VStack>
      </Box>

      {/* Education Section */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Education
        </Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <Input placeholder="Degree (e.g., Computer Science)" />
            <Input placeholder="Institution Name" mt={2} />
            <Input placeholder="Dates (e.g., Sep 2019 - Jun 2023)" mt={2} />
          </Box>
          <Button colorScheme="blue" mt={4}>
            Add Another Education
          </Button>
        </VStack>
      </Box>

      {/* Digital Skills Section */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Digital Skills
        </Heading>
        <Textarea placeholder="List your digital skills (e.g., React.js, Node.js, MySQL)" />
      </Box>

      {/* Language Skills Section */}
      <Box mb={8}>
        <Heading as="h2" size="md" mb={4}>
          Language Skills
        </Heading>
        <VStack spacing={4} align="stretch">
          <Box>
            <Input placeholder="Language (e.g., English)" />
            <Input
              placeholder="Proficiency (e.g., Listening: C1, Reading: C1)"
              mt={2}
            />
          </Box>
          <Button colorScheme="blue" mt={4}>
            Add Another Language
          </Button>
        </VStack>
      </Box>

      {/* Save or Reset Buttons */}
      <HStack justifyContent="center" mt={6}>
        <Button colorScheme="green">Save CV</Button>
        <Button colorScheme="red" variant="outline">
          Reset
        </Button>
      </HStack>
    </Box>
  );
}
