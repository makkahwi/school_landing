import { Grid } from "@mui/material";

const Column = ({
  children,
  sx = {},
  xs = 12,
  sm,
  md,
  lg,
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
      size={{ xs, sm, md, lg }}
      sx={{
        p,
        px,
        py,
        pt,
        pb,
        display: "flex",
        flexDirection: "column",
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

export default Column;
