import WelcomeSection from "@/components/landingPage/welcomeSection";
import WhyAISSection from "@/components/landingPage/whyAISSection";
import NewsSection from "@/components/landingPage/newsSection";
import { Stack } from "@mui/material";

/**
 *  the landing page of teh website
 *
 */

export default function Home() {
    return (
        <Stack>
            <WelcomeSection />
            <WhyAISSection />
            <NewsSection />
        </Stack>
    );
}
