import { default as PaletteOption } from './types/PaletteOption';
import { default as StyleMode } from './types/StyleMode';
/** Raw light-mode color ramps, e.g. `palettes.purple['50']`. */
export declare const palettes: import('./types/PaletteBoard').CorePaletteBoard;
/** Raw dark-mode color ramps. */
export declare const palettesDark: import('./types/PaletteBoard').CorePaletteBoard;
/**
 * Resolve the full set of semantic color tokens for a brand.
 *
 * @param brand A palette name ('purple', 'blue', ...) or a custom hex string.
 *              A hex generates a full ramp via the same auto-palette logic web uses.
 * @param mode  'light' (default) or 'dark'.
 */
export declare function getColorTokens(brand: PaletteOption | string, mode?: StyleMode): import('./types/ColorTokens').default;
export type { default as ColorTokens } from './types/ColorTokens';
export type { default as PaletteOption } from './types/PaletteOption';
export type { default as Palette } from './types/Palette';
