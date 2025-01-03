"use client";

import { signIn } from "next-auth/react";
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
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleEmailPasswordLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        toast({
          title: "Login successful.",
          description: "Redirecting to your dashboard...",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        window.location.href = "/pages/resume";
      } else {
        toast({
          title: "Login failed.",
          description: "Invalid email or password.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleOAuthLogin = async (provider) => {
    try {
      await signIn(provider, { callbackUrl: "/pages/resume" });
    } catch (error) {
      toast({
        title: "OAuth login failed",
        description: "Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
          boxShadow="lg"
          bg="white"
        >
          <Heading as="h1" size="lg" textAlign="center" mb={6}>
            Your Gateway to Success
          </Heading>

          <FormControl id="email" mb={4}>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" mb={4}>
            <Flex justify="space-between" align="center">
              <FormLabel>Password</FormLabel>
              <Link href="#" color="blue.500" fontSize="sm">
                Forgot your password?
              </Link>
            </Flex>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button
            width="100%"
            bgColor="#05A2FF"
            colorScheme="blue"
            mt={4}
            py={6}
            fontWeight="bold"
            onClick={handleEmailPasswordLogin}
          >
            Sign in
          </Button>

          <Text textAlign="center" mt={4} fontSize="sm" color="gray.600">
            New user?{" "}
            <Link href="/pages/register" color="blue.500" fontWeight="bold">
              Register here
            </Link>
          </Text>

          <Divider my={6} />

          <Text textAlign="center" fontSize="sm" mb={4} color="gray.600">
            Or sign in with
          </Text>

          <Flex flexDirection="column" gap={4}>
            <Button
              width="100%"
              bgColor="#333"
              color="white"
              _hover={{ bg: "#444" }}
              onClick={() => handleOAuthLogin("github")}
            >
              Sign in with GitHub
            </Button>
            <Button
              width="100%"
              bgColor="#DB4437"
              color="white"
              _hover={{ bg: "#E57373" }}
              onClick={() => handleOAuthLogin("google")}
            >
              Sign in with Google
            </Button>
            <Button
              width="100%"
              bgColor="#4267B2"
              color="white"
              _hover={{ bg: "#365899" }}
              onClick={() => handleOAuthLogin("facebook")}
            >
              Sign in with Facebook
            </Button>
            <Button
              width="100%"
              bgColor="#7289DA"
              color="white"
              _hover={{ bg: "#5A68C2" }}
              onClick={() => handleOAuthLogin("discord")}
            >
              Sign in with Discord
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
}
