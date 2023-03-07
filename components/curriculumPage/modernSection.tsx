import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { ModernScienceContainer, ModernScienceGrid } from "./styles";

const ModernSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack p={5} pt={10} spacing={5} sx={ModernScienceContainer}>
            <Typography
                mb={5}
                sx={{
                    color: theme.palette.basic.light,
                    fontWeight: "bold",
                    fontSize: { xs: "9vw", md: "4vw" },
                }}
            >
                {t("curriculumPage.modernSciences")}
            </Typography>

            <Typography
                mb={5}
                sx={{
                    color: theme.palette.basic.light,
                    width: {xs: "100%", md: "80%"},
                    fontSize: { xs: "6vw", md: "1.5vw" },
                    textAlign: "justify",
                }}
            >
                {t("curriculumPage.modernSciencesContent")}
            </Typography>

            <Box sx={ModernScienceGrid}>
                <Square
                    bgcolor={theme.palette.brown.main}
                    radius={{
                        mobile: ["2vw", "1.1.0.1"],
                        desktop: ["1.5vw", "1.1.0.1"],
                    }}
                    sx={{
                        gridRow: "1 / 4",
                        gridColumn: "1 / 4",
                    }}
                />

                <Square
                    bgcolor={theme.palette.blue.dark}
                    radius={{
                        mobile: ["5vw", "1.0.1.1"],
                        desktop: ["3vw", "1.0.1.1"],
                    }}
                    sx={{
                        gridRow: "1 / 8",
                        gridColumn: "4 / 11",
                    }}
                />

                <Square
                    bgcolor={theme.palette.basic.light}
                    radius={{
                        mobile: ["7vw", "0.1.1.1"],
                        desktop: ["4vw", "0.1.1.1"],
                    }}
                    sx={{
                        gridRow: "1 / 11",
                        gridColumn: "11 / 21",
                    }}
                />

                <Square
                    bgcolor={theme.palette.blue.dark}
                    radius={{
                        mobile: ["2vw", "1.1.1.0"],
                        desktop: ["1.5vw", "1.1.1.0"],
                    }}
                    sx={{
                        gridRow: "1 / 4",
                        gridColumn: "21 / 24",
                    }}
                />

                <Square
                    bgcolor={theme.palette.brown.main}
                    radius={{
                        mobile: ["1vw", "0.1.1.1"],
                        desktop: ["1vw", "0.1.1.1"],
                    }}
                    sx={{
                        gridRow: "4 / 5",
                        gridColumn: "21 / 23",
                    }}
                />
            </Box>

            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ArrowDownwardRoundedIcon
                    sx={{
                        color: theme.palette.basic.light,
                        width: { xs: "20vw", md: "5vw" },
                        height: { xs: "20vw", md: "5vw" },
                    }}
                />
            </Container>
        </Stack>
    );
};

export default ModernSection;
