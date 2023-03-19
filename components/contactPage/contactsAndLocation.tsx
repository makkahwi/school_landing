import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";


const ContactsAndLocation = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return <Stack>
        
    </Stack>;
};

export default ContactsAndLocation;
