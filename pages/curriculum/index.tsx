import { Stack } from "@mui/material";
import WelcomeSection from "@/components/curriculumPage/welcomeSection";
import CoursesSection from "@/components/curriculumPage/coursesSection";
import LanguagesSection from "@/components/curriculumPage/languagesSection";
import IslamicSection from "@/components/curriculumPage/islamicSection";
import ModernSection from "@/components/curriculumPage/modernSection";
import CoCorriculumSection from "@/components/curriculumPage/coCorriculumSection";
import ClubsSection from "@/components/curriculumPage/clubsSection";
import ActivitiesSection from "@/components/curriculumPage/activitiesSection";

/**
 *  the curriculum page
 *
 */
export default function Curriculum() {
    return (
        <Stack>
            <WelcomeSection />
            <CoursesSection />
            <LanguagesSection />
            <IslamicSection />
            <ModernSection />
            <CoCorriculumSection />
            <ClubsSection />
            <ActivitiesSection />
        </Stack>
    );
}
