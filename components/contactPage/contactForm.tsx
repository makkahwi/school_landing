import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";

const ContactForm = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return <Stack>
        
    </Stack>;
};

export default ContactForm;
