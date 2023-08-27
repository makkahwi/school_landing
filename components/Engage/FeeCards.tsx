import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import Text from "../common/Text";

interface FeeCardsProps {
  templateId: string;
  isSubStack: boolean;
  boxes: {
    title: string;
    items: {
      title: string;
      price: string;
      description: string;
    }[];
  }[];
}

const FeeCards = ({ boxes, isSubStack, bg, cardBg }: FeeCardsProps) => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={bg}>
      {boxes.map((box, i) => (
        <PageSectionColumn key={i}>
          <Text variant="title" center>
            {t(box.title)}
          </Text>

          <PageSection bg={bg}>
            {box.items.map((item, y) => (
              <PageSectionColumn md={6} key={y}>
                <Square
                  bgcolor={cardBg}
                  radius={{
                    mobile: ["6vw", "1.1.1.1"],
                    desktop: ["2vw", "1.1.1.1"],
                  }}
                  sx={{
                    width: { xs: "100%", md: "100%" },
                    padding: 3,
                  }}
                >
                  <Stack spacing={1} p={3} width="100%">
                    <Text variant="subtitle" center>
                      {t(item.title)}
                    </Text>

                    <Stack
                      direction={isSubStack ? "column" : "row"}
                      sx={{
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        variant="title"
                        center
                        color={theme.palette.orange.main}
                      >
                        {t(item.price)}
                      </Text>

                      <Text color={bg} center>
                        {t(item.description)}
                      </Text>
                    </Stack>
                  </Stack>
                </Square>
              </PageSectionColumn>
            ))}
          </PageSection>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default FeeCards;
