import { Stack } from "@mui/material";
import React from "react";
import WelcomeSection from "@/components/contactPage/welcomeSection";
import ContactForm from "@/components/contactPage/contactForm";
import ContactsAndLocation from "@/components/contactPage/contactsAndLocation";

/**
 *  the contact page
 *
 */
export default function Contact() {
    return (
        <Stack>
            <WelcomeSection />
            <ContactForm />
            <ContactsAndLocation />
        </Stack>
    );
}
