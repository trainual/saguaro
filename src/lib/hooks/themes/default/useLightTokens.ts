import ColorTokens from "../../../types/ColorTokens"
import PaletteOption from "../../../types/PaletteOption";
import usePaletteBoard from '../../usePaletteBoard';

const useLightTokens = (brandOption: PaletteOption | string): ColorTokens => {
	const {
		brand,
		aquamarine,
		blue,
		green,
		grey,
		magenta,
		neutral,
		ochre,
		orange,
		purple,
		red,
		teal,
		violet
	} = usePaletteBoard('light', brandOption);

	const core = {
		// Trainual Brand
		trainualBrand1: violet[30],

		// State
		stateInfo: blue[20],
		stateError: red[50],
		stateCaution: orange[50],
		stateFavorite: ochre[50],
		stateSuccess: green[50],
		stateInfoBackground: teal['05'],
		stateCautionBackground: orange['00'],
		stateErrorBackground: red['00'],
		stateSuccessBackground: green['00'],
		stateInfoHover: blue[40],
		stateErrorHover: red[40],
		stateCautionHover: orange[40],
		stateSuccessHover: green[40],

		// Foundation
		foundationBase1: neutral['05'],
		foundationBase2: neutral[10],
		foundationSurface1: neutral['00'],
		foundationSurface2: neutral[90],
		foundationSurface3: brand[30],
		foundationSurface4: ochre[10],
		foundationHover: neutral['05'],

		// Icon
		icon1: neutral[70],
		icon2: neutral[80],
		iconSurface: neutral['00'],

		// Text
		textPlaceholder: neutral[40],
		textDefault: neutral[80],
		textSubdued: neutral[50],
		textSurface: neutral['00'],
		textActiveVibrant: teal[20],
		textHoverVibrant: teal[30],
		textDisabled: neutral[30],

		// Border
		borderSurface1: neutral[10],
		borderSurface2: neutral[15],
		borderSurface3: neutral[30],
		borderDefault: neutral[40],
		borderHover: neutral[60],
		borderDisabled: neutral[25],

		// The representative for each palette. 
		//  Used in places like the palette picker.
		blueDefault: blue[30],
		greenDefault: green[30],
		greyDefault: grey[30],
		magentaDefault: magenta[30],
		neutralDefault: neutral[30],
		ocreDefault: ochre[30],
		orangeDefault: orange[30],
		purpleDefault: purple[30],
		redDefault: red[30],
		tealDefault: teal[30],
		violetDefault: violet[30],

		// Accent Primary
		accentPrimaryDefault: brand[30],
		accentPrimaryHover: brand[50],
		accentPrimaryPressed: brand[60],
		accentPrimaryDisabled: brand[15],

		// Accent Secondary
		accentSecondaryHover: brand['00'],
		accentSecondaryPressed: brand['05'],
		accentSecondaryDisabled: neutral[15],

		// Accent Border
		accentBorderDefault: brand[20],
		accentBorderHover: brand[30],
		accentBorderDisabled: neutral[25],

		// Accent Text
		accentTextPlaceholder: brand[15],
		accentTextDefault: brand[30],
		accentTextHover: brand[40],
		accentTextActive: brand[70],
		accentTextPressed: brand[70],
		accentTextDisabled: neutral[30],

		// Accent Toggle
		accentToggleOff: neutral['00'], // toggle switch
		accentToggleOn: brand['00'], // toggle switch
		accentToggleDefault: brand['05'], // toggle switch bg
		accentToggleHover: brand[10], // toggle switch bg
		accentToggleActive: brand[30], // toggle switch bg
		accentToggleActiveHover: brand[20], // toggle switch
		accentToggleDisabled: neutral[20], // toggle switch bg

		// Badge
		//  TODO: Overly specific. Add foundationBase3 instead.
		badgeGeneral: neutral[50],

		// Billing Page
		//  TODO: Overly specific. Refactor to use trainualBrand1, 2, 3, etc
		scalePlanText: aquamarine[60],
		scalePlanNontext: aquamarine[50],
		ctaSecondary: aquamarine[50],
		ctaPrimary: blue[90],
		trainPlanText: violet[30],	//Replace with trainualBrand1
		trainPlanNontext: violet[30],  //Replace with trainualBrand1

		// Charts & Graphs
		chartOne00: blue['00'],
		chartOne05: blue['05'],
		chartOne10: blue[10],
		chartOne15: blue[15],
		chartOne20: blue[20],
		chartOne30: blue[30],
		chartOne40: blue[40],
		chartOne50: blue[50],
		chartOne60: blue[60],
		chartOne70: blue[70],
		chartOne80: blue[80],
		chartOne90: blue[90],
		chartTwo00: green['00'],
		chartTwo05: green['05'],
		chartTwo10: green[10],
		chartTwo15: green[15],
		chartTwo20: green[20],
		chartTwo30: green[30],
		chartTwo40: green[40],
		chartTwo50: green[50],
		chartTwo60: green[60],
		chartTwo70: green[70],
		chartTwo80: green[80],
		chartTwo90: green[90],
		chartThree00: orange['00'],
		chartThree05: orange['05'],
		chartThree10: orange[10],
		chartThree15: orange[15],
		chartThree20: orange[20],
		chartThree30: orange[30],
		chartThree40: orange[40],
		chartThree50: orange[50],
		chartThree60: orange[60],
		chartThree70: orange[70],
		chartThree80: orange[80],
		chartThree90: orange[90],
		chartFour00: red['00'],
		chartFour05: red['05'],
		chartFour10: red[10],
		chartFour15: red[15],
		chartFour20: red[20],
		chartFour30: red[30],
		chartFour40: red[40],
		chartFour50: red[50],
		chartFour60: red[60],
		chartFour70: red[70],
		chartFour80: red[80],
		chartFour90: red[90],
		
		// Drop Shadows
		shadowBackground1: 'rgba(0, 0, 0, 0.1)',
		shadowBackground2: 'rgba(0, 0, 0, 0.2)',
		shadowBackground3: 'rgba(0, 0, 0, 0.3)',
		
		shadowColorTopXsmall: neutral.transparent3,
		shadowColorTopSmall: neutral.transparent1,
		shadowColorTopMedium: neutral.transparent2,
		shadowColorTopLarge: neutral.transparent2,

		shadowColorCenterSmall: neutral.transparent1,
		shadowColorCenterMedium: neutral.transparent2,
		shadowColorCenterLarge: neutral.transparent2,

		shadowColorSpecialWysiwyg: neutral.transparent3,
		shadowColorSpecialDataTable: neutral.transparent3,

		shadowTopXsmall: `0 1px 3px ${neutral.transparent3}`,
		shadowTopSmall: `0 5px 10px ${neutral.transparent1}`,
		shadowTopMedium: `0 5px 15px ${neutral.transparent2}`,
		shadowTopLarge: `0 5px 40px ${neutral.transparent2}`,

		shadowCenterSmall: `0 0 10px ${neutral.transparent1}`,
		shadowCenterMedium: `0 0 15px ${neutral.transparent2}`,
		shadowCenterLarge: `0 0 40px ${neutral.transparent2}`,

		shadowSpecialWysiwyg: `0 2px 4px ${neutral.transparent3}`,
		shadowSpecialDataTable: `0 5px 10px ${neutral.transparent3}`,

    // Progress Colors
    progressColorBad: "#EB5757",
    progressColorAcceptable: "#F9AE58",
    progressColorFair: "#B4CC52",
    progressColorGood: "#75C181",

    // A11y
    focusOutlineColor: "#99C8FF",

		// To Deprecate
		oneOffOchrePleaseDoNotUse: ochre['05']
	};

	const extended = {
		trainualPurple: core.trainualBrand1,
    iconOverdue: core.stateError,
    iconActive: core.stateSuccess,
    borderActive: core.stateInfo,
    accentSecondaryDefault: core.foundationSurface1,

    badgeError: core.stateError,
    badgeCaution: core.stateCaution,
    badgeSuccess: core.stateSuccess,
    badgeInfo: core.stateInfo,

    logoBkgColor: core.foundationSurface1,
  };
		
	return {
		...core,
		...extended
	} as ColorTokens;
}

export default useLightTokens;