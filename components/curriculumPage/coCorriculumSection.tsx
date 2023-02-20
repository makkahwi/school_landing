import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import { CoCurriculumGrid, AvatarStyles } from "./styles";

const CoCorriculumSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack
            spacing={4}
            p={5}
            pt={10}
            pb={10}
            bgcolor={theme.palette.basic.light}
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
            direction={{ xs: "column", md: "row" }}
        >
            <Stack
                alignItems="center"
                sx={{ width: { xs: "100%", md: "50%" } }}
            >
                <Typography
                    mb={5}
                    sx={{
                        color: theme.palette.blue.dark,
                        fontWeight: "bold",
                        fontSize: { xs: "9vw", md: "3vw" },
                        textAlign: "center",
                    }}
                >
                    {t("curriculumPage.coCURRICULUM")}
                </Typography>
                <Typography
                    mb={5}
                    sx={{
                        color: theme.palette.blue.dark,
                        width: { xs: "100%", md: "80%" },
                        fontSize: { xs: "6vw", md: "1.5vw" },
                        textAlign: "center",
                    }}
                >
                    {t("curriculumPage.coText")}
                </Typography>
            </Stack>

            <Box sx={CoCurriculumGrid}>
                <Avatar sx={AvatarStyles} variant="square" />

                <Square
                    bgcolor={theme.palette.orange.main}
                    radius={{
                        mobile: ["6vw", "1.1.1.1"],
                        desktop: ["2vw", "1.1.1.1"],
                    }}
                    sx={{
                        gridRow: "1 / 2",
                        gridColumn: "1 / 2",
                    }}
                />

                <Square
                    bgcolor={theme.palette.orange.main}
                    radius={{
                        mobile: ["6vw", "1.1.1.1"],
                        desktop: ["2vw", "1.1.1.1"],
                    }}
                    sx={{
                        gridRow: "2 / 3",
                        gridColumn: "1 / 2",
                    }}
                />

                <Square
                    bgcolor={theme.palette.orange.main}
                    radius={{
                        mobile: ["6vw", "1.1.1.1"],
                        desktop: ["2vw", "1.1.1.1"],
                    }}
                    sx={{
                        gridRow: "1 / 3",
                        gridColumn: "2 / 3",
                    }}
                />
            </Box>
        </Stack>
    );
};

export default CoCorriculumSection;
