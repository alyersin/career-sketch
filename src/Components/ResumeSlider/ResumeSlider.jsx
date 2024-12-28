"use client";

import React from "react";
import { Box, Heading, Text, Image, Button, Flex } from "@chakra-ui/react";
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
      img: "../assets/top-resume-1.avif",
      title: "Sarah Thompson",
      description:
        "Marketing specialist with a proven track record of driving brand growth and engagement.",
    },
    {
      id: 2,
      img: "../assets/top-resume-2.avif",
      title: "Michael Davis",
      description:
        "Software engineer skilled in developing scalable and efficient web applications.",
    },
    {
      id: 3,
      img: "../assets/top-resume-3.avif",
      title: "Emily Brown",
      description:
        "Graphic designer passionate about creating visually appealing and user-friendly designs.",
    },
  ];

  return (
    <Box className="borderBlue" bg="#2E404A" color="white" py={10}>
      <Box className="borderGreen" textAlign="center" mb={8}>
        <Heading as="h2" size="lg">
          Discover the best resume templates for your dream job
        </Heading>
        <Text mt={2} fontSize="md">
          Choose from a variety of{" "}
          <Text as="span" color="blue.300">
            expertly crafted resume templates
          </Text>{" "}
          designed to highlight your skills and experience. Make a lasting
          impression on recruiters and land your next opportunity with ease.
        </Text>
      </Box>

      <Box className="borderGreen" maxWidth="960px" mx="auto" px={4}>
        <Slider className="borderRed" {...sliderSettings}>
          {resumes.map((resume) => (
            <Box key={resume.id} p={4} textAlign="center">
              <Flex justifyContent="center" alignItems="center">
                <Image
                  src={resume.img}
                  alt={resume.title}
                  borderRadius="md"
                  boxShadow="md"
                  height={400}
                  maxWidth="80%"
                />
              </Flex>
              <Heading as="h3" size="md" mt={4}>
                {resume.title}
              </Heading>
              <Text mt={2} fontSize="sm" color="gray.400">
                {resume.description}
              </Text>
              <Button mt={4} colorScheme="blue" size="md" fontWeight="bold">
                Use This Template
              </Button>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
