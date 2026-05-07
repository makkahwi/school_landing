import { Card, CardContent } from "@mui/material";

const CardComp = ({ bg = "", children, ...rest }) => {
  return (
    <Card
      {...rest}
      sx={{
        backgroundColor: bg,
        borderRadius: "24px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 20px 45px rgba(31,36,40,0.14)",
        border: "1px solid rgba(255,255,255,0.3)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 24px 48px rgba(31,36,40,0.2)",
        },
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          p: { xs: 3, md: 4 },
          "&:last-child": { pb: { xs: 3, md: 4 } },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};

export default CardComp;
