import { WhatsApp } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const OuterWrapper = styled(Box)(() => ({
  position: "fixed",
  right: 0,
  bottom: 0,
  padding: 3,
}));

const FloatingButton = () => {
  return (
    <OuterWrapper>
      <Button
        size="small"
        style={{ backgroundColor: "#25d366" }}
        sx={{ padding: 1, color: "white", borderRadius: "100%" }}
        href="http://wasap.my/601128884817"
        target="_blank"
      >
        <WhatsApp sx={{ padding: 0, margin: 0 }} />
      </Button>
    </OuterWrapper>
  );
};

export default FloatingButton;
