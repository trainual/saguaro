
import React, { useEffect } from 'react';
import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { DefaultTheme } from "styled-components";
import { useDarkMode } from "storybook-dark-mode";

import StyleScene from '../src/lib/components/StyleScene';

import { 
  useBorderTokens,
  useFontTokens,
  useSpacingTokens,
  useColorTokens,
} from '../src/lib';

export const parameters = {
  darkMode: {
    // Add overrides here for light theme
    light: { ...themes.normal },

    // Add overrides here for dark theme
    dark: { ...themes.dark },
  },
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const componentStoryTheme =
        context.parameters.mode === "dark" ? "dark" : null;
      const storybookTheme = useDarkMode() ? "dark" : "light";
      const mode = componentStoryTheme || storybookTheme;
      const colorTokens = useColorTokens('violet', mode);

      useEffect(() => {
        const sbRoot = document.getElementsByClassName(
          "sb-show-main"
        )[0] as HTMLElement;
        if (sbRoot) {
          sbRoot.style.backgroundColor = colorTokens.foundationSurface1;
        }
      }, [useDarkMode()]);

      const borderTokens = useBorderTokens();
      const fontTokens = useFontTokens();
      const spacingTokens = useSpacingTokens();
      const constants = {
        ...borderTokens,
        ...fontTokens,
        ...spacingTokens,
      };
      const theme: DefaultTheme = { constants, vars: colorTokens };
      
      return (
        <StyleScene mode={mode} brandOption={'violet'}>
          <Story />
        </StyleScene> 
      )
    },
  ],
};

export default preview;