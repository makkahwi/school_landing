import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import CardComp from "../../components/common/Card";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import PageSection from "../../components/common/pageSection";

const ContactsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <CardComp bg={theme.palette.blue.dark}>
          <PageSection bg={theme.palette.blue.dark}>
            <PageSectionColumn>
              <Typography
                m={3}
                fontSize={{ xs: "5vw", md: "3vw" }}
                fontWeight="bold"
                color={theme.palette.basic.light}
              >
                {t("contactPage.contactTitle")}
              </Typography>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <LocalPhoneIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "2vw" }}
                fontWeight="bold"
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact1.title")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact1.description1")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact1.description2")}
              </Typography>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <EmailIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "2vw" }}
                fontWeight="bold"
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact2.title")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact2.description1")}
              </Typography>
            </PageSectionColumn>

            <PageSectionColumn md={4}>
              <PushPinIcon
                sx={{
                  color: theme.palette.basic.light,
                  width: { xs: "3vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "2vw" }}
                fontWeight="bold"
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact3.title")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact3.description1")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact3.description2")}
              </Typography>
              <Typography
                m={2}
                fontSize={{ xs: "3vw", md: "1.5vw" }}
                color={theme.palette.basic.light}
              >
                {t("contactPage.contact3.description3")}
              </Typography>
            </PageSectionColumn>
          </PageSection>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactsSection;
