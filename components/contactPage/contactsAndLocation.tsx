import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar, TextField } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import PushPinIcon from "@mui/icons-material/PushPin";

const ContactsAndLocation = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack alignItems="center" mt={10} mb={10}>
            <Square
                bgcolor={theme.palette.blue.dark}
                radius={{
                    mobile: ["6vw", "1.1.1.1"],
                    desktop: ["2vw", "1.1.1.1"],
                }}
                sx={{
                    width: "80%",
                }}
            >
                <Stack spacing={5} p={5} bgcolor={theme.palette.blue.dark}>
                    <Typography
                        m={3}
                        fontSize={{ xs: "5vw", md: "3vw" }}
                        fontWeight="bold"
                        color={theme.palette.basic.light}
                    >
                        {t("contactPage.contactTitle")}
                    </Typography>

                    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                        <Stack alignItems="center">
                            <LocalPhoneIcon
                                sx={{
                                    color: theme.palette.basic.light,
                                    width: { xs: "3vw", md: "6vw" },
                                    height: "auto",
                                }}
                            />
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "2vw" }}
                                fontWeight="bold"
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact1.title")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact1.description1")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact1.description2")}
                            </Typography>
                        </Stack>

                        <Stack alignItems="center">
                            <EmailIcon
                                sx={{
                                    color: theme.palette.basic.light,
                                    width: { xs: "3vw", md: "6vw" },
                                    height: "auto",
                                }}
                            />
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "2vw" }}
                                fontWeight="bold"
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact2.title")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact2.description1")}
                            </Typography>
                        </Stack>

                        <Stack alignItems="center">
                            <PushPinIcon
                                sx={{
                                    color: theme.palette.basic.light,
                                    width: { xs: "3vw", md: "6vw" },
                                    height: "auto",
                                }}
                            />
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "2vw" }}
                                fontWeight="bold"
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact3.title")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact3.description1")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact3.description2")}
                            </Typography>
                            <Typography
                                m={2}
                                fontSize={{ xs: "3vw", md: "1.5vw" }}
                                color={theme.palette.basic.light}
                            >
                                {t("contactPage.contact3.description3")}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Square>
        </Stack>
    );
};

export default ContactsAndLocation;
