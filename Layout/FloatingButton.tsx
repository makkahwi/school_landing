import { WhatsApp } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";

const OuterWrapper = styled(Box)(() => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  margin: 3,
}));

const FloatingButton = () => {
  return (
    <OuterWrapper>
      <Button size="small" color="success" href="http://wasap.my/601128884817">
        <WhatsApp />
      </Button>
    </OuterWrapper>
  );
};

export default FloatingButton;
