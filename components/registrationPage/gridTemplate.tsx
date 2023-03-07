import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";

interface GridTemplateProps {
    templateId: string;
    isSubStack: boolean;
    boxes: {
        title: string;
        items: {
            title: string;
            price: string;
            description: string;
        }[];
    }[];
}

const GridTemplate = ({ boxes, templateId, isSubStack }: GridTemplateProps) => {
    const router = useRouter();
    const { t } = useTranslation(router);

    const getColumns = (length: number) => {
        if (length % 2 === 0) {
            return "repeat(2, 1fr)";
        } else if (length === 1) {
            return "1fr";
        } else {
            return "repeat(3, 1fr)";
        }
    };

    return (
        <Stack>
            {boxes.map((box, boxIndex) => (
                <React.Fragment
                    key={`${templateId}: registration box square number ${boxIndex}`}
                >
                    <Typography
                        p={3}
                        width="100%"
                        textAlign="center"
                        fontSize={{ xs: "3vw", md: "2.5vw" }}
                        fontWeight="bold"
                        color={theme.palette.basic.dark}
                    >
                        {t(box.title)}
                    </Typography>

                    <Box
                        sx={{
                            width: "100%",
                            display: "grid",
                            gap: 4,
                            gridTemplateColumns: getColumns(box.items.length),
                        }}
                    >
                        {box.items.map((item, itemIndex) => (
                            <React.Fragment
                                key={`${templateId}: registration box's item number ${itemIndex}`}
                            >
                                <Square
                                    bgcolor={theme.palette.basic.light}
                                    radius={{
                                        mobile: ["6vw", "1.1.1.1"],
                                        desktop: ["2vw", "1.1.1.1"],
                                    }}
                                    sx={{
                                        width: { xs: "100%", md: "100%" },
                                        padding: 3,
                                    }}
                                >
                                    <Stack spacing={1} p={3} width="100%">
                                        <Typography
                                            textAlign="center"
                                            fontWeight="bold"
                                            fontSize={{
                                                xs: "3vw",
                                                md: "2vw",
                                            }}
                                            color={theme.palette.basic.dark}
                                        >
                                            {t(item.title)}
                                        </Typography>

                                        <Stack
                                            direction={
                                                isSubStack ? "column" : "row"
                                            }
                                            sx={{
                                                width: "100%",
                                                justifyContent: "space-evenly",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                textAlign="center"
                                                fontSize={{
                                                    xs: "3vw",
                                                    md: "5vw",
                                                }}
                                                color={
                                                    theme.palette.orange.main
                                                }
                                            >
                                                {t(item.price)}
                                            </Typography>

                                            <Typography
                                                textAlign="center"
                                                fontSize={{
                                                    xs: "3vw",
                                                    md: "1.5vw",
                                                }}
                                                color={theme.palette.basic.main}
                                            >
                                                {t(item.description)}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </Square>
                            </React.Fragment>
                        ))}
                    </Box>
                </React.Fragment>
            ))}
        </Stack>
    );
};

export default GridTemplate;
