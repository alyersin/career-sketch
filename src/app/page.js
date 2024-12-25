import { Box, Heading } from "@chakra-ui/react";
import "/src/app/globals.css";
import TopSection from "@/Components/TopSection/TopSection";
import VerticalCarousel from "@/Components/Carousel/VerticalCarousel";
import Header from "@/Components/Header/Header";

export default function Home() {
  return (
    <Box className="borderRed" maxWidth="1280px" mx="auto">
      <TopSection />
    </Box>
  );
}
