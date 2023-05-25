import ColorTokens from './ColorTokens';
import BorderTokens from './BorderTokens';
import FontTokens from './FontTokens';
import SpacingTokens from './SpacingTokens';
import StyleMode from './StyleMode';
type ConstantTokens = BorderTokens & FontTokens & SpacingTokens;
interface TokenTheme {
    constants: ConstantTokens;
    mode: StyleMode;
    vars: ColorTokens;
    brand: string;
}
declare module 'styled-components' {
    interface DefaultTheme extends TokenTheme {
    }
}
export default TokenTheme;
