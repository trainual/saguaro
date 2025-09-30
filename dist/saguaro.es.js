import Je from "react";
import { createGlobalStyle as Hr, ThemeProvider as Yr } from "styled-components";
const Wr = () => ({
  borderRadiusXs: "1px",
  borderRadiusSm: "2px",
  borderRadiusMd: "4px",
  borderRadiusLg: "8px",
  borderRadiusXl: "16px",
  borderRadiusCircle: "50%",
  borderRadiusEndcap: "100px",
  borderWidthXs: "0.5px",
  borderWidthSm: "1px",
  borderWidthMd: "1.5px",
  borderWidthLg: "2px",
  borderWidthXl: "3px",
  borderWidth2xl: "4px"
}), pe = { r: 0.2126, g: 0.7152, b: 0.0722 }, Gr = 255, zr = (a) => {
  const e = a.length === 4 ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a, [n, o, i] = [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16));
  return { r: n, g: o, b: i };
}, Ke = (a, e, n) => {
  const { r: o, g: i, b: t } = zr(a);
  return (o * pe.r + i * pe.g + t * pe.b) / Gr > 0.62 ? e : n;
}, Nr = {
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
}, Ur = {
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
}, qr = {
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
}, Xr = {
  "00": "#FFFFFF",
  "05": "#F9F9F9",
  10: "#F1F1F1",
  15: "#E3E3E3",
  20: "#D5D5D5",
  25: "#C6C6C6",
  30: "#AAAAAA",
  40: "#8E8E8E",
  50: "#737373",
  60: "#555555",
  70: "#393939",
  80: "#2A2A2A",
  90: "#121212",
  transparent1: "rgba( 0, 0, 0, 0.05)",
  transparent2: "rgba( 0, 0, 0, 0.1)",
  transparent3: "rgba( 0, 0, 0, 0.25)"
}, Vr = {
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
}, Jr = {
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
}, Kr = {
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
}, Zr = {
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
}, Ze = {
  blue: Nr,
  green: Ur,
  magenta: qr,
  neutral: Xr,
  orange: Vr,
  purple: Jr,
  red: Kr,
  yellow: Zr
}, Qr = {
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
}, ea = {
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
}, ra = {
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
}, aa = {
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
}, ta = {
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
}, na = {
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
}, oa = {
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
}, sa = {
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
}, ia = {
  blue: Qr,
  green: ea,
  magenta: ra,
  neutral: aa,
  orange: ta,
  purple: na,
  red: oa,
  yellow: sa
};
function ua(a) {
  if (!a.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function la(a) {
  return Object.keys(Ze).includes(a);
}
function lt(a, e) {
  return e["preview" + Qe(a) + "Primary"];
}
function dt(a, e) {
  return e["preview" + Qe(a) + "Secondary"];
}
const Qe = (a) => a.charAt(0).toUpperCase() + a.slice(1);
function D() {
  return D = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (a[o] = n[o]);
    }
    return a;
  }, D.apply(null, arguments);
}
function da(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function U(a, e) {
  return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, U(a, e);
}
function fa(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, U(a, e);
}
function be(a) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, be(a);
}
function ca(a) {
  try {
    return Function.toString.call(a).indexOf("[native code]") !== -1;
  } catch {
    return typeof a == "function";
  }
}
function er() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (er = function() {
    return !!a;
  })();
}
function pa(a, e, n) {
  if (er()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var i = new (a.bind.apply(a, o))();
  return n && U(i, n.prototype), i;
}
function ve(a) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ve = function(o) {
    if (o === null || !ca(o)) return o;
    if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(o)) return e.get(o);
      e.set(o, i);
    }
    function i() {
      return pa(o, arguments, be(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), U(i, o);
  }, ve(a);
}
var ha = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function ga() {
  for (var a = arguments.length, e = new Array(a), n = 0; n < a; n++)
    e[n] = arguments[n];
  var o = e[0], i = [], t;
  for (t = 1; t < e.length; t += 1)
    i.push(e[t]);
  return i.forEach(function(l) {
    o = o.replace(/%[a-z]/, l);
  }), o;
}
var k = /* @__PURE__ */ function(a) {
  fa(e, a);
  function e(n) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = a.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
        t[l - 1] = arguments[l];
      o = a.call(this, ga.apply(void 0, [ha[n]].concat(t))) || this;
    }
    return da(o);
  }
  return e;
}(/* @__PURE__ */ ve(Error));
function he(a) {
  return Math.round(a * 255);
}
function ma(a, e, n) {
  return he(a) + "," + he(e) + "," + he(n);
}
function ae(a, e, n, o) {
  if (o === void 0 && (o = ma), e === 0)
    return o(n, n, n);
  var i = (a % 360 + 360) % 360 / 60, t = (1 - Math.abs(2 * n - 1)) * e, l = t * (1 - Math.abs(i % 2 - 1)), f = 0, d = 0, p = 0;
  i >= 0 && i < 1 ? (f = t, d = l) : i >= 1 && i < 2 ? (f = l, d = t) : i >= 2 && i < 3 ? (d = t, p = l) : i >= 3 && i < 4 ? (d = l, p = t) : i >= 4 && i < 5 ? (f = l, p = t) : i >= 5 && i < 6 && (f = t, p = l);
  var m = n - t / 2, v = f + m, y = d + m, x = p + m;
  return o(v, y, x);
}
var qe = {
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
function ba(a) {
  if (typeof a != "string") return a;
  var e = a.toLowerCase();
  return qe[e] ? "#" + qe[e] : a;
}
var va = /^#[a-fA-F0-9]{6}$/, ya = /^#[a-fA-F0-9]{8}$/, Fa = /^#[a-fA-F0-9]{3}$/, Sa = /^#[a-fA-F0-9]{4}$/, ge = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, wa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Ca = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Ea = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function q(a) {
  if (typeof a != "string")
    throw new k(3);
  var e = ba(a);
  if (e.match(va))
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16)
    };
  if (e.match(ya)) {
    var n = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: n
    };
  }
  if (e.match(Fa))
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16)
    };
  if (e.match(Sa)) {
    var o = parseFloat((parseInt("" + e[4] + e[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16),
      alpha: o
    };
  }
  var i = ge.exec(e);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10)
    };
  var t = wa.exec(e.substring(0, 50));
  if (t)
    return {
      red: parseInt("" + t[1], 10),
      green: parseInt("" + t[2], 10),
      blue: parseInt("" + t[3], 10),
      alpha: parseFloat("" + t[4]) > 1 ? parseFloat("" + t[4]) / 100 : parseFloat("" + t[4])
    };
  var l = Ca.exec(e);
  if (l) {
    var f = parseInt("" + l[1], 10), d = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, m = "rgb(" + ae(f, d, p) + ")", v = ge.exec(m);
    if (!v)
      throw new k(4, e, m);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10)
    };
  }
  var y = Ea.exec(e.substring(0, 50));
  if (y) {
    var x = parseInt("" + y[1], 10), X = parseInt("" + y[2], 10) / 100, ne = parseInt("" + y[3], 10) / 100, V = "rgb(" + ae(x, X, ne) + ")", T = ge.exec(V);
    if (!T)
      throw new k(4, e, V);
    return {
      red: parseInt("" + T[1], 10),
      green: parseInt("" + T[2], 10),
      blue: parseInt("" + T[3], 10),
      alpha: parseFloat("" + y[4]) > 1 ? parseFloat("" + y[4]) / 100 : parseFloat("" + y[4])
    };
  }
  throw new k(5);
}
function xa(a) {
  var e = a.red / 255, n = a.green / 255, o = a.blue / 255, i = Math.max(e, n, o), t = Math.min(e, n, o), l = (i + t) / 2;
  if (i === t)
    return a.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: l,
      alpha: a.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: l
    };
  var f, d = i - t, p = l > 0.5 ? d / (2 - i - t) : d / (i + t);
  switch (i) {
    case e:
      f = (n - o) / d + (n < o ? 6 : 0);
      break;
    case n:
      f = (o - e) / d + 2;
      break;
    default:
      f = (e - n) / d + 4;
      break;
  }
  return f *= 60, a.alpha !== void 0 ? {
    hue: f,
    saturation: p,
    lightness: l,
    alpha: a.alpha
  } : {
    hue: f,
    saturation: p,
    lightness: l
  };
}
function _(a) {
  return xa(q(a));
}
var Ba = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, ye = Ba;
function M(a) {
  var e = a.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function me(a) {
  return M(Math.round(a * 255));
}
function Da(a, e, n) {
  return ye("#" + me(a) + me(e) + me(n));
}
function rr(a, e, n) {
  return ae(a, e, n, Da);
}
function Pa(a, e, n) {
  if (typeof a == "object" && e === void 0 && n === void 0)
    return rr(a.hue, a.saturation, a.lightness);
  throw new k(1);
}
function Ra(a, e, n, o) {
  if (typeof a == "object" && e === void 0 && n === void 0 && o === void 0)
    return a.alpha >= 1 ? rr(a.hue, a.saturation, a.lightness) : "rgba(" + ae(a.hue, a.saturation, a.lightness) + "," + a.alpha + ")";
  throw new k(2);
}
function ar(a, e, n) {
  if (typeof a == "number" && typeof e == "number" && typeof n == "number")
    return ye("#" + M(a) + M(e) + M(n));
  if (typeof a == "object" && e === void 0 && n === void 0)
    return ye("#" + M(a.red) + M(a.green) + M(a.blue));
  throw new k(6);
}
function te(a, e, n, o) {
  if (typeof a == "object" && e === void 0 && n === void 0 && o === void 0)
    return a.alpha >= 1 ? ar(a.red, a.green, a.blue) : "rgba(" + a.red + "," + a.green + "," + a.blue + "," + a.alpha + ")";
  throw new k(7);
}
var Ta = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, ka = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, Aa = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, _a = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function O(a) {
  if (typeof a != "object") throw new k(8);
  if (ka(a)) return te(a);
  if (Ta(a)) return ar(a);
  if (_a(a)) return Ra(a);
  if (Aa(a)) return Pa(a);
  throw new k(8);
}
function tr(a, e, n) {
  return function() {
    var i = n.concat(Array.prototype.slice.call(arguments));
    return i.length >= e ? a.apply(this, i) : tr(a, e, i);
  };
}
function P(a) {
  return tr(a, a.length, []);
}
function Oa(a, e) {
  if (e === "transparent") return e;
  var n = _(e);
  return O(D({}, n, {
    hue: n.hue + parseFloat(a)
  }));
}
P(Oa);
function Y(a, e, n) {
  return Math.max(a, Math.min(e, n));
}
function ja(a, e) {
  if (e === "transparent") return e;
  var n = _(e);
  return O(D({}, n, {
    lightness: Y(0, 1, n.lightness - parseFloat(a))
  }));
}
var Ia = P(ja), ee = Ia;
function Ma(a, e) {
  if (e === "transparent") return e;
  var n = _(e);
  return O(D({}, n, {
    saturation: Y(0, 1, n.saturation - parseFloat(a))
  }));
}
P(Ma);
function $a(a, e) {
  if (e === "transparent") return e;
  var n = _(e);
  return O(D({}, n, {
    lightness: Y(0, 1, n.lightness + parseFloat(a))
  }));
}
var La = P($a), H = La;
function Ha(a, e, n) {
  if (e === "transparent") return n;
  if (n === "transparent") return e;
  if (a === 0) return n;
  var o = q(e), i = D({}, o, {
    alpha: typeof o.alpha == "number" ? o.alpha : 1
  }), t = q(n), l = D({}, t, {
    alpha: typeof t.alpha == "number" ? t.alpha : 1
  }), f = i.alpha - l.alpha, d = parseFloat(a) * 2 - 1, p = d * f === -1 ? d : d + f, m = 1 + d * f, v = (p / m + 1) / 2, y = 1 - v, x = {
    red: Math.floor(i.red * v + l.red * y),
    green: Math.floor(i.green * v + l.green * y),
    blue: Math.floor(i.blue * v + l.blue * y),
    alpha: i.alpha * parseFloat(a) + l.alpha * (1 - parseFloat(a))
  };
  return te(x);
}
var Ya = P(Ha), nr = Ya;
function Wa(a, e) {
  if (e === "transparent") return e;
  var n = q(e), o = typeof n.alpha == "number" ? n.alpha : 1, i = D({}, n, {
    alpha: Y(0, 1, (o * 100 + parseFloat(a) * 100) / 100)
  });
  return te(i);
}
P(Wa);
function Ga(a, e) {
  if (e === "transparent") return e;
  var n = _(e);
  return O(D({}, n, {
    saturation: Y(0, 1, n.saturation + parseFloat(a))
  }));
}
P(Ga);
function za(a, e) {
  return e === "transparent" ? e : O(D({}, _(e), {
    hue: parseFloat(a)
  }));
}
P(za);
function Na(a, e) {
  return e === "transparent" ? e : O(D({}, _(e), {
    lightness: parseFloat(a)
  }));
}
P(Na);
function Ua(a, e) {
  return e === "transparent" ? e : O(D({}, _(e), {
    saturation: parseFloat(a)
  }));
}
P(Ua);
function qa(a, e) {
  return e === "transparent" ? e : nr(parseFloat(a), "rgb(0, 0, 0)", e);
}
P(qa);
function Xa(a, e) {
  return e === "transparent" ? e : nr(parseFloat(a), "rgb(255, 255, 255)", e);
}
P(Xa);
function Va(a, e) {
  if (e === "transparent") return e;
  var n = q(e), o = typeof n.alpha == "number" ? n.alpha : 1, i = D({}, n, {
    alpha: Y(0, 1, +(o * 100 - parseFloat(a) * 100).toFixed(2) / 100)
  });
  return te(i);
}
P(Va);
function Ja(a) {
  return {
    "00": H(0.42, a),
    "05": H(0.38, a),
    10: H(0.32, a),
    20: H(0.25, a),
    30: H(0.18, a),
    40: H(0.1, a),
    50: a,
    60: ee(0.07, a),
    70: ee(0.14, a),
    80: ee(0.2, a),
    90: ee(0.25, a)
  };
}
const Ka = (a, e) => la(e) ? {
  brand: a[e],
  isCustomHex: !1
} : (ua(e), {
  brand: Ja(e),
  isCustomHex: !0
}), Se = (a, e) => {
  const n = a === "light" ? Ze : ia, { brand: o, isCustomHex: i } = Ka(n, e);
  return {
    ...n,
    brand: a === "dark" && i ? n.purple : o
  };
}, Za = (a) => {
  const {
    brand: e,
    blue: n,
    green: o,
    magenta: i,
    neutral: t,
    orange: l,
    purple: f,
    red: d,
    yellow: p
  } = Se("dark", a), m = e[50], v = t[80], y = t["00"], x = Ke(m, v, y);
  return {
    // Foundation
    foundationHover: t[10],
    foundationBase1: t["05"],
    foundationBase2: t[10],
    foundationBase3: t[15],
    foundationBase4: t[30],
    foundationSurface1: t["00"],
    foundationSurface2: t[90],
    // Border
    borderSurface1: t[10],
    borderSurface2: t[15],
    borderDefault: t[25],
    borderHover: t[60],
    borderDisabled: t[25],
    // Text
    textDefault: v,
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: y,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: m,
    accentPrimaryHover: e[60],
    accentPrimaryPressed: e[70],
    accentSubdued1: e["00"],
    accentSubdued2: e["05"],
    accentSubdued3: e[10],
    accentSubdued4: e[20],
    accentStrong1: e[80],
    accentStrong2: e[90],
    textAccentContrast: x,
    // State
    stateInfo: n[40],
    stateError: d[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: p[50],
    stateBadgeTrainual: f["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: d["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: d["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: d[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: l[60],
    chartRed1: d["00"],
    chartRed2: d["05"],
    chartRed3: d[50],
    // Brand
    trainualBrandPurpleSurfaceLight: f["00"],
    trainualBrandPurpleSurface: f[10],
    trainualBrandPurpleSubdued: f[40],
    trainualBrandPurpleMedium: f[50],
    trainualBrandPurpleStrong: f[90],
    trainualBrandGreenSurfaceLight: o["00"],
    trainualBrandGreenSurface: o[10],
    trainualBrandGreenSubdued: o[20],
    trainualBrandGreenMedium: o[40],
    trainualBrandGreenStrong: o[90],
    trainualBrandYellowSurfaceLight: p["00"],
    trainualBrandYellowSurface: p[10],
    trainualBrandYellowSubdued: p[20],
    trainualBrandYellowMedium: p[40],
    trainualBrandYellowStrong: p[90],
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
    // The representative for each palette.
    //  Used in places like the palette picker.
    previewBluePrimary: n[50],
    previewBlueSecondary: n["05"],
    previewGreenPrimary: o[50],
    previewGreenSecondary: o["05"],
    previewMagentaPrimary: i[50],
    previewMagentaSecondary: i["05"],
    previewNeutralPrimary: t[50],
    previewNeutralSecondary: t["05"],
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: f[50],
    previewPurpleSecondary: f["05"],
    previewRedPrimary: d[50],
    previewRedSecondary: d["05"],
    previewYellowPrimary: p[50],
    previewYellowSecondary: p["05"],
    // Drop Shadows
    shadowBackground1: "rgba(255, 255, 255, 0.1)",
    shadowBackground2: "rgba(255, 255, 255, 0.2)",
    shadowBackground3: "rgba(255, 255, 255, 0.3)",
    shadowColorTopXsmall: t.transparent3,
    shadowColorTopSmall: t.transparent1,
    shadowColorTopMedium: t.transparent1,
    shadowColorTopLarge: t.transparent1,
    shadowColorCenterSmall: t.transparent1,
    shadowColorCenterMedium: t.transparent1,
    shadowColorCenterLarge: t.transparent1,
    shadowColorSpecialWysiwyg: t.transparent3,
    shadowColorSpecialDataTable: t.transparent3,
    shadowTopXsmall: `0 1px 3px ${t.transparent3}`,
    shadowTopSmall: `0 5px 10px ${t.transparent1}`,
    shadowTopMedium: `0 5px 15px ${t.transparent1}`,
    shadowTopLarge: `0 5px 40px ${t.transparent1}`,
    shadowCenterSmall: `0 0 10px ${t.transparent1}`,
    shadowCenterMedium: `0 0 15px ${t.transparent1}`,
    shadowCenterLarge: `0 0 40px ${t.transparent1}`,
    shadowSpecialWysiwyg: `0 2px 4px ${t.transparent3}`,
    shadowSpecialDataTable: `0 5px 10px ${t.transparent3}`,
    // A11y
    focusOutlineColor: "#99C8FF",
    // Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, Qa = (a) => {
  const {
    brand: e,
    blue: n,
    green: o,
    magenta: i,
    neutral: t,
    orange: l,
    purple: f,
    red: d,
    yellow: p
  } = Se("light", a), m = e[50], v = t[80], y = t["00"], x = Ke(m, v, y);
  return {
    // Foundation
    foundationHover: t[10],
    foundationBase1: t["05"],
    foundationBase2: t[10],
    foundationBase3: t[15],
    foundationBase4: t[30],
    foundationSurface1: t["00"],
    foundationSurface2: t[90],
    // Border
    borderSurface1: t[10],
    borderSurface2: t[15],
    borderDefault: t[25],
    borderHover: t[60],
    borderDisabled: t[25],
    // Text
    textDefault: v,
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: y,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: m,
    accentPrimaryHover: e[60],
    accentPrimaryPressed: e[70],
    accentSubdued1: e["00"],
    accentSubdued2: e["05"],
    accentSubdued3: e[10],
    accentSubdued4: e[20],
    accentStrong1: e[80],
    accentStrong2: e[90],
    textAccentContrast: x,
    // State
    stateInfo: n[40],
    stateError: d[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: p[50],
    stateBadgeTrainual: f["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: d["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: d["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: d[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: l[60],
    chartRed1: d["00"],
    chartRed2: d["05"],
    chartRed3: d[50],
    // Brand
    trainualBrandPurpleSurfaceLight: f["00"],
    trainualBrandPurpleSurface: f[10],
    trainualBrandPurpleSubdued: f[40],
    trainualBrandPurpleMedium: f[50],
    trainualBrandPurpleStrong: f[90],
    trainualBrandGreenSurfaceLight: o["00"],
    trainualBrandGreenSurface: o[10],
    trainualBrandGreenSubdued: o[20],
    trainualBrandGreenMedium: o[40],
    trainualBrandGreenStrong: o[90],
    trainualBrandYellowSurfaceLight: p["00"],
    trainualBrandYellowSurface: p[10],
    trainualBrandYellowSubdued: p[20],
    trainualBrandYellowMedium: p[40],
    trainualBrandYellowStrong: p[90],
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
    // The representative for each palette.
    //  Used in places like the palette picker.
    previewBluePrimary: n[50],
    previewBlueSecondary: n["05"],
    previewGreenPrimary: o[50],
    previewGreenSecondary: o["05"],
    previewMagentaPrimary: i[50],
    previewMagentaSecondary: i["05"],
    previewNeutralPrimary: t[50],
    previewNeutralSecondary: t["05"],
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: f[50],
    previewPurpleSecondary: f["05"],
    previewRedPrimary: d[50],
    previewRedSecondary: d["05"],
    previewYellowPrimary: p[50],
    previewYellowSecondary: p["05"],
    // Drop Shadows
    shadowBackground1: "rgba(0, 0, 0, 0.1)",
    shadowBackground2: "rgba(0, 0, 0, 0.2)",
    shadowBackground3: "rgba(0, 0, 0, 0.3)",
    shadowColorTopXsmall: t.transparent3,
    shadowColorTopSmall: t.transparent1,
    shadowColorTopMedium: t.transparent2,
    shadowColorTopLarge: t.transparent2,
    shadowColorCenterSmall: t.transparent1,
    shadowColorCenterMedium: t.transparent2,
    shadowColorCenterLarge: t.transparent2,
    shadowColorSpecialWysiwyg: t.transparent3,
    shadowColorSpecialDataTable: t.transparent3,
    shadowTopXsmall: `0 1px 3px ${t.transparent3}`,
    shadowTopSmall: `0 5px 10px ${t.transparent1}`,
    shadowTopMedium: `0 5px 15px ${t.transparent2}`,
    shadowTopLarge: `0 5px 40px ${t.transparent2}`,
    shadowCenterSmall: `0 0 10px ${t.transparent1}`,
    shadowCenterMedium: `0 0 15px ${t.transparent2}`,
    shadowCenterLarge: `0 0 40px ${t.transparent2}`,
    shadowSpecialWysiwyg: `0 2px 4px ${t.transparent3}`,
    shadowSpecialDataTable: `0 5px 10px ${t.transparent3}`,
    // A11y
    focusOutlineColor: "#99C8FF",
    // Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, et = (a, e) => {
  const n = Qa(a), o = Za(a);
  return e == "light" ? n : o;
}, rt = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), at = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), tt = () => ({
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
});
var Fe = { exports: {} }, z = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function nt() {
  if (Xe) return z;
  Xe = 1;
  var a = Je, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(f, d, p) {
    var m, v = {}, y = null, x = null;
    p !== void 0 && (y = "" + p), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (m in d) o.call(d, m) && !t.hasOwnProperty(m) && (v[m] = d[m]);
    if (f && f.defaultProps) for (m in d = f.defaultProps, d) v[m] === void 0 && (v[m] = d[m]);
    return { $$typeof: e, type: f, key: y, ref: x, props: v, _owner: i.current };
  }
  return z.Fragment = n, z.jsx = l, z.jsxs = l, z;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function ot() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Je, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), t = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), X = Symbol.iterator, ne = "@@iterator";
    function V(r) {
      if (r === null || typeof r != "object")
        return null;
      var s = X && r[X] || r[ne];
      return typeof s == "function" ? s : null;
    }
    var T = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(r) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
          u[c - 1] = arguments[c];
        or("error", r, u);
      }
    }
    function or(r, s, u) {
      {
        var c = T.ReactDebugCurrentFrame, b = c.getStackAddendum();
        b !== "" && (s += "%s", u = u.concat([b]));
        var F = u.map(function(g) {
          return String(g);
        });
        F.unshift("Warning: " + s), Function.prototype.apply.call(console[r], console, F);
      }
    }
    var sr = !1, ir = !1, ur = !1, lr = !1, dr = !1, we;
    we = Symbol.for("react.module.reference");
    function fr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === t || dr || r === i || r === p || r === m || lr || r === x || sr || ir || ur || typeof r == "object" && r !== null && (r.$$typeof === y || r.$$typeof === v || r.$$typeof === l || r.$$typeof === f || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === we || r.getModuleId !== void 0));
    }
    function cr(r, s, u) {
      var c = r.displayName;
      if (c)
        return c;
      var b = s.displayName || s.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function Ce(r) {
      return r.displayName || "Context";
    }
    function A(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case t:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            var s = r;
            return Ce(s) + ".Consumer";
          case l:
            var u = r;
            return Ce(u._context) + ".Provider";
          case d:
            return cr(r, r.render, "ForwardRef");
          case v:
            var c = r.displayName || null;
            return c !== null ? c : A(r.type) || "Memo";
          case y: {
            var b = r, F = b._payload, g = b._init;
            try {
              return A(g(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, Ee, xe, Be, De, Pe, Re, Te;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function pr() {
      {
        if (W === 0) {
          Ee = console.log, xe = console.info, Be = console.warn, De = console.error, Pe = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ke,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        W++;
      }
    }
    function hr() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: Ee
            }),
            info: j({}, r, {
              value: xe
            }),
            warn: j({}, r, {
              value: Be
            }),
            error: j({}, r, {
              value: De
            }),
            group: j({}, r, {
              value: Pe
            }),
            groupCollapsed: j({}, r, {
              value: Re
            }),
            groupEnd: j({}, r, {
              value: Te
            })
          });
        }
        W < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = T.ReactCurrentDispatcher, se;
    function J(r, s, u) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (b) {
            var c = b.stack.trim().match(/\n( *(at )?)/);
            se = c && c[1] || "";
          }
        return `
` + se + r;
      }
    }
    var ie = !1, K;
    {
      var gr = typeof WeakMap == "function" ? WeakMap : Map;
      K = new gr();
    }
    function Ae(r, s) {
      if (!r || ie)
        return "";
      {
        var u = K.get(r);
        if (u !== void 0)
          return u;
      }
      var c;
      ie = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = oe.current, oe.current = null, pr();
      try {
        if (s) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (B) {
              c = B;
            }
            Reflect.construct(r, [], g);
          } else {
            try {
              g.call();
            } catch (B) {
              c = B;
            }
            r.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (B) {
            c = B;
          }
          r();
        }
      } catch (B) {
        if (B && c && typeof B.stack == "string") {
          for (var h = B.stack.split(`
`), E = c.stack.split(`
`), S = h.length - 1, w = E.length - 1; S >= 1 && w >= 0 && h[S] !== E[w]; )
            w--;
          for (; S >= 1 && w >= 0; S--, w--)
            if (h[S] !== E[w]) {
              if (S !== 1 || w !== 1)
                do
                  if (S--, w--, w < 0 || h[S] !== E[w]) {
                    var R = `
` + h[S].replace(" at new ", " at ");
                    return r.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", r.displayName)), typeof r == "function" && K.set(r, R), R;
                  }
                while (S >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ie = !1, oe.current = F, hr(), Error.prepareStackTrace = b;
      }
      var L = r ? r.displayName || r.name : "", I = L ? J(L) : "";
      return typeof r == "function" && K.set(r, I), I;
    }
    function mr(r, s, u) {
      return Ae(r, !1);
    }
    function br(r) {
      var s = r.prototype;
      return !!(s && s.isReactComponent);
    }
    function Z(r, s, u) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ae(r, br(r));
      if (typeof r == "string")
        return J(r);
      switch (r) {
        case p:
          return J("Suspense");
        case m:
          return J("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return mr(r.render);
          case v:
            return Z(r.type, s, u);
          case y: {
            var c = r, b = c._payload, F = c._init;
            try {
              return Z(F(b), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, _e = {}, Oe = T.ReactDebugCurrentFrame;
    function Q(r) {
      if (r) {
        var s = r._owner, u = Z(r.type, r._source, s ? s.type : null);
        Oe.setExtraStackFrame(u);
      } else
        Oe.setExtraStackFrame(null);
    }
    function vr(r, s, u, c, b) {
      {
        var F = Function.call.bind(G);
        for (var g in r)
          if (F(r, g)) {
            var h = void 0;
            try {
              if (typeof r[g] != "function") {
                var E = Error((c || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              h = r[g](s, g, c, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              h = S;
            }
            h && !(h instanceof Error) && (Q(b), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", u, g, typeof h), Q(null)), h instanceof Error && !(h.message in _e) && (_e[h.message] = !0, Q(b), C("Failed %s type: %s", u, h.message), Q(null));
          }
      }
    }
    var yr = Array.isArray;
    function ue(r) {
      return yr(r);
    }
    function Fr(r) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u;
      }
    }
    function Sr(r) {
      try {
        return je(r), !1;
      } catch {
        return !0;
      }
    }
    function je(r) {
      return "" + r;
    }
    function Ie(r) {
      if (Sr(r))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(r)), je(r);
    }
    var Me = T.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Le;
    function Cr(r) {
      if (G.call(r, "ref")) {
        var s = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Er(r) {
      if (G.call(r, "key")) {
        var s = Object.getOwnPropertyDescriptor(r, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function xr(r, s) {
      typeof r.ref == "string" && Me.current;
    }
    function Br(r, s) {
      {
        var u = function() {
          $e || ($e = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Dr(r, s) {
      {
        var u = function() {
          Le || (Le = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Pr = function(r, s, u, c, b, F, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: r,
        key: s,
        ref: u,
        props: g,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Rr(r, s, u, c, b) {
      {
        var F, g = {}, h = null, E = null;
        u !== void 0 && (Ie(u), h = "" + u), Er(s) && (Ie(s.key), h = "" + s.key), Cr(s) && (E = s.ref, xr(s, b));
        for (F in s)
          G.call(s, F) && !wr.hasOwnProperty(F) && (g[F] = s[F]);
        if (r && r.defaultProps) {
          var S = r.defaultProps;
          for (F in S)
            g[F] === void 0 && (g[F] = S[F]);
        }
        if (h || E) {
          var w = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          h && Br(g, w), E && Dr(g, w);
        }
        return Pr(r, h, E, b, c, Me.current, g);
      }
    }
    var le = T.ReactCurrentOwner, He = T.ReactDebugCurrentFrame;
    function $(r) {
      if (r) {
        var s = r._owner, u = Z(r.type, r._source, s ? s.type : null);
        He.setExtraStackFrame(u);
      } else
        He.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function Ye() {
      {
        if (le.current) {
          var r = A(le.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Tr(r) {
      return "";
    }
    var We = {};
    function kr(r) {
      {
        var s = Ye();
        if (!s) {
          var u = typeof r == "string" ? r : r.displayName || r.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Ge(r, s) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var u = kr(s);
        if (We[u])
          return;
        We[u] = !0;
        var c = "";
        r && r._owner && r._owner !== le.current && (c = " It was passed a child from " + A(r._owner.type) + "."), $(r), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, c), $(null);
      }
    }
    function ze(r, s) {
      {
        if (typeof r != "object")
          return;
        if (ue(r))
          for (var u = 0; u < r.length; u++) {
            var c = r[u];
            fe(c) && Ge(c, s);
          }
        else if (fe(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var b = V(r);
          if (typeof b == "function" && b !== r.entries)
            for (var F = b.call(r), g; !(g = F.next()).done; )
              fe(g.value) && Ge(g.value, s);
        }
      }
    }
    function Ar(r) {
      {
        var s = r.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === v))
          u = s.propTypes;
        else
          return;
        if (u) {
          var c = A(s);
          vr(u, r.props, "prop", c, r);
        } else if (s.PropTypes !== void 0 && !de) {
          de = !0;
          var b = A(s);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(r) {
      {
        for (var s = Object.keys(r.props), u = 0; u < s.length; u++) {
          var c = s[u];
          if (c !== "children" && c !== "key") {
            $(r), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), $(null);
            break;
          }
        }
        r.ref !== null && ($(r), C("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ne = {};
    function Ue(r, s, u, c, b, F) {
      {
        var g = fr(r);
        if (!g) {
          var h = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = Tr();
          E ? h += E : h += Ye();
          var S;
          r === null ? S = "null" : ue(r) ? S = "array" : r !== void 0 && r.$$typeof === e ? (S = "<" + (A(r.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : S = typeof r, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, h);
        }
        var w = Rr(r, s, u, b, F);
        if (w == null)
          return w;
        if (g) {
          var R = s.children;
          if (R !== void 0)
            if (c)
              if (ue(R)) {
                for (var L = 0; L < R.length; L++)
                  ze(R[L], r);
                Object.freeze && Object.freeze(R);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(R, r);
        }
        if (G.call(s, "key")) {
          var I = A(r), B = Object.keys(s).filter(function(Lr) {
            return Lr !== "key";
          }), ce = B.length > 0 ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[I + ce]) {
            var $r = B.length > 0 ? "{" + B.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, I, $r, I), Ne[I + ce] = !0;
          }
        }
        return r === o ? _r(w) : Ar(w), w;
      }
    }
    function Or(r, s, u) {
      return Ue(r, s, u, !0);
    }
    function jr(r, s, u) {
      return Ue(r, s, u, !1);
    }
    var Ir = jr, Mr = Or;
    N.Fragment = o, N.jsx = Ir, N.jsxs = Mr;
  }()), N;
}
process.env.NODE_ENV === "production" ? Fe.exports = nt() : Fe.exports = ot();
var re = Fe.exports;
const st = Hr`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, ft = ({ brandOption: a, mode: e, children: n }) => {
  const o = Se(e, a), i = Wr(), t = rt(), l = at(), f = tt(), d = et(a, e), m = { constants: {
    ...i,
    ...t,
    ...l,
    ...f
  }, mode: e, brand: a, vars: d, palettes: o };
  return /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
    /* @__PURE__ */ re.jsx(st, {}),
    /* @__PURE__ */ re.jsx(Yr, { theme: m, children: n })
  ] });
};
export {
  ft as SaguaroThemeProvider,
  lt as getPrimaryPreviewColor,
  dt as getSecondaryPreviewColor,
  la as isPalette,
  Wr as useBorderTokens,
  et as useColorTokens,
  rt as useFontTokens,
  at as useHeightTokens,
  Se as usePaletteBoard,
  tt as useSpacingTokens
};
