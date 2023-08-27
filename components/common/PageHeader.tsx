import theme from "@/styles/theme";
import { Box, Typography } from "@mui/material";

import { UpperSquaresGrid } from "../Curriculum/styles";
import PageSection from "./pageSection";
import PageSectionColumn from "./PageSectionColumn";
import Square from "./Square";

const PageHeader = ({ bg = "", title = "" }) => {
  return (
    <PageSection bgcolor={bg}>
      <PageSectionColumn justify="start" align="end" md={6}>
        <Typography
          mt={3}
          mb={3}
          fontSize={{ xs: "5vw", md: "2.5vw" }}
          color={theme.palette.basic.light}
          fontWeight="bold"
        >
          {title}
        </Typography>
      </PageSectionColumn>

      <PageSectionColumn justify="end" align="start" md={6}>
        <Box sx={UpperSquaresGrid}>
          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["3vw", "1.1.0.1"],
              desktop: ["1vw", "1.1.0.1"],
            }}
            sx={{
              gridRow: "2 / 3",
              gridColumn: "1 / 3",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["4vw", "1.1.1.0"],
              desktop: ["1.5vw", "1.1.1.0"],
            }}
            sx={{
              gridRow: "1 / 4",
              gridColumn: "3 / 6",
            }}
          />

          <Square
            bgcolor={theme.palette.blue.light}
            radius={{
              mobile: ["4vw", "0.1.1.1"],
              desktop: ["1.5vw", "0.1.1.1"],
            }}
            sx={{
              gridRow: "4 / 5",
              gridColumn: "3 / 5  ",
            }}
          />
        </Box>
      </PageSectionColumn>
    </PageSection>
  );
};

export default PageHeader;
