import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import {
    UpperSquaresStyles,
    UpperSquaresGrid,
    LowerSquaresStyles,
    LowerSquaresGrid,
} from "./styles";

const WelcomeSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack
            id="top-container"
            p={3}
            pt={{ xs: 15, md: 3 }}
            pb={5}
            bgcolor={theme.palette.blue.dark}
            sx={{ width: "100%" }}
        >
            <Box sx={UpperSquaresStyles}>
                <Box sx={UpperSquaresGrid}>
                    <Square
                        bgcolor={theme.palette.blue.light}
                        radius={{
                            mobile: ["3vw", "1.0.1.1"],
                            desktop: ["1vw", "1.0.1.1"],
                        }}
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "1 / 3",
                        }}
                    />

                    <Square
                        bgcolor={theme.palette.blue.light}
                        radius={{
                            mobile: ["4vw", "0.1.1.1"],
                            desktop: ["1.5vw", "0.1.1.1"],
                        }}
                        sx={{
                            gridRow: "1 / 4",
                            gridColumn: "3 / 6",
                        }}
                    />
                </Box>
            </Box>

            <Typography
                mt={3}
                mb={3}
                // variant="h3"
                fontSize={{ xs: "8vw", md: "4vw" }}
                color={theme.palette.basic.light}
                fontWeight="bold"
                sx={{
                    textShadow: `0px 0px 15px ${theme.palette.basic.light}`,
                }}
            >
                {t("curriculumPage.title")}
            </Typography>

            <Stack
                spacing={5}
                direction={{ xs: "column-reverse", md: "row" }}
                sx={LowerSquaresStyles}
            >
                <Box sx={LowerSquaresGrid}>
                    <Square
                        bgcolor={theme.palette.blue.light}
                        radius={{
                            mobile: ["3vw", "1.1.1.0"],
                            desktop: ["1vw", "1.1.1.0"],
                        }}
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "1 / 3",
                        }}
                    />

                    <Square
                        bgcolor={theme.palette.blue.light}
                        radius={{
                            mobile: ["4vw", "0.1.1.1"],
                            desktop: ["1.5vw", "0.1.1.1"],
                        }}
                        sx={{
                            gridRow: "3 / 6",
                            gridColumn: "1 / 4",
                        }}
                    />
                </Box>

                <Avatar
                    src=""
                    alt="children"
                    variant="square"
                    sx={{
                        width: { xs: "100%", md: "auto" },
                        height: { xs: "auto", md: "20rem" },
                    }}
                />
            </Stack>

            <Container
                sx={{
                    width: "100%",
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

export default WelcomeSection;
