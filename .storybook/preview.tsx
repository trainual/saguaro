
import React, { useEffect } from 'react';
import { Preview } from "@storybook/react-vite";
import { themes } from "storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

import SaguaroThemeProvider from '../src/lib/components/SaguaroThemeProvider';

import { useColorTokens } from '../src/lib';

type StorySortEntry = { title: string; type: 'docs' | 'story' };

// storySort is babel-extracted and evaluated on its own, so it must stay
// inline and self-contained, with no type annotations inside the arrow.
const parameters: NonNullable<Preview['parameters']> & {
  options: { storySort: (a: StorySortEntry, b: StorySortEntry) => number };
} = {
  darkMode: {
    // Add overrides here for light theme
    light: { ...themes.normal },

    // Add overrides here for dark theme
    dark: { ...themes.dark },
  },
  options: {
    // Floats "Overview" to the top of every level, then orders the
    // top-level sections, then sorts alphabetically. Docs before stories.
    storySort: (a, b) => {
      const roots = ['Overview', 'Design Tokens', 'Components'];
      const aSegments = a.title.split('/');
      const bSegments = b.title.split('/');

      for (let i = 0; i < Math.max(aSegments.length, bSegments.length); i++) {
        const aSegment = aSegments[i];
        const bSegment = bSegments[i];

        if (aSegment === bSegment) continue;
        if (aSegment === 'Overview' || bSegment === 'Overview') {
          return aSegment === 'Overview' ? -1 : 1;
        }
        if (aSegment === undefined) return -1;
        if (bSegment === undefined) return 1;
        if (i === 0) {
          const aRoot = roots.indexOf(aSegment);
          const bRoot = roots.indexOf(bSegment);
          return (aRoot === -1 ? roots.length : aRoot) - (bRoot === -1 ? roots.length : bRoot);
        }

        return aSegment.localeCompare(bSegment, undefined, { numeric: true });
      }

      if (a.type === b.type) return 0;

      return a.type === 'docs' ? -1 : 1;
    },
  },
};

export const globalTypes = {
  brand: {
    name: "Brand",
    description: "Set the brand color",
    defaultValue: "purple",
    toolbar: {
      icon: "paintbrush",
      items: [
        { title: "Palette | Purple", value: "purple" },
        { title: "Palette | Blue", value: "blue" },
        { title: "Palette | Magenta", value: "magenta" },
        { title: "Palette | Red", value: "red" },
        { title: "Palette | Yellow", value: "yellow" },
        { title: "Palette | Orange", value: "orange" },
        { title: "Palette | Green", value: "green" },
        { title: "Custom | #6A28EA (Trainual Purple)", value: "#6A28EA" },
        { title: "Custom | #482D8C (Old Trainual Purple)", value: "#482D8C" },
        {
          title: "Custom | #472EAD (Really Old Trainual Purple)",
          value: "#472EAD",
        },
        { title: "Custom | #010001 (dark purple)", value: "#010001" },
        { title: "Custom | #245EA7 (blue)", value: "#245EA7" },
        { title: "Custom | #232C45 (dark blue)", value: "#232C45" },
        { title: "Custom | #AE2C29 (red)", value: "#AE2C29" },
        { title: "Custom | #3A9E55 (green)", value: "#3A9E55" },
        { title: "Custom | #F8BD1C (yellow)", value: "#F8BD1C" },
        { title: "Custom | #FA9522 (orange)", value: "#FA9522" },
        { title: "Custom | #000000 (black)", value: "#000000" },
      ],
      showName: false,
    },
  },
};

const preview: Preview = {
  parameters,
  // Generates a "Guide" docs page for every story file.
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const componentStoryTheme =
        context.parameters.mode === "dark" ? "dark" : null;
      const storybookTheme = useDarkMode() ? "dark" : "light";
      const mode = componentStoryTheme || storybookTheme;
      const colorTokens = useColorTokens('purple', mode);

      useEffect(() => {
        const sbRoot = document.getElementsByClassName(
          "sb-show-main"
        )[0] as HTMLElement;
        if (sbRoot) {
          sbRoot.style.backgroundColor = colorTokens.foundationBase1;
        }
      }, [useDarkMode()]);

      return (
        <SaguaroThemeProvider mode={mode} brandOption={context.globals.brand}>
          <Story />
        </SaguaroThemeProvider> 
      )
    },
  ],
};

export default preview;