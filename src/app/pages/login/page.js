"use client";

import Header from "@/Components/Header/Header";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

export default function Login() {
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
          // bg="white"
          boxShadow="lg"
        >
          <Heading as="h1" size="lg" textAlign="center" mb={6}>
            Your Gateway to Success
          </Heading>

          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl id="password" mb={4}>
            <Flex justify="space-between" align="center">
              <FormLabel>Password</FormLabel>
              <Link href="#" color="blue.500" fontSize="sm">
                Forgot your password?
              </Link>
            </Flex>
            <Input type="password" />
          </FormControl>

          <Button
            width="100%"
            bgColor="#05A2FF"
            colorScheme="blue"
            mt={4}
            py={6}
            fontWeight="bold"
          >
            Sign in
          </Button>

          <Text textAlign="center" mt={4} fontSize="sm" color="gray.600">
            New user?{" "}
            <Link href="/pages/register" color="blue.500" fontWeight="bold">
              Register here
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
