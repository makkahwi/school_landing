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
        color="white"
        sx={{
          width: "content-fit",
          bgcolor: "#25d366",
          color: "white",
          margin: 3,
        }}
        target="_blank"
        href="http://wasap.my/601128884817"
      >
        <WhatsApp />
      </Button>
    </OuterWrapper>
  );
};

export default FloatingButton;
