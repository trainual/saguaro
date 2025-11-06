import Ve from "react";
import { createGlobalStyle as Hr, ThemeProvider as Yr } from "styled-components";
const Wr = () => ({
  borderRadiusXs: "1px",
  borderRadiusSm: "2px",
  borderRadiusMd: "4px",
  borderRadiusLg: "8px",
  borderRadiusXl: "12px",
  borderRadius2Xl: "16px",
  borderRadiusCircle: "50%",
  borderRadiusEndcap: "100px",
  borderWidthXs: "0.5px",
  borderWidthSm: "1px",
  borderWidthMd: "1.5px",
  borderWidthLg: "2px",
  borderWidthXl: "3px",
  borderWidth2xl: "4px"
}), he = { r: 0.2126, g: 0.7152, b: 0.0722 }, Gr = 255, zr = (a) => {
  const e = a.length === 4 ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a, [t, o, s] = [1, 3, 5].map((n) => parseInt(e.slice(n, n + 2), 16));
  return { r: t, g: o, b: s };
}, er = (a, e, t) => {
  const { r: o, g: s, b: n } = zr(a);
  return (o * he.r + s * he.g + n * he.b) / Gr > 0.62 ? e : t;
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
}, Jr = {
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
}, Kr = {
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
}, Zr = {
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
}, Qr = {
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
}, rr = {
  blue: Nr,
  green: Ur,
  magenta: qr,
  neutral: Xr,
  orange: Jr,
  purple: Kr,
  red: Zr,
  yellow: Qr
}, Vr = {
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
}, ia = {
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
}, sa = {
  blue: Vr,
  green: ea,
  magenta: ra,
  neutral: aa,
  orange: ta,
  purple: na,
  red: oa,
  yellow: ia
};
function ua(a) {
  if (!a.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function la(a) {
  return Object.keys(rr).includes(a);
}
function lt(a, e) {
  return e["preview" + ar(a) + "Primary"];
}
function ft(a, e) {
  return e["preview" + ar(a) + "Secondary"];
}
const ar = (a) => a.charAt(0).toUpperCase() + a.slice(1);
function P() {
  return P = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (a[o] = t[o]);
    }
    return a;
  }, P.apply(this, arguments);
}
function fa(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function q(a, e) {
  return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, q(a, e);
}
function da(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, q(a, e);
}
function ye(a) {
  return ye = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ye(a);
}
function ca(a) {
  return Function.toString.call(a).indexOf("[native code]") !== -1;
}
function pa() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function te(a, e, t) {
  return pa() ? te = Reflect.construct.bind() : te = function(s, n, l) {
    var d = [null];
    d.push.apply(d, n);
    var f = Function.bind.apply(s, d), p = new f();
    return l && q(p, l.prototype), p;
  }, te.apply(null, arguments);
}
function Fe(a) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Fe = function(o) {
    if (o === null || !ca(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(o)) return e.get(o);
      e.set(o, s);
    }
    function s() {
      return te(o, arguments, ye(this).constructor);
    }
    return s.prototype = Object.create(o.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), q(s, o);
  }, Fe(a);
}
var ga = {
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
function ha() {
  for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++)
    e[t] = arguments[t];
  var o = e[0], s = [], n;
  for (n = 1; n < e.length; n += 1)
    s.push(e[n]);
  return s.forEach(function(l) {
    o = o.replace(/%[a-z]/, l);
  }), o;
}
var k = /* @__PURE__ */ function(a) {
  da(e, a);
  function e(t) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = a.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
    else {
      for (var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
        n[l - 1] = arguments[l];
      o = a.call(this, ha.apply(void 0, [ga[t]].concat(n))) || this;
    }
    return fa(o);
  }
  return e;
}(/* @__PURE__ */ Fe(Error));
function me(a) {
  return Math.round(a * 255);
}
function ma(a, e, t) {
  return me(a) + "," + me(e) + "," + me(t);
}
function X(a, e, t, o) {
  if (o === void 0 && (o = ma), e === 0)
    return o(t, t, t);
  var s = (a % 360 + 360) % 360 / 60, n = (1 - Math.abs(2 * t - 1)) * e, l = n * (1 - Math.abs(s % 2 - 1)), d = 0, f = 0, p = 0;
  s >= 0 && s < 1 ? (d = n, f = l) : s >= 1 && s < 2 ? (d = l, f = n) : s >= 2 && s < 3 ? (f = n, p = l) : s >= 3 && s < 4 ? (f = l, p = n) : s >= 4 && s < 5 ? (d = l, p = n) : s >= 5 && s < 6 && (d = n, p = l);
  var m = t - n / 2, v = d + m, y = f + m, x = p + m;
  return o(v, y, x);
}
var Ke = {
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
  return Ke[e] ? "#" + Ke[e] : a;
}
var va = /^#[a-fA-F0-9]{6}$/, ya = /^#[a-fA-F0-9]{8}$/, Fa = /^#[a-fA-F0-9]{3}$/, Sa = /^#[a-fA-F0-9]{4}$/, be = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, wa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Ea = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Ca = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Y(a) {
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
    var t = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: t
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
  var s = be.exec(e);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var n = wa.exec(e.substring(0, 50));
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10),
      alpha: parseFloat("" + n[4]) > 1 ? parseFloat("" + n[4]) / 100 : parseFloat("" + n[4])
    };
  var l = Ea.exec(e);
  if (l) {
    var d = parseInt("" + l[1], 10), f = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, m = "rgb(" + X(d, f, p) + ")", v = be.exec(m);
    if (!v)
      throw new k(4, e, m);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10)
    };
  }
  var y = Ca.exec(e.substring(0, 50));
  if (y) {
    var x = parseInt("" + y[1], 10), J = parseInt("" + y[2], 10) / 100, ie = parseInt("" + y[3], 10) / 100, K = "rgb(" + X(x, J, ie) + ")", T = be.exec(K);
    if (!T)
      throw new k(4, e, K);
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
  var e = a.red / 255, t = a.green / 255, o = a.blue / 255, s = Math.max(e, t, o), n = Math.min(e, t, o), l = (s + n) / 2;
  if (s === n)
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
  var d, f = s - n, p = l > 0.5 ? f / (2 - s - n) : f / (s + n);
  switch (s) {
    case e:
      d = (t - o) / f + (t < o ? 6 : 0);
      break;
    case t:
      d = (o - e) / f + 2;
      break;
    default:
      d = (e - t) / f + 4;
      break;
  }
  return d *= 60, a.alpha !== void 0 ? {
    hue: d,
    saturation: p,
    lightness: l,
    alpha: a.alpha
  } : {
    hue: d,
    saturation: p,
    lightness: l
  };
}
function _(a) {
  return xa(Y(a));
}
var Ba = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, Se = Ba;
function M(a) {
  var e = a.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function ve(a) {
  return M(Math.round(a * 255));
}
function Pa(a, e, t) {
  return Se("#" + ve(a) + ve(e) + ve(t));
}
function ne(a, e, t) {
  return X(a, e, t, Pa);
}
function Da(a, e, t) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number")
    return ne(a, e, t);
  if (typeof a == "object" && e === void 0 && t === void 0)
    return ne(a.hue, a.saturation, a.lightness);
  throw new k(1);
}
function Ra(a, e, t, o) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number" && typeof o == "number")
    return o >= 1 ? ne(a, e, t) : "rgba(" + X(a, e, t) + "," + o + ")";
  if (typeof a == "object" && e === void 0 && t === void 0 && o === void 0)
    return a.alpha >= 1 ? ne(a.hue, a.saturation, a.lightness) : "rgba(" + X(a.hue, a.saturation, a.lightness) + "," + a.alpha + ")";
  throw new k(2);
}
function we(a, e, t) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number")
    return Se("#" + M(a) + M(e) + M(t));
  if (typeof a == "object" && e === void 0 && t === void 0)
    return Se("#" + M(a.red) + M(a.green) + M(a.blue));
  throw new k(6);
}
function oe(a, e, t, o) {
  if (typeof a == "string" && typeof e == "number") {
    var s = Y(a);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + e + ")";
  } else {
    if (typeof a == "number" && typeof e == "number" && typeof t == "number" && typeof o == "number")
      return o >= 1 ? we(a, e, t) : "rgba(" + a + "," + e + "," + t + "," + o + ")";
    if (typeof a == "object" && e === void 0 && t === void 0 && o === void 0)
      return a.alpha >= 1 ? we(a.red, a.green, a.blue) : "rgba(" + a.red + "," + a.green + "," + a.blue + "," + a.alpha + ")";
  }
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
  if (ka(a)) return oe(a);
  if (Ta(a)) return we(a);
  if (_a(a)) return Ra(a);
  if (Aa(a)) return Da(a);
  throw new k(8);
}
function tr(a, e, t) {
  return function() {
    var s = t.concat(Array.prototype.slice.call(arguments));
    return s.length >= e ? a.apply(this, s) : tr(a, e, s);
  };
}
function D(a) {
  return tr(a, a.length, []);
}
function Oa(a, e) {
  if (e === "transparent") return e;
  var t = _(e);
  return O(P({}, t, {
    hue: t.hue + parseFloat(a)
  }));
}
D(Oa);
function W(a, e, t) {
  return Math.max(a, Math.min(e, t));
}
function ja(a, e) {
  if (e === "transparent") return e;
  var t = _(e);
  return O(P({}, t, {
    lightness: W(0, 1, t.lightness - parseFloat(a))
  }));
}
var Ia = D(ja), re = Ia;
function Ma(a, e) {
  if (e === "transparent") return e;
  var t = _(e);
  return O(P({}, t, {
    saturation: W(0, 1, t.saturation - parseFloat(a))
  }));
}
D(Ma);
function $a(a, e) {
  if (e === "transparent") return e;
  var t = _(e);
  return O(P({}, t, {
    lightness: W(0, 1, t.lightness + parseFloat(a))
  }));
}
var La = D($a), H = La;
function Ha(a, e, t) {
  if (e === "transparent") return t;
  if (t === "transparent") return e;
  if (a === 0) return t;
  var o = Y(e), s = P({}, o, {
    alpha: typeof o.alpha == "number" ? o.alpha : 1
  }), n = Y(t), l = P({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), d = s.alpha - l.alpha, f = parseFloat(a) * 2 - 1, p = f * d === -1 ? f : f + d, m = 1 + f * d, v = (p / m + 1) / 2, y = 1 - v, x = {
    red: Math.floor(s.red * v + l.red * y),
    green: Math.floor(s.green * v + l.green * y),
    blue: Math.floor(s.blue * v + l.blue * y),
    alpha: s.alpha * parseFloat(a) + l.alpha * (1 - parseFloat(a))
  };
  return oe(x);
}
var Ya = D(Ha), nr = Ya;
function Wa(a, e) {
  if (e === "transparent") return e;
  var t = Y(e), o = typeof t.alpha == "number" ? t.alpha : 1, s = P({}, t, {
    alpha: W(0, 1, (o * 100 + parseFloat(a) * 100) / 100)
  });
  return oe(s);
}
D(Wa);
function Ga(a, e) {
  if (e === "transparent") return e;
  var t = _(e);
  return O(P({}, t, {
    saturation: W(0, 1, t.saturation + parseFloat(a))
  }));
}
D(Ga);
function za(a, e) {
  return e === "transparent" ? e : O(P({}, _(e), {
    hue: parseFloat(a)
  }));
}
D(za);
function Na(a, e) {
  return e === "transparent" ? e : O(P({}, _(e), {
    lightness: parseFloat(a)
  }));
}
D(Na);
function Ua(a, e) {
  return e === "transparent" ? e : O(P({}, _(e), {
    saturation: parseFloat(a)
  }));
}
D(Ua);
function qa(a, e) {
  return e === "transparent" ? e : nr(parseFloat(a), "rgb(0, 0, 0)", e);
}
D(qa);
function Xa(a, e) {
  return e === "transparent" ? e : nr(parseFloat(a), "rgb(255, 255, 255)", e);
}
D(Xa);
function Ja(a, e) {
  if (e === "transparent") return e;
  var t = Y(e), o = typeof t.alpha == "number" ? t.alpha : 1, s = P({}, t, {
    alpha: W(0, 1, +(o * 100 - parseFloat(a) * 100).toFixed(2) / 100)
  });
  return oe(s);
}
D(Ja);
function Ka(a) {
  return {
    "00": H(0.42, a),
    "05": H(0.38, a),
    10: H(0.32, a),
    20: H(0.25, a),
    30: H(0.18, a),
    40: H(0.1, a),
    50: a,
    60: re(0.07, a),
    70: re(0.14, a),
    80: re(0.2, a),
    90: re(0.25, a)
  };
}
const Za = (a, e) => la(e) ? {
  brand: a[e],
  isCustomHex: !1
} : (ua(e), {
  brand: Ka(e),
  isCustomHex: !0
}), Ce = (a, e) => {
  const t = a === "light" ? rr : sa, { brand: o, isCustomHex: s } = Za(t, e);
  return {
    ...t,
    brand: a === "dark" && s ? t.purple : o
  };
}, Qa = (a) => {
  const {
    brand: e,
    blue: t,
    green: o,
    magenta: s,
    neutral: n,
    orange: l,
    purple: d,
    red: f,
    yellow: p
  } = Ce("dark", a), m = e[50], v = n[80], y = n["00"], x = er(m, v, y);
  return {
    // Foundation
    foundationHover: n[10],
    foundationBase1: n["05"],
    foundationBase2: n[10],
    foundationBase3: n[15],
    foundationBase4: n[30],
    foundationSurface1: n["00"],
    foundationSurface2: n[90],
    // Border
    borderSurface1: n[10],
    borderSurface2: n[15],
    borderDefault: n[25],
    borderHover: n[60],
    borderDisabled: n[25],
    // Text
    textDefault: v,
    textSubdued: n[50],
    textPlaceholder: n[40],
    textSurface: y,
    textHover: n[90],
    textDisabled: n[30],
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
    stateInfo: t[40],
    stateError: f[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: p[50],
    stateBadgeTrainual: d["05"],
    stateBadgeInfo: t["05"],
    stateBadgeError: f["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: n[15],
    stateBackgroundInfo: t["00"],
    stateBackgroundError: f["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: t[60],
    stateHoverError: f[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: t[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: l[60],
    chartRed1: f["00"],
    chartRed2: f["05"],
    chartRed3: f[50],
    // Brand
    trainualBrandPurpleSurfaceLight: d["00"],
    trainualBrandPurpleSurface: d[10],
    trainualBrandPurpleSubdued: d[40],
    trainualBrandPurpleMedium: d[50],
    trainualBrandPurpleStrong: d[90],
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
    trainualBrandMagentaSurfaceLight: s["00"],
    trainualBrandMagentaSurface: s[10],
    trainualBrandMagentaSubdued: s[20],
    trainualBrandMagentaMedium: s[40],
    trainualBrandMagentaStrong: s[90],
    trainualBrandBlueSurfaceLight: t["00"],
    trainualBrandBlueSurface: t[10],
    trainualBrandBlueSubdued: t[30],
    trainualBrandBlueMedium: t[40],
    trainualBrandBlueStrong: t[90],
    // The representative for each palette.
    //  Used in places like the palette picker.
    previewBluePrimary: t[50],
    previewBlueSecondary: t["05"],
    previewGreenPrimary: o[50],
    previewGreenSecondary: o["05"],
    previewMagentaPrimary: s[50],
    previewMagentaSecondary: s["05"],
    previewNeutralPrimary: n[50],
    previewNeutralSecondary: n["05"],
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: d[50],
    previewPurpleSecondary: d["05"],
    previewRedPrimary: f[50],
    previewRedSecondary: f["05"],
    previewYellowPrimary: p[50],
    previewYellowSecondary: p["05"],
    // Drop Shadows
    shadowBackground1: "rgba(255, 255, 255, 0.1)",
    shadowBackground2: "rgba(255, 255, 255, 0.2)",
    shadowBackground3: "rgba(255, 255, 255, 0.3)",
    shadowColorTopXsmall: n.transparent3,
    shadowColorTopSmall: n.transparent1,
    shadowColorTopMedium: n.transparent1,
    shadowColorTopLarge: n.transparent1,
    shadowColorCenterSmall: n.transparent1,
    shadowColorCenterMedium: n.transparent1,
    shadowColorCenterLarge: n.transparent1,
    shadowColorSpecialWysiwyg: n.transparent3,
    shadowColorSpecialDataTable: n.transparent3,
    shadowTopXsmall: `0 1px 3px ${n.transparent3}`,
    shadowTopSmall: `0 5px 10px ${n.transparent1}`,
    shadowTopMedium: `0 5px 15px ${n.transparent1}`,
    shadowTopLarge: `0 5px 40px ${n.transparent1}`,
    shadowCenterSmall: `0 0 10px ${n.transparent1}`,
    shadowCenterMedium: `0 0 15px ${n.transparent1}`,
    shadowCenterLarge: `0 0 40px ${n.transparent1}`,
    shadowSpecialWysiwyg: `0 2px 4px ${n.transparent3}`,
    shadowSpecialDataTable: `0 5px 10px ${n.transparent3}`,
    // A11y
    focusOutlineColor: "#99C8FF",
    // Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, Va = (a) => {
  const {
    brand: e,
    blue: t,
    green: o,
    magenta: s,
    neutral: n,
    orange: l,
    purple: d,
    red: f,
    yellow: p
  } = Ce("light", a), m = e[50], v = n[80], y = n["00"], x = er(m, v, y);
  return {
    // Foundation
    foundationHover: n[10],
    foundationBase1: n["05"],
    foundationBase2: n[10],
    foundationBase3: n[15],
    foundationBase4: n[30],
    foundationSurface1: n["00"],
    foundationSurface2: n[90],
    // Border
    borderSurface1: n[10],
    borderSurface2: n[15],
    borderDefault: n[25],
    borderHover: n[60],
    borderDisabled: n[25],
    // Text
    textDefault: v,
    textSubdued: n[50],
    textPlaceholder: n[40],
    textSurface: y,
    textHover: n[90],
    textDisabled: n[30],
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
    stateInfo: t[40],
    stateError: f[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: p[50],
    stateBadgeTrainual: d["05"],
    stateBadgeInfo: t["05"],
    stateBadgeError: f["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: n[15],
    stateBackgroundInfo: t["00"],
    stateBackgroundError: f["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: t[60],
    stateHoverError: f[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: t[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: l[60],
    chartRed1: f["00"],
    chartRed2: f["05"],
    chartRed3: f[50],
    // Brand
    trainualBrandPurpleSurfaceLight: d["00"],
    trainualBrandPurpleSurface: d[10],
    trainualBrandPurpleSubdued: d[40],
    trainualBrandPurpleMedium: d[50],
    trainualBrandPurpleStrong: d[90],
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
    trainualBrandMagentaSurfaceLight: s["00"],
    trainualBrandMagentaSurface: s[10],
    trainualBrandMagentaSubdued: s[20],
    trainualBrandMagentaMedium: s[40],
    trainualBrandMagentaStrong: s[90],
    trainualBrandBlueSurfaceLight: t["00"],
    trainualBrandBlueSurface: t[10],
    trainualBrandBlueSubdued: t[30],
    trainualBrandBlueMedium: t[40],
    trainualBrandBlueStrong: t[90],
    // The representative for each palette.
    //  Used in places like the palette picker.
    previewBluePrimary: t[50],
    previewBlueSecondary: t["05"],
    previewGreenPrimary: o[50],
    previewGreenSecondary: o["05"],
    previewMagentaPrimary: s[50],
    previewMagentaSecondary: s["05"],
    previewNeutralPrimary: n[50],
    previewNeutralSecondary: n["05"],
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: d[50],
    previewPurpleSecondary: d["05"],
    previewRedPrimary: f[50],
    previewRedSecondary: f["05"],
    previewYellowPrimary: p[50],
    previewYellowSecondary: p["05"],
    // Drop Shadows
    shadowBackground1: "rgba(0, 0, 0, 0.1)",
    shadowBackground2: "rgba(0, 0, 0, 0.2)",
    shadowBackground3: "rgba(0, 0, 0, 0.3)",
    shadowColorTopXsmall: n.transparent3,
    shadowColorTopSmall: n.transparent1,
    shadowColorTopMedium: n.transparent2,
    shadowColorTopLarge: n.transparent2,
    shadowColorCenterSmall: n.transparent1,
    shadowColorCenterMedium: n.transparent2,
    shadowColorCenterLarge: n.transparent2,
    shadowColorSpecialWysiwyg: n.transparent3,
    shadowColorSpecialDataTable: n.transparent3,
    shadowTopXsmall: `0 1px 3px ${n.transparent3}`,
    shadowTopSmall: `0 5px 10px ${n.transparent1}`,
    shadowTopMedium: `0 5px 15px ${n.transparent2}`,
    shadowTopLarge: `0 5px 40px ${n.transparent2}`,
    shadowCenterSmall: `0 0 10px ${n.transparent1}`,
    shadowCenterMedium: `0 0 15px ${n.transparent2}`,
    shadowCenterLarge: `0 0 40px ${n.transparent2}`,
    shadowSpecialWysiwyg: `0 2px 4px ${n.transparent3}`,
    shadowSpecialDataTable: `0 5px 10px ${n.transparent3}`,
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
  const t = Va(a), o = Qa(a);
  return e == "light" ? t : o;
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
var Ee = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function nt() {
  if (Ze) return N;
  Ze = 1;
  var a = Ve, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, f, p) {
    var m, v = {}, y = null, x = null;
    p !== void 0 && (y = "" + p), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (m in f) o.call(f, m) && !n.hasOwnProperty(m) && (v[m] = f[m]);
    if (d && d.defaultProps) for (m in f = d.defaultProps, f) v[m] === void 0 && (v[m] = f[m]);
    return { $$typeof: e, type: d, key: y, ref: x, props: v, _owner: s.current };
  }
  return N.Fragment = t, N.jsx = l, N.jsxs = l, N;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function ot() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ve, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), J = Symbol.iterator, ie = "@@iterator";
    function K(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = J && r[J] || r[ie];
      return typeof i == "function" ? i : null;
    }
    var T = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          u[c - 1] = arguments[c];
        or("error", r, u);
      }
    }
    function or(r, i, u) {
      {
        var c = T.ReactDebugCurrentFrame, b = c.getStackAddendum();
        b !== "" && (i += "%s", u = u.concat([b]));
        var F = u.map(function(h) {
          return String(h);
        });
        F.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, F);
      }
    }
    var ir = !1, sr = !1, ur = !1, lr = !1, fr = !1, xe;
    xe = Symbol.for("react.module.reference");
    function dr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === n || fr || r === s || r === p || r === m || lr || r === x || ir || sr || ur || typeof r == "object" && r !== null && (r.$$typeof === y || r.$$typeof === v || r.$$typeof === l || r.$$typeof === d || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === xe || r.getModuleId !== void 0));
    }
    function cr(r, i, u) {
      var c = r.displayName;
      if (c)
        return c;
      var b = i.displayName || i.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function Be(r) {
      return r.displayName || "Context";
    }
    function A(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case n:
          return "Profiler";
        case s:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            var i = r;
            return Be(i) + ".Consumer";
          case l:
            var u = r;
            return Be(u._context) + ".Provider";
          case f:
            return cr(r, r.render, "ForwardRef");
          case v:
            var c = r.displayName || null;
            return c !== null ? c : A(r.type) || "Memo";
          case y: {
            var b = r, F = b._payload, h = b._init;
            try {
              return A(h(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, G = 0, Pe, De, Re, Te, ke, Ae, _e;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function pr() {
      {
        if (G === 0) {
          Pe = console.log, De = console.info, Re = console.warn, Te = console.error, ke = console.group, Ae = console.groupCollapsed, _e = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
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
        G++;
      }
    }
    function gr() {
      {
        if (G--, G === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: Pe
            }),
            info: j({}, r, {
              value: De
            }),
            warn: j({}, r, {
              value: Re
            }),
            error: j({}, r, {
              value: Te
            }),
            group: j({}, r, {
              value: ke
            }),
            groupCollapsed: j({}, r, {
              value: Ae
            }),
            groupEnd: j({}, r, {
              value: _e
            })
          });
        }
        G < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = T.ReactCurrentDispatcher, ue;
    function Z(r, i, u) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (b) {
            var c = b.stack.trim().match(/\n( *(at )?)/);
            ue = c && c[1] || "";
          }
        return `
` + ue + r;
      }
    }
    var le = !1, Q;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new hr();
    }
    function je(r, i) {
      if (!r || le)
        return "";
      {
        var u = Q.get(r);
        if (u !== void 0)
          return u;
      }
      var c;
      le = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = se.current, se.current = null, pr();
      try {
        if (i) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (B) {
              c = B;
            }
            Reflect.construct(r, [], h);
          } else {
            try {
              h.call();
            } catch (B) {
              c = B;
            }
            r.call(h.prototype);
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
          for (var g = B.stack.split(`
`), C = c.stack.split(`
`), S = g.length - 1, w = C.length - 1; S >= 1 && w >= 0 && g[S] !== C[w]; )
            w--;
          for (; S >= 1 && w >= 0; S--, w--)
            if (g[S] !== C[w]) {
              if (S !== 1 || w !== 1)
                do
                  if (S--, w--, w < 0 || g[S] !== C[w]) {
                    var R = `
` + g[S].replace(" at new ", " at ");
                    return r.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", r.displayName)), typeof r == "function" && Q.set(r, R), R;
                  }
                while (S >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        le = !1, se.current = F, gr(), Error.prepareStackTrace = b;
      }
      var L = r ? r.displayName || r.name : "", I = L ? Z(L) : "";
      return typeof r == "function" && Q.set(r, I), I;
    }
    function mr(r, i, u) {
      return je(r, !1);
    }
    function br(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function V(r, i, u) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return je(r, br(r));
      if (typeof r == "string")
        return Z(r);
      switch (r) {
        case p:
          return Z("Suspense");
        case m:
          return Z("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return mr(r.render);
          case v:
            return V(r.type, i, u);
          case y: {
            var c = r, b = c._payload, F = c._init;
            try {
              return V(F(b), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, Ie = {}, Me = T.ReactDebugCurrentFrame;
    function ee(r) {
      if (r) {
        var i = r._owner, u = V(r.type, r._source, i ? i.type : null);
        Me.setExtraStackFrame(u);
      } else
        Me.setExtraStackFrame(null);
    }
    function vr(r, i, u, c, b) {
      {
        var F = Function.call.bind(z);
        for (var h in r)
          if (F(r, h)) {
            var g = void 0;
            try {
              if (typeof r[h] != "function") {
                var C = Error((c || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              g = r[h](i, h, c, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              g = S;
            }
            g && !(g instanceof Error) && (ee(b), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", u, h, typeof g), ee(null)), g instanceof Error && !(g.message in Ie) && (Ie[g.message] = !0, ee(b), E("Failed %s type: %s", u, g.message), ee(null));
          }
      }
    }
    var yr = Array.isArray;
    function fe(r) {
      return yr(r);
    }
    function Fr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u;
      }
    }
    function Sr(r) {
      try {
        return $e(r), !1;
      } catch {
        return !0;
      }
    }
    function $e(r) {
      return "" + r;
    }
    function Le(r) {
      if (Sr(r))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Fr(r)), $e(r);
    }
    var He = T.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, We;
    function Er(r) {
      if (z.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Cr(r) {
      if (z.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function xr(r, i) {
      typeof r.ref == "string" && He.current;
    }
    function Br(r, i) {
      {
        var u = function() {
          Ye || (Ye = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Pr(r, i) {
      {
        var u = function() {
          We || (We = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Dr = function(r, i, u, c, b, F, h) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: u,
        props: h,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Rr(r, i, u, c, b) {
      {
        var F, h = {}, g = null, C = null;
        u !== void 0 && (Le(u), g = "" + u), Cr(i) && (Le(i.key), g = "" + i.key), Er(i) && (C = i.ref, xr(i, b));
        for (F in i)
          z.call(i, F) && !wr.hasOwnProperty(F) && (h[F] = i[F]);
        if (r && r.defaultProps) {
          var S = r.defaultProps;
          for (F in S)
            h[F] === void 0 && (h[F] = S[F]);
        }
        if (g || C) {
          var w = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          g && Br(h, w), C && Pr(h, w);
        }
        return Dr(r, g, C, b, c, He.current, h);
      }
    }
    var de = T.ReactCurrentOwner, Ge = T.ReactDebugCurrentFrame;
    function $(r) {
      if (r) {
        var i = r._owner, u = V(r.type, r._source, i ? i.type : null);
        Ge.setExtraStackFrame(u);
      } else
        Ge.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function pe(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function ze() {
      {
        if (de.current) {
          var r = A(de.current.type);
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
    var Ne = {};
    function kr(r) {
      {
        var i = ze();
        if (!i) {
          var u = typeof r == "string" ? r : r.displayName || r.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Ue(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var u = kr(i);
        if (Ne[u])
          return;
        Ne[u] = !0;
        var c = "";
        r && r._owner && r._owner !== de.current && (c = " It was passed a child from " + A(r._owner.type) + "."), $(r), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, c), $(null);
      }
    }
    function qe(r, i) {
      {
        if (typeof r != "object")
          return;
        if (fe(r))
          for (var u = 0; u < r.length; u++) {
            var c = r[u];
            pe(c) && Ue(c, i);
          }
        else if (pe(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var b = K(r);
          if (typeof b == "function" && b !== r.entries)
            for (var F = b.call(r), h; !(h = F.next()).done; )
              pe(h.value) && Ue(h.value, i);
        }
      }
    }
    function Ar(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === v))
          u = i.propTypes;
        else
          return;
        if (u) {
          var c = A(i);
          vr(u, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !ce) {
          ce = !0;
          var b = A(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(r) {
      {
        for (var i = Object.keys(r.props), u = 0; u < i.length; u++) {
          var c = i[u];
          if (c !== "children" && c !== "key") {
            $(r), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), $(null);
            break;
          }
        }
        r.ref !== null && ($(r), E("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Xe = {};
    function Je(r, i, u, c, b, F) {
      {
        var h = dr(r);
        if (!h) {
          var g = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = Tr();
          C ? g += C : g += ze();
          var S;
          r === null ? S = "null" : fe(r) ? S = "array" : r !== void 0 && r.$$typeof === e ? (S = "<" + (A(r.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : S = typeof r, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, g);
        }
        var w = Rr(r, i, u, b, F);
        if (w == null)
          return w;
        if (h) {
          var R = i.children;
          if (R !== void 0)
            if (c)
              if (fe(R)) {
                for (var L = 0; L < R.length; L++)
                  qe(R[L], r);
                Object.freeze && Object.freeze(R);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(R, r);
        }
        if (z.call(i, "key")) {
          var I = A(r), B = Object.keys(i).filter(function(Lr) {
            return Lr !== "key";
          }), ge = B.length > 0 ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[I + ge]) {
            var $r = B.length > 0 ? "{" + B.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, I, $r, I), Xe[I + ge] = !0;
          }
        }
        return r === o ? _r(w) : Ar(w), w;
      }
    }
    function Or(r, i, u) {
      return Je(r, i, u, !0);
    }
    function jr(r, i, u) {
      return Je(r, i, u, !1);
    }
    var Ir = jr, Mr = Or;
    U.Fragment = o, U.jsx = Ir, U.jsxs = Mr;
  }()), U;
}
process.env.NODE_ENV === "production" ? Ee.exports = nt() : Ee.exports = ot();
var ae = Ee.exports;
const it = Hr`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, dt = ({ brandOption: a, mode: e, children: t }) => {
  const o = Ce(e, a), s = Wr(), n = rt(), l = at(), d = tt(), f = et(a, e), m = { constants: {
    ...s,
    ...n,
    ...l,
    ...d
  }, mode: e, brand: a, vars: f, palettes: o };
  return /* @__PURE__ */ ae.jsxs(ae.Fragment, { children: [
    /* @__PURE__ */ ae.jsx(it, {}),
    /* @__PURE__ */ ae.jsx(Yr, { theme: m, children: t })
  ] });
};
export {
  dt as SaguaroThemeProvider,
  lt as getPrimaryPreviewColor,
  ft as getSecondaryPreviewColor,
  la as isPalette,
  Wr as useBorderTokens,
  et as useColorTokens,
  rt as useFontTokens,
  at as useHeightTokens,
  Ce as usePaletteBoard,
  tt as useSpacingTokens
};
