import ColorTokens from "../../../types/ColorTokens"
import PaletteOption from "../../../types/PaletteOption";
import usePaletteBoard from '../../usePaletteBoard';


const useDarkTokens = (brandOption: PaletteOption | string): ColorTokens => {
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
		violet,
	} = usePaletteBoard('dark', brandOption);

	const core = {
		// Trainual Brand
		trainualBrand1: violet[50],

		// State
		stateInfo: blue[40],
		stateError: red[50],
		stateCaution: orange[50],
		stateFavorite: ochre[50],
		stateSuccess: green[50],
		stateInfoBackground: teal['05'],
		stateCautionBackground: orange['05'],
		stateErrorBackground: red['00'],
		stateSuccessBackground: green['05'],
		stateInfoHover: blue[30],
		stateErrorHover: red[30],
		stateCautionHover: orange[30],
		stateSuccessHover: green[30],

		// Foundation
		foundationBase1: neutral[15],
		foundationBase2: neutral[30],
		foundationSurface1: neutral[20],
		foundationSurface2: neutral[90],
		foundationSurface3: brand[30],
		foundationSurface4: ochre[10],
		foundationHover: neutral[15],

		// Icon
		icon1: neutral[80],
		icon2: neutral[90],
		iconSurface: neutral['00'],

		// Text
		textPlaceholder: neutral[40],
		textDefault: neutral[70],
		textSubdued: neutral[50],
		textSurface: neutral[20],
		textActiveVibrant: teal[40],
		textHoverVibrant: teal[50],
		textDisabled: neutral[50],

		// Border
		borderSurface1: neutral[25],
		borderSurface2: neutral[30],
		borderSurface3: brand[40],
		borderDefault: neutral[40],
		borderHover: neutral[60],
		borderDisabled: neutral[40],

		// The representative for each palette. 
		//  Used in places like the palette picker.
		blueDefault: blue[60],
		greenDefault: green[60],
		greyDefault: grey[60],
		magentaDefault: magenta[60],
		neutralDefault: neutral[60],
		ocreDefault: ochre[60],
		orangeDefault: orange[60],
		purpleDefault: purple[60],
		redDefault: red[60],
		tealDefault: teal[60],
		violetDefault: violet[60],

		// Accent Primary
		accentPrimaryDefault: brand[30],
		accentPrimaryHover: brand[50],
		accentPrimaryPressed: brand[60],
		accentPrimaryDisabled: neutral[30],

		// Accent Secondary
		accentSecondaryHover: brand['00'],
		accentSecondaryPressed: brand['05'],
		accentSecondaryDisabled: neutral[50],

		// Accent Border
		accentBorderDefault: brand[30],
		accentBorderHover: brand[60],
		accentBorderDisabled: neutral[40],

		// Accent Text
		accentTextPlaceholder: brand[10],
		accentTextDefault: brand[50],
		accentTextHover: brand[60],
		accentTextActive: brand[70],
		accentTextPressed: brand[70],
		accentTextDisabled: neutral[25],

		// Accent Toggle
		accentToggleOff: neutral[25], // toggle switch
		accentToggleOn: brand[70], // toggle switch
		accentToggleDefault: brand[15], // toggle switch bg
		accentToggleHover: brand[20], // toggle switch bg
		accentToggleActive: brand[50], // toggle switch bg
		accentToggleActiveHover: brand[40], // toggle switch
		accentToggleDisabled: neutral[50], // toggle switch bg

		// Badge
		//  TODO: Overly specific. Add foundationBase3 instead.
		badgeGeneral: neutral[60],

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
		shadowBackground1: 'rgba(255, 255, 255, 0.1)',
		shadowBackground2: 'rgba(255, 255, 255, 0.2)',
		shadowBackground3: 'rgba(255, 255, 255, 0.3)',
		
		shadowColorTopXsmall: neutral.transparent3,
		shadowColorTopSmall: neutral.transparent1,
		shadowColorTopMedium: neutral.transparent1,
		shadowColorTopLarge: neutral.transparent1,

		shadowColorCenterSmall: neutral.transparent1,
		shadowColorCenterMedium: neutral.transparent1,
		shadowColorCenterLarge: neutral.transparent1,

		shadowColorSpecialWysiwyg: neutral.transparent3,
		shadowColorSpecialDataTable: neutral.transparent3,

		shadowTopXsmall: `0 1px 3px ${neutral.transparent3}`,
		shadowTopSmall: `0 5px 10px ${neutral.transparent1}`,
		shadowTopMedium: `0 5px 15px ${neutral.transparent1}`,
		shadowTopLarge: `0 5px 40px ${neutral.transparent1}`,

		shadowCenterSmall: `0 0 10px ${neutral.transparent1}`,
		shadowCenterMedium: `0 0 15px ${neutral.transparent1}`,
		shadowCenterLarge: `0 0 40px ${neutral.transparent1}`,

		shadowSpecialWysiwyg: `0 2px 4px ${neutral.transparent3}`,
		shadowSpecialDataTable: `0 5px 10px ${neutral.transparent3}`,

    // Progress Colors
    progressColorBad: "#EB5757",
    progressColorAcceptable: "#F9AE58",
    progressColorFair: "#B4CC52",
    progressColorGood: "#75C181",

    // A11y
    focusOutlineColor: "#99C8FF",
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
		badgeFlare: "#CEFFF0",

    logoBkgColor: core.foundationSurface1,

		// To Deprecate
		anIcecreamShopClosesEverytimeYouUseThisColor: ochre['00'],
		oneOffOchrePleaseDoNotUse: ochre['05'],
		youWillMakeMattCryIfYouUseThis: ochre[15],
		theOneOffPlanToggleThatShouldNotBeUsed: '#FDF393',
		thisIsAOneOffGreyAndWillMakeYouCryIfUsed: grey[15]
  };
		
	return {
		...core,
		...extended
	} as ColorTokens;
}

export default useDarkTokens;