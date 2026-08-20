import theme from "@/styles/theme";
import { Grid } from "@mui/material";

const PageSection = ({
  bg = theme.palette.basic.light,
  bgcolor,
  children,
  sx = {},
  justify = "center",
  align = "center",
  p = 7,
  px = { xs: 2.5, md: 6 },
  py,
  pt,
  pb,
  ...rest
}) => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        p,
        px,
        py,
        pt,
        pb,
        bgcolor: bgcolor || bg,
        alignItems: align,
        justifyContent: justify,
        rowGap: { xs: 2, md: 0 },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default PageSection;
