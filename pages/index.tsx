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
        <Stack pb={5}>
            <WelcomeSection />
            <WhyAISSection />
            <NewsSection />
        </Stack>
    );
}
