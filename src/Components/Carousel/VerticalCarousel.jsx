"use client";
import { Box, Flex, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export default function VerticalCarousel({ images, direction = "down" }) {
  const scrollDown = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-100%); } /* Scrolls fully through all items */
  `;

  const scrollUp = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(100%); } /* Scrolls fully through all items */
  `;

  const duration = `${images.length * 3}s`;
  const animation = `${
    direction === "down" ? scrollDown : scrollUp
  } ${duration} linear infinite`;

  const loopedImages = [...images];

  return (
    <Box position="relative" width="300px" height="70vh" overflow="hidden">
      <Flex
        className="borderBlue"
        flexDirection="column"
        animation={animation}
        gap="2"
        height="100%"
      >
        {loopedImages.map((src, index) => (
          <Box
            className="borderGreen"
            key={index}
            flexShrink={0}
            width="100%"
            height="340px"
            bg="gray.200"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
