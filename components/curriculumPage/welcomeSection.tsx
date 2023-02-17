import useTranslation from "@/hooks/useTranslation";
import { useRouter } from "next/router";
import { Stack, Container, Typography } from "@mui/material";
import theme from "@/styles/theme";
import { curriculumPage } from "@/utils/constants";
import Square from "../shared/Square";
import React from "react";
import Avatar from "@mui/material/Avatar";

const WelcomeSection = () => {
    const router = useRouter();
    const { t } = useTranslation(router);

    return (
        <></>
    );
};

export default WelcomeSection;
