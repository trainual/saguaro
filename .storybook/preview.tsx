
import React from 'react';
import { Preview } from "@storybook/react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { 
  useBorderTokens,
  useFontTokens,
  useSpacingTokens,
  useColorTokens,
} from '../src/lib';

const preview: Preview = {
  decorators: [
    (Story) => {
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
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      )
    },
  ],
};

export default preview;