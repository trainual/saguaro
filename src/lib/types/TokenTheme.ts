import 'styled-components';

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
  brand: string;  // Hex color or palette name
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends TokenTheme { }
}

export default TokenTheme;