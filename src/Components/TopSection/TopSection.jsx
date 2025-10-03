"use client";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react";
import VerticalCarousel from "../Carousel/VerticalCarousel";

const slideUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export default function TopSection() {
  const imagesDown = [
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=400&fit=crop&crop=center", // Modern resume template
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop&crop=center", // Professional document
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&crop=center", // Clean resume layout
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=center", // Executive resume
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=center", // Creative resume
  ];

  const imagesUp = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=center", // Tech resume
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=center", // Academic resume
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=center", // Startup resume
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&crop=center", // Marketing resume
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=400&fit=crop&crop=center", // Finance resume
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      className="borderBlue"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
      mx="auto"
      py={8}
      position="relative"
      overflow="hidden"
    >
      {/* Background decoration */}
      <Box
        position="absolute"
        top="-50%"
        right="-20%"
        width="600px"
        height="600px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.1)"
        opacity={0.3}
      />
      <Box
        position="absolute"
        bottom="-30%"
        left="-10%"
        width="400px"
        height="400px"
        borderRadius="50%"
        bg="rgba(255,255,255,0.05)"
        opacity={0.4}
      />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        maxWidth={1280}
        mx="auto"
        py={4}
        px={10}
        position="relative"
        zIndex={1}
      >
        <Box
          className="borderBlue"
          display="flex"
          flexDirection="column"
          padding={{ base: "20px", md: "66px 26px 36px 26px" }}
          gap={8}
          animation={isVisible ? `${slideUp} 0.8s ease-out` : undefined}
          opacity={isVisible ? 1 : 0}
          width={{ base: "100%", md: "50%" }}
        >
          <Heading
            fontFamily="Roboto Slab, serif"
            fontSize={{ base: "32px", md: "48px", lg: "64px" }}
            textAlign={{ base: "center", md: "left" }}
            color="white"
            fontWeight="bold"
            lineHeight="1.1"
            mb={4}
          >
            Build Your Professional CV Today
          </Heading>

          <Text
            fontSize={{ base: "18px", md: "20px" }}
            textAlign={{ base: "center", md: "left" }}
            color="rgba(255,255,255,0.9)"
            lineHeight="1.6"
            mb={6}
          >
            Stand out to employers with a customized CV tailored to showcase
            your skills and experience. Easy to use, professional templates, and
            ready to download in just minutes. Start now for free!
          </Text>

          <Box
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            gap={4}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Link href="/pages/select-template/" passHref>
              <Button
                size="lg"
                bgGradient="linear(45deg, #ff6b6b, #ee5a24)"
                color="white"
                _hover={{
                  bgGradient: "linear(45deg, #ff5252, #d63031)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                transition="all 0.3s ease"
                px={8}
                py={6}
                fontSize="18px"
                fontWeight="bold"
                borderRadius="12px"
                boxShadow="0 8px 20px rgba(0,0,0,0.15)"
              >
                🚀 Start Building Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              color="white"
              borderColor="rgba(255,255,255,0.5)"
              _hover={{
                bg: "rgba(255,255,255,0.1)",
                borderColor: "white",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              px={8}
              py={6}
              fontSize="18px"
              fontWeight="bold"
              borderRadius="12px"
            >
              📖 View Examples
            </Button>
          </Box>

          {/* Stats */}
          <Box
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            gap={6}
            mt={8}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize="24px" fontWeight="bold" color="white">
                50K+
              </Text>
              <Text fontSize="14px" color="rgba(255,255,255,0.8)">
                Resumes Created
              </Text>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize="24px" fontWeight="bold" color="white">
                4.9★
              </Text>
              <Text fontSize="14px" color="rgba(255,255,255,0.8)">
                User Rating
              </Text>
            </Box>
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize="24px" fontWeight="bold" color="white">
                15+
              </Text>
              <Text fontSize="14px" color="rgba(255,255,255,0.8)">
                Templates
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          className="borderGreen"
          display={{ base: "none", lg: "flex" }}
          justifyContent="space-between"
          gap="20px"
          alignItems="center"
        >
          <VerticalCarousel images={imagesDown} direction="down" />
          <VerticalCarousel images={imagesUp} direction="up" />
        </Box>
      </Box>
    </Box>
  );
}
