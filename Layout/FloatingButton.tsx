import { WhatsApp } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const OuterWrapper = styled(Box)(() => ({
  position: "fixed",
  right: 0,
  bottom: 0,
  margin: 4,
}));

const FloatingButton = () => {
  return (
    <OuterWrapper>
      <Button
        size="small"
        style={{ backgroundColor: "#25d366" }}
        sx={{ padding: 3, color: "white" }}
        href="http://wasap.my/601128884817"
      >
        <WhatsApp />
      </Button>
    </OuterWrapper>
  );
};

export default FloatingButton;
