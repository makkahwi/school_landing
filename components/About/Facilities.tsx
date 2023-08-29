import PageSection from "@/components/common/PageSection";
import PageSectionColumn from "@/components/common/PageSectionColumn";
import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import Text from "../common/Text";
import PhotoGallery from "../common/PhotoGallery";

const Facilities = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const photos = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      cols: 2,
    },
  ];

  return (
    <PageSection>
      <PageSectionColumn>
        <Text color={theme.palette.orange.main} variant="title">
          {t("aboutPage.campus.title")}
        </Text>
      </PageSectionColumn>

      {["1", "2"].map((item, i) => (
        <PageSectionColumn key={i}>
          <Text color={theme.palette.orange.main} justify>
            {t(`aboutPage.campus.paragraph${item}`)}
          </Text>
        </PageSectionColumn>
      ))}

      <PageSectionColumn>
        <PhotoGallery photos={photos} />
      </PageSectionColumn>
    </PageSection>
  );
};

export default Facilities;
