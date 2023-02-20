import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { curriculumPage } from "@/utils/constants";
import { IslamicStudiesGrid } from "./styles";

const IslamicSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack
            spacing={4}
            pb={5}
            bgcolor={theme.palette.basic.light}
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={8}
                sx={{ width: "100%" }}
            >
                <Stack
                    p={5}
                    spacing={3}
                    sx={{ width: { xs: "100%", md: "50%" } }}
                >
                    <Typography
                        sx={{
                            color: theme.palette.basic.dark,
                            fontWeight: "bold",
                            fontSize: { xs: "9vw", md: "2vw" },
                        }}
                    >
                        {t("curriculumPage.islamicStudies")}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "6vw", md: "1.5vw" },
                            textAlign: "justify",
                        }}
                    >
                        {t("curriculumPage.islamicStudiesContent")}
                    </Typography>
                </Stack>

                <Box pt={{ md: 7 }} sx={IslamicStudiesGrid}>
                    <Square
                        bgcolor={theme.palette.blue.dark}
                        radius={{
                            mobile: ["12vw", "1.1.0.1"],
                            desktop: ["5vw", "1.1.0.1"],
                        }}
                        sx={{
                            gridRow: "1 / 9",
                            gridColumn: "1 / 9",
                        }}
                    >
                        <Avatar />
                    </Square>

                    <Square
                        bgcolor={theme.palette.brown.main}
                        radius={{
                            mobile: ["3vw", "1.1.1.0"],
                            desktop: ["1.5vw", "1.1.1.0"],
                        }}
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "9 / 11",
                        }}
                    />

                    <Square
                        bgcolor={theme.palette.orange.main}
                        radius={{
                            mobile: ["9vw", "1.1.1.0"],
                            desktop: ["4vw", "1.1.1.0"],
                        }}
                        sx={{
                            gridRow: "3 / 9",
                            gridColumn: "9 / 15",
                        }}
                    >
                        <Avatar />
                    </Square>

                    <Square
                        bgcolor={theme.palette.basic.main}
                        radius={{
                            mobile: ["6vw", "0.1.1.1"],
                            desktop: ["2vw", "0.1.1.1"],
                        }}
                        sx={{
                            gridRow: "9 / 13",
                            gridColumn: "9 / 13",
                        }}
                    >
                        <Avatar />
                    </Square>
                </Box>
            </Stack>

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

export default IslamicSection;
