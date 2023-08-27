import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/pageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";

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
          <Typography
            p={3}
            width="100%"
            textAlign="center"
            fontSize={{ xs: "3vw", md: "2.5vw" }}
            fontWeight="bold"
            color={theme.palette.basic.dark}
          >
            {t(box.title)}
          </Typography>

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
                    <Typography
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={{
                        xs: "3vw",
                        md: "2vw",
                      }}
                      color={theme.palette.basic.dark}
                    >
                      {t(item.title)}
                    </Typography>

                    <Stack
                      direction={isSubStack ? "column" : "row"}
                      sx={{
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        textAlign="center"
                        fontSize={{
                          xs: "3vw",
                          md: "5vw",
                        }}
                        color={theme.palette.orange.main}
                      >
                        {t(item.price)}
                      </Typography>

                      <Typography
                        textAlign="center"
                        fontSize={{
                          xs: "3vw",
                          md: "1.5vw",
                        }}
                        color={bg}
                      >
                        {t(item.description)}
                      </Typography>
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
