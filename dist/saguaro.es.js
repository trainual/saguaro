import Ue from "react";
import { createGlobalStyle as Tr, ThemeProvider as _r } from "styled-components";
const Or = () => ({
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
}), Ar = {
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
}, jr = {
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
}, Ir = {
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
}, Mr = {
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
}, Lr = {
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
}, Yr = {
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
}, qe = {
  blue: Ar,
  green: kr,
  magenta: jr,
  neutral: Ir,
  orange: Mr,
  purple: $r,
  red: Lr,
  yellow: Yr
}, Hr = {
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
}, Gr = {
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
}, Nr = {
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
}, zr = {
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
}, Xr = {
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
}, Jr = {
  blue: Hr,
  green: Wr,
  magenta: Gr,
  neutral: Nr,
  orange: zr,
  purple: Ur,
  red: qr,
  yellow: Xr
};
function Kr(a) {
  if (!a.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function Zr(a) {
  return Object.keys(qe).includes(a);
}
function Ya(a, r) {
  return r["preview" + Xe(a) + "Primary"];
}
function Ha(a, r) {
  return r["preview" + Xe(a) + "Secondary"];
}
const Xe = (a) => a.charAt(0).toUpperCase() + a.slice(1);
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(a) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (a[o] = n[o]);
    }
    return a;
  }, Q.apply(this, arguments);
}
function Qr(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function W(a, r) {
  return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, W(a, r);
}
function Vr(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, W(a, r);
}
function pe(a) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pe(a);
}
function ea(a) {
  return Function.toString.call(a).indexOf("[native code]") !== -1;
}
function ra() {
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
function Z(a, r, n) {
  return ra() ? Z = Reflect.construct.bind() : Z = function(s, t, f) {
    var l = [null];
    l.push.apply(l, t);
    var d = Function.bind.apply(s, l), c = new d();
    return f && W(c, f.prototype), c;
  }, Z.apply(null, arguments);
}
function ge(a) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ge = function(o) {
    if (o === null || !ea(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(o))
        return r.get(o);
      r.set(o, s);
    }
    function s() {
      return Z(o, arguments, pe(this).constructor);
    }
    return s.prototype = Object.create(o.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), W(s, o);
  }, ge(a);
}
var aa = {
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
function ta() {
  for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
    r[n] = arguments[n];
  var o = r[0], s = [], t;
  for (t = 1; t < r.length; t += 1)
    s.push(r[t]);
  return s.forEach(function(f) {
    o = o.replace(/%[a-z]/, f);
  }), o;
}
var D = /* @__PURE__ */ function(a) {
  Vr(r, a);
  function r(n) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = a.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var s = arguments.length, t = new Array(s > 1 ? s - 1 : 0), f = 1; f < s; f++)
        t[f - 1] = arguments[f];
      o = a.call(this, ta.apply(void 0, [aa[n]].concat(t))) || this;
    }
    return Qr(o);
  }
  return r;
}(/* @__PURE__ */ ge(Error));
function ue(a) {
  return Math.round(a * 255);
}
function na(a, r, n) {
  return ue(a) + "," + ue(r) + "," + ue(n);
}
function G(a, r, n, o) {
  if (o === void 0 && (o = na), r === 0)
    return o(n, n, n);
  var s = (a % 360 + 360) % 360 / 60, t = (1 - Math.abs(2 * n - 1)) * r, f = t * (1 - Math.abs(s % 2 - 1)), l = 0, d = 0, c = 0;
  s >= 0 && s < 1 ? (l = t, d = f) : s >= 1 && s < 2 ? (l = f, d = t) : s >= 2 && s < 3 ? (d = t, c = f) : s >= 3 && s < 4 ? (d = f, c = t) : s >= 4 && s < 5 ? (l = f, c = t) : s >= 5 && s < 6 && (l = t, c = f);
  var m = n - t / 2, E = l + m, y = d + m, B = c + m;
  return o(E, y, B);
}
var We = {
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
function oa(a) {
  if (typeof a != "string")
    return a;
  var r = a.toLowerCase();
  return We[r] ? "#" + We[r] : a;
}
var ia = /^#[a-fA-F0-9]{6}$/, sa = /^#[a-fA-F0-9]{8}$/, ua = /^#[a-fA-F0-9]{3}$/, la = /^#[a-fA-F0-9]{4}$/, le = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, fa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, da = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ca = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Je(a) {
  if (typeof a != "string")
    throw new D(3);
  var r = oa(a);
  if (r.match(ia))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(sa)) {
    var n = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: n
    };
  }
  if (r.match(ua))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(la)) {
    var o = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: o
    };
  }
  var s = le.exec(r);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var t = fa.exec(r.substring(0, 50));
  if (t)
    return {
      red: parseInt("" + t[1], 10),
      green: parseInt("" + t[2], 10),
      blue: parseInt("" + t[3], 10),
      alpha: parseFloat("" + t[4]) > 1 ? parseFloat("" + t[4]) / 100 : parseFloat("" + t[4])
    };
  var f = da.exec(r);
  if (f) {
    var l = parseInt("" + f[1], 10), d = parseInt("" + f[2], 10) / 100, c = parseInt("" + f[3], 10) / 100, m = "rgb(" + G(l, d, c) + ")", E = le.exec(m);
    if (!E)
      throw new D(4, r, m);
    return {
      red: parseInt("" + E[1], 10),
      green: parseInt("" + E[2], 10),
      blue: parseInt("" + E[3], 10)
    };
  }
  var y = ca.exec(r.substring(0, 50));
  if (y) {
    var B = parseInt("" + y[1], 10), A = parseInt("" + y[2], 10) / 100, N = parseInt("" + y[3], 10) / 100, L = "rgb(" + G(B, A, N) + ")", _ = le.exec(L);
    if (!_)
      throw new D(4, r, L);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10),
      alpha: parseFloat("" + y[4]) > 1 ? parseFloat("" + y[4]) / 100 : parseFloat("" + y[4])
    };
  }
  throw new D(5);
}
function pa(a) {
  var r = a.red / 255, n = a.green / 255, o = a.blue / 255, s = Math.max(r, n, o), t = Math.min(r, n, o), f = (s + t) / 2;
  if (s === t)
    return a.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: f,
      alpha: a.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: f
    };
  var l, d = s - t, c = f > 0.5 ? d / (2 - s - t) : d / (s + t);
  switch (s) {
    case r:
      l = (n - o) / d + (n < o ? 6 : 0);
      break;
    case n:
      l = (o - r) / d + 2;
      break;
    default:
      l = (r - n) / d + 4;
      break;
  }
  return l *= 60, a.alpha !== void 0 ? {
    hue: l,
    saturation: c,
    lightness: f,
    alpha: a.alpha
  } : {
    hue: l,
    saturation: c,
    lightness: f
  };
}
function Ke(a) {
  return pa(Je(a));
}
var ga = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, he = ga;
function O(a) {
  var r = a.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function fe(a) {
  return O(Math.round(a * 255));
}
function ha(a, r, n) {
  return he("#" + fe(a) + fe(r) + fe(n));
}
function V(a, r, n) {
  return G(a, r, n, ha);
}
function ma(a, r, n) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number")
    return V(a, r, n);
  if (typeof a == "object" && r === void 0 && n === void 0)
    return V(a.hue, a.saturation, a.lightness);
  throw new D(1);
}
function ba(a, r, n, o) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number" && typeof o == "number")
    return o >= 1 ? V(a, r, n) : "rgba(" + G(a, r, n) + "," + o + ")";
  if (typeof a == "object" && r === void 0 && n === void 0 && o === void 0)
    return a.alpha >= 1 ? V(a.hue, a.saturation, a.lightness) : "rgba(" + G(a.hue, a.saturation, a.lightness) + "," + a.alpha + ")";
  throw new D(2);
}
function me(a, r, n) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number")
    return he("#" + O(a) + O(r) + O(n));
  if (typeof a == "object" && r === void 0 && n === void 0)
    return he("#" + O(a.red) + O(a.green) + O(a.blue));
  throw new D(6);
}
function va(a, r, n, o) {
  if (typeof a == "string" && typeof r == "number") {
    var s = Je(a);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + r + ")";
  } else {
    if (typeof a == "number" && typeof r == "number" && typeof n == "number" && typeof o == "number")
      return o >= 1 ? me(a, r, n) : "rgba(" + a + "," + r + "," + n + "," + o + ")";
    if (typeof a == "object" && r === void 0 && n === void 0 && o === void 0)
      return a.alpha >= 1 ? me(a.red, a.green, a.blue) : "rgba(" + a.red + "," + a.green + "," + a.blue + "," + a.alpha + ")";
  }
  throw new D(7);
}
var ya = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, wa = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, Ea = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Fa = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function Ze(a) {
  if (typeof a != "object")
    throw new D(8);
  if (wa(a))
    return va(a);
  if (ya(a))
    return me(a);
  if (Fa(a))
    return ba(a);
  if (Ea(a))
    return ma(a);
  throw new D(8);
}
function Qe(a, r, n) {
  return function() {
    var s = n.concat(Array.prototype.slice.call(arguments));
    return s.length >= r ? a.apply(this, s) : Qe(a, r, s);
  };
}
function Ve(a) {
  return Qe(a, a.length, []);
}
function er(a, r, n) {
  return Math.max(a, Math.min(r, n));
}
function Sa(a, r) {
  if (r === "transparent")
    return r;
  var n = Ke(r);
  return Ze(Q({}, n, {
    lightness: er(0, 1, n.lightness - parseFloat(a))
  }));
}
var xa = /* @__PURE__ */ Ve(Sa), J = xa;
function Ca(a, r) {
  if (r === "transparent")
    return r;
  var n = Ke(r);
  return Ze(Q({}, n, {
    lightness: er(0, 1, n.lightness + parseFloat(a))
  }));
}
var Ba = /* @__PURE__ */ Ve(Ca), M = Ba;
function Pa(a) {
  return {
    "00": M(0.42, a),
    "05": M(0.38, a),
    10: M(0.32, a),
    20: M(0.25, a),
    30: M(0.18, a),
    40: M(0.1, a),
    50: a,
    60: J(0.07, a),
    70: J(0.14, a),
    80: J(0.2, a),
    90: J(0.25, a)
  };
}
const Da = (a, r) => Zr(r) ? {
  brand: a[r],
  isCustomHex: !1
} : (Kr(r), {
  brand: Pa(r),
  isCustomHex: !0
}), rr = (a, r) => {
  const n = a === "light" ? qe : Jr, { brand: o, isCustomHex: s } = Da(n, r);
  return {
    ...n,
    brand: a === "dark" && s ? n.purple : o
  };
}, Ra = (a) => {
  const {
    brand: r,
    blue: n,
    green: o,
    magenta: s,
    neutral: t,
    orange: f,
    purple: l,
    red: d,
    yellow: c
  } = rr("dark", a);
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
    textDefault: t[80],
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: t["00"],
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: r[50],
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    // State
    stateInfo: n[40],
    stateError: d[50],
    stateCaution: f[50],
    stateSuccess: o[50],
    stateFavorite: c[50],
    stateBadgeTrainual: l["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: d["05"],
    stateBadgeCaution: f["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: d["00"],
    stateBackgroundCaution: f["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: d[70],
    stateHoverCaution: f[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: f[40],
    stateCompletionMedium: c[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: f[60],
    chartRed1: d["00"],
    chartRed2: d["05"],
    chartRed3: d[50],
    // Brand
    trainualBrandPurpleSurfaceLight: l["00"],
    trainualBrandPurpleSurface: l[10],
    trainualBrandPurpleSubdued: l[40],
    trainualBrandPurpleMedium: l[50],
    trainualBrandPurpleStrong: l[90],
    trainualBrandGreenSurfaceLight: o["00"],
    trainualBrandGreenSurface: o[10],
    trainualBrandGreenSubdued: o[20],
    trainualBrandGreenMedium: o[40],
    trainualBrandGreenStrong: o[90],
    trainualBrandYellowSurfaceLight: c["00"],
    trainualBrandYellowSurface: c[10],
    trainualBrandYellowSubdued: c[20],
    trainualBrandYellowMedium: c[40],
    trainualBrandYellowStrong: c[90],
    trainualBrandMagentaSurfaceLight: s["00"],
    trainualBrandMagentaSurface: s[10],
    trainualBrandMagentaSubdued: s[20],
    trainualBrandMagentaMedium: s[40],
    trainualBrandMagentaStrong: s[90],
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
    previewMagentaPrimary: s[50],
    previewMagentaSecondary: s["05"],
    previewNeutralPrimary: t[50],
    previewNeutralSecondary: t["05"],
    previewOrangePrimary: f[50],
    previewOrangeSecondary: f["05"],
    previewPurplePrimary: l[50],
    previewPurpleSecondary: l["05"],
    previewRedPrimary: d[50],
    previewRedSecondary: d["05"],
    previewYellowPrimary: c[50],
    previewYellowSecondary: c["05"],
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
}, Ta = (a) => {
  const {
    brand: r,
    blue: n,
    green: o,
    magenta: s,
    neutral: t,
    orange: f,
    purple: l,
    red: d,
    yellow: c
  } = rr("light", a);
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
    textDefault: t[80],
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: t["00"],
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: r[50],
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    // State
    stateInfo: n[40],
    stateError: d[50],
    stateCaution: f[50],
    stateSuccess: o[50],
    stateFavorite: c[50],
    stateBadgeTrainual: l["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: d["05"],
    stateBadgeCaution: f["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: d["00"],
    stateBackgroundCaution: f["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: d[70],
    stateHoverCaution: f[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: f[40],
    stateCompletionMedium: c[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
    chartGreen1: o["00"],
    chartGreen2: o[30],
    chartOrange1: f[60],
    chartRed1: d["00"],
    chartRed2: d["05"],
    chartRed3: d[50],
    // Brand
    trainualBrandPurpleSurfaceLight: l["00"],
    trainualBrandPurpleSurface: l[10],
    trainualBrandPurpleSubdued: l[40],
    trainualBrandPurpleMedium: l[50],
    trainualBrandPurpleStrong: l[90],
    trainualBrandGreenSurfaceLight: o["00"],
    trainualBrandGreenSurface: o[10],
    trainualBrandGreenSubdued: o[20],
    trainualBrandGreenMedium: o[40],
    trainualBrandGreenStrong: o[90],
    trainualBrandYellowSurfaceLight: c["00"],
    trainualBrandYellowSurface: c[10],
    trainualBrandYellowSubdued: c[20],
    trainualBrandYellowMedium: c[40],
    trainualBrandYellowStrong: c[90],
    trainualBrandMagentaSurfaceLight: s["00"],
    trainualBrandMagentaSurface: s[10],
    trainualBrandMagentaSubdued: s[20],
    trainualBrandMagentaMedium: s[40],
    trainualBrandMagentaStrong: s[90],
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
    previewMagentaPrimary: s[50],
    previewMagentaSecondary: s["05"],
    previewNeutralPrimary: t[50],
    previewNeutralSecondary: t["05"],
    previewOrangePrimary: f[50],
    previewOrangeSecondary: f["05"],
    previewPurplePrimary: l[50],
    previewPurpleSecondary: l["05"],
    previewRedPrimary: d[50],
    previewRedSecondary: d["05"],
    previewYellowPrimary: c[50],
    previewYellowSecondary: c["05"],
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
}, _a = (a, r) => {
  const n = Ta(a), o = Ra(a);
  return r == "light" ? n : o;
}, Oa = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Aa = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), ka = () => ({
  spacer2xs: "0.125rem",
  spacerXs: "0.25rem",
  spacerSm: "0.5rem",
  spacerMd: "1rem",
  spacerLg: "1.5rem",
  spacerXl: "2rem",
  spacer2xl: "2.5rem",
  spacer3xl: "3rem"
});
var be = { exports: {} }, $ = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var de, Ge;
function ar() {
  if (Ge)
    return de;
  Ge = 1;
  var a = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var f = {}, l = 0; l < 10; l++)
        f["_" + String.fromCharCode(l)] = l;
      var d = Object.getOwnPropertyNames(f).map(function(m) {
        return f[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        c[m] = m;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return de = s() ? Object.assign : function(t, f) {
    for (var l, d = o(t), c, m = 1; m < arguments.length; m++) {
      l = Object(arguments[m]);
      for (var E in l)
        r.call(l, E) && (d[E] = l[E]);
      if (a) {
        c = a(l);
        for (var y = 0; y < c.length; y++)
          n.call(l, c[y]) && (d[c[y]] = l[c[y]]);
      }
    }
    return d;
  }, de;
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
function ja() {
  if (Ne)
    return $;
  Ne = 1, ar();
  var a = Ue, r = 60103;
  if ($.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    r = n("react.element"), $.Fragment = n("react.fragment");
  }
  var o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, d, c) {
    var m, E = {}, y = null, B = null;
    c !== void 0 && (y = "" + c), d.key !== void 0 && (y = "" + d.key), d.ref !== void 0 && (B = d.ref);
    for (m in d)
      s.call(d, m) && !t.hasOwnProperty(m) && (E[m] = d[m]);
    if (l && l.defaultProps)
      for (m in d = l.defaultProps, d)
        E[m] === void 0 && (E[m] = d[m]);
    return { $$typeof: r, type: l, key: y, ref: B, props: E, _owner: o.current };
  }
  return $.jsx = f, $.jsxs = f, $;
}
var ce = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Ia() {
  return ze || (ze = 1, function(a) {
    process.env.NODE_ENV !== "production" && function() {
      var r = Ue, n = ar(), o = 60103, s = 60106;
      a.Fragment = 60107;
      var t = 60108, f = 60114, l = 60109, d = 60110, c = 60112, m = 60113, E = 60120, y = 60115, B = 60116, A = 60121, N = 60122, L = 60117, _ = 60129, ve = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var F = Symbol.for;
        o = F("react.element"), s = F("react.portal"), a.Fragment = F("react.fragment"), t = F("react.strict_mode"), f = F("react.profiler"), l = F("react.provider"), d = F("react.context"), c = F("react.forward_ref"), m = F("react.suspense"), E = F("react.suspense_list"), y = F("react.memo"), B = F("react.lazy"), A = F("react.block"), N = F("react.server.block"), L = F("react.fundamental"), F("react.scope"), F("react.opaque.id"), _ = F("react.debug_trace_mode"), F("react.offscreen"), ve = F("react.legacy_hidden");
      }
      var ye = typeof Symbol == "function" && Symbol.iterator, tr = "@@iterator";
      function nr(e) {
        if (e === null || typeof e != "object")
          return null;
        var i = ye && e[ye] || e[tr];
        return typeof i == "function" ? i : null;
      }
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function C(e) {
        {
          for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            u[p - 1] = arguments[p];
          or("error", e, u);
        }
      }
      function or(e, i, u) {
        {
          var p = k.ReactDebugCurrentFrame, b = p.getStackAddendum();
          b !== "" && (i += "%s", u = u.concat([b]));
          var v = u.map(function(h) {
            return "" + h;
          });
          v.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, v);
        }
      }
      var ir = !1;
      function sr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === a.Fragment || e === f || e === _ || e === t || e === m || e === E || e === ve || ir || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === y || e.$$typeof === l || e.$$typeof === d || e.$$typeof === c || e.$$typeof === L || e.$$typeof === A || e[0] === N));
      }
      function ur(e, i, u) {
        var p = i.displayName || i.name || "";
        return e.displayName || (p !== "" ? u + "(" + p + ")" : u);
      }
      function we(e) {
        return e.displayName || "Context";
      }
      function P(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && C("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case a.Fragment:
            return "Fragment";
          case s:
            return "Portal";
          case f:
            return "Profiler";
          case t:
            return "StrictMode";
          case m:
            return "Suspense";
          case E:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case d:
              var i = e;
              return we(i) + ".Consumer";
            case l:
              var u = e;
              return we(u._context) + ".Provider";
            case c:
              return ur(e, e.render, "ForwardRef");
            case y:
              return P(e.type);
            case A:
              return P(e._render);
            case B: {
              var p = e, b = p._payload, v = p._init;
              try {
                return P(v(b));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, Ee, Fe, Se, xe, Ce, Be, Pe;
      function De() {
      }
      De.__reactDisabledLog = !0;
      function lr() {
        {
          if (Y === 0) {
            Ee = console.log, Fe = console.info, Se = console.warn, xe = console.error, Ce = console.group, Be = console.groupCollapsed, Pe = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: De,
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
          Y++;
        }
      }
      function fr() {
        {
          if (Y--, Y === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, e, {
                value: Ee
              }),
              info: n({}, e, {
                value: Fe
              }),
              warn: n({}, e, {
                value: Se
              }),
              error: n({}, e, {
                value: xe
              }),
              group: n({}, e, {
                value: Ce
              }),
              groupCollapsed: n({}, e, {
                value: Be
              }),
              groupEnd: n({}, e, {
                value: Pe
              })
            });
          }
          Y < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ee = k.ReactCurrentDispatcher, re;
      function z(e, i, u) {
        {
          if (re === void 0)
            try {
              throw Error();
            } catch (b) {
              var p = b.stack.trim().match(/\n( *(at )?)/);
              re = p && p[1] || "";
            }
          return `
` + re + e;
        }
      }
      var ae = !1, U;
      {
        var dr = typeof WeakMap == "function" ? WeakMap : Map;
        U = new dr();
      }
      function Re(e, i) {
        if (!e || ae)
          return "";
        {
          var u = U.get(e);
          if (u !== void 0)
            return u;
        }
        var p;
        ae = !0;
        var b = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var v;
        v = ee.current, ee.current = null, lr();
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
              } catch (T) {
                p = T;
              }
              Reflect.construct(e, [], h);
            } else {
              try {
                h.call();
              } catch (T) {
                p = T;
              }
              e.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (T) {
              p = T;
            }
            e();
          }
        } catch (T) {
          if (T && p && typeof T.stack == "string") {
            for (var g = T.stack.split(`
`), x = p.stack.split(`
`), w = g.length - 1, S = x.length - 1; w >= 1 && S >= 0 && g[w] !== x[S]; )
              S--;
            for (; w >= 1 && S >= 0; w--, S--)
              if (g[w] !== x[S]) {
                if (w !== 1 || S !== 1)
                  do
                    if (w--, S--, S < 0 || g[w] !== x[S]) {
                      var R = `
` + g[w].replace(" at new ", " at ");
                      return typeof e == "function" && U.set(e, R), R;
                    }
                  while (w >= 1 && S >= 0);
                break;
              }
          }
        } finally {
          ae = !1, ee.current = v, fr(), Error.prepareStackTrace = b;
        }
        var I = e ? e.displayName || e.name : "", He = I ? z(I) : "";
        return typeof e == "function" && U.set(e, He), He;
      }
      function Te(e, i, u) {
        return Re(e, !1);
      }
      function cr(e) {
        var i = e.prototype;
        return !!(i && i.isReactComponent);
      }
      function q(e, i, u) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Re(e, cr(e));
        if (typeof e == "string")
          return z(e);
        switch (e) {
          case m:
            return z("Suspense");
          case E:
            return z("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case c:
              return Te(e.render);
            case y:
              return q(e.type, i, u);
            case A:
              return Te(e._render);
            case B: {
              var p = e, b = p._payload, v = p._init;
              try {
                return q(v(b), i, u);
              } catch {
              }
            }
          }
        return "";
      }
      var _e = {}, Oe = k.ReactDebugCurrentFrame;
      function X(e) {
        if (e) {
          var i = e._owner, u = q(e.type, e._source, i ? i.type : null);
          Oe.setExtraStackFrame(u);
        } else
          Oe.setExtraStackFrame(null);
      }
      function pr(e, i, u, p, b) {
        {
          var v = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var h in e)
            if (v(e, h)) {
              var g = void 0;
              try {
                if (typeof e[h] != "function") {
                  var x = Error((p || "React class") + ": " + u + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw x.name = "Invariant Violation", x;
                }
                g = e[h](i, h, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (w) {
                g = w;
              }
              g && !(g instanceof Error) && (X(b), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, h, typeof g), X(null)), g instanceof Error && !(g.message in _e) && (_e[g.message] = !0, X(b), C("Failed %s type: %s", u, g.message), X(null));
            }
        }
      }
      var H = k.ReactCurrentOwner, te = Object.prototype.hasOwnProperty, gr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ae, ke, ne;
      ne = {};
      function hr(e) {
        if (te.call(e, "ref")) {
          var i = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function mr(e) {
        if (te.call(e, "key")) {
          var i = Object.getOwnPropertyDescriptor(e, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function br(e, i) {
        if (typeof e.ref == "string" && H.current && i && H.current.stateNode !== i) {
          var u = P(H.current.type);
          ne[u] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(H.current.type), e.ref), ne[u] = !0);
        }
      }
      function vr(e, i) {
        {
          var u = function() {
            Ae || (Ae = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          u.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function yr(e, i) {
        {
          var u = function() {
            ke || (ke = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          u.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var wr = function(e, i, u, p, b, v, h) {
        var g = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: e,
          key: i,
          ref: u,
          props: h,
          // Record the component responsible for creating this element.
          _owner: v
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
          value: p
        }), Object.defineProperty(g, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: b
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      };
      function Er(e, i, u, p, b) {
        {
          var v, h = {}, g = null, x = null;
          u !== void 0 && (g = "" + u), mr(i) && (g = "" + i.key), hr(i) && (x = i.ref, br(i, b));
          for (v in i)
            te.call(i, v) && !gr.hasOwnProperty(v) && (h[v] = i[v]);
          if (e && e.defaultProps) {
            var w = e.defaultProps;
            for (v in w)
              h[v] === void 0 && (h[v] = w[v]);
          }
          if (g || x) {
            var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            g && vr(h, S), x && yr(h, S);
          }
          return wr(e, g, x, b, p, H.current, h);
        }
      }
      var oe = k.ReactCurrentOwner, je = k.ReactDebugCurrentFrame;
      function j(e) {
        if (e) {
          var i = e._owner, u = q(e.type, e._source, i ? i.type : null);
          je.setExtraStackFrame(u);
        } else
          je.setExtraStackFrame(null);
      }
      var ie;
      ie = !1;
      function se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === o;
      }
      function Ie() {
        {
          if (oe.current) {
            var e = P(oe.current.type);
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
            var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
            return `

Check your code at ` + i + ":" + u + ".";
          }
          return "";
        }
      }
      var Me = {};
      function Sr(e) {
        {
          var i = Ie();
          if (!i) {
            var u = typeof e == "string" ? e : e.displayName || e.name;
            u && (i = `

Check the top-level render call using <` + u + ">.");
          }
          return i;
        }
      }
      function $e(e, i) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var u = Sr(i);
          if (Me[u])
            return;
          Me[u] = !0;
          var p = "";
          e && e._owner && e._owner !== oe.current && (p = " It was passed a child from " + P(e._owner.type) + "."), j(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), j(null);
        }
      }
      function Le(e, i) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var u = 0; u < e.length; u++) {
              var p = e[u];
              se(p) && $e(p, i);
            }
          else if (se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var b = nr(e);
            if (typeof b == "function" && b !== e.entries)
              for (var v = b.call(e), h; !(h = v.next()).done; )
                se(h.value) && $e(h.value, i);
          }
        }
      }
      function xr(e) {
        {
          var i = e.type;
          if (i == null || typeof i == "string")
            return;
          var u;
          if (typeof i == "function")
            u = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === y))
            u = i.propTypes;
          else
            return;
          if (u) {
            var p = P(i);
            pr(u, e.props, "prop", p, e);
          } else if (i.PropTypes !== void 0 && !ie) {
            ie = !0;
            var b = P(i);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cr(e) {
        {
          for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
            var p = i[u];
            if (p !== "children" && p !== "key") {
              j(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), j(null);
              break;
            }
          }
          e.ref !== null && (j(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
        }
      }
      function Ye(e, i, u, p, b, v) {
        {
          var h = sr(e);
          if (!h) {
            var g = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var x = Fr(b);
            x ? g += x : g += Ie();
            var w;
            e === null ? w = "null" : Array.isArray(e) ? w = "array" : e !== void 0 && e.$$typeof === o ? (w = "<" + (P(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, g);
          }
          var S = Er(e, i, u, b, v);
          if (S == null)
            return S;
          if (h) {
            var R = i.children;
            if (R !== void 0)
              if (p)
                if (Array.isArray(R)) {
                  for (var I = 0; I < R.length; I++)
                    Le(R[I], e);
                  Object.freeze && Object.freeze(R);
                } else
                  C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Le(R, e);
          }
          return e === a.Fragment ? Cr(S) : xr(S), S;
        }
      }
      function Br(e, i, u) {
        return Ye(e, i, u, !0);
      }
      function Pr(e, i, u) {
        return Ye(e, i, u, !1);
      }
      var Dr = Pr, Rr = Br;
      a.jsx = Dr, a.jsxs = Rr;
    }();
  }(ce)), ce;
}
process.env.NODE_ENV === "production" ? be.exports = ja() : be.exports = Ia();
var K = be.exports;
const Ma = Tr`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Wa = ({ brandOption: a, mode: r, children: n }) => {
  const o = Or(), s = Oa(), t = Aa(), f = ka(), l = _a(a, r), c = { constants: {
    ...o,
    ...s,
    ...t,
    ...f
  }, mode: r, brand: a, vars: l };
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    /* @__PURE__ */ K.jsx(Ma, {}),
    /* @__PURE__ */ K.jsx(_r, { theme: c, children: n })
  ] });
};
export {
  Wa as SaguaroThemeProvider,
  Ya as getPrimaryPreviewColor,
  Ha as getSecondaryPreviewColor,
  Or as useBorderTokens,
  _a as useColorTokens,
  Oa as useFontTokens,
  Aa as useHeightTokens,
  ka as useSpacingTokens
};
