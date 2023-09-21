import { Box, useMediaQuery } from "@mui/material";
import Section1 from "./Section1";

const gridTemplateLargeScreens = `
  "a b"
  "a b"
  "a b"
  "a b"
  "a b"
  "a c"
  "a c"
  "a c"
  "a c"
  "a c"
`;
const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
  "c"
`;

const AboutPage = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(2, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <Section1 />
    </Box>
  );
};

export default AboutPage;
