
import React from 'react';
import { Preview } from "@storybook/react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import constants from "../src/lib/design_tokens/constants";

const preview: Preview = {
  decorators: [
    (Story) => {
      const theme: DefaultTheme = {
        mode: "light",
        constants,
      };
      
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      )
    },
  ],
};

export default preview;