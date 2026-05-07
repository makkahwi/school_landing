import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { useRouter } from "next/router";

import Column from "../common/Column";
import PageSection from "../common/PageSection";
import Row from "../common/Row";
import Text from "../common/Text";
import { Button, Box } from "@mui/material";

const RegisterSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection
      py={10}
      bg={theme.palette.orange.main}
      sx={{
        background: `linear-gradient(120deg, ${theme.palette.orange.main} 0%, #f0ba07 100%)`,
      }}
    >
      <Row spacing={3}>
        <Column>
          <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "center" }}>
            <Text color={theme.palette.basic.light} variant="title" bold center>
              {t("Engage.Registration.Title")}
            </Text>

            <Text color={theme.palette.basic.light} doubleHeight justify>
              {t("Engage.Registration.Description")}
            </Text>

            <Button
              variant="contained"
              size="large"
              href="/engage/registration-fees"
              sx={{
                mt: 2,
                px: 5,
                py: 1.8,
                borderRadius: "999px",
                backgroundColor: theme.palette.brown.main,
                color: theme.palette.basic.light,
                fontWeight: 700,
                "&:hover": { backgroundColor: theme.palette.blue.dark },
              }}
            >
              {t("Engage.Registration.RegisterNow")}
            </Button>
          </Box>
        </Column>
      </Row>
    </PageSection>
  );
};

export default RegisterSection;
