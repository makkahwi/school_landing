import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { communityPage } from "@/utils/constants";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const NewsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection>
      {communityPage.latestNews.map((item, i) => (
        <PageSectionColumn md={6} key={i}>
          <Avatar
            variant="square"
            src={item.src}
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
          <Text color={theme.palette.blue.dark} variant="cardTitle" center>
            {t(item.title)}
          </Text>

          <Text color={theme.palette.blue.dark}>{item.date}</Text>

          <Text variant="p" justify>
            {item.description
              .map((desc) => t(desc))
              .join(". ")
              .slice(0, 110)}
            {"..."}{" "}
          </Text>

          <Text variant="p" color={theme.palette.blue.dark}>
            {"Read More"}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default NewsSection;
