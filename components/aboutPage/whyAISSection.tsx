import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import Square from "../shared/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";

const WhyAISSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Box
            pt={5}
            pb={5}
            bgcolor={theme.palette.basic.light}
            sx={{
                height: { xs: "auto", md: "100vh" },
            }}
        >
            <Container sx={{ height: "15%" }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    color={theme.palette.orange.main}
                    sx={{
                        textShadow: `0px 0px 2px ${theme.palette.orange.main}`,
                    }}
                >
                    {t("landingPage.whyAISSection.title")}
                </Typography>
            </Container>

            <Stack
                p={5}
                spacing={{ xs: 10, md: 0 }}
                justifyContent="space-evenly"
                alignItems={{ xs: "center", md: "center" }}
                direction={{ xs: "column", md: "row" }}
                sx={{ height: { xs: "auto", md: "80%" } }}
            >
                {landingPage.whyAIS_icons.map((item, index) => {
                    return (
                        <React.Fragment
                            key={`whyAIS section item number ${index}`}
                        >
                            <Square
                                bgcolor={theme.palette.orange.main}
                                radius={{
                                    mobile: ["4vw", "1.1.1.1"],
                                    desktop: ["2vw", "1.1.1.1"],
                                }}
                                sx={{
                                    width: { xs: "100%", md: "20%" },
                                    height: "90%",
                                }}
                            >
                                <Stack
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        padding: 3,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <Avatar
                                        variant="square"
                                        alt={item.alt}
                                        src={item.src}
                                        sx={{
                                            width: { xs: "35vw", md: "auto" },
                                            height: { xs: "35vw", md: "auto" },
                                            maxWidth: { md: "12vw" },
                                        }}
                                    />
                                    <Typography
                                        mt={2}
                                        variant="h6"
                                        textAlign="center"
                                        color={theme.palette.basic.light}
                                    >
                                        {t(item.text)}
                                    </Typography>
                                </Stack>
                            </Square>
                        </React.Fragment>
                    );
                })}
            </Stack>
        </Box>
    );
};

export default WhyAISSection;
