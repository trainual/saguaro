import 'styled-components';

import ColorTokens from './ColorTokens';
import BorderTokens from './BorderTokens';
import FontTokens from './FontTokens';
import SpacingTokens from './SpacingTokens';

type ConstantTokens = BorderTokens & FontTokens & SpacingTokens;
declare module "styled-components" {
  export interface DefaultTheme {
    constants: ConstantTokens;
    vars: ColorTokens;
  }
}
