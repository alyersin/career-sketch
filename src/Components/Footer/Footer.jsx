import {
  Box,
  Text,
  VStack,
  HStack,
  Link,
  SimpleGrid,
  Heading,
  Icon,
  Divider,
} from "@chakra-ui/react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <Box bgGradient="linear(135deg, #1a202c 0%, #2d3748 100%)" color="white">
      <Box maxWidth="1280px" mx="auto" px={8} py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Company Info */}
          <VStack align={{ base: "center", lg: "start" }} spacing={4}>
            <Heading
              fontSize="xl"
              fontWeight="bold"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Career-Sketch
            </Heading>
            <Text
              fontSize="sm"
              color="gray.300"
              lineHeight="1.6"
              textAlign={{ base: "center", lg: "left" }}
            >
              Professional resume builder helping thousands of job seekers land
              their dream careers with expertly crafted templates.
            </Text>
            <HStack spacing={4} justify={{ base: "center", lg: "start" }}>
              <Link href="#" _hover={{ color: "blue.300" }}>
                <Icon as={FaLinkedin} fontSize="20px" />
              </Link>
              <Link href="#" _hover={{ color: "blue.300" }}>
                <Icon as={FaTwitter} fontSize="20px" />
              </Link>
              <Link href="#" _hover={{ color: "blue.300" }}>
                <Icon as={FaGithub} fontSize="20px" />
              </Link>
              <Link href="#" _hover={{ color: "blue.300" }}>
                <Icon as={FaInstagram} fontSize="20px" />
              </Link>
            </HStack>
          </VStack>

          {/* Quick Links */}
          <VStack align={{ base: "center", lg: "start" }} spacing={4}>
            <Heading
              fontSize="lg"
              fontWeight="semibold"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Quick Links
            </Heading>
            <VStack align={{ base: "center", lg: "start" }} spacing={2}>
              <Link
                href="/pages/select-template"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Resume Templates
              </Link>
              <Link
                href="/pages/resume"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Resume Builder
              </Link>
              <Link
                href="#contact-us"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Contact Us
              </Link>
              <Link
                href="/pages/login"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Login
              </Link>
            </VStack>
          </VStack>

          {/* Resources */}
          <VStack align={{ base: "center", lg: "start" }} spacing={4}>
            <Heading
              fontSize="lg"
              fontWeight="semibold"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Resources
            </Heading>
            <VStack align={{ base: "center", lg: "start" }} spacing={2}>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Career Tips
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Resume Guide
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Interview Prep
              </Link>
              <Link
                href="#"
                color="gray.300"
                _hover={{ color: "blue.300" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                Job Search
              </Link>
            </VStack>
          </VStack>

          {/* Contact Info */}
          <VStack align={{ base: "center", lg: "start" }} spacing={4}>
            <Heading
              fontSize="lg"
              fontWeight="semibold"
              color="white"
              textAlign={{ base: "center", lg: "left" }}
            >
              Contact Info
            </Heading>
            <VStack align={{ base: "center", lg: "start" }} spacing={3}>
              <HStack spacing={3} justify={{ base: "center", lg: "start" }}>
                <Icon as={FaEnvelope} color="blue.300" />
                <Text
                  fontSize="sm"
                  color="gray.300"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  support@career-sketch.com
                </Text>
              </HStack>
              <HStack spacing={3} justify={{ base: "center", lg: "start" }}>
                <Icon as={FaPhone} color="blue.300" />
                <Text
                  fontSize="sm"
                  color="gray.300"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  +1 (555) 123-4567
                </Text>
              </HStack>
              <HStack
                spacing={3}
                align="start"
                justify={{ base: "center", lg: "start" }}
              >
                <Icon as={FaMapMarkerAlt} color="blue.300" mt={1} />
                <Text
                  fontSize="sm"
                  color="gray.300"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  123 Career Street
                  <br />
                  San Francisco, CA 94105
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.600" />

        {/* Bottom Section */}
        <Box>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={4}
            alignItems="center"
          >
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize="sm" color="gray.400">
                © {new Date().getFullYear()} Career-Sketch. All rights reserved.
              </Text>
            </Box>
            <HStack spacing={6} justify={{ base: "center", md: "end" }}>
              <Link
                href="#"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "blue.300" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "blue.300" }}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                fontSize="sm"
                color="gray.400"
                _hover={{ color: "blue.300" }}
              >
                Cookie Policy
              </Link>
            </HStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
