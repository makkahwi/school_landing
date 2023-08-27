import theme from "@/styles/theme";
import { Grid } from "@mui/material";

const PageSectionColumn = ({
  id = "",
  bg = theme.palette.basic.light,
  children,
  sx = {},
  xs = 12,
  ...rest
}) => {
  return (
    <Grid
      item
      p={2}
      xs={xs}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default PageSectionColumn;
