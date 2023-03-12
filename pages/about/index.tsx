import WhyAISSection from "@/components/aboutPage/whyAISSection";
import WelcomeSection from "@/components/aboutPage/welcomeSection";
import AISBeginning from "@/components/aboutPage/aisBeginning";
import { Stack } from "@mui/material";

export default function AboutAIS() {
    return (
        <Stack>
            <WelcomeSection />
            <WhyAISSection />
            <AISBeginning />
        </Stack>
    );
}
