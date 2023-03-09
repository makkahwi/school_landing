import DiscountSection from "@/components/registrationPage/discountSection";
import RequirementsSection from "@/components/registrationPage/requirementsSection";
import StructureSection from "@/components/registrationPage/structureSection";
import WelcomeSection from "@/components/registrationPage/welcomeSection";
import JobOpportunitiesSection from "@/components/registrationPage/jobOpportunitiesSection";
import { Stack } from "@mui/material";
import React from "react";

/**
 *  the levels page
 *
 */
export default function RegistrationAndFees() {
    return (
        <Stack>
            <WelcomeSection />
            <RequirementsSection />
            <StructureSection />
            <DiscountSection />
            <JobOpportunitiesSection />
        </Stack>
    );
}
