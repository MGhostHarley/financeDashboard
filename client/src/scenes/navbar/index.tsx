import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <FlexBetween gap="0.75rem">
          <PixIcon
            sx={{
              fontSize: "28px",
              "&:hover": { color: palette.primary[200] },
            }}
          />
          <Typography
            variant="h4"
            fontSize="16px"
            sx={{
              "&:hover": {
                color: palette.primary[200],
              },
              color: palette.primary[300],
            }}
          >
            BikeStar
          </Typography>
        </FlexBetween>
      </Link>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/dashboard"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/about"
            onClick={() => setSelected("about")}
            style={{
              color: selected === "about" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            about
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
