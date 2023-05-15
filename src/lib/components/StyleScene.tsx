import { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

import constants from "../design_tokens/constants";
import { StyleMode } from "../types/StyleConfiguration";

const GlobalFonts = createGlobalStyle`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

type Props = {
  // Style mode is optional to allow overriding the style mode in scenarios where the current user info is not available
  // This is useful for the public share, storybook and vite tests.
  mode?: StyleMode;
  children: ReactNode;
  usePublicBrandStyles?: boolean;
  accentPalette: string | null;
  accentColor: string;
};

const StyleScene = ({ children }: Props) => {
  const theme: DefaultTheme = { constants };

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default StyleScene;
