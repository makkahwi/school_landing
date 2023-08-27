import PageSectionColumn from "@/components/common/PageSectionColumn";
import PageSection from "@/components/common/PageSection";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const Facilities = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      <PageSectionColumn>
        <Typography
          mt={10}
          mb={5}
          fontSize={{
            xs: "10vw",
            md: "3vw",
          }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("aboutPage.campus.title")}
        </Typography>
      </PageSectionColumn>

      {["1", "2"].map((item, i) => (
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
            {t(`aboutPage.campus.paragraph${item}`)}
          </Typography>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default Facilities;
