import { ThemeProvider as e, createGlobalStyle as t } from "styled-components";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
// src/lib/hooks/useBorderTokens.ts
var a = () => ({
	borderRadiusXs: "1px",
	borderRadiusSm: "2px",
	borderRadiusMd: "4px",
	borderRadiusLg: "8px",
	borderRadiusXl: "12px",
	borderRadius2Xl: "16px",
	borderRadius3Xl: "32px",
	borderRadiusCircle: "50%",
	borderRadiusEndcap: "100px",
	borderWidthXs: "0.5px",
	borderWidthSm: "1px",
	borderWidthMd: "1.5px",
	borderWidthLg: "2px",
	borderWidthXl: "3px",
	borderWidth2xl: "4px"
}), o = {
	r: .2126,
	g: .7152,
	b: .0722
}, s = 255, c = (e) => {
	let t = e.length === 4 ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e, [n, r, i] = [
		1,
		3,
		5
	].map((e) => parseInt(t.slice(e, e + 2), 16));
	return {
		r: n,
		g: r,
		b: i
	};
}, l = (e, t, n) => {
	let { r, g: i, b: a } = c(e);
	return (r * o.r + i * o.g + a * o.b) / s > .62 ? t : n;
}, u = {
	blue: {
		"00": "#EBF9FF",
		"05": "#D6F3FF",
		10: "#C2EDFF",
		20: "#99E0FF",
		30: "#5CCEFF",
		40: "#009DE0",
		50: "#017EB4",
		60: "#016D9C",
		70: "#006692",
		80: "#004267",
		90: "#020044"
	},
	green: {
		"00": "#DCF9F4",
		"05": "#CBF6EE",
		10: "#A8F0E1",
		20: "#74E7D2",
		30: "#40DDC1",
		40: "#06D4AE",
		50: "#06C6A3",
		60: "#06B292",
		70: "#1E9873",
		80: "#0D7757",
		90: "#096146"
	},
	magenta: {
		"00": "#FEECF8",
		"05": "#FDD8F0",
		10: "#FCC5E9",
		20: "#F99FDA",
		30: "#F778CB",
		40: "#F445B6",
		50: "#DF0F97",
		60: "#D40C8E",
		70: "#C10B81",
		80: "#9A0967",
		90: "#74074E"
	},
	neutral: {
		"00": "#FFFFFF",
		"05": "#F7F8FA",
		10: "#ECEEF1",
		15: "#DEE0E3",
		20: "#CFD1D5",
		25: "#C0C2C6",
		30: "#A5A7AA",
		40: "#8A8B8E",
		50: "#707173",
		60: "#525355",
		70: "#373739",
		80: "#28292A",
		90: "#111112",
		transparent1: "rgba( 0, 0, 0, 0.05)",
		transparent2: "rgba( 0, 0, 0, 0.1)",
		transparent3: "rgba( 0, 0, 0, 0.25)"
	},
	orange: {
		"00": "#FEF4EC",
		"05": "#FDE8D8",
		10: "#FCDCC5",
		20: "#FAC49E",
		30: "#F9AD77",
		40: "#F79550",
		50: "#F57920",
		60: "#EE6A0A",
		70: "#E25303",
		80: "#C23B01",
		90: "#A73200"
	},
	purple: {
		"00": "#F2ECFD",
		"05": "#E5DAFB",
		10: "#D8C7F9",
		20: "#BEA2F6",
		30: "#A47DF2",
		40: "#8A58EE",
		50: "#6A28EA",
		60: "#5916DF",
		70: "#4A12BA",
		80: "#340D82",
		90: "#25095D"
	},
	red: {
		"00": "#FDEDED",
		"05": "#FBDBDB",
		10: "#F8C9C9",
		20: "#F4A4A6",
		30: "#EF8082",
		40: "#EB5C5E",
		50: "#DD3436",
		60: "#DA1B1E",
		70: "#C8191C",
		80: "#A31417",
		90: "#7F1012"
	},
	yellow: {
		"00": "#FFFBD2",
		"05": "#FFF8B4",
		10: "#FDF393",
		20: "#FAE67C",
		30: "#FCD573",
		40: "#FBC94B",
		50: "#FAB913",
		60: "#F0AD05",
		70: "#DC9F04",
		80: "#B48204",
		90: "#A07403"
	}
}, d = {
	blue: {
		"00": "#EBF9FF",
		"05": "#D6F3FF",
		10: "#C2EDFF",
		20: "#99E0FF",
		30: "#5CCEFF",
		40: "#009DE0",
		50: "#017EB4",
		60: "#016D9C",
		70: "#006692",
		80: "#004267",
		90: "#020044"
	},
	green: {
		"00": "#DCF9F4",
		"05": "#CBF6EE",
		10: "#A8F0E1",
		20: "#74E7D2",
		30: "#40DDC1",
		40: "#06D4AE",
		50: "#06C6A3",
		60: "#06B292",
		70: "#1E9873",
		80: "#0D7757",
		90: "#096146"
	},
	magenta: {
		"00": "#FEECF8",
		"05": "#FDD8F0",
		10: "#FCC5E9",
		20: "#F99FDA",
		30: "#F778CB",
		40: "#F445B6",
		50: "#DF0F97",
		60: "#D40C8E",
		70: "#C10B81",
		80: "#9A0967",
		90: "#74074E"
	},
	neutral: {
		"00": "#000000",
		"05": "#0B0B0B",
		10: "#131313",
		15: "#1B1B1B",
		20: "#252525",
		25: "#2F2F2F",
		30: "#414141",
		40: "#5D5D5D",
		50: "#858585",
		60: "#9F9F9F",
		70: "#B9B9B9",
		80: "#D7D7D7",
		90: "#E5E5E5",
		transparent1: "rgba( 0, 0, 0, 0.4)",
		transparent2: "rgba( 0, 0, 0, 0.5)",
		transparent3: "rgba( 0, 0, 0, 0.25)"
	},
	orange: {
		"00": "#FEF4EC",
		"05": "#FDE8D8",
		10: "#FCDCC5",
		20: "#FAC49E",
		30: "#F9AD77",
		40: "#F79550",
		50: "#F57920",
		60: "#EE6A0A",
		70: "#E25303",
		80: "#C23B01",
		90: "#A73200"
	},
	purple: {
		"00": "#F2ECFD",
		"05": "#E5DAFB",
		10: "#D8C7F9",
		20: "#BEA2F6",
		30: "#A47DF2",
		40: "#8A58EE",
		50: "#6A28EA",
		60: "#5916DF",
		70: "#4A12BA",
		80: "#340D82",
		90: "#25095D"
	},
	red: {
		"00": "#FDEDED",
		"05": "#FBDBDB",
		10: "#F8C9C9",
		20: "#F4A4A6",
		30: "#EF8082",
		40: "#EB5C5E",
		50: "#DD3436",
		60: "#DA1B1E",
		70: "#C8191C",
		80: "#A31417",
		90: "#7F1012"
	},
	yellow: {
		"00": "#FFFBD2",
		"05": "#FFF8B4",
		10: "#FDF393",
		20: "#FAE67C",
		30: "#FCD573",
		40: "#FBC94B",
		50: "#FAB913",
		60: "#F0AD05",
		70: "#DC9F04",
		80: "#B48204",
		90: "#A07403"
	}
};
// src/lib/helpers/color.ts
function f(e) {
	if (!e.startsWith("#")) throw Error("Custom color must be a hex code.");
}
function p(e) {
	return Object.keys(u).includes(e);
}
function m(e, t) {
	return t["preview" + g(e) + "Primary"];
}
function h(e, t) {
	return t["preview" + g(e) + "Secondary"];
}
var g = (e) => e.charAt(0).toUpperCase() + e.slice(1);
// node_modules/@babel/runtime/helpers/esm/extends.js
function _() {
	return _ = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _.apply(null, arguments);
}
// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function ee(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function v(e, t) {
	return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, v(e, t);
}
// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function te(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, v(e, t);
}
// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function y(e) {
	return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, y(e);
}
// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function ne(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function b() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (b = function() {
		return !!e;
	})();
}
// node_modules/@babel/runtime/helpers/esm/construct.js
function x(e, t, n) {
	if (b()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && v(i, n.prototype), i;
}
// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function S(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return S = function(e) {
		if (e === null || !ne(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return x(e, arguments, y(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), v(n, e);
	}, S(e);
}
// node_modules/polished/dist/polished.esm.js
var re = {
	1: "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
	2: "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
	3: "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
	4: "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
	5: "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
	6: "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
	7: "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
	8: "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
	9: "Please provide a number of steps to the modularScale helper.\n\n",
	10: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
	11: "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
	12: "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
	13: "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
	14: "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
	15: "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
	16: "You must provide a template to this method.\n\n",
	17: "You passed an unsupported selector state to this method.\n\n",
	18: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
	19: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
	20: "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
	21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
	22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
	23: "fontFace expects a name of a font-family.\n\n",
	24: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
	25: "fontFace expects localFonts to be an array.\n\n",
	26: "fontFace expects fileFormats to be an array.\n\n",
	27: "radialGradient requries at least 2 color-stops to properly render.\n\n",
	28: "Please supply a filename to retinaImage() as the first argument.\n\n",
	29: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
	30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
	31: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
	32: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
	33: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
	34: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
	35: "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
	36: "Property must be a string value.\n\n",
	37: "Syntax Error at %s.\n\n",
	38: "Formula contains a function that needs parentheses at %s.\n\n",
	39: "Formula is missing closing parenthesis at %s.\n\n",
	40: "Formula has too many closing parentheses at %s.\n\n",
	41: "All values in a formula must have the same unit or be unitless.\n\n",
	42: "Please provide a number of steps to the modularScale helper.\n\n",
	43: "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
	44: "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
	45: "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
	46: "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
	47: "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
	48: "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
	49: "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
	50: "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
	51: "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
	52: "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
	53: "fontFace expects localFonts to be an array.\n\n",
	54: "fontFace expects fileFormats to be an array.\n\n",
	55: "fontFace expects a name of a font-family.\n\n",
	56: "linearGradient requries at least 2 color-stops to properly render.\n\n",
	57: "radialGradient requries at least 2 color-stops to properly render.\n\n",
	58: "Please supply a filename to retinaImage() as the first argument.\n\n",
	59: "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
	60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
	61: "Property must be a string value.\n\n",
	62: "borderRadius expects a radius value as a string or number as the second argument.\n\n",
	63: "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
	64: "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
	65: "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
	66: "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
	67: "You must provide a template to this method.\n\n",
	68: "You passed an unsupported selector state to this method.\n\n",
	69: "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
	70: "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
	71: "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
	72: "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
	73: "Please provide a valid CSS variable.\n\n",
	74: "CSS variable not found and no default was provided.\n\n",
	75: "important requires a valid style object, got a %s instead.\n\n",
	76: "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
	77: "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
	78: "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
function ie() {
	for (var e = [...arguments], t = e[0], n = [], r = 1; r < e.length; r += 1) n.push(e[r]);
	return n.forEach(function(e) {
		t = t.replace(/%[a-z]/, e);
	}), t;
}
var C = /*#__PURE__*/ function(e) {
	te(t, e);
	function t(t) {
		var n;
		if (process.env.NODE_ENV === "production") n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
		else {
			var r = [...arguments].slice(1);
			n = e.call(this, ie.apply(void 0, [re[t]].concat(r))) || this;
		}
		return ee(n);
	}
	return t;
}(/*#__PURE__*/ S(Error));
function w(e) {
	return Math.round(e * 255);
}
function ae(e, t, n) {
	return w(e) + "," + w(t) + "," + w(n);
}
function T(e, t, n, r) {
	if (r === void 0 && (r = ae), t === 0) return r(n, n, n);
	var i = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * t, o = a * (1 - Math.abs(i % 2 - 1)), s = 0, c = 0, l = 0;
	i >= 0 && i < 1 ? (s = a, c = o) : i >= 1 && i < 2 ? (s = o, c = a) : i >= 2 && i < 3 ? (c = a, l = o) : i >= 3 && i < 4 ? (c = o, l = a) : i >= 4 && i < 5 ? (s = o, l = a) : i >= 5 && i < 6 && (s = a, l = o);
	var u = n - a / 2, d = s + u, f = c + u, p = l + u;
	return r(d, f, p);
}
var E = {
	aliceblue: "f0f8ff",
	antiquewhite: "faebd7",
	aqua: "00ffff",
	aquamarine: "7fffd4",
	azure: "f0ffff",
	beige: "f5f5dc",
	bisque: "ffe4c4",
	black: "000",
	blanchedalmond: "ffebcd",
	blue: "0000ff",
	blueviolet: "8a2be2",
	brown: "a52a2a",
	burlywood: "deb887",
	cadetblue: "5f9ea0",
	chartreuse: "7fff00",
	chocolate: "d2691e",
	coral: "ff7f50",
	cornflowerblue: "6495ed",
	cornsilk: "fff8dc",
	crimson: "dc143c",
	cyan: "00ffff",
	darkblue: "00008b",
	darkcyan: "008b8b",
	darkgoldenrod: "b8860b",
	darkgray: "a9a9a9",
	darkgreen: "006400",
	darkgrey: "a9a9a9",
	darkkhaki: "bdb76b",
	darkmagenta: "8b008b",
	darkolivegreen: "556b2f",
	darkorange: "ff8c00",
	darkorchid: "9932cc",
	darkred: "8b0000",
	darksalmon: "e9967a",
	darkseagreen: "8fbc8f",
	darkslateblue: "483d8b",
	darkslategray: "2f4f4f",
	darkslategrey: "2f4f4f",
	darkturquoise: "00ced1",
	darkviolet: "9400d3",
	deeppink: "ff1493",
	deepskyblue: "00bfff",
	dimgray: "696969",
	dimgrey: "696969",
	dodgerblue: "1e90ff",
	firebrick: "b22222",
	floralwhite: "fffaf0",
	forestgreen: "228b22",
	fuchsia: "ff00ff",
	gainsboro: "dcdcdc",
	ghostwhite: "f8f8ff",
	gold: "ffd700",
	goldenrod: "daa520",
	gray: "808080",
	green: "008000",
	greenyellow: "adff2f",
	grey: "808080",
	honeydew: "f0fff0",
	hotpink: "ff69b4",
	indianred: "cd5c5c",
	indigo: "4b0082",
	ivory: "fffff0",
	khaki: "f0e68c",
	lavender: "e6e6fa",
	lavenderblush: "fff0f5",
	lawngreen: "7cfc00",
	lemonchiffon: "fffacd",
	lightblue: "add8e6",
	lightcoral: "f08080",
	lightcyan: "e0ffff",
	lightgoldenrodyellow: "fafad2",
	lightgray: "d3d3d3",
	lightgreen: "90ee90",
	lightgrey: "d3d3d3",
	lightpink: "ffb6c1",
	lightsalmon: "ffa07a",
	lightseagreen: "20b2aa",
	lightskyblue: "87cefa",
	lightslategray: "789",
	lightslategrey: "789",
	lightsteelblue: "b0c4de",
	lightyellow: "ffffe0",
	lime: "0f0",
	limegreen: "32cd32",
	linen: "faf0e6",
	magenta: "f0f",
	maroon: "800000",
	mediumaquamarine: "66cdaa",
	mediumblue: "0000cd",
	mediumorchid: "ba55d3",
	mediumpurple: "9370db",
	mediumseagreen: "3cb371",
	mediumslateblue: "7b68ee",
	mediumspringgreen: "00fa9a",
	mediumturquoise: "48d1cc",
	mediumvioletred: "c71585",
	midnightblue: "191970",
	mintcream: "f5fffa",
	mistyrose: "ffe4e1",
	moccasin: "ffe4b5",
	navajowhite: "ffdead",
	navy: "000080",
	oldlace: "fdf5e6",
	olive: "808000",
	olivedrab: "6b8e23",
	orange: "ffa500",
	orangered: "ff4500",
	orchid: "da70d6",
	palegoldenrod: "eee8aa",
	palegreen: "98fb98",
	paleturquoise: "afeeee",
	palevioletred: "db7093",
	papayawhip: "ffefd5",
	peachpuff: "ffdab9",
	peru: "cd853f",
	pink: "ffc0cb",
	plum: "dda0dd",
	powderblue: "b0e0e6",
	purple: "800080",
	rebeccapurple: "639",
	red: "f00",
	rosybrown: "bc8f8f",
	royalblue: "4169e1",
	saddlebrown: "8b4513",
	salmon: "fa8072",
	sandybrown: "f4a460",
	seagreen: "2e8b57",
	seashell: "fff5ee",
	sienna: "a0522d",
	silver: "c0c0c0",
	skyblue: "87ceeb",
	slateblue: "6a5acd",
	slategray: "708090",
	slategrey: "708090",
	snow: "fffafa",
	springgreen: "00ff7f",
	steelblue: "4682b4",
	tan: "d2b48c",
	teal: "008080",
	thistle: "d8bfd8",
	tomato: "ff6347",
	turquoise: "40e0d0",
	violet: "ee82ee",
	wheat: "f5deb3",
	white: "fff",
	whitesmoke: "f5f5f5",
	yellow: "ff0",
	yellowgreen: "9acd32"
};
function D(e) {
	if (typeof e != "string") return e;
	var t = e.toLowerCase();
	return E[t] ? "#" + E[t] : e;
}
var oe = /^#[a-fA-F0-9]{6}$/, se = /^#[a-fA-F0-9]{8}$/, ce = /^#[a-fA-F0-9]{3}$/, le = /^#[a-fA-F0-9]{4}$/, O = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ue = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, de = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, fe = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function k(e) {
	if (typeof e != "string") throw new C(3);
	var t = D(e);
	if (t.match(oe)) return {
		red: parseInt("" + t[1] + t[2], 16),
		green: parseInt("" + t[3] + t[4], 16),
		blue: parseInt("" + t[5] + t[6], 16)
	};
	if (t.match(se)) {
		var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
		return {
			red: parseInt("" + t[1] + t[2], 16),
			green: parseInt("" + t[3] + t[4], 16),
			blue: parseInt("" + t[5] + t[6], 16),
			alpha: n
		};
	}
	if (t.match(ce)) return {
		red: parseInt("" + t[1] + t[1], 16),
		green: parseInt("" + t[2] + t[2], 16),
		blue: parseInt("" + t[3] + t[3], 16)
	};
	if (t.match(le)) {
		var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
		return {
			red: parseInt("" + t[1] + t[1], 16),
			green: parseInt("" + t[2] + t[2], 16),
			blue: parseInt("" + t[3] + t[3], 16),
			alpha: r
		};
	}
	var i = O.exec(t);
	if (i) return {
		red: parseInt("" + i[1], 10),
		green: parseInt("" + i[2], 10),
		blue: parseInt("" + i[3], 10)
	};
	var a = ue.exec(t.substring(0, 50));
	if (a) return {
		red: parseInt("" + a[1], 10),
		green: parseInt("" + a[2], 10),
		blue: parseInt("" + a[3], 10),
		alpha: parseFloat("" + a[4]) > 1 ? parseFloat("" + a[4]) / 100 : parseFloat("" + a[4])
	};
	var o = de.exec(t);
	if (o) {
		var s = "rgb(" + T(parseInt("" + o[1], 10), parseInt("" + o[2], 10) / 100, parseInt("" + o[3], 10) / 100) + ")", c = O.exec(s);
		if (!c) throw new C(4, t, s);
		return {
			red: parseInt("" + c[1], 10),
			green: parseInt("" + c[2], 10),
			blue: parseInt("" + c[3], 10)
		};
	}
	var l = fe.exec(t.substring(0, 50));
	if (l) {
		var u = "rgb(" + T(parseInt("" + l[1], 10), parseInt("" + l[2], 10) / 100, parseInt("" + l[3], 10) / 100) + ")", d = O.exec(u);
		if (!d) throw new C(4, t, u);
		return {
			red: parseInt("" + d[1], 10),
			green: parseInt("" + d[2], 10),
			blue: parseInt("" + d[3], 10),
			alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
		};
	}
	throw new C(5);
}
function pe(e) {
	var t = e.red / 255, n = e.green / 255, r = e.blue / 255, i = Math.max(t, n, r), a = Math.min(t, n, r), o = (i + a) / 2;
	if (i === a) return e.alpha === void 0 ? {
		hue: 0,
		saturation: 0,
		lightness: o
	} : {
		hue: 0,
		saturation: 0,
		lightness: o,
		alpha: e.alpha
	};
	var s, c = i - a, l = o > .5 ? c / (2 - i - a) : c / (i + a);
	switch (i) {
		case t:
			s = (n - r) / c + (n < r ? 6 : 0);
			break;
		case n:
			s = (r - t) / c + 2;
			break;
		default: s = (t - n) / c + 4;
	}
	return s *= 60, e.alpha === void 0 ? {
		hue: s,
		saturation: l,
		lightness: o
	} : {
		hue: s,
		saturation: l,
		lightness: o,
		alpha: e.alpha
	};
}
function A(e) {
	return pe(k(e));
}
var j = function(e) {
	return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
};
function M(e) {
	var t = e.toString(16);
	return t.length === 1 ? "0" + t : t;
}
function N(e) {
	return M(Math.round(e * 255));
}
function P(e, t, n) {
	return j("#" + N(e) + N(t) + N(n));
}
function F(e, t, n) {
	return T(e, t, n, P);
}
function I(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return F(e, t, n);
	if (typeof e == "object" && t === void 0 && n === void 0) return F(e.hue, e.saturation, e.lightness);
	throw new C(1);
}
function L(e, t, n, r) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number") return r >= 1 ? F(e, t, n) : "rgba(" + T(e, t, n) + "," + r + ")";
	if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0) return e.alpha >= 1 ? F(e.hue, e.saturation, e.lightness) : "rgba(" + T(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
	throw new C(2);
}
function R(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return j("#" + M(e) + M(t) + M(n));
	if (typeof e == "object" && t === void 0 && n === void 0) return j("#" + M(e.red) + M(e.green) + M(e.blue));
	throw new C(6);
}
function z(e, t, n, r) {
	if (typeof e == "string" && typeof t == "number") {
		var i = k(e);
		return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
	}
	if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number") return r >= 1 ? R(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
	if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0) return e.alpha >= 1 ? R(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
	throw new C(7);
}
var B = function(e) {
	return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || e.alpha === void 0);
}, me = function(e) {
	return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, he = function(e) {
	return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || e.alpha === void 0);
}, ge = function(e) {
	return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function V(e) {
	if (typeof e != "object") throw new C(8);
	if (me(e)) return z(e);
	if (B(e)) return R(e);
	if (ge(e)) return L(e);
	if (he(e)) return I(e);
	throw new C(8);
}
function H(e, t, n) {
	return function() {
		var r = n.concat(Array.prototype.slice.call(arguments));
		return r.length >= t ? e.apply(this, r) : H(e, t, r);
	};
}
function U(e) {
	return H(e, e.length, []);
}
function _e(e, t) {
	if (t === "transparent") return t;
	var n = A(t);
	return V(_({}, n, { hue: n.hue + parseFloat(e) }));
}
U(_e);
function W(e, t, n) {
	return Math.max(e, Math.min(t, n));
}
function ve(e, t) {
	if (t === "transparent") return t;
	var n = A(t);
	return V(_({}, n, { lightness: W(0, 1, n.lightness - parseFloat(e)) }));
}
var G = U(ve);
function ye(e, t) {
	if (t === "transparent") return t;
	var n = A(t);
	return V(_({}, n, { saturation: W(0, 1, n.saturation - parseFloat(e)) }));
}
U(ye);
function be(e, t) {
	if (t === "transparent") return t;
	var n = A(t);
	return V(_({}, n, { lightness: W(0, 1, n.lightness + parseFloat(e)) }));
}
var K = U(be);
function xe(e, t, n) {
	if (t === "transparent") return n;
	if (n === "transparent") return t;
	if (e === 0) return n;
	var r = k(t), i = _({}, r, { alpha: typeof r.alpha == "number" ? r.alpha : 1 }), a = k(n), o = _({}, a, { alpha: typeof a.alpha == "number" ? a.alpha : 1 }), s = i.alpha - o.alpha, c = parseFloat(e) * 2 - 1, l = ((c * s === -1 ? c : c + s) / (1 + c * s) + 1) / 2, u = 1 - l;
	return z({
		red: Math.floor(i.red * l + o.red * u),
		green: Math.floor(i.green * l + o.green * u),
		blue: Math.floor(i.blue * l + o.blue * u),
		alpha: i.alpha * parseFloat(e) + o.alpha * (1 - parseFloat(e))
	});
}
var q = U(xe);
function Se(e, t) {
	if (t === "transparent") return t;
	var n = k(t), r = typeof n.alpha == "number" ? n.alpha : 1;
	return z(_({}, n, { alpha: W(0, 1, (r * 100 + parseFloat(e) * 100) / 100) }));
}
U(Se);
function Ce(e, t) {
	if (t === "transparent") return t;
	var n = A(t);
	return V(_({}, n, { saturation: W(0, 1, n.saturation + parseFloat(e)) }));
}
U(Ce);
function we(e, t) {
	return t === "transparent" ? t : V(_({}, A(t), { hue: parseFloat(e) }));
}
U(we);
function Te(e, t) {
	return t === "transparent" ? t : V(_({}, A(t), { lightness: parseFloat(e) }));
}
U(Te);
function Ee(e, t) {
	return t === "transparent" ? t : V(_({}, A(t), { saturation: parseFloat(e) }));
}
U(Ee);
function De(e, t) {
	return t === "transparent" ? t : q(parseFloat(e), "rgb(0, 0, 0)", t);
}
U(De);
function Oe(e, t) {
	return t === "transparent" ? t : q(parseFloat(e), "rgb(255, 255, 255)", t);
}
U(Oe);
function ke(e, t) {
	if (t === "transparent") return t;
	var n = k(t), r = typeof n.alpha == "number" ? n.alpha : 1;
	return z(_({}, n, { alpha: W(0, 1, (r * 100 - parseFloat(e) * 100).toFixed(2) / 100) }));
}
U(ke);
// src/lib/hooks/useBrandPalette.ts
function Ae(e) {
	return {
		"00": K(.42, e),
		"05": K(.38, e),
		10: K(.32, e),
		20: K(.25, e),
		30: K(.18, e),
		40: K(.1, e),
		50: e,
		60: G(.07, e),
		70: G(.14, e),
		80: G(.2, e),
		90: G(.25, e)
	};
}
var je = (e, t) => p(t) ? {
	brand: e[t],
	isCustomHex: !1
} : (f(t), {
	brand: Ae(t),
	isCustomHex: !0
}), J = (e, t) => {
	let n = e === "light" ? u : d, { brand: r, isCustomHex: i } = je(n, t);
	return {
		...n,
		brand: e === "dark" && i ? n.purple : r
	};
}, Y = (e) => {
	let { brand: t, blue: n, green: r, magenta: i, neutral: a, orange: o, purple: s, red: c, yellow: u } = J("dark", e), d = t[50], f = a[80], p = a["00"], m = l(d, f, p);
	return {
		foundationHover: a[10],
		foundationBase1: a["05"],
		foundationBase2: a[10],
		foundationBase3: a[15],
		foundationBase4: a[30],
		foundationSurface1: a["00"],
		foundationSurface2: a[90],
		borderSurface1: a[10],
		borderSurface2: a[15],
		borderDefault: a[25],
		borderHover: a[60],
		borderDisabled: a[25],
		textDefault: f,
		textSubdued: a[50],
		textPlaceholder: a[40],
		textSurface: p,
		textHover: a[90],
		textDisabled: a[30],
		accentPrimaryDefault: d,
		accentPrimaryHover: t[60],
		accentPrimaryPressed: t[70],
		accentSubdued1: t["00"],
		accentSubdued2: t["05"],
		accentSubdued3: t[10],
		accentSubdued4: t[20],
		accentStrong1: t[80],
		accentStrong2: t[90],
		textAccentContrast: m,
		stateInfo: n[40],
		stateError: c[50],
		stateCaution: o[50],
		stateSuccess: r[50],
		stateFavorite: u[50],
		stateBadgeTrainual: s["05"],
		stateBadgeInfo: n["05"],
		stateBadgeError: c["05"],
		stateBadgeCaution: o["05"],
		stateBadgeSuccess: r["05"],
		stateBadgeGeneral: a[15],
		stateBackgroundInfo: n["00"],
		stateBackgroundError: c["00"],
		stateBackgroundCaution: o["00"],
		stateBackgroundSuccess: r["00"],
		stateHoverInfo: n[60],
		stateHoverError: c[70],
		stateHoverCaution: o[70],
		stateHoverSuccess: r[70],
		stateCompletionLow: o[40],
		stateCompletionMedium: u[50],
		stateCompletionHigh: r[30],
		stateCompletionFull: r[60],
		chartBlue1: n[60],
		chartGreen1: r["00"],
		chartGreen2: r[30],
		chartOrange1: o[60],
		chartRed1: c["00"],
		chartRed2: c["05"],
		chartRed3: c[50],
		trainualBrandPurpleSurfaceLight: s["00"],
		trainualBrandPurpleSurface: s[10],
		trainualBrandPurpleSubdued: s[40],
		trainualBrandPurpleMedium: s[50],
		trainualBrandPurpleStrong: s[90],
		trainualBrandGreenSurfaceLight: r["00"],
		trainualBrandGreenSurface: r[10],
		trainualBrandGreenSubdued: r[20],
		trainualBrandGreenMedium: r[40],
		trainualBrandGreenStrong: r[90],
		trainualBrandYellowSurfaceLight: u["00"],
		trainualBrandYellowSurface: u[10],
		trainualBrandYellowSubdued: u[20],
		trainualBrandYellowMedium: u[40],
		trainualBrandYellowStrong: u[90],
		trainualBrandMagentaSurfaceLight: i["00"],
		trainualBrandMagentaSurface: i[10],
		trainualBrandMagentaSubdued: i[20],
		trainualBrandMagentaMedium: i[40],
		trainualBrandMagentaStrong: i[90],
		trainualBrandBlueSurfaceLight: n["00"],
		trainualBrandBlueSurface: n[10],
		trainualBrandBlueSubdued: n[30],
		trainualBrandBlueMedium: n[40],
		trainualBrandBlueStrong: n[90],
		previewBluePrimary: n[50],
		previewBlueSecondary: n["05"],
		previewGreenPrimary: r[50],
		previewGreenSecondary: r["05"],
		previewMagentaPrimary: i[50],
		previewMagentaSecondary: i["05"],
		previewNeutralPrimary: a[50],
		previewNeutralSecondary: a["05"],
		previewOrangePrimary: o[50],
		previewOrangeSecondary: o["05"],
		previewPurplePrimary: s[50],
		previewPurpleSecondary: s["05"],
		previewRedPrimary: c[50],
		previewRedSecondary: c["05"],
		previewYellowPrimary: u[50],
		previewYellowSecondary: u["05"],
		shadowBackground1: "rgba(255, 255, 255, 0.1)",
		shadowBackground2: "rgba(255, 255, 255, 0.2)",
		shadowBackground3: "rgba(255, 255, 255, 0.3)",
		shadowColorTopXsmall: a.transparent3,
		shadowColorTopSmall: a.transparent1,
		shadowColorTopMedium: a.transparent1,
		shadowColorTopLarge: a.transparent1,
		shadowColorCenterSmall: a.transparent1,
		shadowColorCenterMedium: a.transparent1,
		shadowColorCenterLarge: a.transparent1,
		shadowColorSpecialWysiwyg: a.transparent3,
		shadowColorSpecialDataTable: a.transparent3,
		shadowTopXsmall: `0 1px 3px ${a.transparent3}`,
		shadowTopSmall: `0 5px 10px ${a.transparent1}`,
		shadowTopMedium: `0 5px 15px ${a.transparent1}`,
		shadowTopLarge: `0 5px 40px ${a.transparent1}`,
		shadowCenterSmall: `0 0 10px ${a.transparent1}`,
		shadowCenterMedium: `0 0 15px ${a.transparent1}`,
		shadowCenterLarge: `0 0 40px ${a.transparent1}`,
		shadowSpecialWysiwyg: `0 2px 4px ${a.transparent3}`,
		shadowSpecialDataTable: `0 5px 10px ${a.transparent3}`,
		focusOutlineColor: "#99C8FF",
		anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
		oneOffOchrePleaseDoNotUse: "#FFF1C6",
		youWillMakeMattCryIfYouUseThis: "#FFD24B",
		theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
		thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA",
		aiSuggestionTextRemoved: "#A4A3A8",
		aiSuggestionBackgroundAdded: "#E3FFE8",
		aiSuggestionBackgroundAddedSelected: "#B8FFC5"
	};
}, Me = (e) => {
	let { brand: t, blue: n, green: r, magenta: i, neutral: a, orange: o, purple: s, red: c, yellow: u } = J("light", e), d = t[50], f = a[80], p = a["00"], m = l(d, f, p);
	return {
		foundationHover: a[10],
		foundationBase1: a["05"],
		foundationBase2: a[10],
		foundationBase3: a[15],
		foundationBase4: a[30],
		foundationSurface1: a["00"],
		foundationSurface2: a[90],
		borderSurface1: a[10],
		borderSurface2: a[15],
		borderDefault: a[25],
		borderHover: a[60],
		borderDisabled: a[25],
		textDefault: f,
		textSubdued: a[50],
		textPlaceholder: a[40],
		textSurface: p,
		textHover: a[90],
		textDisabled: a[30],
		accentPrimaryDefault: d,
		accentPrimaryHover: t[60],
		accentPrimaryPressed: t[70],
		accentSubdued1: t["00"],
		accentSubdued2: t["05"],
		accentSubdued3: t[10],
		accentSubdued4: t[20],
		accentStrong1: t[80],
		accentStrong2: t[90],
		textAccentContrast: m,
		stateInfo: n[40],
		stateError: c[50],
		stateCaution: o[50],
		stateSuccess: r[50],
		stateFavorite: u[50],
		stateBadgeTrainual: s["05"],
		stateBadgeInfo: n["05"],
		stateBadgeError: c["05"],
		stateBadgeCaution: o["05"],
		stateBadgeSuccess: r["05"],
		stateBadgeGeneral: a[15],
		stateBackgroundInfo: n["00"],
		stateBackgroundError: c["00"],
		stateBackgroundCaution: o["00"],
		stateBackgroundSuccess: r["00"],
		stateHoverInfo: n[60],
		stateHoverError: c[70],
		stateHoverCaution: o[70],
		stateHoverSuccess: r[70],
		stateCompletionLow: o[40],
		stateCompletionMedium: u[50],
		stateCompletionHigh: r[30],
		stateCompletionFull: r[60],
		chartBlue1: n[60],
		chartGreen1: r["00"],
		chartGreen2: r[30],
		chartOrange1: o[60],
		chartRed1: c["00"],
		chartRed2: c["05"],
		chartRed3: c[50],
		trainualBrandPurpleSurfaceLight: s["00"],
		trainualBrandPurpleSurface: s[10],
		trainualBrandPurpleSubdued: s[40],
		trainualBrandPurpleMedium: s[50],
		trainualBrandPurpleStrong: s[90],
		trainualBrandGreenSurfaceLight: r["00"],
		trainualBrandGreenSurface: r[10],
		trainualBrandGreenSubdued: r[20],
		trainualBrandGreenMedium: r[40],
		trainualBrandGreenStrong: r[90],
		trainualBrandYellowSurfaceLight: u["00"],
		trainualBrandYellowSurface: u[10],
		trainualBrandYellowSubdued: u[20],
		trainualBrandYellowMedium: u[40],
		trainualBrandYellowStrong: u[90],
		trainualBrandMagentaSurfaceLight: i["00"],
		trainualBrandMagentaSurface: i[10],
		trainualBrandMagentaSubdued: i[20],
		trainualBrandMagentaMedium: i[40],
		trainualBrandMagentaStrong: i[90],
		trainualBrandBlueSurfaceLight: n["00"],
		trainualBrandBlueSurface: n[10],
		trainualBrandBlueSubdued: n[30],
		trainualBrandBlueMedium: n[40],
		trainualBrandBlueStrong: n[90],
		previewBluePrimary: n[50],
		previewBlueSecondary: n["05"],
		previewGreenPrimary: r[50],
		previewGreenSecondary: r["05"],
		previewMagentaPrimary: i[50],
		previewMagentaSecondary: i["05"],
		previewNeutralPrimary: a[50],
		previewNeutralSecondary: a["05"],
		previewOrangePrimary: o[50],
		previewOrangeSecondary: o["05"],
		previewPurplePrimary: s[50],
		previewPurpleSecondary: s["05"],
		previewRedPrimary: c[50],
		previewRedSecondary: c["05"],
		previewYellowPrimary: u[50],
		previewYellowSecondary: u["05"],
		shadowBackground1: "rgba(0, 0, 0, 0.1)",
		shadowBackground2: "rgba(0, 0, 0, 0.2)",
		shadowBackground3: "rgba(0, 0, 0, 0.3)",
		shadowColorTopXsmall: a.transparent3,
		shadowColorTopSmall: a.transparent1,
		shadowColorTopMedium: a.transparent2,
		shadowColorTopLarge: a.transparent2,
		shadowColorCenterSmall: a.transparent1,
		shadowColorCenterMedium: a.transparent2,
		shadowColorCenterLarge: a.transparent2,
		shadowColorSpecialWysiwyg: a.transparent3,
		shadowColorSpecialDataTable: a.transparent3,
		shadowTopXsmall: `0 1px 3px ${a.transparent3}`,
		shadowTopSmall: `0 5px 10px ${a.transparent1}`,
		shadowTopMedium: `0 5px 15px ${a.transparent2}`,
		shadowTopLarge: `0 5px 40px ${a.transparent2}`,
		shadowCenterSmall: `0 0 10px ${a.transparent1}`,
		shadowCenterMedium: `0 0 15px ${a.transparent2}`,
		shadowCenterLarge: `0 0 40px ${a.transparent2}`,
		shadowSpecialWysiwyg: `0 2px 4px ${a.transparent3}`,
		shadowSpecialDataTable: `0 5px 10px ${a.transparent3}`,
		focusOutlineColor: "#99C8FF",
		anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
		oneOffOchrePleaseDoNotUse: "#FFF1C6",
		youWillMakeMattCryIfYouUseThis: "#FFD24B",
		theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
		thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA",
		aiSuggestionTextRemoved: "#A4A3A8",
		aiSuggestionBackgroundAdded: "#E3FFE8",
		aiSuggestionBackgroundAddedSelected: "#B8FFC5"
	};
}, X = (e, t) => {
	let n = Me(e), r = Y(e);
	return t == "light" ? n : r;
}, Z = () => ({
	fontExtralight: "200",
	fontLight: "300",
	fontRegular: "400",
	fontMedium: "500",
	fontSemibold: "600",
	fontBold: "700",
	fontExtrabold: "800",
	fontHeavy: "900"
}), Q = () => ({
	height2xs: "1rem",
	heightXs: "1.5rem",
	heightSm: "2rem",
	heightMd: "2.25rem",
	heightLg: "2.5rem"
}), $ = () => ({
	spacerSm1: "0.125rem",
	spacerSm2: "0.25rem",
	spacerSm3: "0.5rem",
	spacerMd1: "0.75rem",
	spacerMd2: "1rem",
	spacerMd3: "1.5rem",
	spacerLg1: "2rem",
	spacerLg2: "2.5rem",
	spacerLg3: "3rem",
	spacerLg4: "4rem"
}), Ne = t`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Pe = ({ brandOption: t, mode: o, children: s }) => {
	let c = J(o, t), l = a(), u = Z(), d = Q(), f = $(), p = X(t, o), m = {
		constants: {
			...l,
			...u,
			...d,
			...f
		},
		mode: o,
		brand: t,
		vars: p,
		palettes: c
	};
	return /* @__PURE__ */ i(n, { children: [/* @__PURE__ */ r(Ne, {}), /* @__PURE__ */ r(e, {
		theme: m,
		children: s
	})] });
};
export { Pe as SaguaroThemeProvider, m as getPrimaryPreviewColor, h as getSecondaryPreviewColor, p as isPalette, a as useBorderTokens, X as useColorTokens, Z as useFontTokens, Q as useHeightTokens, J as usePaletteBoard, $ as useSpacingTokens };
