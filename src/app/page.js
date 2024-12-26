import { Box } from "@chakra-ui/react";
import "/src/app/globals.css";
import TopSection from "@/Components/TopSection/TopSection";
import ReviewsSection from "@/Components/ReviewSection/ReviewSection";

export default function Home() {
  return (
    <Box>
      {/* TopSection with full width */}
      <Box className="borderRed" w="100vw" mx="auto">
        <TopSection />
      </Box>

      {/* Constrained content below */}
      <Box className="borderBlue" maxWidth="1280px" mx="auto" p={4}>
        <ReviewsSection />
      </Box>
    </Box>
  );
}
