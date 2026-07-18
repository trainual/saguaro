import PaletteOption from '../types/PaletteOption';
import StyleMode from '../types/StyleMode';
import ColorTokens from "../types/ColorTokens";
declare const useColorTokens: (brand: PaletteOption | string, mode: StyleMode) => ColorTokens;
export default useColorTokens;
