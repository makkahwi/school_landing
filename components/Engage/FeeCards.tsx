import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";

import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Square from "../../components/common/Square";
import Column from "../common/Column";
import Row from "../common/Row";
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
  currency?: boolean;
}

const FeeCards = ({
  boxes,
  isSubStack,
  bg,
  cardBg,
  currency,
}: FeeCardsProps) => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg={bg}>
      {boxes.map((box, i) => (
        <PageSectionColumn key={i}>
          <Text variant="subTitle" center bold>
            {t(box.title)}
          </Text>

          <Row>
            {box.items.map((item, y) => (
              <Column md={6} key={y}>
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
                  <Grid container alignItems="center">
                    <Grid item md={12}>
                      <Text
                        variant="cardTitle"
                        center
                        my={3}
                        style={{ textDecoration: "underline" }}
                      >
                        {t(item.title)}
                      </Text>
                    </Grid>

                    <Grid item md={12}>
                      <Text
                        variant="title"
                        bold
                        center
                        my={3}
                        color={theme.palette.orange.main}
                      >
                        {currency
                          ? t("registrationPage.structure.currency") +
                            " " +
                            t(item.price)
                          : t(item.price)}
                      </Text>
                    </Grid>

                    <Grid item md={12} px={1}>
                      <Text color={bg} center>
                        {t(item.description)}
                      </Text>
                    </Grid>
                  </Grid>
                </Square>
              </Column>
            ))}
          </Row>
        </PageSectionColumn>
      ))}
    </PageSection>
  );
};

export default FeeCards;
