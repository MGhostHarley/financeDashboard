import { Box, Typography, useTheme } from "@mui/material";
import { bikeLogo } from "../../assets";

const HomePage = () => {
  const { palette } = useTheme();

  return (
    <>
      <Box
        component="img"
        sx={{
          height: 600,
          width: 600,
          maxHeight: { xs: 600, md: 500 },
          maxWidth: { xs: 700, md: 600 },
          borderRadius: "1rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 2,
        }}
        alt="Up Up And A Way"
        src={bikeLogo}
      />
      <Box
        sx={{
          height: 600,
          width: 600,
          maxHeight: { xs: 600, md: 500 },
          maxWidth: { xs: 700, md: 600 },
          borderRadius: "1rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 2,
          fontWeight: "bold",
          fontSize: 120,
          textAlign: "center",
          color: palette.primary[300],
        }}
      >
        BikeStar
      </Box>
    </>
  );
};

export default HomePage;
