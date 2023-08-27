import theme from "@/styles/theme";
import { Typography } from "@mui/material";

const Text = ({
  variant = "",
  color = theme.palette.basic.dark,
  children = "",
  center = false,
  justify = false,
  ...rest
}) => {
  const props = () => {
    switch (variant.toLowerCase()) {
      case "title":
        return { variant: "h3", fontWeight: "bold", mb: 4 };
      case "centertitle":
        return { variant: "h3", fontWeight: "bold", mb: 4 };
      case "subtitle":
        return { variant: "h5", my: 4 };
      default:
        return { variant: "h6", lineHeight: 2, my: 4 };
    }
  };

  return (
    <Typography
      {...props()}
      textAlign={justify ? "justify" : center ? "center" : "start"}
      color={color}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
