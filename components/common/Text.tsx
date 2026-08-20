import theme from "@/styles/theme";
import { Typography } from "@mui/material";

const Text = ({
  variant = "",
  color = theme.palette.basic.dark,
  children = "",
  center = false,
  justify = false,
  bold = false,
  doubleHeight = false,
  style = {},
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  my,
  mb,
  mt,
  ...rest
}) => {
  const props = () => {
    switch (variant.toLowerCase()) {
      case "title":
        return { variant: "h3", sx: { fontWeight: 850, lineHeight: 1.18, mb: 3 } };
      case "subtitle":
        return { variant: "h4", sx: { fontWeight: 800, my: 2, lineHeight: 1.25 } };
      case "cardtitle":
        return { variant: "h5", sx: { fontWeight: 800, my: 1.5, lineHeight: 1.28 } };
      case "p":
        return { component: "p", sx: { my: 2.5, lineHeight: 1.75 } };
      case "sm":
        return { component: "p", sx: { my: 1.5, lineHeight: 1.55, fontSize: 14 } };
      default:
        return { component: "p", sx: { my: 2.5, fontSize: { xs: 16, md: 18 }, lineHeight: 1.7 } };
    }
  };
  const typographyProps = props();

  return (
    <Typography
      {...typographyProps}
      sx={{
        ...typographyProps.sx,
        color,
        textAlign: textAlign || (justify ? "justify" : center ? "center" : "start"),
        fontSize,
        fontWeight: fontWeight || (bold ? 750 : undefined),
        lineHeight: lineHeight || (doubleHeight ? 1.9 : undefined),
        my,
        mb,
        mt,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
