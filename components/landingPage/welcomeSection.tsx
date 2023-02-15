import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Container, Stack, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Square from "../shared/Square";
import React from "react";
import { landingPage } from "@/utils/constants";
import {
    WelcomeSectionBox,
    SquaresShape,
    GridLayoutStyles,
} from "@/components/landingPage/styles";

const WelcomeSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);
    const theme = useTheme();

    return (
        <WelcomeSectionBox pb={5} sx={{ height: { xs: "auto", md: "100vh" } }}>
            <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ height: "100%" }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "100%", md: "50%" },
                    }}
                >
                    <Stack
                        p={4}
                        sx={{
                            height: { xs: "auto", md: "75vh" },
                        }}
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Avatar
                            alt="Main Logo"
                            src="/global/logo.png"
                            sx={{
                                width: { xs: "20vw", md: "8vw" },
                                height: { xs: "20vw", md: "8vw" },
                            }}
                        />
                        <Typography
                            variant="h3"
                            color={theme.palette.blue.dark}
                            fontWeight="bold"
                            align="center"
                        >
                            {t("landingPage.welcomeSection.title")}
                        </Typography>
                        <Typography
                            variant="h5"
                            color={theme.palette.blue.dark}
                            align="center"
                        >
                            {t("landingPage.welcomeSection.subtitle")}
                        </Typography>
                        <Typography
                            textAlign="justify"
                            color={theme.palette.basic.light}
                        >
                            {t("landingPage.welcomeSection.discription")}
                        </Typography>
                    </Stack>
                </Container>

                <SquaresShape sx={{ width: { xs: "100%", md: "50%" } }}>
                    <Box sx={GridLayoutStyles}>
                        <Square
                            radius={{
                                mobile: ["4vw", "1.1.0.1"],
                                desktop: ["2vw", "1.1.0.1"],
                            }}
                            sx={{
                                gridRow: "1 / 11",
                                gridColumn: "1 / 15",
                            }}
                        >
                            <Avatar
                                variant="square"
                                alt="Main Image"
                                src={
                                    "https://aqsa.edu.my/wp-content/uploads/2019/04/Photo-7.jpg"
                                }
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </Square>

                        {landingPage.welcomeSquares.map((block) => {
                            return (
                                <React.Fragment key={JSON.stringify(block)}>
                                    <Square
                                        bgcolor={block.bgcolor}
                                        radius={{
                                            mobile: block.radiusMobile,
                                            desktop: block.radiusDesktop,
                                        }}
                                        sx={{
                                            gridRow: block.rows,
                                            gridColumn: block.cols,
                                        }}
                                    />
                                </React.Fragment>
                            );
                        })}
                    </Box>
                </SquaresShape>
            </Stack>
        </WelcomeSectionBox>
    );
};

export default WelcomeSection;
