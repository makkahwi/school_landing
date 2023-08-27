import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import ScrollableList from "../../components/common/ScrollableList";

interface LevelSectionProps {
  section: {
    title: string;
    subTitle: string;
    image: string;

    bgColor: string;
    titleColor: string;
    subTitleColor: string;
    iconsColor: string;

    listElemnts: (
      size: string,
      color: string
    ) => {
      text: string;
      icon: JSX.Element;
    }[];
  };
}

const LevelSection = ({ section }: LevelSectionProps) => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const {
    title,
    subTitle,
    image,
    bgColor,
    titleColor,
    subTitleColor,
    iconsColor,
    listElemnts,
  } = section;

  return (
    <PageSection bg={bgColor}>
      <PageSectionColumn md={3}>
        <Avatar
          src={image}
          sx={{
            margin: 3,
            width: { xs: "30vw", md: "15vw" },
            height: "auto",
          }}
          variant="square"
        />
      </PageSectionColumn>

      <PageSectionColumn md={9}>
        <Stack
          justifyContent="center"
          alignItems={{ xs: "center", md: "flex-start" }}
          mb={{ xs: 5, md: 0 }}
        >
          <Typography
            color={titleColor}
            fontSize={{ xs: "9vw", md: "3vw" }}
            fontWeight="bold"
          >
            {t(title)}
          </Typography>
          <Typography
            color={subTitleColor}
            fontSize={{ xs: "7vw", md: "1.5vw" }}
            textAlign="justify"
          >
            {t(subTitle)}
          </Typography>
        </Stack>
      </PageSectionColumn>

      <PageSectionColumn>
        <ScrollableList
          t={t}
          uniqueId={title}
          textColor={iconsColor}
          arrowColor={theme.palette.basic.light}
          desktop={{
            width: 0.62,
            height: "15vw",
            arrowSize: "8vw",
            iconSize: 6,
            marginSize: 3,
          }}
          mobile={{
            width: 0.55,
            height: "35vw",
            arrowSize: "10vw",
            iconSize: 13,
            marginSize: 9,
          }}
          items={listElemnts("100%", iconsColor)}
        />
      </PageSectionColumn>
    </PageSection>
  );
};

export default LevelSection;
