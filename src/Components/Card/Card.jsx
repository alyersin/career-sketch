import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

export default function Card({
  title,
  description,
  image,
  buttonText,
  onClick,
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bgColor="white"
      maxW="sm"
    >
      {/* RENDER IMAGE */}
      {image && <Image src={image} alt={title} borderRadius="md" mb={4} />}
      {/* TITLE */}
      <Heading fontSize="lg" mb={2}>
        {title}
      </Heading>
      {/* DESCRIPTION */}
      <Text fontSize="md" color="gray.600" mb={4}>
        {description}
      </Text>
      {/* BUTON */}
      {buttonText && (
        <Button colorScheme="blue" onClick={onClick}>
          {buttonText}
        </Button>
      )}
    </Box>
  );
}
