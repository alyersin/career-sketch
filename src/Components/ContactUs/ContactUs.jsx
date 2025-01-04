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
  useToast,
} from "@chakra-ui/react";
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
    <Box
      maxWidth="650px"
      mx="auto"
      mt={12}
      px={8}
      py={10}
      boxShadow="2xl"
      borderRadius="lg"
      bgGradient="linear(to-br, teal.50, white)"
    >
      <Heading
        textAlign="center"
        mb={6}
        color="teal.600"
        fontWeight="bold"
        fontSize="2xl"
      >
        Get in Touch
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5}>
          <FormControl isRequired>
            <FormLabel color="teal.700" fontWeight="semibold">
              Full Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              focusBorderColor="teal.400"
              bg="white"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="teal.700" fontWeight="semibold">
              Email Address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              focusBorderColor="teal.400"
              bg="white"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="teal.700" fontWeight="semibold">
              Message
            </FormLabel>
            <Textarea
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              focusBorderColor="teal.400"
              bg="white"
              boxShadow="sm"
              _hover={{ boxShadow: "md" }}
            />
          </FormControl>
          <Button
            type="submit"
            width="full"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500)"
            _hover={{
              bgGradient: "linear(to-r, teal.500, teal.600)",
              boxShadow: "lg",
            }}
            py={6}
            fontWeight="bold"
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
