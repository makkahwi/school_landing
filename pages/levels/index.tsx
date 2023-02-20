import LevelTemplate from "@/components/levelsPage/levelTemplate";
import WelcomeSection from "@/components/levelsPage/welcomeSection";
import { Stack } from "@mui/material";
import React from "react";
import { levelsPageSections } from "@/utils/constants";

/**
 *  the levels page
 *
 */
export default function LevelsOfStudy() {
    return (
        <Stack>
            <WelcomeSection />

            {levelsPageSections.map((section, index) => (
                <React.Fragment key={`level section number: ${index}`}>
                    <LevelTemplate section={section} />
                </React.Fragment>
            ))}
        </Stack>
    );
}
