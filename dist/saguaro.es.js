import Xe from "react";
import { createGlobalStyle as Ar, ThemeProvider as Or } from "styled-components";
const kr = () => ({
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
}), ue = { r: 0.2126, g: 0.7152, b: 0.0722 }, jr = 255, Ir = (a) => {
  const r = a.length === 4 ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a, [n, o, s] = [1, 3, 5].map((t) => parseInt(r.slice(t, t + 2), 16));
  return { r: n, g: o, b: s };
}, Je = (a, r, n) => {
  const { r: o, g: s, b: t } = Ir(a);
  return (o * ue.r + s * ue.g + t * ue.b) / jr > 0.62 ? r : n;
}, Mr = {
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
}, $r = {
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
}, Lr = {
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
}, Yr = {
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
}, Hr = {
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
}, Wr = {
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
}, Gr = {
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
}, Nr = {
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
}, Ke = {
  blue: Mr,
  green: $r,
  magenta: Lr,
  neutral: Yr,
  orange: Hr,
  purple: Wr,
  red: Gr,
  yellow: Nr
}, zr = {
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
}, Vr = {
  blue: zr,
  green: Ur,
  magenta: qr,
  neutral: Xr,
  orange: Jr,
  purple: Kr,
  red: Zr,
  yellow: Qr
};
function ea(a) {
  if (!a.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function ra(a) {
  return Object.keys(Ke).includes(a);
}
function Na(a, r) {
  return r["preview" + Ze(a) + "Primary"];
}
function za(a, r) {
  return r["preview" + Ze(a) + "Secondary"];
}
const Ze = (a) => a.charAt(0).toUpperCase() + a.slice(1);
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
function aa(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function W(a, r) {
  return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, W(a, r);
}
function ta(a, r) {
  a.prototype = Object.create(r.prototype), a.prototype.constructor = a, W(a, r);
}
function ge(a) {
  return ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ge(a);
}
function na(a) {
  return Function.toString.call(a).indexOf("[native code]") !== -1;
}
function oa() {
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
  return oa() ? Z = Reflect.construct.bind() : Z = function(s, t, l) {
    var d = [null];
    d.push.apply(d, t);
    var f = Function.bind.apply(s, d), c = new f();
    return l && W(c, l.prototype), c;
  }, Z.apply(null, arguments);
}
function he(a) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return he = function(o) {
    if (o === null || !na(o))
      return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(o))
        return r.get(o);
      r.set(o, s);
    }
    function s() {
      return Z(o, arguments, ge(this).constructor);
    }
    return s.prototype = Object.create(o.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), W(s, o);
  }, he(a);
}
var ia = {
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
function sa() {
  for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++)
    r[n] = arguments[n];
  var o = r[0], s = [], t;
  for (t = 1; t < r.length; t += 1)
    s.push(r[t]);
  return s.forEach(function(l) {
    o = o.replace(/%[a-z]/, l);
  }), o;
}
var D = /* @__PURE__ */ function(a) {
  ta(r, a);
  function r(n) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = a.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var s = arguments.length, t = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
        t[l - 1] = arguments[l];
      o = a.call(this, sa.apply(void 0, [ia[n]].concat(t))) || this;
    }
    return aa(o);
  }
  return r;
}(/* @__PURE__ */ he(Error));
function le(a) {
  return Math.round(a * 255);
}
function ua(a, r, n) {
  return le(a) + "," + le(r) + "," + le(n);
}
function G(a, r, n, o) {
  if (o === void 0 && (o = ua), r === 0)
    return o(n, n, n);
  var s = (a % 360 + 360) % 360 / 60, t = (1 - Math.abs(2 * n - 1)) * r, l = t * (1 - Math.abs(s % 2 - 1)), d = 0, f = 0, c = 0;
  s >= 0 && s < 1 ? (d = t, f = l) : s >= 1 && s < 2 ? (d = l, f = t) : s >= 2 && s < 3 ? (f = t, c = l) : s >= 3 && s < 4 ? (f = l, c = t) : s >= 4 && s < 5 ? (d = l, c = t) : s >= 5 && s < 6 && (d = t, c = l);
  var g = n - t / 2, w = d + g, b = f + g, C = c + g;
  return o(w, b, C);
}
var Ne = {
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
function la(a) {
  if (typeof a != "string")
    return a;
  var r = a.toLowerCase();
  return Ne[r] ? "#" + Ne[r] : a;
}
var da = /^#[a-fA-F0-9]{6}$/, fa = /^#[a-fA-F0-9]{8}$/, ca = /^#[a-fA-F0-9]{3}$/, pa = /^#[a-fA-F0-9]{4}$/, de = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ga = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, ha = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ma = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Qe(a) {
  if (typeof a != "string")
    throw new D(3);
  var r = la(a);
  if (r.match(da))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(fa)) {
    var n = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: n
    };
  }
  if (r.match(ca))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(pa)) {
    var o = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: o
    };
  }
  var s = de.exec(r);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var t = ga.exec(r.substring(0, 50));
  if (t)
    return {
      red: parseInt("" + t[1], 10),
      green: parseInt("" + t[2], 10),
      blue: parseInt("" + t[3], 10),
      alpha: parseFloat("" + t[4]) > 1 ? parseFloat("" + t[4]) / 100 : parseFloat("" + t[4])
    };
  var l = ha.exec(r);
  if (l) {
    var d = parseInt("" + l[1], 10), f = parseInt("" + l[2], 10) / 100, c = parseInt("" + l[3], 10) / 100, g = "rgb(" + G(d, f, c) + ")", w = de.exec(g);
    if (!w)
      throw new D(4, r, g);
    return {
      red: parseInt("" + w[1], 10),
      green: parseInt("" + w[2], 10),
      blue: parseInt("" + w[3], 10)
    };
  }
  var b = ma.exec(r.substring(0, 50));
  if (b) {
    var C = parseInt("" + b[1], 10), O = parseInt("" + b[2], 10) / 100, N = parseInt("" + b[3], 10) / 100, L = "rgb(" + G(C, O, N) + ")", _ = de.exec(L);
    if (!_)
      throw new D(4, r, L);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10),
      alpha: parseFloat("" + b[4]) > 1 ? parseFloat("" + b[4]) / 100 : parseFloat("" + b[4])
    };
  }
  throw new D(5);
}
function ba(a) {
  var r = a.red / 255, n = a.green / 255, o = a.blue / 255, s = Math.max(r, n, o), t = Math.min(r, n, o), l = (s + t) / 2;
  if (s === t)
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
  var d, f = s - t, c = l > 0.5 ? f / (2 - s - t) : f / (s + t);
  switch (s) {
    case r:
      d = (n - o) / f + (n < o ? 6 : 0);
      break;
    case n:
      d = (o - r) / f + 2;
      break;
    default:
      d = (r - n) / f + 4;
      break;
  }
  return d *= 60, a.alpha !== void 0 ? {
    hue: d,
    saturation: c,
    lightness: l,
    alpha: a.alpha
  } : {
    hue: d,
    saturation: c,
    lightness: l
  };
}
function Ve(a) {
  return ba(Qe(a));
}
var va = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, me = va;
function A(a) {
  var r = a.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function fe(a) {
  return A(Math.round(a * 255));
}
function ya(a, r, n) {
  return me("#" + fe(a) + fe(r) + fe(n));
}
function V(a, r, n) {
  return G(a, r, n, ya);
}
function wa(a, r, n) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number")
    return V(a, r, n);
  if (typeof a == "object" && r === void 0 && n === void 0)
    return V(a.hue, a.saturation, a.lightness);
  throw new D(1);
}
function Ea(a, r, n, o) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number" && typeof o == "number")
    return o >= 1 ? V(a, r, n) : "rgba(" + G(a, r, n) + "," + o + ")";
  if (typeof a == "object" && r === void 0 && n === void 0 && o === void 0)
    return a.alpha >= 1 ? V(a.hue, a.saturation, a.lightness) : "rgba(" + G(a.hue, a.saturation, a.lightness) + "," + a.alpha + ")";
  throw new D(2);
}
function be(a, r, n) {
  if (typeof a == "number" && typeof r == "number" && typeof n == "number")
    return me("#" + A(a) + A(r) + A(n));
  if (typeof a == "object" && r === void 0 && n === void 0)
    return me("#" + A(a.red) + A(a.green) + A(a.blue));
  throw new D(6);
}
function Fa(a, r, n, o) {
  if (typeof a == "string" && typeof r == "number") {
    var s = Qe(a);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + r + ")";
  } else {
    if (typeof a == "number" && typeof r == "number" && typeof n == "number" && typeof o == "number")
      return o >= 1 ? be(a, r, n) : "rgba(" + a + "," + r + "," + n + "," + o + ")";
    if (typeof a == "object" && r === void 0 && n === void 0 && o === void 0)
      return a.alpha >= 1 ? be(a.red, a.green, a.blue) : "rgba(" + a.red + "," + a.green + "," + a.blue + "," + a.alpha + ")";
  }
  throw new D(7);
}
var Sa = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Ca = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, xa = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Ba = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function er(a) {
  if (typeof a != "object")
    throw new D(8);
  if (Ca(a))
    return Fa(a);
  if (Sa(a))
    return be(a);
  if (Ba(a))
    return Ea(a);
  if (xa(a))
    return wa(a);
  throw new D(8);
}
function rr(a, r, n) {
  return function() {
    var s = n.concat(Array.prototype.slice.call(arguments));
    return s.length >= r ? a.apply(this, s) : rr(a, r, s);
  };
}
function ar(a) {
  return rr(a, a.length, []);
}
function tr(a, r, n) {
  return Math.max(a, Math.min(r, n));
}
function Pa(a, r) {
  if (r === "transparent")
    return r;
  var n = Ve(r);
  return er(Q({}, n, {
    lightness: tr(0, 1, n.lightness - parseFloat(a))
  }));
}
var Da = /* @__PURE__ */ ar(Pa), J = Da;
function Ra(a, r) {
  if (r === "transparent")
    return r;
  var n = Ve(r);
  return er(Q({}, n, {
    lightness: tr(0, 1, n.lightness + parseFloat(a))
  }));
}
var Ta = /* @__PURE__ */ ar(Ra), M = Ta;
function _a(a) {
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
const Aa = (a, r) => ra(r) ? {
  brand: a[r],
  isCustomHex: !1
} : (ea(r), {
  brand: _a(r),
  isCustomHex: !0
}), ye = (a, r) => {
  const n = a === "light" ? Ke : Vr, { brand: o, isCustomHex: s } = Aa(n, r);
  return {
    ...n,
    brand: a === "dark" && s ? n.purple : o
  };
}, Oa = (a) => {
  const {
    brand: r,
    blue: n,
    green: o,
    magenta: s,
    neutral: t,
    orange: l,
    purple: d,
    red: f,
    yellow: c
  } = ye("dark", a), g = r[50], w = t[80], b = t["00"], C = Je(g, w, b);
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
    textDefault: w,
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: b,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: g,
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    textAccentContrast: C,
    // State
    stateInfo: n[40],
    stateError: f[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: c[50],
    stateBadgeTrainual: d["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: f["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: f["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: f[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: c[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
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
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: d[50],
    previewPurpleSecondary: d["05"],
    previewRedPrimary: f[50],
    previewRedSecondary: f["05"],
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
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA",
    // AI Suggestions
    aiSuggestionTextRemoved: "#A4A3A8",
    aiSuggestionBackgroundAdded: "#E3FFE8",
    aiSuggestionBackgroundAddedSelected: "#B8FFC5"
  };
}, ka = (a) => {
  const {
    brand: r,
    blue: n,
    green: o,
    magenta: s,
    neutral: t,
    orange: l,
    purple: d,
    red: f,
    yellow: c
  } = ye("light", a), g = r[50], w = t[80], b = t["00"], C = Je(g, w, b);
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
    textDefault: w,
    textSubdued: t[50],
    textPlaceholder: t[40],
    textSurface: b,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: g,
    accentPrimaryHover: r[60],
    accentPrimaryPressed: r[70],
    accentSubdued1: r["00"],
    accentSubdued2: r["05"],
    accentSubdued3: r[10],
    accentSubdued4: r[20],
    accentStrong1: r[80],
    accentStrong2: r[90],
    textAccentContrast: C,
    // State
    stateInfo: n[40],
    stateError: f[50],
    stateCaution: l[50],
    stateSuccess: o[50],
    stateFavorite: c[50],
    stateBadgeTrainual: d["05"],
    stateBadgeInfo: n["05"],
    stateBadgeError: f["05"],
    stateBadgeCaution: l["05"],
    stateBadgeSuccess: o["05"],
    stateBadgeGeneral: t[15],
    stateBackgroundInfo: n["00"],
    stateBackgroundError: f["00"],
    stateBackgroundCaution: l["00"],
    stateBackgroundSuccess: o["00"],
    stateHoverInfo: n[60],
    stateHoverError: f[70],
    stateHoverCaution: l[70],
    stateHoverSuccess: o[70],
    stateCompletionLow: l[40],
    stateCompletionMedium: c[50],
    stateCompletionHigh: o[30],
    stateCompletionFull: o[60],
    // Chart
    chartBlue1: n[60],
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
    previewOrangePrimary: l[50],
    previewOrangeSecondary: l["05"],
    previewPurplePrimary: d[50],
    previewPurpleSecondary: d["05"],
    previewRedPrimary: f[50],
    previewRedSecondary: f["05"],
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
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA",
    // AI Suggestions
    aiSuggestionTextRemoved: "#A4A3A8",
    aiSuggestionBackgroundAdded: "#E3FFE8",
    aiSuggestionBackgroundAddedSelected: "#B8FFC5"
  };
}, ja = (a, r) => {
  const n = ka(a), o = Oa(a);
  return r == "light" ? n : o;
}, Ia = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Ma = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), $a = () => ({
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
var ve = { exports: {} }, $ = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ce, ze;
function nr() {
  if (ze)
    return ce;
  ze = 1;
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
      for (var l = {}, d = 0; d < 10; d++)
        l["_" + String.fromCharCode(d)] = d;
      var f = Object.getOwnPropertyNames(l).map(function(g) {
        return l[g];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        c[g] = g;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ce = s() ? Object.assign : function(t, l) {
    for (var d, f = o(t), c, g = 1; g < arguments.length; g++) {
      d = Object(arguments[g]);
      for (var w in d)
        r.call(d, w) && (f[w] = d[w]);
      if (a) {
        c = a(d);
        for (var b = 0; b < c.length; b++)
          n.call(d, c[b]) && (f[c[b]] = d[c[b]]);
      }
    }
    return f;
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
var Ue;
function La() {
  if (Ue)
    return $;
  Ue = 1, nr();
  var a = Xe, r = 60103;
  if ($.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    r = n("react.element"), $.Fragment = n("react.fragment");
  }
  var o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, f, c) {
    var g, w = {}, b = null, C = null;
    c !== void 0 && (b = "" + c), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (g in f)
      s.call(f, g) && !t.hasOwnProperty(g) && (w[g] = f[g]);
    if (d && d.defaultProps)
      for (g in f = d.defaultProps, f)
        w[g] === void 0 && (w[g] = f[g]);
    return { $$typeof: r, type: d, key: b, ref: C, props: w, _owner: o.current };
  }
  return $.jsx = l, $.jsxs = l, $;
}
var pe = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ya() {
  return qe || (qe = 1, function(a) {
    process.env.NODE_ENV !== "production" && function() {
      var r = Xe, n = nr(), o = 60103, s = 60106;
      a.Fragment = 60107;
      var t = 60108, l = 60114, d = 60109, f = 60110, c = 60112, g = 60113, w = 60120, b = 60115, C = 60116, O = 60121, N = 60122, L = 60117, _ = 60129, we = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var F = Symbol.for;
        o = F("react.element"), s = F("react.portal"), a.Fragment = F("react.fragment"), t = F("react.strict_mode"), l = F("react.profiler"), d = F("react.provider"), f = F("react.context"), c = F("react.forward_ref"), g = F("react.suspense"), w = F("react.suspense_list"), b = F("react.memo"), C = F("react.lazy"), O = F("react.block"), N = F("react.server.block"), L = F("react.fundamental"), F("react.scope"), F("react.opaque.id"), _ = F("react.debug_trace_mode"), F("react.offscreen"), we = F("react.legacy_hidden");
      }
      var Ee = typeof Symbol == "function" && Symbol.iterator, or = "@@iterator";
      function ir(e) {
        if (e === null || typeof e != "object")
          return null;
        var i = Ee && e[Ee] || e[or];
        return typeof i == "function" ? i : null;
      }
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function B(e) {
        {
          for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            u[p - 1] = arguments[p];
          sr("error", e, u);
        }
      }
      function sr(e, i, u) {
        {
          var p = k.ReactDebugCurrentFrame, v = p.getStackAddendum();
          v !== "" && (i += "%s", u = u.concat([v]));
          var y = u.map(function(m) {
            return "" + m;
          });
          y.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, y);
        }
      }
      var ur = !1;
      function lr(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === a.Fragment || e === l || e === _ || e === t || e === g || e === w || e === we || ur || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === b || e.$$typeof === d || e.$$typeof === f || e.$$typeof === c || e.$$typeof === L || e.$$typeof === O || e[0] === N));
      }
      function dr(e, i, u) {
        var p = i.displayName || i.name || "";
        return e.displayName || (p !== "" ? u + "(" + p + ")" : u);
      }
      function Fe(e) {
        return e.displayName || "Context";
      }
      function P(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && B("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case a.Fragment:
            return "Fragment";
          case s:
            return "Portal";
          case l:
            return "Profiler";
          case t:
            return "StrictMode";
          case g:
            return "Suspense";
          case w:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case f:
              var i = e;
              return Fe(i) + ".Consumer";
            case d:
              var u = e;
              return Fe(u._context) + ".Provider";
            case c:
              return dr(e, e.render, "ForwardRef");
            case b:
              return P(e.type);
            case O:
              return P(e._render);
            case C: {
              var p = e, v = p._payload, y = p._init;
              try {
                return P(y(v));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, Se, Ce, xe, Be, Pe, De, Re;
      function Te() {
      }
      Te.__reactDisabledLog = !0;
      function fr() {
        {
          if (Y === 0) {
            Se = console.log, Ce = console.info, xe = console.warn, Be = console.error, Pe = console.group, De = console.groupCollapsed, Re = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Te,
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
      function cr() {
        {
          if (Y--, Y === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, e, {
                value: Se
              }),
              info: n({}, e, {
                value: Ce
              }),
              warn: n({}, e, {
                value: xe
              }),
              error: n({}, e, {
                value: Be
              }),
              group: n({}, e, {
                value: Pe
              }),
              groupCollapsed: n({}, e, {
                value: De
              }),
              groupEnd: n({}, e, {
                value: Re
              })
            });
          }
          Y < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ee = k.ReactCurrentDispatcher, re;
      function z(e, i, u) {
        {
          if (re === void 0)
            try {
              throw Error();
            } catch (v) {
              var p = v.stack.trim().match(/\n( *(at )?)/);
              re = p && p[1] || "";
            }
          return `
` + re + e;
        }
      }
      var ae = !1, U;
      {
        var pr = typeof WeakMap == "function" ? WeakMap : Map;
        U = new pr();
      }
      function _e(e, i) {
        if (!e || ae)
          return "";
        {
          var u = U.get(e);
          if (u !== void 0)
            return u;
        }
        var p;
        ae = !0;
        var v = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var y;
        y = ee.current, ee.current = null, fr();
        try {
          if (i) {
            var m = function() {
              throw Error();
            };
            if (Object.defineProperty(m.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(m, []);
              } catch (T) {
                p = T;
              }
              Reflect.construct(e, [], m);
            } else {
              try {
                m.call();
              } catch (T) {
                p = T;
              }
              e.call(m.prototype);
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
            for (var h = T.stack.split(`
`), x = p.stack.split(`
`), E = h.length - 1, S = x.length - 1; E >= 1 && S >= 0 && h[E] !== x[S]; )
              S--;
            for (; E >= 1 && S >= 0; E--, S--)
              if (h[E] !== x[S]) {
                if (E !== 1 || S !== 1)
                  do
                    if (E--, S--, S < 0 || h[E] !== x[S]) {
                      var R = `
` + h[E].replace(" at new ", " at ");
                      return typeof e == "function" && U.set(e, R), R;
                    }
                  while (E >= 1 && S >= 0);
                break;
              }
          }
        } finally {
          ae = !1, ee.current = y, cr(), Error.prepareStackTrace = v;
        }
        var I = e ? e.displayName || e.name : "", Ge = I ? z(I) : "";
        return typeof e == "function" && U.set(e, Ge), Ge;
      }
      function Ae(e, i, u) {
        return _e(e, !1);
      }
      function gr(e) {
        var i = e.prototype;
        return !!(i && i.isReactComponent);
      }
      function q(e, i, u) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return _e(e, gr(e));
        if (typeof e == "string")
          return z(e);
        switch (e) {
          case g:
            return z("Suspense");
          case w:
            return z("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case c:
              return Ae(e.render);
            case b:
              return q(e.type, i, u);
            case O:
              return Ae(e._render);
            case C: {
              var p = e, v = p._payload, y = p._init;
              try {
                return q(y(v), i, u);
              } catch {
              }
            }
          }
        return "";
      }
      var Oe = {}, ke = k.ReactDebugCurrentFrame;
      function X(e) {
        if (e) {
          var i = e._owner, u = q(e.type, e._source, i ? i.type : null);
          ke.setExtraStackFrame(u);
        } else
          ke.setExtraStackFrame(null);
      }
      function hr(e, i, u, p, v) {
        {
          var y = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var m in e)
            if (y(e, m)) {
              var h = void 0;
              try {
                if (typeof e[m] != "function") {
                  var x = Error((p || "React class") + ": " + u + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw x.name = "Invariant Violation", x;
                }
                h = e[m](i, m, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (E) {
                h = E;
              }
              h && !(h instanceof Error) && (X(v), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, m, typeof h), X(null)), h instanceof Error && !(h.message in Oe) && (Oe[h.message] = !0, X(v), B("Failed %s type: %s", u, h.message), X(null));
            }
        }
      }
      var H = k.ReactCurrentOwner, te = Object.prototype.hasOwnProperty, mr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, je, Ie, ne;
      ne = {};
      function br(e) {
        if (te.call(e, "ref")) {
          var i = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function vr(e) {
        if (te.call(e, "key")) {
          var i = Object.getOwnPropertyDescriptor(e, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function yr(e, i) {
        if (typeof e.ref == "string" && H.current && i && H.current.stateNode !== i) {
          var u = P(H.current.type);
          ne[u] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(H.current.type), e.ref), ne[u] = !0);
        }
      }
      function wr(e, i) {
        {
          var u = function() {
            je || (je = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          u.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function Er(e, i) {
        {
          var u = function() {
            Ie || (Ie = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          u.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var Fr = function(e, i, u, p, v, y, m) {
        var h = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: e,
          key: i,
          ref: u,
          props: m,
          // Record the component responsible for creating this element.
          _owner: y
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
          value: p
        }), Object.defineProperty(h, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
      };
      function Sr(e, i, u, p, v) {
        {
          var y, m = {}, h = null, x = null;
          u !== void 0 && (h = "" + u), vr(i) && (h = "" + i.key), br(i) && (x = i.ref, yr(i, v));
          for (y in i)
            te.call(i, y) && !mr.hasOwnProperty(y) && (m[y] = i[y]);
          if (e && e.defaultProps) {
            var E = e.defaultProps;
            for (y in E)
              m[y] === void 0 && (m[y] = E[y]);
          }
          if (h || x) {
            var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            h && wr(m, S), x && Er(m, S);
          }
          return Fr(e, h, x, v, p, H.current, m);
        }
      }
      var oe = k.ReactCurrentOwner, Me = k.ReactDebugCurrentFrame;
      function j(e) {
        if (e) {
          var i = e._owner, u = q(e.type, e._source, i ? i.type : null);
          Me.setExtraStackFrame(u);
        } else
          Me.setExtraStackFrame(null);
      }
      var ie;
      ie = !1;
      function se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === o;
      }
      function $e() {
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
      function Cr(e) {
        {
          if (e !== void 0) {
            var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
            return `

Check your code at ` + i + ":" + u + ".";
          }
          return "";
        }
      }
      var Le = {};
      function xr(e) {
        {
          var i = $e();
          if (!i) {
            var u = typeof e == "string" ? e : e.displayName || e.name;
            u && (i = `

Check the top-level render call using <` + u + ">.");
          }
          return i;
        }
      }
      function Ye(e, i) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var u = xr(i);
          if (Le[u])
            return;
          Le[u] = !0;
          var p = "";
          e && e._owner && e._owner !== oe.current && (p = " It was passed a child from " + P(e._owner.type) + "."), j(e), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), j(null);
        }
      }
      function He(e, i) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var u = 0; u < e.length; u++) {
              var p = e[u];
              se(p) && Ye(p, i);
            }
          else if (se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var v = ir(e);
            if (typeof v == "function" && v !== e.entries)
              for (var y = v.call(e), m; !(m = y.next()).done; )
                se(m.value) && Ye(m.value, i);
          }
        }
      }
      function Br(e) {
        {
          var i = e.type;
          if (i == null || typeof i == "string")
            return;
          var u;
          if (typeof i == "function")
            u = i.propTypes;
          else if (typeof i == "object" && (i.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          i.$$typeof === b))
            u = i.propTypes;
          else
            return;
          if (u) {
            var p = P(i);
            hr(u, e.props, "prop", p, e);
          } else if (i.PropTypes !== void 0 && !ie) {
            ie = !0;
            var v = P(i);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pr(e) {
        {
          for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
            var p = i[u];
            if (p !== "children" && p !== "key") {
              j(e), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), j(null);
              break;
            }
          }
          e.ref !== null && (j(e), B("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
        }
      }
      function We(e, i, u, p, v, y) {
        {
          var m = lr(e);
          if (!m) {
            var h = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var x = Cr(v);
            x ? h += x : h += $e();
            var E;
            e === null ? E = "null" : Array.isArray(e) ? E = "array" : e !== void 0 && e.$$typeof === o ? (E = "<" + (P(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, B("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, h);
          }
          var S = Sr(e, i, u, v, y);
          if (S == null)
            return S;
          if (m) {
            var R = i.children;
            if (R !== void 0)
              if (p)
                if (Array.isArray(R)) {
                  for (var I = 0; I < R.length; I++)
                    He(R[I], e);
                  Object.freeze && Object.freeze(R);
                } else
                  B("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                He(R, e);
          }
          return e === a.Fragment ? Pr(S) : Br(S), S;
        }
      }
      function Dr(e, i, u) {
        return We(e, i, u, !0);
      }
      function Rr(e, i, u) {
        return We(e, i, u, !1);
      }
      var Tr = Rr, _r = Dr;
      a.jsx = Tr, a.jsxs = _r;
    }();
  }(pe)), pe;
}
process.env.NODE_ENV === "production" ? ve.exports = La() : ve.exports = Ya();
var K = ve.exports;
const Ha = Ar`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Ua = ({ brandOption: a, mode: r, children: n }) => {
  const o = ye(r, a), s = kr(), t = Ia(), l = Ma(), d = $a(), f = ja(a, r), g = { constants: {
    ...s,
    ...t,
    ...l,
    ...d
  }, mode: r, brand: a, vars: f, palettes: o };
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    /* @__PURE__ */ K.jsx(Ha, {}),
    /* @__PURE__ */ K.jsx(Or, { theme: g, children: n })
  ] });
};
export {
  Ua as SaguaroThemeProvider,
  Na as getPrimaryPreviewColor,
  za as getSecondaryPreviewColor,
  ra as isPalette,
  kr as useBorderTokens,
  ja as useColorTokens,
  Ia as useFontTokens,
  Ma as useHeightTokens,
  ye as usePaletteBoard,
  $a as useSpacingTokens
};
