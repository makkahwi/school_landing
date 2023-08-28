import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Text from "../common/Text";

const ContactsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <PageSection bg={theme.palette.blue.dark}>
            <PageSectionColumn>
              <Text color={theme.palette.basic.light} variant="subtitle" center>
                {t("contactPage.contactTitle")}
              </Text>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <LocalPhoneIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Text
                color={theme.palette.basic.light}
                variant="cardtitle"
                center
              >
                {t("contactPage.contact1.title")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact1.description1")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact1.description2")}
              </Text>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <EmailIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text
                color={theme.palette.basic.light}
                variant="cardtitle"
                center
              >
                {t("contactPage.contact2.title")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact2.description1")}
              </Text>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <PushPinIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text
                color={theme.palette.basic.light}
                variant="cardtitle"
                center
              >
                {t("contactPage.contact3.title")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact3.description1")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact3.description2")}
              </Text>

              <Text color={theme.palette.basic.light} center>
                {t("contactPage.contact3.description3")}
              </Text>
            </PageSectionColumn>
          </PageSection>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactsSection;
