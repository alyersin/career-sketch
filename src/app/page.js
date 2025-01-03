import { Box } from "@chakra-ui/react";
import "/src/app/globals.css";
import TopSection from "@/Components/TopSection/TopSection";
import ReviewsSection from "@/Components/ReviewSection/ReviewSection";
import ResumeSlider from "@/Components/ResumeSlider/ResumeSlider";
import FAQ from "@/Components/FAQ/FAQ";

export default function Home() {
  return (
    <Box>
      <Box className="borderRed" w="100vw" mx="auto">
        <TopSection />
      </Box>

      <Box className="borderBlue" maxWidth="1280px" mx="auto" p={4}>
        <ReviewsSection />
      </Box>

      <Box className="borderBlue" mx="auto">
        <ResumeSlider />
      </Box>

      <Box>
        <FAQ />
      </Box>
    </Box>
  );
}
