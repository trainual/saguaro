import 'styled-components';

import ColorTokens from './ColorTokens';
import BorderTokens from './BorderTokens';
import FontTokens from './FontTokens';
import SpacingTokens from './SpacingTokens';
import StyleMode from './StyleMode';

type ConstantTokens = BorderTokens & FontTokens & SpacingTokens;
declare module "styled-components" {
  export interface DefaultTheme {
    constants: ConstantTokens;
    mode: StyleMode;
    vars: ColorTokens;
    brand: string;  // Hex color or palette name
  }
}
