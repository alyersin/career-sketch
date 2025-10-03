"use client";

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Text,
  Icon,
  useToast,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toast = useToast();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock form submission
      console.log("Form Submitted:", formData);

      toast({
        title: "Message Sent!",
        description:
          "We have received your message and will get back to you shortly.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      toast({
        title: "Submission Failed.",
        description: "Something went wrong. Please try again later.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="gray.50" py={20} px={4}>
      <Box maxWidth="1200px" mx="auto">
        {/* Header Section */}
        <Box textAlign="center" mb={16}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={6}
            bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
            bgClip="text"
          >
            Get in Touch
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="gray.600"
            maxWidth="600px"
            mx="auto"
            lineHeight="1.6"
          >
            Have questions about our resume templates? Need help with your
            application? We're here to help you succeed in your career journey.
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="start"
        >
          {/* Contact Information */}
          <Box px={{ base: 0, lg: 4 }}>
            <Heading fontSize="2xl" mb={8} color="gray.800" textAlign="left">
              Contact Information
            </Heading>

            <VStack spacing={6} align="stretch">
              <Box
                p={6}
                bg="white"
                borderRadius="16px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                }}
              >
                <HStack spacing={4}>
                  <Box p={3} bg="blue.100" borderRadius="full" color="blue.600">
                    <Icon as={FaEnvelope} fontSize="20px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color="gray.800">
                      Email Us
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      support@career-sketch.com
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      We'll respond within 24 hours
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="16px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                }}
              >
                <HStack spacing={4}>
                  <Box
                    p={3}
                    bg="green.100"
                    borderRadius="full"
                    color="green.600"
                  >
                    <Icon as={FaPhone} fontSize="20px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color="gray.800">
                      Call Us
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      +1 (555) 123-4567
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      Mon-Fri 9AM-6PM EST
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="16px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                }}
              >
                <HStack spacing={4}>
                  <Box
                    p={3}
                    bg="purple.100"
                    borderRadius="full"
                    color="purple.600"
                  >
                    <Icon as={FaMapMarkerAlt} fontSize="20px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color="gray.800">
                      Visit Us
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      123 Career Street, Suite 100
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      San Francisco, CA 94105
                    </Text>
                  </VStack>
                </HStack>
              </Box>

              <Box
                p={6}
                bg="white"
                borderRadius="16px"
                boxShadow="0 4px 15px rgba(0,0,0,0.08)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                }}
              >
                <HStack spacing={4}>
                  <Box
                    p={3}
                    bg="orange.100"
                    borderRadius="full"
                    color="orange.600"
                  >
                    <Icon as={FaClock} fontSize="20px" />
                  </Box>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="semibold" color="gray.800">
                      Business Hours
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </Text>
                    <Text color="gray.500" fontSize="xs">
                      Saturday: 10:00 AM - 4:00 PM
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </VStack>
          </Box>

          {/* Contact Form */}
          <Box
            p={8}
            bg="white"
            borderRadius="20px"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            position="relative"
            overflow="hidden"
            px={{ base: 8, lg: 8 }}
            mt={{ base: 0, lg: 14 }}
          >
            {/* Background decoration */}
            <Box
              position="absolute"
              top="-50px"
              right="-50px"
              width="100px"
              height="100px"
              borderRadius="50%"
              bg="blue.100"
              opacity={0.3}
            />
            <Box
              position="absolute"
              bottom="-30px"
              left="-30px"
              width="60px"
              height="60px"
              borderRadius="50%"
              bg="purple.100"
              opacity={0.3}
            />

            <Box position="relative" zIndex={1}>
              <Heading fontSize="2xl" mb={6} color="gray.800" textAlign="left">
                Send us a Message
              </Heading>

              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="semibold">
                      Full Name
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      focusBorderColor="blue.400"
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="12px"
                      py={6}
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ borderColor: "blue.400", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="semibold">
                      Email Address
                    </FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      focusBorderColor="blue.400"
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="12px"
                      py={6}
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ borderColor: "blue.400", bg: "white" }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel color="gray.700" fontWeight="semibold">
                      Message
                    </FormLabel>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      focusBorderColor="blue.400"
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="12px"
                      minH="120px"
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ borderColor: "blue.400", bg: "white" }}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    width="full"
                    size="lg"
                    bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
                    color="white"
                    _hover={{
                      bgGradient: "linear(45deg, #2563eb, #1e40af)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                    }}
                    transition="all 0.3s ease"
                    py={6}
                    fontWeight="bold"
                    borderRadius="12px"
                    fontSize="16px"
                  >
                    📧 Send Message
                  </Button>
                </VStack>
              </form>
            </Box>
          </Box>
        </SimpleGrid>

        {/* FAQ Section */}
        <Box mt={20} textAlign="center">
          <Heading fontSize="2xl" mb={6} color="gray.800">
            Frequently Asked Questions
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            maxWidth="1000px"
            mx="auto"
          >
            <Box
              p={6}
              bg="white"
              borderRadius="16px"
              boxShadow="0 4px 15px rgba(0,0,0,0.08)"
            >
              <Text fontWeight="semibold" mb={2} color="gray.800">
                How quickly do you respond?
              </Text>
              <Text fontSize="sm" color="gray.600">
                We typically respond to all inquiries within 24 hours during
                business days.
              </Text>
            </Box>
            <Box
              p={6}
              bg="white"
              borderRadius="16px"
              boxShadow="0 4px 15px rgba(0,0,0,0.08)"
            >
              <Text fontWeight="semibold" mb={2} color="gray.800">
                Do you offer custom templates?
              </Text>
              <Text fontSize="sm" color="gray.600">
                Yes! We can create custom resume templates tailored to your
                specific needs.
              </Text>
            </Box>
            <Box
              p={6}
              bg="white"
              borderRadius="16px"
              boxShadow="0 4px 15px rgba(0,0,0,0.08)"
            >
              <Text fontWeight="semibold" mb={2} color="gray.800">
                Is there a free trial?
              </Text>
              <Text fontSize="sm" color="gray.600">
                Absolutely! You can try our templates for free before making any
                commitment.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
