import { Card, CardContent } from "@mui/material";

const CardComp = ({ bg = "", children, ...rest }) => {
  return (
    <Card
      {...rest}
      sx={{
        backgroundColor: bg,
        borderRadius: "16px",
        textAlign: "center",
        border: "1px solid rgba(31,36,40,0.08)",
        boxShadow: "0 8px 20px rgba(31,36,40,0.08)",
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
