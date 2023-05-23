
import BorderTokens from "../types/BorderTokens";

const useBorderTokens = () => {
	return {
		borderRadiusXs: '1px',
		borderRadiusSm: '2px',
		borderRadiusMd: '4px',
		borderRadiusLg: '8px',
		borderRadiusXl: '16px',
		borderRadiusCircle: '50%',
		borderRadiusEndcap: '100px',

		borderWidthXs: '0.5px',
		borderWidthSm: '1px',
		borderWidthMd: '1.5px',
		borderWidthLg: '2px',
		borderWidthXl: '3px',
		borderWidth2xl: '4px',
	} as BorderTokens;
}

export default useBorderTokens;