import { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

import StyleMode from "../types/StyleMode";
import useColorTokens from "../hooks/useColorTokens";
import useBorderTokens from "../hooks/useBorderTokens";
import useSpacingTokens from "../hooks/useSpacingTokens";
import useFontTokens from "../hooks/useFontTokens";

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
  const borderTokens = useBorderTokens();
  const fontTokens = useFontTokens();
  const spacingTokens = useSpacingTokens();
  const colorTokens = useColorTokens('violet', 'light');
  const constants = {
    ...borderTokens,
    ...fontTokens,
    ...spacingTokens,
  };

  const theme: DefaultTheme = { constants, colors: colorTokens };

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default StyleScene;
