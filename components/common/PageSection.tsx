import theme from "@/styles/theme";
import { Grid } from "@mui/material";

const PageSection = ({
  id = "",
  bg = theme.palette.basic.light,
  children,
  sx = {},
  ...rest
}) => {
  return (
    <Grid
      container
      p={7}
      px={15}
      bgcolor={bg}
      sx={{
        width: "100%",
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

export default PageSection;
