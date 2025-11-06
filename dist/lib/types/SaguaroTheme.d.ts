import { default as ColorTokens } from './ColorTokens';
import { default as BorderTokens } from './BorderTokens';
import { default as FontTokens } from './FontTokens';
import { default as SpacingTokens } from './SpacingTokens';
import { default as StyleMode } from './StyleMode';
import { default as HeightTokens } from './HeightTokens';
import { default as PaletteBoard } from './PaletteBoard';
type ConstantTokens = BorderTokens & FontTokens & SpacingTokens & HeightTokens;
interface SaguaroTheme {
    constants: ConstantTokens;
    mode: StyleMode;
    vars: ColorTokens;
    palettes: PaletteBoard;
    brand: string;
}
declare module 'styled-components' {
    interface DefaultTheme extends SaguaroTheme {
    }
}
export default SaguaroTheme;
