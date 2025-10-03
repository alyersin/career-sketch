"use client";

import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  Badge,
  HStack,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaStar, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import Slider from "react-slick";

export default function ResumeSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    draggable: true,
  };

  const resumes = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop&crop=center",
      title: "Sarah Thompson",
      role: "Senior Marketing Manager",
      company: "TechCorp Inc.",
      description:
        "Marketing specialist with a proven track record of driving brand growth and engagement. Led campaigns that increased revenue by 40%.",
      skills: ["Digital Marketing", "Brand Strategy", "Analytics"],
      rating: 5,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=500&fit=crop&crop=center",
      title: "Michael Davis",
      role: "Full Stack Developer",
      company: "InnovateLab",
      description:
        "Software engineer skilled in developing scalable and efficient web applications. Built systems serving 1M+ users.",
      skills: ["React", "Node.js", "AWS"],
      rating: 5,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop&crop=center",
      title: "Emily Brown",
      role: "Creative Director",
      company: "DesignStudio",
      description:
        "Graphic designer passionate about creating visually appealing and user-friendly designs. Award-winning portfolio.",
      skills: ["UI/UX Design", "Branding", "Illustration"],
      rating: 5,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=center",
      title: "David Chen",
      role: "Data Scientist",
      company: "AnalyticsPro",
      description:
        "Data scientist with expertise in machine learning and statistical analysis. Improved business metrics by 60%.",
      skills: ["Python", "Machine Learning", "SQL"],
      rating: 5,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      title: "Lisa Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ",
      description:
        "Product manager with a track record of launching successful products. Led teams of 15+ developers.",
      skills: ["Product Strategy", "Agile", "User Research"],
      rating: 5,
    },
  ];

  return (
    <Box
      bgGradient="linear(135deg, #1a202c 0%, #2d3748 100%)"
      color="white"
      py={16}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="0"
        right="0"
        width="300px"
        height="300px"
        borderRadius="50%"
        bg="rgba(59, 130, 246, 0.1)"
        transform="translate(50%, -50%)"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="rgba(16, 185, 129, 0.1)"
        transform="translate(-50%, 50%)"
      />

      <Box textAlign="center" mb={12} position="relative" zIndex={1}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          mb={6}
          bgGradient="linear(45deg, #60a5fa, #34d399)"
          bgClip="text"
        >
          Success Stories from Our Users
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.300"
          maxWidth="800px"
          mx="auto"
          lineHeight="1.6"
        >
          See how professionals from different industries have landed their
          dream jobs using our{" "}
          <Text as="span" color="blue.300" fontWeight="semibold">
            expertly crafted resume templates
          </Text>
          . Join thousands of successful job seekers who've transformed their
          careers.
        </Text>
      </Box>

      <Box maxWidth="1200px" mx="auto" px={4} position="relative" zIndex={1}>
        <Slider {...sliderSettings}>
          {resumes.map((resume) => (
            <Box key={resume.id} p={6}>
              <Box
                bg="white"
                borderRadius="20px"
                overflow="hidden"
                boxShadow="0 20px 40px rgba(0,0,0,0.3)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                }}
              >
                {/* Resume Preview */}
                <Box position="relative" height="400px" overflow="hidden">
                  <Image
                    src={resume.img}
                    alt={resume.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="absolute"
                    top="4"
                    right="4"
                    bg="rgba(0,0,0,0.7)"
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    <HStack spacing={1}>
                      {[...Array(resume.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          as={FaStar}
                          color="yellow.400"
                          fontSize="12px"
                        />
                      ))}
                    </HStack>
                  </Box>
                </Box>

                {/* Profile Info */}
                <Box p={6} bg="gray.50">
                  <VStack spacing={4} align="stretch">
                    <Box textAlign="center">
                      <Heading as="h3" size="lg" color="gray.800" mb={2}>
                        {resume.title}
                      </Heading>
                      <Text
                        color="blue.600"
                        fontWeight="semibold"
                        fontSize="lg"
                      >
                        {resume.role}
                      </Text>
                      <HStack justify="center" spacing={4} mt={2}>
                        <HStack spacing={1}>
                          <Icon
                            as={FaBuilding}
                            color="gray.500"
                            fontSize="sm"
                          />
                          <Text fontSize="sm" color="gray.600">
                            {resume.company}
                          </Text>
                        </HStack>
                      </HStack>
                    </Box>

                    <Text
                      color="gray.700"
                      fontSize="sm"
                      lineHeight="1.6"
                      textAlign="center"
                    >
                      {resume.description}
                    </Text>

                    {/* Skills */}
                    <HStack spacing={2} justify="center" flexWrap="wrap">
                      {resume.skills.map((skill, index) => (
                        <Badge
                          key={index}
                          colorScheme="blue"
                          variant="subtle"
                          borderRadius="full"
                          px={3}
                          py={1}
                          fontSize="xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </HStack>

                    <Button
                      colorScheme="blue"
                      size="lg"
                      fontWeight="bold"
                      borderRadius="12px"
                      bgGradient="linear(45deg, #3b82f6, #1d4ed8)"
                      _hover={{
                        bgGradient: "linear(45deg, #2563eb, #1e40af)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                      }}
                      transition="all 0.3s ease"
                    >
                      🚀 Use This Template
                    </Button>
                  </VStack>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
