import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import { CoCurriculumGrid } from "../../components/Curriculum/styles";
import Text from "../common/Text";

const CoCorriculumSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn md={6}>
        <Text color={theme.palette.blue.dark} justify>
          {t("curriculumPage.coText")}
        </Text>

        <Text color={theme.palette.blue.dark} justify>
          {t("curriculumPage.modernSciencesContent")}
        </Text>
      </PageSectionColumn>

      <PageSectionColumn md={6}>
        <Box sx={CoCurriculumGrid}>
          {/* <Avatar sx={AvatarStyles} variant="square" /> */}

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 2",
              gridColumn: "1 / 2",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "2 / 3",
              gridColumn: "1 / 2",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["6vw", "1.1.1.1"],
              desktop: ["2vw", "1.1.1.1"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "2 / 3",
            }}
          />
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default CoCorriculumSection;
