"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Avatar,
  Divider,
  Button,
} from "@chakra-ui/react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/pages/login");
    }
  }, [status]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return null;
  }

  return (
    <Box maxWidth="600px" mx="auto" py={8} px={4}>
      <Heading textAlign="center" mb={6}>
        Profile Page
      </Heading>
      <Box
        bg="white"
        p={6}
        rounded="md"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
      >
        <VStack spacing={4} align="center">
          <Avatar
            size="xl"
            name={session.user.name || session.user.email}
            src={session.user.image}
          />
          <Heading as="h2" size="md">
            {session.user.name || "Your Name"}
          </Heading>
        </VStack>
        <Divider my={6} />
        <VStack spacing={4} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            Email:
          </Text>
          <Text>{session.user.email || "Not available"}</Text>
          <Text fontSize="lg" fontWeight="bold">
            Name:
          </Text>
          <Text>{session.user.name || "Not available"}</Text>
        </VStack>
        <Divider my={6} />
        <VStack spacing={4} align="center">
          <Button
            onClick={() => router.push("/")}
            colorScheme="blue"
            variant="outline"
          >
            Go to Home
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
