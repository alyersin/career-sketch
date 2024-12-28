"use client";

import Header from "@/Components/Header/Header";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Register() {
  return (
    <Box minHeight="100vh">
      <Header />

      <Flex
        align="center"
        justify="center"
        bg="gray.50"
        px={4}
        minHeight="calc(100vh - 100px)"
      >
        <Box
          p={8}
          borderRadius="md"
          width={{ base: "100%", sm: "400px" }}
          //   bg="white"
          boxShadow="lg"
        >
          <Heading as="h1" size="lg" textAlign="center" mb={6}>
            Create Your Account
          </Heading>

          <FormControl id="fullName" mb={4}>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Enter your full name" />
          </FormControl>

          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>

          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Re-enter your password" />
          </FormControl>

          <Button
            width="100%"
            colorScheme="blue"
            mt={4}
            py={6}
            fontWeight="bold"
          >
            Register
          </Button>

          {/* Login Link */}
          <Text textAlign="center" mt={4} fontSize="sm" color="gray.600">
            Already have an account?{" "}
            <Link href="/pages/login" color="blue.500" fontWeight="bold">
              Sign in
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
