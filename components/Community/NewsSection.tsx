import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../common/PageSection";
import PageSectionColumn from "../common/PageSectionColumn";
import Text from "../common/Text";

const NewsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const latestNews = [
    {
      title: t("communityPage.latestNews.item1.title"),
      description: [
        "communityPage.latestNews.item1.description.paragraph1",
        "communityPage.latestNews.item1.description.paragraph2",
        "communityPage.latestNews.item1.description.paragraph3",
      ],
      src: "/landingPage/news1.jpeg",
      date: "29/4/2019",
    },
    {
      title: t("communityPage.latestNews.item2.title"),
      description: [
        "communityPage.latestNews.item2.description.paragraph1",
        "communityPage.latestNews.item2.description.paragraph2",
        "communityPage.latestNews.item2.description.paragraph3",
      ],
      src: "/landingPage/news2.jpeg",
      date: "29/4/2019",
    },
  ];

  return (
    <PageSection>
      {latestNews.map((item, i) => (
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
            {item.title}
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
