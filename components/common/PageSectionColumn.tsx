import theme from "@/styles/theme";
import { Grid } from "@mui/material";

const PageSectionColumn = ({
  id = "",
  bg = theme.palette.basic.light,
  children,
  sx = {},
  xs = 12,
  justify = "center",
  align = "center",
  ...rest
}) => {
  return (
    <Grid
      item
      p={2}
      xs={xs}
      sx={{
        alignItems: align,
        justifyContent: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default PageSectionColumn;
