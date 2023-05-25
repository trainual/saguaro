import { ReactNode } from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import StyleMode from '../types/StyleMode';
import useColorTokens from '../hooks/useColorTokens';
import useBorderTokens from '../hooks/useBorderTokens';
import useSpacingTokens from '../hooks/useSpacingTokens';
import useFontTokens from '../hooks/useFontTokens';
import PaletteOption from '../types/PaletteOption';
import SaguaroTheme from '../types/SaguaroTheme';

const GlobalFonts = createGlobalStyle`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

type Props = {
  mode: StyleMode;
  children: ReactNode;
  brandOption: PaletteOption | string;
};

const SaguaroThemeProvider = ({ brandOption, mode, children }: Props) => {
  const borderTokens = useBorderTokens();
  const fontTokens = useFontTokens();
  const spacingTokens = useSpacingTokens();
  const colorTokens = useColorTokens(brandOption, mode);
  const constants = {
    ...borderTokens,
    ...fontTokens,
    ...spacingTokens,
  };

  const theme: SaguaroTheme = { constants, mode, brand: brandOption, vars: colorTokens };

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default SaguaroThemeProvider;
