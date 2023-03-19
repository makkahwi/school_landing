import { Stack } from "@mui/material";
import React from "react";
import WelcomeSection from "@/components/communityPage/welcomeSection";
import LatestNews from "@/components/communityPage/latestNews";

/**
 *  the community page
 *
 */
export default function Community() {
    return (
        <Stack>
            <WelcomeSection />
            <LatestNews />
        </Stack>
    );
}
