export const CoCurriculumGrid = {
  direction: "ltr",
  position: "relative",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "repeat(2, minmax(120px, 35vw))",
    md: "repeat(2, 12vw)",
  },
  gridTemplateRows: {
    xs: "repeat(2, minmax(120px, 35vw))",
    md: "repeat(2, 12vw)",
  },
  gap: { xs: 1.5, md: 2 },
};
