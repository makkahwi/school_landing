import WelcomeSection from "@/components/landingPage/WelcomeSection";
import WhyAISSection from "@/components/landingPage/WhyAISSection";
import NewsSection from "@/components/landingPage/NewsSection";
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
