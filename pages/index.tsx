import AcademicSection from "@/components/Landing/Academic";
import NewsSection from "@/components/Landing/News";
import RegisterSection from "@/components/Landing/Register";
import WelcomeSection from "@/components/Landing/Welcome";
import WhyAISSection from "@/components/Landing/Why";
import theme from "@/styles/theme";
import { Box, Stack } from "@mui/material";

export default function LandingPage() {
  return (
    <Stack sx={{ backgroundColor: theme.palette.blue.main, py: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: { xs: 3, md: 4 } }}><WelcomeSection /></Box>
      <Box sx={{ mb: { xs: 3, md: 4 } }}><WhyAISSection /></Box>
      <Box sx={{ mb: { xs: 3, md: 4 } }}><AcademicSection /></Box>
      <Box sx={{ mb: { xs: 3, md: 4 } }}><RegisterSection /></Box>
      <Box><NewsSection /></Box>
    </Stack>
  );
}
