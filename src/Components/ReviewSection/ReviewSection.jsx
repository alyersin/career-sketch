"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      rating: 5,
      title: "Highly customizable templates",
      text: "This resume builder is fantastic! The designs are sleek and easy to use. I landed my dream role with the help of this tool!",
      author: "Jane Doe • about 12 hours ago",
    },
    {
      rating: 5,
      title: "User-friendly and intuitive",
      text: "I was able to create a professional resume in minutes. The layout options and suggestions were incredibly helpful.",
      author: "John Smith • about 5 days ago",
    },
    {
      rating: 5,
      title: "Exceeded my expectations",
      text: "The templates are beautiful, and the platform is so easy to navigate. This builder helped me get multiple interview calls!",
      author: "Emily Taylor • about 2 days ago",
    },
  ];

  return (
    <Box bg="white" py={16} px={8} textAlign="center">
      <Heading fontSize="3xl" mb={4} fontWeight="bold">
        Reviewed by Users. Trusted by Experts.
      </Heading>

      <Text fontSize="lg" color="gray.600" mb={12}>
        Hear what our users have to say about how our tools have helped them
        achieve their goals.
      </Text>

      <Flex justify="center" mb={12}>
        <Flex align="center" direction="column" mr={8}>
          <HStack>
            <Text fontSize="2xl" fontWeight="bold">
              4.8 out of 5
            </Text>
            <HStack spacing={1}>
              {[...Array(5)].map((_, i) => (
                <Icon key={i} as={FaStar} color="green.400" />
              ))}
            </HStack>
          </HStack>
          <Text fontSize="sm" color="gray.600">
            Based on 3,500+ reviews
          </Text>
          <Text fontSize="sm" color="green.500" mt={2}>
            Lorem ipsum dolor
          </Text>
        </Flex>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            bg="gray.50"
            p={6}
            borderRadius="md"
            boxShadow="md"
            textAlign="left"
          >
            <HStack spacing={1} mb={4}>
              {[...Array(review.rating)].map((_, i) => (
                <Icon key={i} as={FaStar} color="green.400" />
              ))}
            </HStack>

            <Heading fontSize="lg" mb={2}>
              {review.title}
            </Heading>

            <Text fontSize="sm" color="gray.600" mb={4}>
              {review.text}
            </Text>

            <Text fontSize="xs" color="gray.500">
              {review.author}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
