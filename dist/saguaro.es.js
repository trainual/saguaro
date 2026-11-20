import { ThemeProvider as e, createGlobalStyle as t } from "styled-components";
// \0rolldown/runtime.js
var n = (e, t) => () => (t || (e((t = { exports: {} }).exports, t, t.exports), e = null), t.exports), r = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), i = () => ({
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
}), a = {
	r: .2126,
	g: .7152,
	b: .0722
}, o = 255, s = (e) => {
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
}, c = (e, t, n) => {
	let { r, g: i, b: c } = s(e);
	return (r * a.r + i * a.g + c * a.b) / o > .62 ? t : n;
}, l = {
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
function d(e) {
	if (!e.startsWith("#")) throw Error("Custom color must be a hex code.");
}
function f(e) {
	return Object.keys(l).includes(e);
}
function p(e, t) {
	return t["preview" + h(e) + "Primary"];
}
function m(e, t) {
	return t["preview" + h(e) + "Secondary"];
}
var h = (e) => e.charAt(0).toUpperCase() + e.slice(1);
// node_modules/@babel/runtime/helpers/esm/extends.js
function g() {
	return g = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, g.apply(null, arguments);
}
// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _(e) {
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
function y(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, v(e, t);
}
// node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function b(e) {
	return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, b(e);
}
// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function ee(e) {
	try {
		return Function.toString.call(e).indexOf("[native code]") !== -1;
	} catch {
		return typeof e == "function";
	}
}
// node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function te() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (te = function() {
		return !!e;
	})();
}
// node_modules/@babel/runtime/helpers/esm/construct.js
function ne(e, t, n) {
	if (te()) return Reflect.construct.apply(null, arguments);
	var r = [null];
	r.push.apply(r, t);
	var i = new (e.bind.apply(e, r))();
	return n && v(i, n.prototype), i;
}
// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function x(e) {
	var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
	return x = function(e) {
		if (e === null || !ee(e)) return e;
		if (typeof e != "function") throw TypeError("Super expression must either be null or a function");
		if (t !== void 0) {
			if (t.has(e)) return t.get(e);
			t.set(e, n);
		}
		function n() {
			return ne(e, arguments, b(this).constructor);
		}
		return n.prototype = Object.create(e.prototype, { constructor: {
			value: n,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), v(n, e);
	}, x(e);
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
function S() {
	for (var e = [...arguments], t = e[0], n = [], r = 1; r < e.length; r += 1) n.push(e[r]);
	return n.forEach(function(e) {
		t = t.replace(/%[a-z]/, e);
	}), t;
}
var C = /*#__PURE__*/ function(e) {
	y(t, e);
	function t(t) {
		var n;
		if (process.env.NODE_ENV === "production") n = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
		else {
			var r = [...arguments].slice(1);
			n = e.call(this, S.apply(void 0, [re[t]].concat(r))) || this;
		}
		return _(n);
	}
	return t;
}(/*#__PURE__*/ x(Error));
function w(e) {
	return Math.round(e * 255);
}
function ie(e, t, n) {
	return w(e) + "," + w(t) + "," + w(n);
}
function T(e, t, n, r) {
	if (r === void 0 && (r = ie), t === 0) return r(n, n, n);
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
function ae(e) {
	if (typeof e != "string") return e;
	var t = e.toLowerCase();
	return E[t] ? "#" + E[t] : e;
}
var oe = /^#[a-fA-F0-9]{6}$/, se = /^#[a-fA-F0-9]{8}$/, ce = /^#[a-fA-F0-9]{3}$/, le = /^#[a-fA-F0-9]{4}$/, D = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ue = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, O = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, k = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function A(e) {
	if (typeof e != "string") throw new C(3);
	var t = ae(e);
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
	var i = D.exec(t);
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
	var o = O.exec(t);
	if (o) {
		var s = "rgb(" + T(parseInt("" + o[1], 10), parseInt("" + o[2], 10) / 100, parseInt("" + o[3], 10) / 100) + ")", c = D.exec(s);
		if (!c) throw new C(4, t, s);
		return {
			red: parseInt("" + c[1], 10),
			green: parseInt("" + c[2], 10),
			blue: parseInt("" + c[3], 10)
		};
	}
	var l = k.exec(t.substring(0, 50));
	if (l) {
		var u = "rgb(" + T(parseInt("" + l[1], 10), parseInt("" + l[2], 10) / 100, parseInt("" + l[3], 10) / 100) + ")", d = D.exec(u);
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
function j(e) {
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
function M(e) {
	return j(A(e));
}
var N = function(e) {
	return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
};
function P(e) {
	var t = e.toString(16);
	return t.length === 1 ? "0" + t : t;
}
function F(e) {
	return P(Math.round(e * 255));
}
function I(e, t, n) {
	return N("#" + F(e) + F(t) + F(n));
}
function L(e, t, n) {
	return T(e, t, n, I);
}
function de(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return L(e, t, n);
	if (typeof e == "object" && t === void 0 && n === void 0) return L(e.hue, e.saturation, e.lightness);
	throw new C(1);
}
function fe(e, t, n, r) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number") return r >= 1 ? L(e, t, n) : "rgba(" + T(e, t, n) + "," + r + ")";
	if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0) return e.alpha >= 1 ? L(e.hue, e.saturation, e.lightness) : "rgba(" + T(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
	throw new C(2);
}
function R(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return N("#" + P(e) + P(t) + P(n));
	if (typeof e == "object" && t === void 0 && n === void 0) return N("#" + P(e.red) + P(e.green) + P(e.blue));
	throw new C(6);
}
function z(e, t, n, r) {
	if (typeof e == "string" && typeof t == "number") {
		var i = A(e);
		return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
	}
	if (typeof e == "number" && typeof t == "number" && typeof n == "number" && typeof r == "number") return r >= 1 ? R(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
	if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0) return e.alpha >= 1 ? R(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
	throw new C(7);
}
var pe = function(e) {
	return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || e.alpha === void 0);
}, B = function(e) {
	return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, me = function(e) {
	return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || e.alpha === void 0);
}, he = function(e) {
	return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function V(e) {
	if (typeof e != "object") throw new C(8);
	if (B(e)) return z(e);
	if (pe(e)) return R(e);
	if (he(e)) return fe(e);
	if (me(e)) return de(e);
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
function ge(e, t) {
	if (t === "transparent") return t;
	var n = M(t);
	return V(g({}, n, { hue: n.hue + parseFloat(e) }));
}
U(ge);
function W(e, t, n) {
	return Math.max(e, Math.min(t, n));
}
function _e(e, t) {
	if (t === "transparent") return t;
	var n = M(t);
	return V(g({}, n, { lightness: W(0, 1, n.lightness - parseFloat(e)) }));
}
var G = U(_e);
function ve(e, t) {
	if (t === "transparent") return t;
	var n = M(t);
	return V(g({}, n, { saturation: W(0, 1, n.saturation - parseFloat(e)) }));
}
U(ve);
function ye(e, t) {
	if (t === "transparent") return t;
	var n = M(t);
	return V(g({}, n, { lightness: W(0, 1, n.lightness + parseFloat(e)) }));
}
var K = U(ye);
function be(e, t, n) {
	if (t === "transparent") return n;
	if (n === "transparent") return t;
	if (e === 0) return n;
	var r = A(t), i = g({}, r, { alpha: typeof r.alpha == "number" ? r.alpha : 1 }), a = A(n), o = g({}, a, { alpha: typeof a.alpha == "number" ? a.alpha : 1 }), s = i.alpha - o.alpha, c = parseFloat(e) * 2 - 1, l = ((c * s === -1 ? c : c + s) / (1 + c * s) + 1) / 2, u = 1 - l;
	return z({
		red: Math.floor(i.red * l + o.red * u),
		green: Math.floor(i.green * l + o.green * u),
		blue: Math.floor(i.blue * l + o.blue * u),
		alpha: i.alpha * parseFloat(e) + o.alpha * (1 - parseFloat(e))
	});
}
var xe = U(be);
function Se(e, t) {
	if (t === "transparent") return t;
	var n = A(t), r = typeof n.alpha == "number" ? n.alpha : 1;
	return z(g({}, n, { alpha: W(0, 1, (r * 100 + parseFloat(e) * 100) / 100) }));
}
U(Se);
function Ce(e, t) {
	if (t === "transparent") return t;
	var n = M(t);
	return V(g({}, n, { saturation: W(0, 1, n.saturation + parseFloat(e)) }));
}
U(Ce);
function q(e, t) {
	return t === "transparent" ? t : V(g({}, M(t), { hue: parseFloat(e) }));
}
U(q);
function we(e, t) {
	return t === "transparent" ? t : V(g({}, M(t), { lightness: parseFloat(e) }));
}
U(we);
function J(e, t) {
	return t === "transparent" ? t : V(g({}, M(t), { saturation: parseFloat(e) }));
}
U(J);
function Te(e, t) {
	return t === "transparent" ? t : xe(parseFloat(e), "rgb(0, 0, 0)", t);
}
U(Te);
function Y(e, t) {
	return t === "transparent" ? t : xe(parseFloat(e), "rgb(255, 255, 255)", t);
}
U(Y);
function Ee(e, t) {
	if (t === "transparent") return t;
	var n = A(t), r = typeof n.alpha == "number" ? n.alpha : 1;
	return z(g({}, n, { alpha: W(0, 1, (r * 100 - parseFloat(e) * 100).toFixed(2) / 100) }));
}
U(Ee);
// src/lib/hooks/useBrandPalette.ts
function De(e) {
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
var Oe = (e, t) => f(t) ? {
	brand: e[t],
	isCustomHex: !1
} : (d(t), {
	brand: De(t),
	isCustomHex: !0
}), X = (e, t) => {
	let n = e === "light" ? l : u, { brand: r, isCustomHex: i } = Oe(n, t);
	return {
		...n,
		brand: e === "dark" && i ? n.purple : r
	};
}, ke = (e) => {
	let { brand: t, blue: n, green: r, magenta: i, neutral: a, orange: o, purple: s, red: l, yellow: u } = X("dark", e), d = t[50], f = a[80], p = a["00"], m = c(d, f, p);
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
		stateError: l[50],
		stateCaution: o[50],
		stateSuccess: r[50],
		stateFavorite: u[50],
		stateBadgeTrainual: s["05"],
		stateBadgeInfo: n["05"],
		stateBadgeError: l["05"],
		stateBadgeCaution: o["05"],
		stateBadgeSuccess: r["05"],
		stateBadgeGeneral: a[15],
		stateBackgroundInfo: n["00"],
		stateBackgroundError: l["00"],
		stateBackgroundCaution: o["00"],
		stateBackgroundSuccess: r["00"],
		stateHoverInfo: n[60],
		stateHoverError: l[70],
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
		chartRed1: l["00"],
		chartRed2: l["05"],
		chartRed3: l[50],
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
		previewRedPrimary: l[50],
		previewRedSecondary: l["05"],
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
}, Ae = (e) => {
	let { brand: t, blue: n, green: r, magenta: i, neutral: a, orange: o, purple: s, red: l, yellow: u } = X("light", e), d = t[50], f = a[80], p = a["00"], m = c(d, f, p);
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
		stateError: l[50],
		stateCaution: o[50],
		stateSuccess: r[50],
		stateFavorite: u[50],
		stateBadgeTrainual: s["05"],
		stateBadgeInfo: n["05"],
		stateBadgeError: l["05"],
		stateBadgeCaution: o["05"],
		stateBadgeSuccess: r["05"],
		stateBadgeGeneral: a[15],
		stateBackgroundInfo: n["00"],
		stateBackgroundError: l["00"],
		stateBackgroundCaution: o["00"],
		stateBackgroundSuccess: r["00"],
		stateHoverInfo: n[60],
		stateHoverError: l[70],
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
		chartRed1: l["00"],
		chartRed2: l["05"],
		chartRed3: l[50],
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
		previewRedPrimary: l[50],
		previewRedSecondary: l["05"],
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
}, je = (e, t) => {
	let n = Ae(e), r = ke(e);
	return t == "light" ? n : r;
}, Me = () => ({
	fontExtralight: "200",
	fontLight: "300",
	fontRegular: "400",
	fontMedium: "500",
	fontSemibold: "600",
	fontBold: "700",
	fontExtrabold: "800",
	fontHeavy: "900"
}), Z = () => ({
	height2xs: "1rem",
	heightXs: "1.5rem",
	heightSm: "2rem",
	heightMd: "2.25rem",
	heightLg: "2.5rem"
}), Q = () => ({
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
}), Ne = /* @__PURE__ */ n(((e) => {
	var t = r("react"), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function c(e, t, r) {
		var i, c = {}, l = null, u = null;
		for (i in r !== void 0 && (l = "" + r), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !s.hasOwnProperty(i) && (c[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) c[i] === void 0 && (c[i] = t[i]);
		return {
			$$typeof: n,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = c, e.jsxs = c;
})), Pe = /* @__PURE__ */ n(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = r("react"), n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, _ = "@@iterator";
		function v(e) {
			if (typeof e != "object" || !e) return null;
			var t = g && e[g] || e[_];
			return typeof t == "function" ? t : null;
		}
		var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function b(e) {
			ee("error", e, [...arguments].slice(1));
		}
		function ee(e, t, n) {
			var r = y.ReactDebugCurrentFrame.getStackAddendum();
			r !== "" && (t += "%s", n = n.concat([r]));
			var i = n.map(function(e) {
				return String(e);
			});
			i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
		}
		var te = Symbol.for("react.module.reference");
		function ne(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === a || e === s || e === o || e === d || e === f || e === h || typeof e == "object" && e && (e.$$typeof === m || e.$$typeof === p || e.$$typeof === c || e.$$typeof === l || e.$$typeof === u || e.$$typeof === te || e.getModuleId !== void 0));
		}
		function x(e, t, n) {
			var r = e.displayName;
			if (r) return r;
			var i = t.displayName || t.name || "";
			return i === "" ? n : n + "(" + i + ")";
		}
		function re(e) {
			return e.displayName || "Context";
		}
		function S(e) {
			if (e == null) return null;
			if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case a: return "Fragment";
				case i: return "Portal";
				case s: return "Profiler";
				case o: return "StrictMode";
				case d: return "Suspense";
				case f: return "SuspenseList";
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case l: return re(e) + ".Consumer";
				case c: return re(e._context) + ".Provider";
				case u: return x(e, e.render, "ForwardRef");
				case p:
					var t = e.displayName || null;
					return t === null ? S(e.type) || "Memo" : t;
				case m:
					var n = e, r = n._payload, h = n._init;
					try {
						return S(h(r));
					} catch {
						return null;
					}
			}
			return null;
		}
		var C = Object.assign, w = 0, ie, T, E, ae, oe, se, ce;
		function le() {}
		le.__reactDisabledLog = !0;
		function D() {
			if (w === 0) {
				ie = console.log, T = console.info, E = console.warn, ae = console.error, oe = console.group, se = console.groupCollapsed, ce = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: le,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			w++;
		}
		function ue() {
			if (w--, w === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: C({}, e, { value: ie }),
					info: C({}, e, { value: T }),
					warn: C({}, e, { value: E }),
					error: C({}, e, { value: ae }),
					group: C({}, e, { value: oe }),
					groupCollapsed: C({}, e, { value: se }),
					groupEnd: C({}, e, { value: ce })
				});
			}
			w < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		var O = y.ReactCurrentDispatcher, k;
		function A(e, t, n) {
			if (k === void 0) try {
				throw Error();
			} catch (e) {
				var r = e.stack.trim().match(/\n( *(at )?)/);
				k = r && r[1] || "";
			}
			return "\n" + k + e;
		}
		var j = !1, M = new (typeof WeakMap == "function" ? WeakMap : Map)();
		function N(e, t) {
			if (!e || j) return "";
			var n = M.get(e);
			if (n !== void 0) return n;
			var r;
			j = !0;
			var i = Error.prepareStackTrace;
			Error.prepareStackTrace = void 0;
			var a = O.current;
			O.current = null, D();
			try {
				if (t) {
					var o = function() {
						throw Error();
					};
					if (Object.defineProperty(o.prototype, "props", { set: function() {
						throw Error();
					} }), typeof Reflect == "object" && Reflect.construct) {
						try {
							Reflect.construct(o, []);
						} catch (e) {
							r = e;
						}
						Reflect.construct(e, [], o);
					} else {
						try {
							o.call();
						} catch (e) {
							r = e;
						}
						e.call(o.prototype);
					}
				} else {
					try {
						throw Error();
					} catch (e) {
						r = e;
					}
					e();
				}
			} catch (t) {
				if (t && r && typeof t.stack == "string") {
					for (var s = t.stack.split("\n"), c = r.stack.split("\n"), l = s.length - 1, u = c.length - 1; l >= 1 && u >= 0 && s[l] !== c[u];) u--;
					for (; l >= 1 && u >= 0; l--, u--) if (s[l] !== c[u]) {
						if (l !== 1 || u !== 1) do
							if (l--, u--, u < 0 || s[l] !== c[u]) {
								var d = "\n" + s[l].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, d), d;
							}
						while (l >= 1 && u >= 0);
						break;
					}
				}
			} finally {
				j = !1, O.current = a, ue(), Error.prepareStackTrace = i;
			}
			var f = e ? e.displayName || e.name : "", p = f ? A(f) : "";
			return typeof e == "function" && M.set(e, p), p;
		}
		function P(e, t, n) {
			return N(e, !1);
		}
		function F(e) {
			var t = e.prototype;
			return !!(t && t.isReactComponent);
		}
		function I(e, t, n) {
			if (e == null) return "";
			if (typeof e == "function") return N(e, F(e));
			if (typeof e == "string") return A(e);
			switch (e) {
				case d: return A("Suspense");
				case f: return A("SuspenseList");
			}
			if (typeof e == "object") switch (e.$$typeof) {
				case u: return P(e.render);
				case p: return I(e.type, t, n);
				case m:
					var r = e, i = r._payload, a = r._init;
					try {
						return I(a(i), t, n);
					} catch {}
			}
			return "";
		}
		var L = Object.prototype.hasOwnProperty, de = {}, fe = y.ReactDebugCurrentFrame;
		function R(e) {
			if (e) {
				var t = e._owner, n = I(e.type, e._source, t ? t.type : null);
				fe.setExtraStackFrame(n);
			} else fe.setExtraStackFrame(null);
		}
		function z(e, t, n, r, i) {
			var a = Function.call.bind(L);
			for (var o in e) if (a(e, o)) {
				var s = void 0;
				try {
					if (typeof e[o] != "function") {
						var c = Error((r || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw c.name = "Invariant Violation", c;
					}
					s = e[o](t, o, r, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
				} catch (e) {
					s = e;
				}
				s && !(s instanceof Error) && (R(i), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", r || "React class", n, o, typeof s), R(null)), s instanceof Error && !(s.message in de) && (de[s.message] = !0, R(i), b("Failed %s type: %s", n, s.message), R(null));
			}
		}
		var pe = Array.isArray;
		function B(e) {
			return pe(e);
		}
		function me(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function he(e) {
			try {
				return V(e), !1;
			} catch {
				return !0;
			}
		}
		function V(e) {
			return "" + e;
		}
		function H(e) {
			if (he(e)) return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", me(e)), V(e);
		}
		var U = y.ReactCurrentOwner, ge = {
			key: !0,
			ref: !0,
			__self: !0,
			__source: !0
		}, W, _e, G = {};
		function ve(e) {
			if (L.call(e, "ref")) {
				var t = Object.getOwnPropertyDescriptor(e, "ref").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.ref !== void 0;
		}
		function ye(e) {
			if (L.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function K(e, t) {
			if (typeof e.ref == "string" && U.current && t && U.current.stateNode !== t) {
				var n = S(U.current.type);
				G[n] || (b("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", S(U.current.type), e.ref), G[n] = !0);
			}
		}
		function be(e, t) {
			var n = function() {
				W || (W = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function xe(e, t) {
			var n = function() {
				_e || (_e = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
			};
			n.isReactWarning = !0, Object.defineProperty(e, "ref", {
				get: n,
				configurable: !0
			});
		}
		var Se = function(e, t, r, i, a, o, s) {
			var c = {
				$$typeof: n,
				type: e,
				key: t,
				ref: r,
				props: s,
				_owner: o
			};
			return c._store = {}, Object.defineProperty(c._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: !1
			}), Object.defineProperty(c, "_self", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: i
			}), Object.defineProperty(c, "_source", {
				configurable: !1,
				enumerable: !1,
				writable: !1,
				value: a
			}), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
		};
		function Ce(e, t, n, r, i) {
			var a, o = {}, s = null, c = null;
			for (a in n !== void 0 && (H(n), s = "" + n), ye(t) && (H(t.key), s = "" + t.key), ve(t) && (c = t.ref, K(t, i)), t) L.call(t, a) && !ge.hasOwnProperty(a) && (o[a] = t[a]);
			if (e && e.defaultProps) {
				var l = e.defaultProps;
				for (a in l) o[a] === void 0 && (o[a] = l[a]);
			}
			if (s || c) {
				var u = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
				s && be(o, u), c && xe(o, u);
			}
			return Se(e, s, c, i, r, U.current, o);
		}
		var q = y.ReactCurrentOwner, we = y.ReactDebugCurrentFrame;
		function J(e) {
			if (e) {
				var t = e._owner, n = I(e.type, e._source, t ? t.type : null);
				we.setExtraStackFrame(n);
			} else we.setExtraStackFrame(null);
		}
		var Te = !1;
		function Y(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function Ee() {
			if (q.current) {
				var e = S(q.current.type);
				if (e) return "\n\nCheck the render method of `" + e + "`.";
			}
			return "";
		}
		function De(e) {
			if (e !== void 0) {
				var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
				return "\n\nCheck your code at " + t + ":" + n + ".";
			}
			return "";
		}
		var Oe = {};
		function X(e) {
			var t = Ee();
			if (!t) {
				var n = typeof e == "string" ? e : e.displayName || e.name;
				n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
			}
			return t;
		}
		function ke(e, t) {
			if (e._store && !e._store.validated && e.key == null) {
				e._store.validated = !0;
				var n = X(t);
				if (!Oe[n]) {
					Oe[n] = !0;
					var r = "";
					e && e._owner && e._owner !== q.current && (r = " It was passed a child from " + S(e._owner.type) + "."), J(e), b("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", n, r), J(null);
				}
			}
		}
		function Ae(e, t) {
			if (typeof e == "object") {
				if (B(e)) for (var n = 0; n < e.length; n++) {
					var r = e[n];
					Y(r) && ke(r, t);
				}
				else if (Y(e)) e._store && (e._store.validated = !0);
				else if (e) {
					var i = v(e);
					if (typeof i == "function" && i !== e.entries) for (var a = i.call(e), o; !(o = a.next()).done;) Y(o.value) && ke(o.value, t);
				}
			}
		}
		function je(e) {
			var t = e.type;
			if (t != null && typeof t != "string") {
				var n;
				if (typeof t == "function") n = t.propTypes;
				else if (typeof t == "object" && (t.$$typeof === u || t.$$typeof === p)) n = t.propTypes;
				else return;
				if (n) {
					var r = S(t);
					z(n, e.props, "prop", r, e);
				} else t.PropTypes !== void 0 && !Te && (Te = !0, b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S(t) || "Unknown"));
				typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
			}
		}
		function Me(e) {
			for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
				var r = t[n];
				if (r !== "children" && r !== "key") {
					J(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", r), J(null);
					break;
				}
			}
			e.ref !== null && (J(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
		}
		var Z = {};
		function Q(e, t, r, i, o, s) {
			var c = ne(e);
			if (!c) {
				var l = "";
				(e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
				var u = De(o);
				l += u || Ee();
				var d;
				e === null ? d = "null" : B(e) ? d = "array" : e !== void 0 && e.$$typeof === n ? (d = "<" + (S(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, l);
			}
			var f = Ce(e, t, r, o, s);
			if (f == null) return f;
			if (c) {
				var p = t.children;
				if (p !== void 0) {
					if (i) {
						if (B(p)) {
							for (var m = 0; m < p.length; m++) Ae(p[m], e);
							Object.freeze && Object.freeze(p);
						} else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
					} else Ae(p, e);
				}
			}
			if (L.call(t, "key")) {
				var h = S(e), g = Object.keys(t).filter(function(e) {
					return e !== "key";
				}), _ = g.length > 0 ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}";
				Z[h + _] || (b("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", _, h, g.length > 0 ? "{" + g.join(": ..., ") + ": ...}" : "{}", h), Z[h + _] = !0);
			}
			return e === a ? Me(f) : je(f), f;
		}
		function Ne(e, t, n) {
			return Q(e, t, n, !0);
		}
		function Pe(e, t, n) {
			return Q(e, t, n, !1);
		}
		var $ = Pe, Fe = Ne;
		e.Fragment = a, e.jsx = $, e.jsxs = Fe;
	})();
})), $ = (/* @__PURE__ */ n(((e, t) => {
	t.exports = process.env.NODE_ENV === "production" ? Ne() : Pe();
})))(), Fe = t`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Ie = ({ brandOption: t, mode: n, children: r }) => {
	let a = X(n, t), o = i(), s = Me(), c = Z(), l = Q(), u = je(t, n), d = {
		constants: {
			...o,
			...s,
			...c,
			...l
		},
		mode: n,
		brand: t,
		vars: u,
		palettes: a
	};
	return /* @__PURE__ */ (0, $.jsxs)($.Fragment, { children: [/* @__PURE__ */ (0, $.jsx)(Fe, {}), /* @__PURE__ */ (0, $.jsx)(e, {
		theme: d,
		children: r
	})] });
};
export { Ie as SaguaroThemeProvider, p as getPrimaryPreviewColor, m as getSecondaryPreviewColor, f as isPalette, i as useBorderTokens, je as useColorTokens, Me as useFontTokens, Z as useHeightTokens, X as usePaletteBoard, Q as useSpacingTokens };
