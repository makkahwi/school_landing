import { WhatsApp } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const OuterWrapper = styled(Box)(() => ({
  position: "fixed",
  right: 0,
  bottom: 0,
  margin: 5,
}));

const FloatingButton = () => {
  return (
    <OuterWrapper>
      <Button
        size="small"
        style={{ backgroundColor: "#25d366" }}
        sx={{ padding: 2, color: "white", borderRadius: "100%" }}
        href="http://wasap.my/601128884817"
        target="_blank"
      >
        <WhatsApp />
      </Button>
    </OuterWrapper>
  );
};

export default FloatingButton;
