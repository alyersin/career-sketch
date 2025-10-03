import Card from "@/Components/Card/Card";
import {
  Box,
  Text,
  Heading,
  Divider,
  Badge,
  HStack,
  VStack,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaStar, FaDownload, FaEye } from "react-icons/fa";

import React from "react";

export default function page() {
  const recommendedTemplates = [
    {
      id: 1,
      title: "Modern Professional",
      description:
        "Clean, minimalist design perfect for tech and corporate roles. Features a modern layout with emphasis on skills and achievements.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop&crop=center",
      category: "Professional",
      rating: 4.9,
      downloads: "12.5K",
      isPremium: false,
      tags: ["Tech", "Corporate", "Minimalist"],
    },
    {
      id: 2,
      title: "Creative Designer",
      description:
        "Bold and colorful template designed for creative professionals. Showcases portfolio work and creative skills effectively.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop&crop=center",
      category: "Creative",
      rating: 4.8,
      downloads: "8.2K",
      isPremium: true,
      tags: ["Design", "Creative", "Portfolio"],
    },
    {
      id: 3,
      title: "Executive Classic",
      description:
        "Traditional yet elegant template for senior-level positions. Emphasizes leadership experience and achievements.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop&crop=center",
      category: "Executive",
      rating: 4.9,
      downloads: "15.3K",
      isPremium: false,
      tags: ["Executive", "Leadership", "Traditional"],
    },
    {
      id: 4,
      title: "Tech Specialist",
      description:
        "Modern template with technical focus. Perfect for developers, engineers, and IT professionals.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center",
      category: "Technical",
      rating: 4.7,
      downloads: "9.8K",
      isPremium: false,
      tags: ["Tech", "Developer", "Engineering"],
    },
  ];

  const allTemplates = [
    ...recommendedTemplates,
    {
      id: 5,
      title: "Academic Scholar",
      description:
        "Perfect for researchers, academics, and PhD candidates. Emphasizes publications and academic achievements.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=center",
      category: "Academic",
      rating: 4.6,
      downloads: "6.1K",
      isPremium: false,
      tags: ["Academic", "Research", "PhD"],
    },
    {
      id: 6,
      title: "Startup Founder",
      description:
        "Dynamic template for entrepreneurs and startup founders. Highlights business achievements and leadership.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=center",
      category: "Entrepreneur",
      rating: 4.8,
      downloads: "4.7K",
      isPremium: true,
      tags: ["Startup", "Entrepreneur", "Business"],
    },
    {
      id: 7,
      title: "Marketing Pro",
      description:
        "Marketing-focused template with emphasis on campaigns, metrics, and brand achievements.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop&crop=center",
      category: "Marketing",
      rating: 4.7,
      downloads: "7.2K",
      isPremium: false,
      tags: ["Marketing", "Campaigns", "Analytics"],
    },
    {
      id: 8,
      title: "Finance Expert",
      description:
        "Professional template for finance and business roles. Clean layout emphasizing quantitative achievements.",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=500&fit=crop&crop=center",
      category: "Finance",
      rating: 4.8,
      downloads: "5.9K",
      isPremium: true,
      tags: ["Finance", "Business", "Analytics"],
    },
  ];

  return (
    <Box maxWidth="1280px" margin="auto" py={8}>
      {/* Header Section */}
      <Box
        display="flex"
        flexDirection="column"
        gap={6}
        margin="0 60px"
        padding="40px 20px"
        textAlign="center"
        bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
        borderRadius="20px"
        color="white"
        mb={12}
      >
        <Heading
          as="h2"
          fontSize={{ base: "32px", md: "48px", lg: "64px" }}
          fontWeight="bold"
          fontFamily="Roboto Slab, serif"
          mb={4}
        >
          Choose Your Perfect Resume Template
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "20px" }}
          color="rgba(255,255,255,0.9)"
          mb={6}
        >
          Professional, ATS-friendly templates designed to help you land your
          dream job. Each template is crafted by design experts and optimized
          for success.
        </Text>
        <HStack justify="center" spacing={8} flexWrap="wrap">
          <VStack>
            <Text fontSize="24px" fontWeight="bold">
              15+
            </Text>
            <Text fontSize="14px" color="rgba(255,255,255,0.8)">
              Templates
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="24px" fontWeight="bold">
              50K+
            </Text>
            <Text fontSize="14px" color="rgba(255,255,255,0.8)">
              Downloads
            </Text>
          </VStack>
          <VStack>
            <Text fontSize="24px" fontWeight="bold">
              4.9★
            </Text>
            <Text fontSize="14px" color="rgba(255,255,255,0.8)">
              Rating
            </Text>
          </VStack>
        </HStack>
      </Box>

      {/* Recommended Section */}
      <Box mb={12}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px 0"
          gap={4}
          mb={8}
        >
          <Divider borderWidth={2} borderColor="blue.200" />
          <Badge
            colorScheme="blue"
            variant="solid"
            px={4}
            py={2}
            fontSize="16px"
            borderRadius="full"
          >
            ⭐ Recommended Templates
          </Badge>
          <Divider borderWidth={2} borderColor="blue.200" />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} px={4}>
          {recommendedTemplates.map((template) => (
            <Box
              key={template.id}
              bg="white"
              borderRadius="16px"
              overflow="hidden"
              boxShadow="0 8px 25px rgba(0,0,0,0.1)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              }}
            >
              <Box position="relative">
                <Box
                  height="250px"
                  bgImage={`url(${template.image})`}
                  bgSize="cover"
                  bgPosition="center"
                />
                {template.isPremium && (
                  <Badge
                    position="absolute"
                    top="12px"
                    right="12px"
                    colorScheme="yellow"
                    variant="solid"
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    ⭐ Premium
                  </Badge>
                )}
                <Badge
                  position="absolute"
                  top="12px"
                  left="12px"
                  colorScheme="blue"
                  variant="solid"
                  borderRadius="full"
                  px={3}
                  py={1}
                >
                  {template.category}
                </Badge>
              </Box>

              <Box p={6}>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <Heading as="h3" size="md" mb={2} color="gray.800">
                      {template.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                      {template.description}
                    </Text>
                  </Box>

                  <HStack spacing={2} flexWrap="wrap">
                    {template.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        colorScheme="gray"
                        variant="subtle"
                        fontSize="xs"
                        px={2}
                        py={1}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </HStack>

                  <HStack
                    justify="space-between"
                    fontSize="sm"
                    color="gray.500"
                  >
                    <HStack spacing={1}>
                      <Text>⭐</Text>
                      <Text>{template.rating}</Text>
                    </HStack>
                    <Text>{template.downloads} downloads</Text>
                  </HStack>

                  <HStack spacing={3}>
                    <Button
                      flex={1}
                      colorScheme="blue"
                      size="sm"
                      leftIcon={<FaEye />}
                      variant="outline"
                    >
                      Preview
                    </Button>
                    <Button
                      flex={1}
                      colorScheme="blue"
                      size="sm"
                      leftIcon={<FaDownload />}
                      bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
                      _hover={{
                        bgGradient: "linear(45deg, #2563eb, #1e40af)",
                      }}
                    >
                      Use Template
                    </Button>
                  </HStack>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* All Templates Section */}
      <Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding="20px 0"
          gap={4}
          mb={8}
        >
          <Divider borderWidth={2} borderColor="gray.300" />
          <Badge
            colorScheme="gray"
            variant="outline"
            px={4}
            py={2}
            fontSize="16px"
            borderRadius="full"
          >
            📋 All Templates
          </Badge>
          <Divider borderWidth={2} borderColor="gray.300" />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} px={4}>
          {allTemplates.map((template) => (
            <Box
              key={template.id}
              bg="white"
              borderRadius="16px"
              overflow="hidden"
              boxShadow="0 4px 15px rgba(0,0,0,0.08)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
              }}
            >
              <Box position="relative">
                <Box
                  height="200px"
                  bgImage={`url(${template.image})`}
                  bgSize="cover"
                  bgPosition="center"
                />
                {template.isPremium && (
                  <Badge
                    position="absolute"
                    top="8px"
                    right="8px"
                    colorScheme="yellow"
                    variant="solid"
                    borderRadius="full"
                    px={2}
                    py={1}
                    fontSize="xs"
                  >
                    ⭐ Premium
                  </Badge>
                )}
              </Box>

              <Box p={4}>
                <VStack spacing={3} align="stretch">
                  <Box>
                    <Heading as="h4" size="sm" mb={1} color="gray.800">
                      {template.title}
                    </Heading>
                    <Text fontSize="xs" color="gray.600" lineHeight="1.4">
                      {template.description}
                    </Text>
                  </Box>

                  <HStack
                    justify="space-between"
                    fontSize="xs"
                    color="gray.500"
                  >
                    <HStack spacing={1}>
                      <Text>⭐</Text>
                      <Text>{template.rating}</Text>
                    </HStack>
                    <Text>{template.downloads}</Text>
                  </HStack>

                  <Button
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<FaDownload />}
                    bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
                    _hover={{
                      bgGradient: "linear(45deg, #2563eb, #1e40af)",
                    }}
                  >
                    Use Template
                  </Button>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
