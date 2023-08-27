import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { communityPage } from "@/utils/constants";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import CardComp from "../common/Card";
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
          <Text color={theme.palette.blue.dark} variant="SUBtitle" center>
            {t(item.title)}
          </Text>

          <Text justify>
            {item.description
              .map((desc) => t(desc))
              .join(". ")
              .slice(0, 110)}
            {"..."}
          </Text>

          <Text color={theme.palette.blue.dark} center>
            {item.date}
          </Text>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default NewsSection;
