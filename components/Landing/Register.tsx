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
    <PageSection bg={theme.palette.orange.main} py={8}>
      <Row spacing={2}>
        <Column>
          <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "center" }}>
            <Text color={theme.palette.blue.dark} variant="title" bold center>
              {t("Engage.Registration.Title")}
            </Text>

            <Text color={theme.palette.blue.dark} doubleHeight justify>
              {t("Engage.Registration.Description")}
            </Text>

            <Button
              variant="contained"
              size="large"
              href="/engage/registration-fees"
              sx={{
                mt: 1,
                px: 4,
                py: 1.4,
                borderRadius: "10px",
                backgroundColor: theme.palette.blue.dark,
                color: theme.palette.basic.light,
                fontWeight: 700,
                "&:hover": { backgroundColor: theme.palette.basic.dark },
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
