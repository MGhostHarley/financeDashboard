// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

// Extending the MUI themes

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
