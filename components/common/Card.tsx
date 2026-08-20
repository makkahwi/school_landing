import theme from "@/styles/theme";
import { Card, CardContent } from "@mui/material";

const CardComp = ({ bg = "", children, ...rest }) => {
  const backgroundColor = bg || theme.palette.background.paper;

  return (
    <Card
      {...rest}
      sx={{
        backgroundColor,
        borderRadius: 2,
        textAlign: "center",
        border: "1px solid rgba(11,53,88,0.12)",
        boxShadow: "0 16px 34px rgba(7,29,52,0.08)",
        height: "100%",
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          p: { xs: 2.5, md: 3 },
          "&:last-child": { pb: { xs: 2.5, md: 3 } },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComp;
