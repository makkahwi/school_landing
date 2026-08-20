import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import {
  defaultContacts,
} from "@/utils/adminContent";
import { fetchFirebaseContent } from "@/utils/firebaseContent";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PushPinIcon from "@mui/icons-material/PushPin";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import CardComp from "../../components/common/Card";
import PageSection from "../../components/common/PageSection";
import PageSectionColumn from "../../components/common/PageSectionColumn";
import Column from "../common/Column";
import Row from "../common/Row";
import Text from "../common/Text";

const ContactsSection = () => {
  const router = useRouter();
  const { t } = useTranslation(router);
  const fallbackContacts = useMemo(() => defaultContacts(t), [t]);
  const [contacts, setContacts] = useState(fallbackContacts);

  useEffect(() => {
    const sync = () => {
      fetchFirebaseContent()
        .then((stored) =>
          setContacts({ ...fallbackContacts, ...stored.contacts }),
        )
        .catch(() => setContacts(fallbackContacts));
    };

    sync();
    window.addEventListener("ais-admin-content-updated", sync);
    return () => {
      window.removeEventListener("ais-admin-content-updated", sync);
    };
  }, [fallbackContacts]);

  return (
    <PageSection bg="">
      <PageSectionColumn>
        <CardComp bg={theme.palette.basic.light}>
          <Row>
            <Column>
              <Text color={theme.palette.brown.main} variant="subtitle" center>
                {t("Contact.Contacts.Title")}
              </Text>
            </Column>

            <Column md={4}>
              <LocalPhoneIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />
              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Call.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {contacts.phonePrimary}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {contacts.phoneSecondary}
              </Text>
            </Column>

            <Column md={4}>
              <EmailIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Email.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {contacts.email}
              </Text>
            </Column>

            <Column md={4}>
              <PushPinIcon
                sx={{
                  color: theme.palette.brown.main,
                  width: { xs: "8vw", md: "6vw" },
                  height: "auto",
                }}
              />

              <Text color={theme.palette.brown.main} variant="cardtitle" center>
                {t("Contact.Contacts.Meeting.Title")}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {contacts.meetingDays}
              </Text>

              <Text color={theme.palette.brown.main} center>
                {contacts.meetingHours}
              </Text>
            </Column>
          </Row>

          <iframe
            src={contacts.mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          />

          <Text color={theme.palette.brown.main} center>
            {contacts.address}
          </Text>
        </CardComp>
      </PageSectionColumn>
    </PageSection>
  );
};

export default ContactsSection;
