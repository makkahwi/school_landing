import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import PageSection from "../../components/common/pageSection";

const AISBeginning = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <Typography
          fontSize={{
            xs: "10vw",
            md: "3vw",
          }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("aboutPage.beginningAISTitle")}
        </Typography>
      </PageSectionColumn>

      {["1", "2", "3"].map((_, i) => (
        <PageSectionColumn key={i}>
          <Typography
            mt={2}
            textAlign="justify"
            fontSize={{
              xs: "4vw",
              md: "1.5vw",
            }}
            color={theme.palette.orange.main}
          >
            {t(`aboutPage.foundingStory.paragraph${i + 1}`)}
          </Typography>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default AISBeginning;
