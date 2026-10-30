import { ReactNode } from 'react';
import { default as StyleMode } from '../types/StyleMode';
import { default as PaletteOption } from '../types/PaletteOption';
type Props = {
    mode: StyleMode;
    children: ReactNode;
    brandOption: PaletteOption | string;
};
declare const SaguaroThemeProvider: ({ brandOption, mode, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default SaguaroThemeProvider;
