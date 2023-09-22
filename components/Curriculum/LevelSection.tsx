import useTranslation from "@/hooks/useTranslation";
import { Avatar, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import StaticList from "../common/StaticList";
import Text from "../common/Text";

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
          <Text color={titleColor} variant="title">
            {t(title)}
          </Text>

          <Text color={subTitleColor} variant="subtitle" justify>
            {t(subTitle)}
          </Text>
        </Stack>
      </PageSectionColumn>

      <PageSectionColumn>
        <StaticList items={listElemnts("50%", iconsColor)} color={iconsColor} />
      </PageSectionColumn>
    </PageSection>
  );
};

export default LevelSection;
