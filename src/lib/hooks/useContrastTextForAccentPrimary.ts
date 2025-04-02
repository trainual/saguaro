// standard luminance weights from ITU-R BT.709
const LUMINANCE_WEIGHTS = { r: 0.2126, g: 0.7152, b: 0.0722 };
const RGB_MAX_VALUE = 255;

interface RGB {
	r: number;
	g: number;
	b: number;
}

const hexToRGB = (hex: string): RGB => {
	const normalizedHex = hex.length === 4
		? `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
		: hex;

	const [r, g, b] = [1, 3, 5].map((i) => parseInt(normalizedHex.slice(i, i + 2), 16));
	return { r, g, b };
};

const useContrastTextForAccentPrimary = (
	accentPrimaryDefault: string,
	textDefault: string,
	textSurface: string
): string => {
	const { r, g, b } = hexToRGB(accentPrimaryDefault);
	const luminance = (r * LUMINANCE_WEIGHTS.r + g * LUMINANCE_WEIGHTS.g + b * LUMINANCE_WEIGHTS.b) / RGB_MAX_VALUE;

	return luminance > 0.65 ? textDefault : textSurface;
};

export default useContrastTextForAccentPrimary;
