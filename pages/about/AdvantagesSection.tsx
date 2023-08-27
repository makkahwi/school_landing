import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { aboutPage } from "@/utils/constants";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import { Fragment } from "react";
import CardComp from "../../components/common/Card";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import PageSection from "../../components/common/pageSection";

const AdvantagesSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={theme.palette.basic.light}>
      <PageSectionColumn>
        <Typography
          fontSize={{
            xs: "10vw",
            md: "3vw",
          }}
          fontWeight="bold"
          color={theme.palette.orange.main}
        >
          {t("aboutPage.whyAISTitle")}
        </Typography>
      </PageSectionColumn>

      {aboutPage.whyAIScards.map((item, i) => (
        <Fragment key={i}>
          <PageSectionColumn md={4}>
            <CardComp bg={theme.palette.orange.main}>
              <Avatar
                variant="square"
                alt={item.alt}
                src={item.src}
                sx={{
                  width: {
                    xs: "35vw",
                    md: "auto",
                  },
                  height: {
                    xs: "35vw",
                    md: "auto",
                  },
                  maxWidth: { md: "12vw" },
                }}
              />
              <Typography
                mt={2}
                variant="h6"
                textAlign="center"
                color={theme.palette.basic.light}
              >
                {t(item.text)}
              </Typography>
            </CardComp>
          </PageSectionColumn>

          <PageSectionColumn md={8}>
            <Typography
              textAlign="justify"
              width={{ xs: "100%", md: "60%" }}
              color={theme.palette.orange.main}
              fontWeight="bold"
              fontSize={{
                xs: "5vw",
                md: "1.5vw",
              }}
            >
              {t(item.longText)}
            </Typography>
          </PageSectionColumn>
        </Fragment>
      ))}
    </PageSection>
  );
};

export default AdvantagesSection;
