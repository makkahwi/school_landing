import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import { curriculumPage } from "@/utils/constants";
import { LanguagesGrid, TitleStyles } from "./styles";

const LanguagesSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack
            pt={10}
            direction={{ xs: "column", md: "row" }}
            spacing={8}
            sx={{
                width: "100%",
            }}
        >
            <Box sx={LanguagesGrid}>
                <Square
                    bgcolor={theme.palette.brown.main}
                    radius={{
                        mobile: ["5.5vw", "1.1.0.1"],
                        desktop: ["3vw", "1.1.0.1"],
                    }}
                    sx={{
                        gridRow: "1 / 5",
                        gridColumn: "2 / 6",
                    }}
                />

                <Square
                    bgcolor={theme.palette.blue.dark}
                    radius={{
                        mobile: ["6vw", "1.0.1.1"],
                        desktop: ["3vw", "1.0.1.1"],
                    }}
                    sx={{
                        gridRow: "5 / 10",
                        gridColumn: "1 / 6",
                    }}
                />

                <Square
                    bgcolor={theme.palette.brown.main}
                    radius={{
                        mobile: ["2vw", "1.0.1.1"],
                        desktop: ["1.5vw", "1.0.1.1"],
                    }}
                    sx={{
                        gridRow: "10 / 12",
                        gridColumn: "4 / 6",
                    }}
                />

                <Square
                    bgcolor={theme.palette.orange.main}
                    radius={{
                        mobile: ["7vw", "0.1.1.1"],
                        desktop: ["4vw", "0.1.1.1"],
                    }}
                    sx={{
                        gridRow: "5 / 12",
                        gridColumn: "6 / 13",
                    }}
                />

                <Typography sx={TitleStyles}>
                    {t("curriculumPage.languages")}
                </Typography>
            </Box>

            <Stack
                p={{ xs: 5, md: 0 }}
                pt={{ md: 10 }}
                pb={{ md: 10 }}
                spacing={5}
                sx={{ width: { xs: "100%", md: "50%" } }}
            >
                {curriculumPage.languages.map((item, index) => (
                    <React.Fragment key={`language item number: ${index}`}>
                        <Stack>
                            <Typography
                                sx={{
                                    color: theme.palette.orange.main,
                                    fontWeight: "bold",
                                    fontSize: { xs: "9vw", md: "2vw" },
                                }}
                            >
                                {t(item.title)}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "6vw", md: "1.5vw" },
                                }}
                            >
                                {t(item.content)}
                            </Typography>
                        </Stack>
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
    );
};

export default LanguagesSection;
