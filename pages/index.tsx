import AcademicSection from "@/components/Landing/Academic";
import NewsSection from "@/components/Landing/News";
import RegisterSection from "@/components/Landing/Register";
import WelcomeSection from "@/components/Landing/Welcome";
import WhyAISSection from "@/components/Landing/Why";
import theme from "@/styles/theme";
import { Stack } from "@mui/material";

export default function LandingPage() {
  return (
    <Stack
      spacing={{ xs: 2.5, md: 3 }}
      sx={{
        backgroundColor: theme.palette.blue.main,
        py: { xs: 2, md: 3 },
      }}
    >
      <WelcomeSection />
      <WhyAISSection />
      <AcademicSection />
      <RegisterSection />
      <NewsSection />
    </Stack>
  );
}
