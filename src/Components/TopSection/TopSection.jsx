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
      className="borderBlue"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bgColor={"#8ecae6"}
      mx="auto"
      py={2}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        maxWidth={1280}
        mx="auto"
        py={2}
        px={10}
      >
        <Box
          className="borderBlue"
          display="flex"
          flexDirection="column"
          padding={{ base: "20px", md: "66px 26px 36px 26px" }}
          gap={10}
          animation={isVisible ? `${slideUp} 0.5s ease-out` : undefined}
          opacity={isVisible ? 1 : 0}
          width={{ base: "100%", md: "50%" }}
        >
          <Heading
            fontFamily="Roboto Slab, serif"
            fontSize={{ base: "28px", md: "40px", lg: "56px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Build Your Professional CV Today
          </Heading>

          <Text
            fontSize={{ base: "16px", md: "18px" }}
            textAlign={{ base: "center", md: "left" }}
          >
            Stand out to employers with a customized CV tailored to showcase
            your skills and experience. Easy to use, professional templates, and
            ready to download in just minutes. Start now for free!
          </Text>

          <Box
            display="flex"
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <Link href="/pages/select-template/" passHref>
              <Button
                width={{ base: "80%", md: "60%" }}
                bgColor="#e76f51"
                color="white"
              >
                Begin here
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          className="borderGreen"
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
          gap="20px"
        >
          <VerticalCarousel images={imagesDown} direction="down" />
          <VerticalCarousel images={imagesUp} direction="up" />
        </Box>
      </Box>
    </Box>
  );
}
