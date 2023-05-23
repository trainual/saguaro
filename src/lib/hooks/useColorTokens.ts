import PaletteOption from '../types/PaletteOption';
import StyleMode from '../types/StyleMode';
import useDarkTokens from './themes/default/useDarkTokens';
import useLightTokens from './themes/default/useLightTokens';
import ColorTokens from "../types/ColorTokens";

const useColorTokens = (brand: PaletteOption | string, mode: StyleMode): ColorTokens => {
	const lightTokens = useLightTokens(brand);
	const darkTokens = useDarkTokens(brand);

	return mode == 'light' ? lightTokens : darkTokens;
}

export default useColorTokens;