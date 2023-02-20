import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import {} from "@/utils/constants";
import {} from "./styles";

const WelcomeSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack>
            <Typography
                variant="h3"
                color={theme.palette.orange.main}
                fontWeight="bold"
                align="center"
                sx={{
                    textShadow: `0px 0px 15px ${theme.palette.orange.main}`,
                }}
            >
                {t("levelsPage.title")}
            </Typography>
        </Stack>
    );
};

export default WelcomeSection;
