import useTranslation from "@/hooks/useTranslation";
import theme from "@/styles/theme";
import { Box, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

import Square from "../components/common/Square";
import { LowerGridStyles } from "../components/Landing/styles";

const Widgets = () => {
  const router = useRouter();
  const { t } = useTranslation(router);

  const LinkComp = ({ label, link, ...rest }) => (
    <Typography
      fontSize={{
        xs: "2.5vw",
        sm: "2vw",
        md: "1.5vw",
      }}
      color={theme.palette.basic.light}
      key={`item tagged: ${label}`}
    >
      <Link
        href={link}
        style={{ color: "inherit", textDecoration: "none" }}
        {...rest}
      >
        {label}
      </Link>
    </Typography>
  );

  const widgetLinks = [
    {
      link: "/about/why-ais",
      label: t("About.Title"),
    },
    {
      link: "/academics/study-levels",
      label: t("Academics.StudyLevels.Title"),
    },
    {
      link: "/academics/curriculum",
      label: t("Academics.Curriculum.Title"),
    },
    {
      link: "/engage/registration-fees",
      label: t("Engage.Registration.Title"),
    },
    {
      link: "/engage/job-opportunities",
      label: t("Engage.Jobs.Title"),
    },
    {
      link: "https://students.aqsa.edu.my",
      label: t("StudentPortal"),
      target: "_blank",
    },
  ];

  return (
    <Box p={{ md: 5 }}>
      <Stack justifyContent="center">
        <Box sx={LowerGridStyles}>
          <Square
            bgcolor={theme.palette.brown.main}
            radius={{
              mobile: ["7vw", "1.1.0.1"],
              desktop: ["2vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "1 / 3",
              gridColumn: "15 / 20",
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
              gridColumn: "20 / 25",
            }}
          />

          <Square
            bgcolor={theme.palette.orange.main}
            radius={{
              mobile: ["7vw", "1.0.1.1"],
              desktop: ["3vw", "1.0.1.1"],
            }}
            sx={{
              gridRow: "4 / 8",
              gridColumn: "1 / 20",
            }}
          >
            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              width="100%"
              height="100%"
            >
              {widgetLinks.slice(0, widgetLinks.length / 3).map((link, i) => (
                <LinkComp {...link} key={i} />
              ))}
            </Stack>

            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              width="100%"
              height="100%"
            >
              {widgetLinks
                .slice(widgetLinks.length / 3, (widgetLinks.length / 3) * 2)
                .map((link, i) => (
                  <LinkComp {...link} key={i} />
                ))}
            </Stack>

            <Stack
              justifyContent="space-evenly"
              alignItems="center"
              width="100%"
              height="100%"
            >
              {widgetLinks
                .slice((widgetLinks.length / 3) * 2, widgetLinks.length)
                .map((link, i) => (
                  <LinkComp {...link} key={i} />
                ))}
            </Stack>
          </Square>

          <Square
            bgcolor={theme.palette.blue.dark}
            radius={{
              mobile: ["7vw", "0.1.1.1"],
              desktop: ["3vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "4 / 8",
              gridColumn: "20 / 30",
            }}
          >
            <Avatar
              sx={{
                height: "80%",
                width: "auto",
              }}
              variant="square"
              src="/images/AIS-Light-Blue-En-Logo.png"
              alt="logo 2"
            />
          </Square>
        </Box>
      </Stack>
    </Box>
  );
};

export default Widgets;
