import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import { WelcomeGrid, AvatarStyles } from "./styles";

const WelcomeSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack
            id="top-container"
            justifyContent="center"
            alignItems="center"
            p={3}
            pt={{ xs: 15, md: 3 }}
            pb={10}
            width="100%"
            height="100vh"
            direction={{ xs: "column", md: "row" }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    justifyContent: "center",
                    margin: { xs: "20vw 0", md: 0 },
                }}
            >
                <Typography
                    color={theme.palette.orange.main}
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={{ xs: "10vw", md: "4vw" }}
                    sx={{
                        width: "80%",
                        textShadow: `0px 0px 15px ${theme.palette.orange.main}`,
                    }}
                >
                    {t("registrationPage.title")}
                </Typography>
            </Box>

            <Box sx={WelcomeGrid}>
                <Square
                    bgcolor={theme.palette.blue.dark}
                    radius={{
                        mobile: ["6vw", "1.1.1.1"],
                        desktop: ["2vw", "1.1.1.1"],
                    }}
                    sx={{
                        gridRow: "3 / 8",
                        gridColumn: "1 / 6",
                    }}
                />

                <Square
                    bgcolor={theme.palette.orange.main}
                    radius={{
                        mobile: ["6vw", "1.1.1.1"],
                        desktop: ["2vw", "1.1.1.1"],
                    }}
                    sx={{
                        gridRow: "1 / 8",
                        gridColumn: "6 / 13",
                    }}
                />

                <Avatar sx={AvatarStyles} variant="square" />
            </Box>
        </Stack>
    );
};

export default WelcomeSection;
