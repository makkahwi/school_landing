import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import {} from "@/utils/constants";
import {} from "./styles";
import ScrollableList from "../shared/ScrollableList";

interface LevelTemplateProps {
    section: {
        title: string;
        subTitle: string;
        image: string;

        bgColor: string;
        titleColor: string;
        subTitleColor: string;
        iconsColor: string;

        listElemnts: (
            size: string,
            color: string
        ) => {
            text: string;
            icon: JSX.Element;
        }[];
    };
}

const LevelTemplate = ({ section }: LevelTemplateProps) => {
    const router = useRouter();
    const { t } = useTranslation(router);

    const {
        title,
        subTitle,
        image,
        bgColor,
        titleColor,
        subTitleColor,
        iconsColor,
        listElemnts,
    } = section;

    return (
        <Stack bgcolor={bgColor}>
            <Stack direction={{ xs: "column", md: "row" }}>
                <Avatar src={image} />

                <Stack>
                    <Typography color={titleColor}>{title}</Typography>
                    <Typography color={subTitleColor}>{subTitle}</Typography>
                </Stack>
            </Stack>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <ScrollableList
                    t={t}
                    uniqueId={title}
                    textColor={iconsColor}
                    arrowColor={theme.palette.basic.light}
                    desktop={{
                        width: 0.62,
                        height: "15vw",
                        arrowSize: "8vw",
                        iconSize: 6,
                        marginSize: 3,
                    }}
                    mobile={{
                        width: 0.9,
                        height: "35vw",
                        arrowSize: "18vw",
                        iconSize: 13,
                        marginSize: 9,
                    }}
                    items={listElemnts("100%", iconsColor)}
                />
            </Box>
        </Stack>
    );
};

export default LevelTemplate;
