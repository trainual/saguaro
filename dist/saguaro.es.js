import qe from "react";
import { createGlobalStyle as Tr, ThemeProvider as _r } from "styled-components";
const Br = () => ({
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
}), Or = {
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
}, kr = {
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
}, Ar = {
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
}, jr = {
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
}, Ir = {
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
}, $r = {
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
}, Hr = {
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
}, Mr = {
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
}, Ge = {
  blue: Or,
  green: kr,
  magenta: Ar,
  neutral: jr,
  orange: Ir,
  purple: $r,
  red: Hr,
  yellow: Mr
}, Lr = {
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
}, Wr = {
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
}, Yr = {
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
}, zr = {
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
}, Nr = {
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
}, Ur = {
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
}, qr = {
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
}, Gr = {
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
}, Xr = {
  blue: Lr,
  green: Wr,
  magenta: Yr,
  neutral: zr,
  orange: Nr,
  purple: Ur,
  red: qr,
  yellow: Gr
};
function Jr(t) {
  if (!t.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function Kr(t) {
  return Object.keys(Ge).includes(t);
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, Q.apply(this, arguments);
}
function Zr(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Y(t, r) {
  return Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, u) {
    return s.__proto__ = u, s;
  }, Y(t, r);
}
function Qr(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, Y(t, r);
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pe(t);
}
function Vr(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function et() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Z(t, r, n) {
  return et() ? Z = Reflect.construct.bind() : Z = function(u, a, f) {
    var c = [null];
    c.push.apply(c, a);
    var l = Function.bind.apply(u, c), p = new l();
    return f && Y(p, f.prototype), p;
  }, Z.apply(null, arguments);
}
function he(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return he = function(s) {
    if (s === null || !Vr(s))
      return s;
    if (typeof s != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(s))
        return r.get(s);
      r.set(s, u);
    }
    function u() {
      return Z(s, arguments, pe(this).constructor);
    }
    return u.prototype = Object.create(s.prototype, {
      constructor: {
        value: u,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Y(u, s);
  }, he(t);
}
var rt = {
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
function tt() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var s = r[0], u = [], a;
  for (a = 1; a < r.length; a += 1)
    u.push(r[a]);
  return u.forEach(function(f) {
    s = s.replace(/%[a-z]/, f);
  }), s;
}
var P = /* @__PURE__ */ function(t) {
  Qr(r, t);
  function r(n) {
    var s;
    if (process.env.NODE_ENV === "production")
      s = t.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
        a[f - 1] = arguments[f];
      s = t.call(this, tt.apply(void 0, [rt[n]].concat(a))) || this;
    }
    return Zr(s);
  }
  return r;
}(/* @__PURE__ */ he(Error));
function ue(t) {
  return Math.round(t * 255);
}
function at(t, r, n) {
  return ue(t) + "," + ue(r) + "," + ue(n);
}
function z(t, r, n, s) {
  if (s === void 0 && (s = at), r === 0)
    return s(n, n, n);
  var u = (t % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * r, f = a * (1 - Math.abs(u % 2 - 1)), c = 0, l = 0, p = 0;
  u >= 0 && u < 1 ? (c = a, l = f) : u >= 1 && u < 2 ? (c = f, l = a) : u >= 2 && u < 3 ? (l = a, p = f) : u >= 3 && u < 4 ? (l = f, p = a) : u >= 4 && u < 5 ? (c = f, p = a) : u >= 5 && u < 6 && (c = a, p = f);
  var m = n - a / 2, F = c + m, y = l + m, S = p + m;
  return s(F, y, S);
}
var Ye = {
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
function nt(t) {
  if (typeof t != "string")
    return t;
  var r = t.toLowerCase();
  return Ye[r] ? "#" + Ye[r] : t;
}
var ot = /^#[a-fA-F0-9]{6}$/, st = /^#[a-fA-F0-9]{8}$/, it = /^#[a-fA-F0-9]{3}$/, ut = /^#[a-fA-F0-9]{4}$/, fe = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ft = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, lt = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ct = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Xe(t) {
  if (typeof t != "string")
    throw new P(3);
  var r = nt(t);
  if (r.match(ot))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(st)) {
    var n = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: n
    };
  }
  if (r.match(it))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(ut)) {
    var s = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: s
    };
  }
  var u = fe.exec(r);
  if (u)
    return {
      red: parseInt("" + u[1], 10),
      green: parseInt("" + u[2], 10),
      blue: parseInt("" + u[3], 10)
    };
  var a = ft.exec(r.substring(0, 50));
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10),
      alpha: parseFloat("" + a[4]) > 1 ? parseFloat("" + a[4]) / 100 : parseFloat("" + a[4])
    };
  var f = lt.exec(r);
  if (f) {
    var c = parseInt("" + f[1], 10), l = parseInt("" + f[2], 10) / 100, p = parseInt("" + f[3], 10) / 100, m = "rgb(" + z(c, l, p) + ")", F = fe.exec(m);
    if (!F)
      throw new P(4, r, m);
    return {
      red: parseInt("" + F[1], 10),
      green: parseInt("" + F[2], 10),
      blue: parseInt("" + F[3], 10)
    };
  }
  var y = ct.exec(r.substring(0, 50));
  if (y) {
    var S = parseInt("" + y[1], 10), k = parseInt("" + y[2], 10) / 100, N = parseInt("" + y[3], 10) / 100, M = "rgb(" + z(S, k, N) + ")", B = fe.exec(M);
    if (!B)
      throw new P(4, r, M);
    return {
      red: parseInt("" + B[1], 10),
      green: parseInt("" + B[2], 10),
      blue: parseInt("" + B[3], 10),
      alpha: parseFloat("" + y[4]) > 1 ? parseFloat("" + y[4]) / 100 : parseFloat("" + y[4])
    };
  }
  throw new P(5);
}
function dt(t) {
  var r = t.red / 255, n = t.green / 255, s = t.blue / 255, u = Math.max(r, n, s), a = Math.min(r, n, s), f = (u + a) / 2;
  if (u === a)
    return t.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: f,
      alpha: t.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: f
    };
  var c, l = u - a, p = f > 0.5 ? l / (2 - u - a) : l / (u + a);
  switch (u) {
    case r:
      c = (n - s) / l + (n < s ? 6 : 0);
      break;
    case n:
      c = (s - r) / l + 2;
      break;
    default:
      c = (r - n) / l + 4;
      break;
  }
  return c *= 60, t.alpha !== void 0 ? {
    hue: c,
    saturation: p,
    lightness: f,
    alpha: t.alpha
  } : {
    hue: c,
    saturation: p,
    lightness: f
  };
}
function Je(t) {
  return dt(Xe(t));
}
var pt = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, ge = pt;
function O(t) {
  var r = t.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function le(t) {
  return O(Math.round(t * 255));
}
function ht(t, r, n) {
  return ge("#" + le(t) + le(r) + le(n));
}
function V(t, r, n) {
  return z(t, r, n, ht);
}
function gt(t, r, n) {
  if (typeof t == "number" && typeof r == "number" && typeof n == "number")
    return V(t, r, n);
  if (typeof t == "object" && r === void 0 && n === void 0)
    return V(t.hue, t.saturation, t.lightness);
  throw new P(1);
}
function mt(t, r, n, s) {
  if (typeof t == "number" && typeof r == "number" && typeof n == "number" && typeof s == "number")
    return s >= 1 ? V(t, r, n) : "rgba(" + z(t, r, n) + "," + s + ")";
  if (typeof t == "object" && r === void 0 && n === void 0 && s === void 0)
    return t.alpha >= 1 ? V(t.hue, t.saturation, t.lightness) : "rgba(" + z(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
  throw new P(2);
}
function me(t, r, n) {
  if (typeof t == "number" && typeof r == "number" && typeof n == "number")
    return ge("#" + O(t) + O(r) + O(n));
  if (typeof t == "object" && r === void 0 && n === void 0)
    return ge("#" + O(t.red) + O(t.green) + O(t.blue));
  throw new P(6);
}
function bt(t, r, n, s) {
  if (typeof t == "string" && typeof r == "number") {
    var u = Xe(t);
    return "rgba(" + u.red + "," + u.green + "," + u.blue + "," + r + ")";
  } else {
    if (typeof t == "number" && typeof r == "number" && typeof n == "number" && typeof s == "number")
      return s >= 1 ? me(t, r, n) : "rgba(" + t + "," + r + "," + n + "," + s + ")";
    if (typeof t == "object" && r === void 0 && n === void 0 && s === void 0)
      return t.alpha >= 1 ? me(t.red, t.green, t.blue) : "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")";
  }
  throw new P(7);
}
var vt = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, yt = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, Et = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Ft = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function Ke(t) {
  if (typeof t != "object")
    throw new P(8);
  if (yt(t))
    return bt(t);
  if (vt(t))
    return me(t);
  if (Ft(t))
    return mt(t);
  if (Et(t))
    return gt(t);
  throw new P(8);
}
function Ze(t, r, n) {
  return function() {
    var u = n.concat(Array.prototype.slice.call(arguments));
    return u.length >= r ? t.apply(this, u) : Ze(t, r, u);
  };
}
function Qe(t) {
  return Ze(t, t.length, []);
}
function Ve(t, r, n) {
  return Math.max(t, Math.min(r, n));
}
function xt(t, r) {
  if (r === "transparent")
    return r;
  var n = Je(r);
  return Ke(Q({}, n, {
    lightness: Ve(0, 1, n.lightness - parseFloat(t))
  }));
}
var Ct = /* @__PURE__ */ Qe(xt), J = Ct;
function wt(t, r) {
  if (r === "transparent")
    return r;
  var n = Je(r);
  return Ke(Q({}, n, {
    lightness: Ve(0, 1, n.lightness + parseFloat(t))
  }));
}
var Dt = /* @__PURE__ */ Qe(wt), $ = Dt;
function St(t) {
  return {
    "00": $(0.42, t),
    "05": $(0.38, t),
    10: $(0.32, t),
    20: $(0.25, t),
    30: $(0.18, t),
    40: $(0.1, t),
    50: t,
    60: J(0.07, t),
    70: J(0.14, t),
    80: J(0.2, t),
    90: J(0.25, t)
  };
}
const Rt = (t, r) => Kr(r) ? {
  brand: t[r],
  isCustomHex: !1
} : (Jr(r), {
  brand: St(r),
  isCustomHex: !0
}), er = (t, r) => {
  const n = t === "light" ? Ge : Xr, { brand: s, isCustomHex: u } = Rt(n, r);
  return {
    ...n,
    brand: t === "dark" && u ? n.purple : s
  };
}, Pt = (t) => {
  const {
    brand: r,
    blue: n,
    green: s,
    magenta: u,
    neutral: a,
    orange: f,
    purple: c,
    red: l,
    yellow: p
  } = er("dark", t);
  return {
    // Foundation
    foundationHover: a[10],
    foundationBase1: a["05"],
    foundationBase2: a[10],
    foundationBase3: a[15],
    foundationBase4: a[30],
    foundationSurface1: a["00"],
    foundationSurface2: a[90],
    // Border
    borderSurface1: a["05"],
    borderSurface2: a[10],
    borderDefault: a[50],
    borderHover: a[70],
    borderDisabled: a[30],
    // Text
    textDefault: a[80],
    textSubdued: a[50],
    textPlaceholder: a[40],
    textSurface: a["00"],
    textHover: a[90],
    textDisabled: a[30],
    // Accent
    accentPrimaryDefault: r[50],
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentPrimaryDisabled: r["00"],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    // State
    stateInfo: n[50],
    stateError: l[50],
    stateCaution: f[50],
    stateFavorite: p[50],
    stateSuccess: s[50],
    stateBadgeTrainual: c["00"],
    stateBadgeInfo: n["05"],
    stateBadgeError: l["05"],
    stateBadgeCaution: f["05"],
    stateBadgeSuccess: s["05"],
    stateBadgeGeneral: a["05"],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: l["00"],
    stateBackgroundCaution: f["00"],
    stateBackgroundSuccess: s["00"],
    stateHoverInfo: n[70],
    stateHoverError: l[70],
    stateHoverCaution: f[70],
    stateHoverSuccess: s[70],
    stateCompletionLow: f[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: s[30],
    stateCompletionFull: s[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: s["00"],
    chartGreen2: s[30],
    chartOrange1: f[60],
    chartRed1: l["00"],
    chartRed2: l["05"],
    chartRed3: l[50],
    // Brand
    trainualBrandGreen: s[40],
    trainualBrandYellow: p[10],
    trainualBrandMagenta: u[40],
    trainualBrandPurple: c[50],
    trainualBrandBlue: n[90],
    // The representative for each palette.
    //  Used in places like the palette picker.
    blueDefault: n[50],
    greenDefault: s[50],
    magentaDefault: u[50],
    neutralDefault: a[50],
    orangeDefault: f[50],
    purpleDefault: c[50],
    redDefault: l[50],
    yellowDefault: p[50],
    // Drop Shadows
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
    // A11y
    focusOutlineColor: "#99C8FF",
    // Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, Tt = (t) => {
  const {
    brand: r,
    blue: n,
    green: s,
    magenta: u,
    neutral: a,
    orange: f,
    purple: c,
    red: l,
    yellow: p
  } = er("light", t);
  return {
    // Foundation
    foundationHover: a[10],
    foundationBase1: a["05"],
    foundationBase2: a[10],
    foundationBase3: a[15],
    foundationBase4: a[30],
    foundationSurface1: a["00"],
    foundationSurface2: a[90],
    // Border
    borderSurface1: a["05"],
    borderSurface2: a[10],
    borderDefault: a[50],
    borderHover: a[70],
    borderDisabled: a[30],
    // Text
    textDefault: a[80],
    textSubdued: a[50],
    textPlaceholder: a[40],
    textSurface: a["00"],
    textHover: a[90],
    textDisabled: a[30],
    // Accent
    accentPrimaryDefault: r[50],
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentPrimaryDisabled: r["00"],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    // State
    stateInfo: n[50],
    stateError: l[50],
    stateCaution: f[50],
    stateSuccess: s[50],
    stateFavorite: p[50],
    stateBadgeTrainual: c["00"],
    stateBadgeInfo: n["05"],
    stateBadgeError: l["05"],
    stateBadgeCaution: f["05"],
    stateBadgeSuccess: s["05"],
    stateBadgeGeneral: a["05"],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: l["00"],
    stateBackgroundCaution: f["00"],
    stateBackgroundSuccess: s["00"],
    stateHoverInfo: n[70],
    stateHoverError: l[70],
    stateHoverCaution: f[70],
    stateHoverSuccess: s[70],
    stateCompletionLow: f[40],
    stateCompletionMedium: p[50],
    stateCompletionHigh: s[30],
    stateCompletionFull: s[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: s["00"],
    chartGreen2: s[30],
    chartOrange1: f[60],
    chartRed1: l["00"],
    chartRed2: l["05"],
    chartRed3: l[50],
    // Brand
    trainualBrandPurple: c[50],
    trainualBrandGreen: s[40],
    trainualBrandYellow: p[10],
    trainualBrandMagenta: u[40],
    trainualBrandBlue: n[90],
    // The representative for each palette.
    //  Used in places like the palette picker.
    blueDefault: n[50],
    greenDefault: s[50],
    magentaDefault: u[50],
    neutralDefault: a[50],
    orangeDefault: f[50],
    purpleDefault: c[50],
    redDefault: l[50],
    yellowDefault: p[50],
    // Drop Shadows
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
    // A11y
    focusOutlineColor: "#99C8FF",
    // Deprecated
    anIcecreamShopClosesEverytimeYouUseThisColor: "#FFF6DD",
    oneOffOchrePleaseDoNotUse: "#FFF1C6",
    youWillMakeMattCryIfYouUseThis: "#FFD24B",
    theOneOffPlanToggleThatShouldNotBeUsed: "#FDF393",
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, _t = (t, r) => {
  const n = Tt(t), s = Pt(t);
  return r == "light" ? n : s;
}, Bt = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Ot = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), kt = () => ({
  spacer2xs: "0.125rem",
  spacerXs: "0.25rem",
  spacerSm: "0.5rem",
  spacerMd: "1rem",
  spacerLg: "1.5rem",
  spacerXl: "2rem",
  spacer2xl: "2.5rem",
  spacer3xl: "3rem"
});
var be = { exports: {} }, H = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ce, ze;
function rr() {
  if (ze)
    return ce;
  ze = 1;
  var t = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function s(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var f = {}, c = 0; c < 10; c++)
        f["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(f).map(function(m) {
        return f[m];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        p[m] = m;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ce = u() ? Object.assign : function(a, f) {
    for (var c, l = s(a), p, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var F in c)
        r.call(c, F) && (l[F] = c[F]);
      if (t) {
        p = t(c);
        for (var y = 0; y < p.length; y++)
          n.call(c, p[y]) && (l[p[y]] = c[p[y]]);
      }
    }
    return l;
  }, ce;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function At() {
  if (Ne)
    return H;
  Ne = 1, rr();
  var t = qe, r = 60103;
  if (H.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    r = n("react.element"), H.Fragment = n("react.fragment");
  }
  var s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = Object.prototype.hasOwnProperty, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, l, p) {
    var m, F = {}, y = null, S = null;
    p !== void 0 && (y = "" + p), l.key !== void 0 && (y = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (m in l)
      u.call(l, m) && !a.hasOwnProperty(m) && (F[m] = l[m]);
    if (c && c.defaultProps)
      for (m in l = c.defaultProps, l)
        F[m] === void 0 && (F[m] = l[m]);
    return { $$typeof: r, type: c, key: y, ref: S, props: F, _owner: s.current };
  }
  return H.jsx = f, H.jsxs = f, H;
}
var de = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function jt() {
  return Ue || (Ue = 1, function(t) {
    process.env.NODE_ENV !== "production" && function() {
      var r = qe, n = rr(), s = 60103, u = 60106;
      t.Fragment = 60107;
      var a = 60108, f = 60114, c = 60109, l = 60110, p = 60112, m = 60113, F = 60120, y = 60115, S = 60116, k = 60121, N = 60122, M = 60117, B = 60129, ve = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var x = Symbol.for;
        s = x("react.element"), u = x("react.portal"), t.Fragment = x("react.fragment"), a = x("react.strict_mode"), f = x("react.profiler"), c = x("react.provider"), l = x("react.context"), p = x("react.forward_ref"), m = x("react.suspense"), F = x("react.suspense_list"), y = x("react.memo"), S = x("react.lazy"), k = x("react.block"), N = x("react.server.block"), M = x("react.fundamental"), x("react.scope"), x("react.opaque.id"), B = x("react.debug_trace_mode"), x("react.offscreen"), ve = x("react.legacy_hidden");
      }
      var ye = typeof Symbol == "function" && Symbol.iterator, tr = "@@iterator";
      function ar(e) {
        if (e === null || typeof e != "object")
          return null;
        var o = ye && e[ye] || e[tr];
        return typeof o == "function" ? o : null;
      }
      var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function D(e) {
        {
          for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
            i[d - 1] = arguments[d];
          nr("error", e, i);
        }
      }
      function nr(e, o, i) {
        {
          var d = A.ReactDebugCurrentFrame, b = d.getStackAddendum();
          b !== "" && (o += "%s", i = i.concat([b]));
          var v = i.map(function(g) {
            return "" + g;
          });
          v.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var or = !1;
      function sr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === t.Fragment || e === f || e === B || e === a || e === m || e === F || e === ve || or || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === y || e.$$typeof === c || e.$$typeof === l || e.$$typeof === p || e.$$typeof === M || e.$$typeof === k || e[0] === N));
      }
      function ir(e, o, i) {
        var d = o.displayName || o.name || "";
        return e.displayName || (d !== "" ? i + "(" + d + ")" : i);
      }
      function Ee(e) {
        return e.displayName || "Context";
      }
      function R(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && D("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case t.Fragment:
            return "Fragment";
          case u:
            return "Portal";
          case f:
            return "Profiler";
          case a:
            return "StrictMode";
          case m:
            return "Suspense";
          case F:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case l:
              var o = e;
              return Ee(o) + ".Consumer";
            case c:
              var i = e;
              return Ee(i._context) + ".Provider";
            case p:
              return ir(e, e.render, "ForwardRef");
            case y:
              return R(e.type);
            case k:
              return R(e._render);
            case S: {
              var d = e, b = d._payload, v = d._init;
              try {
                return R(v(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var L = 0, Fe, xe, Ce, we, De, Se, Re;
      function Pe() {
      }
      Pe.__reactDisabledLog = !0;
      function ur() {
        {
          if (L === 0) {
            Fe = console.log, xe = console.info, Ce = console.warn, we = console.error, De = console.group, Se = console.groupCollapsed, Re = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Pe,
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
          L++;
        }
      }
      function fr() {
        {
          if (L--, L === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, e, {
                value: Fe
              }),
              info: n({}, e, {
                value: xe
              }),
              warn: n({}, e, {
                value: Ce
              }),
              error: n({}, e, {
                value: we
              }),
              group: n({}, e, {
                value: De
              }),
              groupCollapsed: n({}, e, {
                value: Se
              }),
              groupEnd: n({}, e, {
                value: Re
              })
            });
          }
          L < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ee = A.ReactCurrentDispatcher, re;
      function U(e, o, i) {
        {
          if (re === void 0)
            try {
              throw Error();
            } catch (b) {
              var d = b.stack.trim().match(/\n( *(at )?)/);
              re = d && d[1] || "";
            }
          return `
` + re + e;
        }
      }
      var te = !1, q;
      {
        var lr = typeof WeakMap == "function" ? WeakMap : Map;
        q = new lr();
      }
      function Te(e, o) {
        if (!e || te)
          return "";
        {
          var i = q.get(e);
          if (i !== void 0)
            return i;
        }
        var d;
        te = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = ee.current, ee.current = null, ur();
        try {
          if (o) {
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
              } catch (_) {
                d = _;
              }
              Reflect.construct(e, [], g);
            } else {
              try {
                g.call();
              } catch (_) {
                d = _;
              }
              e.call(g.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_) {
              d = _;
            }
            e();
          }
        } catch (_) {
          if (_ && d && typeof _.stack == "string") {
            for (var h = _.stack.split(`
`), w = d.stack.split(`
`), E = h.length - 1, C = w.length - 1; E >= 1 && C >= 0 && h[E] !== w[C]; )
              C--;
            for (; E >= 1 && C >= 0; E--, C--)
              if (h[E] !== w[C]) {
                if (E !== 1 || C !== 1)
                  do
                    if (E--, C--, C < 0 || h[E] !== w[C]) {
                      var T = `
` + h[E].replace(" at new ", " at ");
                      return typeof e == "function" && q.set(e, T), T;
                    }
                  while (E >= 1 && C >= 0);
                break;
              }
          }
        } finally {
          te = !1, ee.current = v, fr(), Error.prepareStackTrace = b;
        }
        var I = e ? e.displayName || e.name : "", We = I ? U(I) : "";
        return typeof e == "function" && q.set(e, We), We;
      }
      function _e(e, o, i) {
        return Te(e, !1);
      }
      function cr(e) {
        var o = e.prototype;
        return !!(o && o.isReactComponent);
      }
      function G(e, o, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Te(e, cr(e));
        if (typeof e == "string")
          return U(e);
        switch (e) {
          case m:
            return U("Suspense");
          case F:
            return U("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case p:
              return _e(e.render);
            case y:
              return G(e.type, o, i);
            case k:
              return _e(e._render);
            case S: {
              var d = e, b = d._payload, v = d._init;
              try {
                return G(v(b), o, i);
              } catch {
              }
            }
          }
        return "";
      }
      var Be = {}, Oe = A.ReactDebugCurrentFrame;
      function X(e) {
        if (e) {
          var o = e._owner, i = G(e.type, e._source, o ? o.type : null);
          Oe.setExtraStackFrame(i);
        } else
          Oe.setExtraStackFrame(null);
      }
      function dr(e, o, i, d, b) {
        {
          var v = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var g in e)
            if (v(e, g)) {
              var h = void 0;
              try {
                if (typeof e[g] != "function") {
                  var w = Error((d || "React class") + ": " + i + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw w.name = "Invariant Violation", w;
                }
                h = e[g](o, g, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (E) {
                h = E;
              }
              h && !(h instanceof Error) && (X(b), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, g, typeof h), X(null)), h instanceof Error && !(h.message in Be) && (Be[h.message] = !0, X(b), D("Failed %s type: %s", i, h.message), X(null));
            }
        }
      }
      var W = A.ReactCurrentOwner, ae = Object.prototype.hasOwnProperty, pr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ke, Ae, ne;
      ne = {};
      function hr(e) {
        if (ae.call(e, "ref")) {
          var o = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function gr(e) {
        if (ae.call(e, "key")) {
          var o = Object.getOwnPropertyDescriptor(e, "key").get;
          if (o && o.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function mr(e, o) {
        if (typeof e.ref == "string" && W.current && o && W.current.stateNode !== o) {
          var i = R(W.current.type);
          ne[i] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(W.current.type), e.ref), ne[i] = !0);
        }
      }
      function br(e, o) {
        {
          var i = function() {
            ke || (ke = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
          };
          i.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: i,
            configurable: !0
          });
        }
      }
      function vr(e, o) {
        {
          var i = function() {
            Ae || (Ae = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
          };
          i.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: i,
            configurable: !0
          });
        }
      }
      var yr = function(e, o, i, d, b, v, g) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: s,
          // Built-in properties that belong on the element
          type: e,
          key: o,
          ref: i,
          props: g,
          // Record the component responsible for creating this element.
          _owner: v
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
          value: d
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Er(e, o, i, d, b) {
        {
          var v, g = {}, h = null, w = null;
          i !== void 0 && (h = "" + i), gr(o) && (h = "" + o.key), hr(o) && (w = o.ref, mr(o, b));
          for (v in o)
            ae.call(o, v) && !pr.hasOwnProperty(v) && (g[v] = o[v]);
          if (e && e.defaultProps) {
            var E = e.defaultProps;
            for (v in E)
              g[v] === void 0 && (g[v] = E[v]);
          }
          if (h || w) {
            var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            h && br(g, C), w && vr(g, C);
          }
          return yr(e, h, w, b, d, W.current, g);
        }
      }
      var oe = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
      function j(e) {
        if (e) {
          var o = e._owner, i = G(e.type, e._source, o ? o.type : null);
          je.setExtraStackFrame(i);
        } else
          je.setExtraStackFrame(null);
      }
      var se;
      se = !1;
      function ie(e) {
        return typeof e == "object" && e !== null && e.$$typeof === s;
      }
      function Ie() {
        {
          if (oe.current) {
            var e = R(oe.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Fr(e) {
        {
          if (e !== void 0) {
            var o = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
            return `

Check your code at ` + o + ":" + i + ".";
          }
          return "";
        }
      }
      var $e = {};
      function xr(e) {
        {
          var o = Ie();
          if (!o) {
            var i = typeof e == "string" ? e : e.displayName || e.name;
            i && (o = `

Check the top-level render call using <` + i + ">.");
          }
          return o;
        }
      }
      function He(e, o) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var i = xr(o);
          if ($e[i])
            return;
          $e[i] = !0;
          var d = "";
          e && e._owner && e._owner !== oe.current && (d = " It was passed a child from " + R(e._owner.type) + "."), j(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), j(null);
        }
      }
      function Me(e, o) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var i = 0; i < e.length; i++) {
              var d = e[i];
              ie(d) && He(d, o);
            }
          else if (ie(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var b = ar(e);
            if (typeof b == "function" && b !== e.entries)
              for (var v = b.call(e), g; !(g = v.next()).done; )
                ie(g.value) && He(g.value, o);
          }
        }
      }
      function Cr(e) {
        {
          var o = e.type;
          if (o == null || typeof o == "string")
            return;
          var i;
          if (typeof o == "function")
            i = o.propTypes;
          else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          o.$$typeof === y))
            i = o.propTypes;
          else
            return;
          if (i) {
            var d = R(o);
            dr(i, e.props, "prop", d, e);
          } else if (o.PropTypes !== void 0 && !se) {
            se = !0;
            var b = R(o);
            D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wr(e) {
        {
          for (var o = Object.keys(e.props), i = 0; i < o.length; i++) {
            var d = o[i];
            if (d !== "children" && d !== "key") {
              j(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), j(null);
              break;
            }
          }
          e.ref !== null && (j(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
        }
      }
      function Le(e, o, i, d, b, v) {
        {
          var g = sr(e);
          if (!g) {
            var h = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var w = Fr(b);
            w ? h += w : h += Ie();
            var E;
            e === null ? E = "null" : Array.isArray(e) ? E = "array" : e !== void 0 && e.$$typeof === s ? (E = "<" + (R(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
          }
          var C = Er(e, o, i, b, v);
          if (C == null)
            return C;
          if (g) {
            var T = o.children;
            if (T !== void 0)
              if (d)
                if (Array.isArray(T)) {
                  for (var I = 0; I < T.length; I++)
                    Me(T[I], e);
                  Object.freeze && Object.freeze(T);
                } else
                  D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Me(T, e);
          }
          return e === t.Fragment ? wr(C) : Cr(C), C;
        }
      }
      function Dr(e, o, i) {
        return Le(e, o, i, !0);
      }
      function Sr(e, o, i) {
        return Le(e, o, i, !1);
      }
      var Rr = Sr, Pr = Dr;
      t.jsx = Rr, t.jsxs = Pr;
    }();
  }(de)), de;
}
process.env.NODE_ENV === "production" ? be.exports = At() : be.exports = jt();
var K = be.exports;
const It = Tr`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Mt = ({ brandOption: t, mode: r, children: n }) => {
  const s = Br(), u = Bt(), a = Ot(), f = kt(), c = _t(t, r), p = { constants: {
    ...s,
    ...u,
    ...a,
    ...f
  }, mode: r, brand: t, vars: c };
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    /* @__PURE__ */ K.jsx(It, {}),
    /* @__PURE__ */ K.jsx(_r, { theme: p, children: n })
  ] });
};
export {
  Mt as SaguaroThemeProvider,
  Br as useBorderTokens,
  _t as useColorTokens,
  Bt as useFontTokens,
  Ot as useHeightTokens,
  kt as useSpacingTokens
};
