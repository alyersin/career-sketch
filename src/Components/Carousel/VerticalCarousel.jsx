"use client";
import { Box, Flex, Image, Badge, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export default function VerticalCarousel({ images, direction = "down" }) {
  const scrollDown = keyframes`
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); /* Move exactly half the content height */
  `;

  const scrollUp = keyframes`
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); /* Move back to start position */
  `;

  const duration = `${images.length * 3}s`;
  const animation = `${
    direction === "down" ? scrollDown : scrollUp
  } ${duration} linear infinite`;

  // Create seamless loop by duplicating images
  const loopedImages = [...images, ...images];

  const templateTitles = [
    "Modern Professional",
    "Creative Designer",
    "Tech Specialist",
    "Executive Classic",
    "Minimalist Clean",
    "Bold & Dynamic",
    "Academic Scholar",
    "Startup Founder",
    "Marketing Pro",
    "Finance Expert",
  ];

  const templateDescriptions = [
    "Clean, ATS-friendly design perfect for corporate roles",
    "Colorful template showcasing creative portfolio work",
    "Technical layout highlighting coding skills and projects",
    "Traditional format emphasizing leadership experience",
    "Simple, elegant design focusing on content",
    "Eye-catching template for standout applications",
    "Academic format for research and education roles",
    "Dynamic template for entrepreneurial positions",
    "Marketing-focused layout with metrics and campaigns",
    "Professional template for finance and business roles",
  ];

  return (
    <Box
      position="relative"
      width="280px"
      height="75vh"
      overflow="hidden"
      borderRadius="20px"
      boxShadow="0 20px 40px rgba(0,0,0,0.1)"
    >
      <Flex
        flexDirection="column"
        animation={animation}
        gap="16px"
        padding="8px"
        willChange="transform"
      >
        {loopedImages.map((src, index) => (
          <Box
            key={`${src}-${index}`}
            flexShrink={0}
            width="100%"
            height="320px"
            bg="white"
            borderRadius="16px"
            overflow="hidden"
            boxShadow="0 8px 25px rgba(0,0,0,0.15)"
            position="relative"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
            }}
          >
            <Image
              src={src}
              alt={`Resume template ${(index % images.length) + 1}`}
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius="16px"
            />

            {/* Overlay with template info */}
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bgGradient="linear(to-t, rgba(0,0,0,0.9), transparent)"
              p={4}
              borderRadius="0 0 16px 16px"
            >
              <Badge
                colorScheme="blue"
                variant="solid"
                borderRadius="full"
                px={3}
                py={1}
                fontSize="12px"
                fontWeight="bold"
                mb={2}
              >
                {templateTitles[index % templateTitles.length]}
              </Badge>
              <Text
                color="white"
                fontSize="13px"
                fontWeight="medium"
                textShadow="0 1px 3px rgba(0,0,0,0.7)"
                lineHeight="1.3"
                mb={1}
              >
                {templateDescriptions[index % templateDescriptions.length]}
              </Text>
              <Text
                color="rgba(255,255,255,0.8)"
                fontSize="11px"
                textShadow="0 1px 3px rgba(0,0,0,0.7)"
              >
                ATS Optimized • Free Download
              </Text>
            </Box>

            {/* Premium badge for some templates */}
            {index % 3 === 0 && (
              <Badge
                position="absolute"
                top="12px"
                right="12px"
                colorScheme="yellow"
                variant="solid"
                borderRadius="full"
                px={2}
                py={1}
                fontSize="10px"
                fontWeight="bold"
              >
                ⭐ Premium
              </Badge>
            )}
          </Box>
        ))}
      </Flex>

      {/* Gradient overlays for smooth edges */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        height="40px"
        bgGradient="linear(to-b, rgba(255,255,255,0.9), transparent)"
        pointerEvents="none"
        zIndex={2}
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="40px"
        bgGradient="linear(to-t, rgba(255,255,255,0.9), transparent)"
        pointerEvents="none"
        zIndex={2}
      />
    </Box>
  );
}
