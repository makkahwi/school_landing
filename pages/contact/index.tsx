import PageHeader from "@/components/common/PageHeader";
import ContactsAndLocation from "@/pages/contact/ContactsSection";
import useTranslation from "@/hooks/useTranslation";
import ContactForm from "@/components/Contact/ContactForm";
import { departmentColors } from "@/utils/constants";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const { t } = useTranslation(router);

  return (
    <Stack>
      <PageHeader bg={departmentColors.about} title={t("contactPage.title")} />
      <ContactForm />
      <ContactsAndLocation />
    </Stack>
  );
}
