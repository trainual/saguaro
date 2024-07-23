import { ReactNode } from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

import StyleMode from '../types/StyleMode';
import useColorTokens from '../hooks/useColorTokens';
import useBorderTokens from '../hooks/useBorderTokens';
import useHeightTokens from '../hooks/useHeightTokens';
import useSpacingTokens from '../hooks/useSpacingTokens';
import useFontTokens from '../hooks/useFontTokens';
import PaletteOption from '../types/PaletteOption';
import SaguaroTheme from '../types/SaguaroTheme';
import usePaletteBoard from '../hooks/usePaletteBoard';

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
  const paletteTokens = usePaletteBoard(mode, brandOption);
  const borderTokens = useBorderTokens();
  const fontTokens = useFontTokens();
  const heightTokens = useHeightTokens();
  const spacingTokens = useSpacingTokens();
  const colorTokens = useColorTokens(brandOption, mode);
  const constants = {
    ...borderTokens,
    ...fontTokens,
    ...heightTokens,
    ...spacingTokens,
  };

  const theme: SaguaroTheme = { constants, mode, brand: brandOption, vars: colorTokens, palettes: paletteTokens };

  return (
    <>
      <GlobalFonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default SaguaroThemeProvider;
