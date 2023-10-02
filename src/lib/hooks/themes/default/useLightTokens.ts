import ColorTokens from "../../../types/ColorTokens"
import PaletteOption from "../../../types/PaletteOption";
import usePaletteBoard from "../../usePaletteBoard";

const useLightTokens = (brandOption: PaletteOption | string): ColorTokens => {
	const {
		brand,
		blue,
		green,
		magenta,
		neutral,
		orange,
		purple,
		red,
		yellow,
	} = usePaletteBoard("light", brandOption);

	return {
    // Foundation
    foundationHover: neutral[10],
    foundationBase1: neutral["05"],
    foundationBase2: neutral[10],
    foundationBase3: neutral[15],
    foundationBase4: neutral[30],
    foundationSurface1: neutral["00"],
    foundationSurface2: neutral[90],

    // Border
    borderSurface1: neutral[10],
    borderSurface2: neutral[15],
    borderDefault: neutral[25],
    borderHover: neutral[60],
    borderDisabled: neutral[25],

    // Text
    textDefault: neutral[80],
    textSubdued: neutral[50],
    textPlaceholder: neutral[40],
    textSurface: neutral["00"],
    textHover: neutral[90],
    textDisabled: neutral[30],

    // Accent
    accentPrimaryDefault: brand[50],
    accentPrimaryHover: brand[60],
    accentPrimaryPressed: brand[70],
    accentSubdued1: brand["00"],
    accentSubdued2: brand["05"],
    accentSubdued3: brand[10],
    accentSubdued4: brand[20],
    accentStrong1: brand[80],
    accentStrong2: brand[90],

    // State
    stateInfo: blue[40],
    stateError: red[50],
    stateCaution: orange[50],
    stateSuccess: green[50],
    stateFavorite: yellow[50],

    stateBadgeTrainual: purple["05"],
    stateBadgeInfo: blue["05"],
    stateBadgeError: red["05"],
    stateBadgeCaution: orange["05"],
    stateBadgeSuccess: green["05"],
    stateBadgeGeneral: neutral[15],

    stateBackgroundInfo: blue["00"],
    stateBackgroundError: red["00"],
    stateBackgroundCaution: orange["00"],
    stateBackgroundSuccess: green["00"],

    stateHoverInfo: blue[60],
    stateHoverError: red[70],
    stateHoverCaution: orange[70],
    stateHoverSuccess: green[70],

    stateCompletionLow: orange[40],
    stateCompletionMedium: yellow[50],
    stateCompletionHigh: green[30],
    stateCompletionFull: green[60],

    // Chart
    chartBlue1: blue[60],
    chartGreen1: green["00"],
    chartGreen2: green[30],
    chartOrange1: orange[60],
    chartRed1: red["00"],
    chartRed2: red["05"],
    chartRed3: red[50],

    // Brand
    trainualBrandPurpleSurfaceLight: purple["00"],
    trainualBrandPurpleSurface: purple[10],
    trainualBrandPurpleSubdued: purple[40],
    trainualBrandPurpleMedium: purple[50],
    trainualBrandPurpleStrong: purple[90],
    trainualBrandGreenSurfaceLight: green["00"],
    trainualBrandGreenSurface: green[10],
    trainualBrandGreenSubdued: green[20],
    trainualBrandGreenMedium: green[40],
    trainualBrandGreenStrong: green[90],
    trainualBrandYellowSurfaceLight: yellow["00"],
    trainualBrandYellowSurface: yellow[10],
    trainualBrandYellowSubdued: yellow[20],
    trainualBrandYellowMedium: yellow[40],
    trainualBrandYellowStrong: yellow[90],
    trainualBrandMagentaSurfaceLight: magenta["00"],
    trainualBrandMagentaSurface: magenta[10],
    trainualBrandMagentaSubdued: magenta[20],
    trainualBrandMagentaMedium: magenta[40],
    trainualBrandMagentaStrong: magenta[90],
    trainualBrandBlueSurfaceLight: blue["00"],
    trainualBrandBlueSurface: blue[10],
    trainualBrandBlueSubdued: blue[30],
    trainualBrandBlueMedium: blue[40],
    trainualBrandBlueStrong: blue[90],

    // The representative for each palette.
    //  Used in places like the palette picker.
    previewBluePrimary: blue[50],
    previewBlueSecondary: blue['05'],
    previewGreenPrimary: green[50],
    previewGreenSecondary: green['05'],
    previewMagentaPrimary: magenta[50],
    previewMagentaSecondary: magenta['05'],
    previewNeutralPrimary: neutral[50],
    previewNeutralSecondary: neutral['05'],
    previewOrangePrimary: orange[50],
    previewOrangeSecondary: orange['05'],
    previewPurplePrimary: purple[50],
    previewPurpleSecondary: purple['05'],
    previewRedPrimary: red[50],
    previewRedSecondary: red['05'],
    previewYellowPrimary: yellow[50],
    previewYellowSecondary: yellow['05'],

    // Drop Shadows
    shadowBackground1: "rgba(0, 0, 0, 0.1)",
    shadowBackground2: "rgba(0, 0, 0, 0.2)",
    shadowBackground3: "rgba(0, 0, 0, 0.3)",

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

    // A11y
    focusOutlineColor: "#99C8FF",

		// Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA",
  } as ColorTokens;
}

export default useLightTokens;