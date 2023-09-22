import NewsSection from "@/components/Landing/News";
import WelcomeSection from "@/components/Landing/Welcome";
import WhyAISSection from "@/components/Landing/Why";
import { Stack } from "@mui/material";
import AcademicSection from "@/components/Landing/Academic";

export default function LandingPage() {
  return (
    <Stack>
      <WelcomeSection />
      <WhyAISSection />
      <AcademicSection />
      <NewsSection />
    </Stack>
  );
}
