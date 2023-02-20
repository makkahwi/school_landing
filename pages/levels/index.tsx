import LevelTemplate from "@/components/levelsPage/levelTemplate";
import WelcomeSection from "@/components/levelsPage/welcomeSection";
import { Stack } from "@mui/material";
import React from "react";

export default function LevelsOfStudy() {
    return (
        <Stack>
            <WelcomeSection />

            {[].map((section, index) => (
                <React.Fragment key={`level section number: ${index}`}>
                    <LevelTemplate />
                </React.Fragment>
            ))}
        </Stack>
    );
}
