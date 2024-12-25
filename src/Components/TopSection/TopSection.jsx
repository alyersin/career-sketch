"use client";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link"; // Import Link from Next.js
import React, { useEffect, useState } from "react";
import { keyframes } from "@emotion/react"; // Import keyframes for animations
import VerticalCarousel from "../Carousel/VerticalCarousel";

// Define the slideUp animation
const slideUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export default function TopSection() {
  const imagesDown = [
    "https://via.placeholder.com/300x200?text=1",
    "https://via.placeholder.com/300x200?text=2",
    "https://via.placeholder.com/300x200?text=3",
    "https://via.placeholder.com/300x200?text=4",
    "https://via.placeholder.com/300x200?text=5",
  ];

  const imagesUp = [
    "https://via.placeholder.com/300x200?text=6",
    "https://via.placeholder.com/300x200?text=7",
    "https://via.placeholder.com/300x200?text=8",
    "https://via.placeholder.com/300x200?text=9",
    "https://via.placeholder.com/300x200?text=10",
  ];

  const [isVisible, setIsVisible] = useState(false); // Control visibility

  useEffect(() => {
    // Trigger the animation on page load
    setIsVisible(true);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth={1280}
      bgColor={"#8ecae6"}
      mx="auto"
      py={2}
      px={10}
    >
      {/* Left Section with Animation */}
      <Box
        className="borderBlue"
        display="flex"
        flexDirection="column"
        padding="66px 26px 36px 26px"
        gap={10}
        animation={isVisible ? `${slideUp} 0.5s ease-out` : undefined} // Trigger animation
        opacity={isVisible ? 1 : 0} // Hide the Box initially
      >
        <Heading fontFamily="Roboto Slab, serif" fontSize={60}>
          Build Your Professional CV Today
        </Heading>

        <Text fontSize={18}>
          Stand out to employers with a customized CV tailored to showcase your
          skills and experience. Easy to use, professional templates, and ready
          to download in just minutes. Start now for free!
        </Text>

        <Link href="/pages/resume/" passHref>
          <Button width="60%" bgColor="#e76f51" color="white">
            Begin here
          </Button>
        </Link>
      </Box>

      {/* Right Section with Carousels */}
      <Box
        className="borderGreen"
        display="flex"
        justifyContent="space-between"
        gap="20px"
      >
        {/* Downward scrolling carousel */}
        <VerticalCarousel images={imagesDown} direction="down" />

        {/* Upward scrolling carousel */}
        <VerticalCarousel images={imagesUp} direction="up" />
      </Box>
    </Box>
  );
}
