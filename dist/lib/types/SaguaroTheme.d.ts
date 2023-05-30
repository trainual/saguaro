import ColorTokens from './ColorTokens';
import BorderTokens from './BorderTokens';
import FontTokens from './FontTokens';
import SpacingTokens from './SpacingTokens';
import StyleMode from './StyleMode';
import HeightTokens from './HeightTokens';
type ConstantTokens = BorderTokens & FontTokens & SpacingTokens & HeightTokens;
interface SaguaroTheme {
    constants: ConstantTokens;
    mode: StyleMode;
    vars: ColorTokens;
    brand: string;
}
declare module 'styled-components' {
    interface DefaultTheme extends SaguaroTheme {
    }
}
export default SaguaroTheme;
