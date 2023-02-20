import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography, Box, Avatar } from "@mui/material";
import theme from "@/styles/theme";
import Square from "../shared/Square";
import React from "react";
import { } from "@/utils/constants";
import { } from "./styles";


const LevelTemplate = () => {
    const router = useRouter();
    const { t } = useTranslation(router);
    
    return (
        <Stack>
            LevelTemplate
        </Stack>
    );
}

export default LevelTemplate;