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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      <Box
        className="borderBlue"
        display="flex"
        flexDirection="column"
        padding="66px 26px 36px 26px"
        gap={10}
        animation={isVisible ? `${slideUp} 0.5s ease-out` : undefined}
        opacity={isVisible ? 1 : 0}
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
