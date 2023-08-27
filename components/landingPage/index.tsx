import NewsSection from "@/components/LandingPage/News";
import WelcomeSection from "@/components/LandingPage/Welcome";
import WhyAISSection from "@/components/LandingPage/Why";
import { Stack } from "@mui/material";

export default function LandingPage() {
  return (
    <Stack>
      <WelcomeSection />
      <WhyAISSection />
      <NewsSection />
    </Stack>
  );
}
