import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, TextField, Box, Button } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import styled from "@emotion/styled";

const ContactForm = () => {
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
                        {t("contactPage.formTitle")}
                    </Typography>

                    {Array(5)
                        .fill(1)
                        .map((_, i) => i + 1)
                        .map((i) => (
                            <React.Fragment
                                key={`text field item number: ${i}`}
                            >
                                <TextField
                                    label={t(`contactPage.formInput${i}`)}
                                    variant="outlined"
                                />
                            </React.Fragment>
                        ))}

                    <Button size="large" variant="contained">
                        {t("contactPage.formButton")}
                    </Button>
                </Stack>
            </Square>
        </Stack>
    );
};

export default ContactForm;
