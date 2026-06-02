/**
 * RN-safe token entry point: `saguaro/tokens`.
 *
 * Exposes saguaro's design tokens as pure data + pure functions, with NO
 * React, react-dom, or styled-components anywhere in the dependency graph.
 * This is the entry that React Native (and any non-DOM consumer) should import:
 *
 *   import { palettes, getColorTokens } from 'saguaro/tokens'
 *
 * The token-building logic here is the SAME code the web theme uses
 * (useLightTokens / useDarkTokens), so web and native can never drift.
 *
 * Note: useLightTokens/useDarkTokens are pure functions despite the `use`
 * prefix (they hold no React state and touch no DOM). Calling them outside a
 * component is intentional and safe; they are aliased to `build*` here so the
 * call sites do not trip react-hooks lint rules.
 */
import PaletteBoardLight from './design_tokens/colors/palette_boards/light';
import PaletteBoardDark from './design_tokens/colors/palette_boards/dark';
import buildLightTokens from './hooks/themes/default/useLightTokens';
import buildDarkTokens from './hooks/themes/default/useDarkTokens';
import type PaletteOption from './types/PaletteOption';
import type StyleMode from './types/StyleMode';

/** Raw light-mode color ramps, e.g. `palettes.purple['50']`. */
export const palettes = PaletteBoardLight;

/** Raw dark-mode color ramps. */
export const palettesDark = PaletteBoardDark;

/**
 * Resolve the full set of semantic color tokens for a brand.
 *
 * @param brand A palette name ('purple', 'blue', ...) or a custom hex string.
 *              A hex generates a full ramp via the same auto-palette logic web uses.
 * @param mode  'light' (default) or 'dark'.
 */
export function getColorTokens(brand: PaletteOption | string, mode: StyleMode = 'light') {
  return mode === 'dark' ? buildDarkTokens(brand) : buildLightTokens(brand);
}

export type { default as ColorTokens } from './types/ColorTokens';
export type { default as PaletteOption } from './types/PaletteOption';
export type { default as Palette } from './types/Palette';
