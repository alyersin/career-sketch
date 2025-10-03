"use client";

import {
  Box,
  Heading,
  Text,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Avatar,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      rating: 5,
      title: "Land my dream job in tech!",
      text: "This resume builder is absolutely fantastic! The modern templates helped me stand out from hundreds of applicants. I got 3 interview calls within a week and landed my dream job at Google. The ATS optimization is incredible!",
      author: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      rating: 5,
      title: "Perfect for career transition",
      text: "As someone switching from marketing to product management, I needed a resume that highlighted transferable skills. The templates and suggestions were spot-on. Got 5 interviews and 2 offers!",
      author: "Michael Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      rating: 5,
      title: "Saved me hours of work",
      text: "The AI-powered suggestions and professional templates saved me countless hours. What used to take me days now takes minutes. The results speak for themselves - I'm now a Senior Designer at Apple!",
      author: "Emily Johnson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      rating: 5,
      title: "Best investment for my career",
      text: "Worth every penny! The premium templates are gorgeous and the platform is incredibly intuitive. I've recommended it to all my colleagues. Helped me land a 40% salary increase!",
      author: "David Kim",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
    {
      rating: 5,
      title: "Game-changer for startups",
      text: "As a startup founder, I needed a resume that showcased my entrepreneurial spirit. The startup-focused templates were perfect. Now I'm a VP at a unicorn startup!",
      author: "Lisa Wang",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      verified: true,
    },
  ];

  return (
    <Box bg="gray.50" py={20} px={8} textAlign="center">
      <Box maxWidth="1200px" mx="auto">
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          mb={6}
          fontWeight="bold"
          bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
          bgClip="text"
        >
          Trusted by 50,000+ Professionals
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.600"
          mb={12}
          maxWidth="800px"
          mx="auto"
        >
          Join thousands of successful job seekers who've transformed their
          careers with our professional resume templates. See what real users
          are saying about their success stories.
        </Text>

        <Flex justify="center" mb={16}>
          <Box
            bg="white"
            p={8}
            borderRadius="20px"
            boxShadow="0 10px 30px rgba(0,0,0,0.1)"
            textAlign="center"
          >
            <HStack justify="center" mb={4}>
              <Text fontSize="4xl" fontWeight="bold" color="blue.600">
                4.9
              </Text>
              <VStack align="start" spacing={0}>
                <HStack spacing={1}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      as={FaStar}
                      color="yellow.400"
                      fontSize="20px"
                    />
                  ))}
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  out of 5 stars
                </Text>
              </VStack>
            </HStack>
            <Text fontSize="lg" color="gray.700" fontWeight="semibold">
              Based on 12,500+ verified reviews
            </Text>
            <Badge colorScheme="green" mt={3} px={3} py={1} borderRadius="full">
              <Icon as={FaCheckCircle} mr={1} />
              Verified Reviews Only
            </Badge>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {reviews.map((review, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              borderRadius="16px"
              boxShadow="0 8px 25px rgba(0,0,0,0.08)"
              textAlign="left"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              <HStack spacing={1} mb={4}>
                {[...Array(review.rating)].map((_, i) => (
                  <Icon key={i} as={FaStar} color="yellow.400" />
                ))}
              </HStack>

              <Heading fontSize="lg" mb={3} color="gray.800">
                {review.title}
              </Heading>

              <Text fontSize="sm" color="gray.600" mb={6} lineHeight="1.6">
                {review.text}
              </Text>

              <HStack spacing={3}>
                <Avatar size="sm" src={review.avatar} name={review.author} />
                <VStack align="start" spacing={0}>
                  <HStack spacing={2}>
                    <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                      {review.author}
                    </Text>
                    {review.verified && (
                      <Icon
                        as={FaCheckCircle}
                        color="green.500"
                        fontSize="12px"
                      />
                    )}
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Call to Action */}
        <Box
          mt={16}
          p={8}
          bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
          borderRadius="20px"
          color="white"
        >
          <Heading fontSize="2xl" mb={4}>
            Ready to Join Our Success Stories?
          </Heading>
          <Text fontSize="lg" mb={6} opacity={0.9}>
            Start building your professional resume today and land your dream
            job.
          </Text>
          <HStack justify="center" spacing={4}>
            <Badge
              colorScheme="white"
              variant="solid"
              px={4}
              py={2}
              fontSize="sm"
            >
              🚀 50K+ Resumes Created
            </Badge>
            <Badge
              colorScheme="white"
              variant="solid"
              px={4}
              py={2}
              fontSize="sm"
            >
              ⭐ 4.9/5 Rating
            </Badge>
            <Badge
              colorScheme="white"
              variant="solid"
              px={4}
              py={2}
              fontSize="sm"
            >
              💼 15+ Templates
            </Badge>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}
