import { ReactNode } from "react";
import StyleMode from "../types/StyleMode";
import PaletteOption from "../types/PaletteOption";
type Props = {
    mode: StyleMode;
    children: ReactNode;
    brandOption: PaletteOption | string;
};
declare const TokenThemeProvider: ({ brandOption, mode, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default TokenThemeProvider;
