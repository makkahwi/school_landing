import {
    NewsGridStyles,
    PageFlipComponent,
    LowerGridStyles,
    NewsArrowStyles,
    NewsAnimation,
} from "./styles";
import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box } from "@mui/material";
import theme from "@/styles/theme";
import { landingPage } from "@/utils/constants";
import Square from "../shared/Square";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import IconButton from "@mui/material/IconButton";

const NewsSection = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const router = useRouter();
    const { t } = useTranslation(router);

    const arrowClickHandler = (arrow: string) => {
        if (arrow === "left") {
            setCurrentPhoto((prev) => {
                return prev === 0 ? landingPage.news.length - 1 : prev - 1;
            });
        } else {
            setCurrentPhoto((prev) => {
                return prev === landingPage.news.length - 1 ? 0 : prev + 1;
            });
        }
    };

    const PageFlip = () => {
        return (
            <PageFlipComponent>
                <IconButton
                    onClick={() => {
                        arrowClickHandler("left");
                    }}
                    sx={{
                        ...NewsArrowStyles,
                        left: "0.5rem",
                    }}
                >
                    <ArrowCircleLeftIcon
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </IconButton>

                <Avatar
                    variant="square"
                    sx={{
                        width: "95%",
                        height: "auto",
                        borderRadius: { md: "0 5vw 5vw 5vw" },
                        animation: `${NewsAnimation} 1.7s both ease`,
                    }}
                    src={landingPage.news[currentPhoto].src}
                />

                <IconButton
                    onClick={() => {
                        arrowClickHandler("right");
                    }}
                    sx={{
                        ...NewsArrowStyles,
                        right: "0.5rem",
                    }}
                >
                    <ArrowCircleRightIcon
                        sx={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </IconButton>
            </PageFlipComponent>
        );
    };

    useEffect(() => {
        const interval = setInterval(() => arrowClickHandler("right"), 8000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Box p={{ md: 5 }} bgcolor={theme.palette.basic.main}>
            <Stack justifyContent="center">
                <Box sx={NewsGridStyles}>
                    <Square
                        bgcolor={theme.palette.orange.main}
                        radius={{
                            mobile: ["4vw", "1.0.1.1"],
                            desktop: ["3vw", "1.0.1.1"],
                        }}
                        sx={{
                            gridRow: "5 / 10",
                            gridColumn: "1 / 11",
                        }}
                    >
                        <Typography
                            color={theme.palette.basic.light}
                            fontWeight="bold"
                            fontSize={{ xs: "6vw", sm: "4vw", md: "3vw" }}
                        >
                            {t("landingPage.newsSection.news")}
                        </Typography>
                    </Square>

                    {landingPage.newsSquares.map((block, index) => {
                        return (
                            <React.Fragment
                                key={`news squares page-1 number: ${index}`}
                            >
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

                    <Avatar
                        src="global\quds-icon.png"
                        variant="square"
                        sx={{
                            padding: 1,
                            width: "auto",
                            height: "100%",
                            gridRow: "10 / 20",
                            gridColumn: "1 / 14",
                        }}
                    />

                    <Square
                        bgcolor={theme.palette.blue.dark}
                        radius={{
                            mobile: ["5vw", "0.1.1.1"],
                            desktop: ["5vw", "0.1.1.1"],
                        }}
                        sx={{
                            gridRow: "5 / 20",
                            gridColumn: "14 / 38",
                        }}
                    >
                        <PageFlip />
                    </Square>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "8vw", sm: "4vw", md: "2vw" },
                            width: "80%",
                            textAlign: "center",
                            background:
                            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))",
                        }}
                        color={theme.palette.basic.light}
                    >
                        {landingPage.news[currentPhoto].title}
                    </Typography>
                </Box>

                <Box sx={LowerGridStyles}>
                    <Square
                        bgcolor={theme.palette.basic.light}
                        radius={{
                            mobile: ["7vw", "1.1.0.1"],
                            desktop: ["2vw", "1.1.0.1"],
                        }}
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "5 / 7",
                        }}
                    />
                    <Square
                        bgcolor={theme.palette.orange.main}
                        radius={{
                            mobile: ["7vw", "1.1.1.0"],
                            desktop: ["2vw", "1.1.1.0"],
                        }}
                        sx={{
                            gridRow: "1 / 3",
                            gridColumn: "11 / 13",
                        }}
                    />
                    <Square
                        bgcolor={theme.palette.orange.main}
                        radius={{
                            mobile: ["7vw", "1.0.1.1"],
                            desktop: ["3vw", "1.0.1.1"],
                        }}
                        sx={{
                            gridRow: "3 / 12",
                            gridColumn: "1 / 7",
                        }}
                    >
                        <Stack
                            justifyContent="space-evenly"
                            alignItems="center"
                            width="100%"
                            height="100%"
                        >
                            {landingPage.newsFeatures.map((text) => {
                                return (
                                    <Typography
                                        fontSize={{
                                            xs: "4vw",
                                            sm: "3vw",
                                            md: "2vw",
                                        }}
                                        color={theme.palette.basic.light}
                                        key={`item tagged: ${text}`}
                                    >
                                        {t(text)}
                                    </Typography>
                                );
                            })}
                        </Stack>
                    </Square>
                    <Square
                        bgcolor={theme.palette.blue.dark}
                        radius={{
                            mobile: ["7vw", "0.1.1.1"],
                            desktop: ["3vw", "0.1.1.1"],
                        }}
                        sx={{
                            gridRow: "3 / 12",
                            gridColumn: "7 / 13",
                        }}
                    >
                        <Avatar
                            sx={{
                                height: "auto",
                                width: { xs: "70%", md: "auto" },
                            }}
                            variant="square"
                            src="landingPage\logo2.png"
                            alt="logo 2"
                        />
                    </Square>
                </Box>
            </Stack>
        </Box>
    );
};

export default NewsSection;
