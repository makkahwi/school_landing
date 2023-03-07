import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import React from "react";
import GridTemplate from "./gridTemplate";
import { registrationPage } from "@/utils/constants";

const DiscountSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <Stack bgcolor={theme.palette.basic.main} p={5} alignItems="center">
            <Typography
                p={3}
                width="100%"
                textAlign="center"
                fontSize={{ xs: "5vw", md: "4vw" }}
                fontWeight="bold"
                color={theme.palette.orange.main}
            >
                {t("registrationPage.discounts.title")}
            </Typography>

            <Avatar
                src="global\quds-icon.png"
                variant="square"
                sx={{
                    width: "30%",
                    height: "auto",
                }}
            />

            <GridTemplate
                templateId="discount section"
                isSubStack={true}
                boxes={registrationPage.discountSection}
            />
        </Stack>
    );
};

export default DiscountSection;
