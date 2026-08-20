import { Grid } from "@mui/material";

const Row = ({
  children,
  sx = {},
  justify = "center",
  align = "center",
  p = 2,
  px,
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
        alignItems: align,
        justifyContent: justify,
        justifyItems: justify,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default Row;
