import 'styled-components';

import Constants from './Constants';

declare module "styled-components" {
  export interface DefaultTheme {
    constants: Constants;
  }
}
