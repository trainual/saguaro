import Ze from "react";
import { createGlobalStyle as Ir, ThemeProvider as Mr } from "styled-components";
const $r = () => ({
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
}), pe = { r: 0.2126, g: 0.7152, b: 0.0722 }, Lr = 255, Hr = (a) => {
  const e = a.length === 4 ? `#${a[1]}${a[1]}${a[2]}${a[2]}${a[3]}${a[3]}` : a, [t, o, s] = [1, 3, 5].map((n) => parseInt(e.slice(n, n + 2), 16));
  return { r: t, g: o, b: s };
}, Qe = (a, e, t) => {
  const { r: o, g: s, b: n } = Hr(a);
  return (o * pe.r + s * pe.g + n * pe.b) / Lr > 0.62 ? e : t;
}, Yr = {
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
}, zr = {
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
}, Ve = {
  blue: Yr,
  green: Wr,
  magenta: Gr,
  neutral: zr,
  orange: Nr,
  purple: Ur,
  red: qr,
  yellow: Xr
}, Jr = {
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
}, Kr = {
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
}, Zr = {
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
}, Qr = {
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
}, ea = {
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
}, ra = {
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
}, aa = {
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
}, ta = {
  blue: Jr,
  green: Kr,
  magenta: Zr,
  neutral: Qr,
  orange: Vr,
  purple: ea,
  red: ra,
  yellow: aa
};
function na(a) {
  if (!a.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function oa(a) {
  return Object.keys(Ve).includes(a);
}
function ot(a, e) {
  return e["preview" + er(a) + "Primary"];
}
function it(a, e) {
  return e["preview" + er(a) + "Secondary"];
}
const er = (a) => a.charAt(0).toUpperCase() + a.slice(1);
function B() {
  return B = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (a[o] = t[o]);
    }
    return a;
  }, B.apply(this, arguments);
}
function ia(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function N(a, e) {
  return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, s) {
    return o.__proto__ = s, o;
  }, N(a, e);
}
function sa(a, e) {
  a.prototype = Object.create(e.prototype), a.prototype.constructor = a, N(a, e);
}
function be(a) {
  return be = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, be(a);
}
function ua(a) {
  return Function.toString.call(a).indexOf("[native code]") !== -1;
}
function la() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ae(a, e, t) {
  return la() ? ae = Reflect.construct.bind() : ae = function(s, n, l) {
    var d = [null];
    d.push.apply(d, n);
    var f = Function.bind.apply(s, d), p = new f();
    return l && N(p, l.prototype), p;
  }, ae.apply(null, arguments);
}
function ve(a) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ve = function(o) {
    if (o === null || !ua(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(o)) return e.get(o);
      e.set(o, s);
    }
    function s() {
      return ae(o, arguments, be(this).constructor);
    }
    return s.prototype = Object.create(o.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), N(s, o);
  }, ve(a);
}
var fa = {
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
function da() {
  for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++)
    e[t] = arguments[t];
  var o = e[0], s = [], n;
  for (n = 1; n < e.length; n += 1)
    s.push(e[n]);
  return s.forEach(function(l) {
    o = o.replace(/%[a-z]/, l);
  }), o;
}
var T = /* @__PURE__ */ function(a) {
  sa(e, a);
  function e(t) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = a.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + t + " for more information.") || this;
    else {
      for (var s = arguments.length, n = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
        n[l - 1] = arguments[l];
      o = a.call(this, da.apply(void 0, [fa[t]].concat(n))) || this;
    }
    return ia(o);
  }
  return e;
}(/* @__PURE__ */ ve(Error));
function he(a) {
  return Math.round(a * 255);
}
function ca(a, e, t) {
  return he(a) + "," + he(e) + "," + he(t);
}
function U(a, e, t, o) {
  if (o === void 0 && (o = ca), e === 0)
    return o(t, t, t);
  var s = (a % 360 + 360) % 360 / 60, n = (1 - Math.abs(2 * t - 1)) * e, l = n * (1 - Math.abs(s % 2 - 1)), d = 0, f = 0, p = 0;
  s >= 0 && s < 1 ? (d = n, f = l) : s >= 1 && s < 2 ? (d = l, f = n) : s >= 2 && s < 3 ? (f = n, p = l) : s >= 3 && s < 4 ? (f = l, p = n) : s >= 4 && s < 5 ? (d = l, p = n) : s >= 5 && s < 6 && (d = n, p = l);
  var m = t - n / 2, v = d + m, y = f + m, C = p + m;
  return o(v, y, C);
}
var Xe = {
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
function pa(a) {
  if (typeof a != "string") return a;
  var e = a.toLowerCase();
  return Xe[e] ? "#" + Xe[e] : a;
}
var ha = /^#[a-fA-F0-9]{6}$/, ga = /^#[a-fA-F0-9]{8}$/, ma = /^#[a-fA-F0-9]{3}$/, ba = /^#[a-fA-F0-9]{4}$/, ge = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, va = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, ya = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Fa = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function H(a) {
  if (typeof a != "string")
    throw new T(3);
  var e = pa(a);
  if (e.match(ha))
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16)
    };
  if (e.match(ga)) {
    var t = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: t
    };
  }
  if (e.match(ma))
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16)
    };
  if (e.match(ba)) {
    var o = parseFloat((parseInt("" + e[4] + e[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16),
      alpha: o
    };
  }
  var s = ge.exec(e);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var n = va.exec(e.substring(0, 50));
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10),
      alpha: parseFloat("" + n[4]) > 1 ? parseFloat("" + n[4]) / 100 : parseFloat("" + n[4])
    };
  var l = ya.exec(e);
  if (l) {
    var d = parseInt("" + l[1], 10), f = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, m = "rgb(" + U(d, f, p) + ")", v = ge.exec(m);
    if (!v)
      throw new T(4, e, m);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10)
    };
  }
  var y = Fa.exec(e.substring(0, 50));
  if (y) {
    var C = parseInt("" + y[1], 10), q = parseInt("" + y[2], 10) / 100, oe = parseInt("" + y[3], 10) / 100, X = "rgb(" + U(C, q, oe) + ")", R = ge.exec(X);
    if (!R)
      throw new T(4, e, X);
    return {
      red: parseInt("" + R[1], 10),
      green: parseInt("" + R[2], 10),
      blue: parseInt("" + R[3], 10),
      alpha: parseFloat("" + y[4]) > 1 ? parseFloat("" + y[4]) / 100 : parseFloat("" + y[4])
    };
  }
  throw new T(5);
}
function wa(a) {
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
function A(a) {
  return wa(H(a));
}
var Sa = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, ye = Sa;
function I(a) {
  var e = a.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function me(a) {
  return I(Math.round(a * 255));
}
function Ea(a, e, t) {
  return ye("#" + me(a) + me(e) + me(t));
}
function te(a, e, t) {
  return U(a, e, t, Ea);
}
function Ca(a, e, t) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number")
    return te(a, e, t);
  if (typeof a == "object" && e === void 0 && t === void 0)
    return te(a.hue, a.saturation, a.lightness);
  throw new T(1);
}
function xa(a, e, t, o) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number" && typeof o == "number")
    return o >= 1 ? te(a, e, t) : "rgba(" + U(a, e, t) + "," + o + ")";
  if (typeof a == "object" && e === void 0 && t === void 0 && o === void 0)
    return a.alpha >= 1 ? te(a.hue, a.saturation, a.lightness) : "rgba(" + U(a.hue, a.saturation, a.lightness) + "," + a.alpha + ")";
  throw new T(2);
}
function Fe(a, e, t) {
  if (typeof a == "number" && typeof e == "number" && typeof t == "number")
    return ye("#" + I(a) + I(e) + I(t));
  if (typeof a == "object" && e === void 0 && t === void 0)
    return ye("#" + I(a.red) + I(a.green) + I(a.blue));
  throw new T(6);
}
function ne(a, e, t, o) {
  if (typeof a == "string" && typeof e == "number") {
    var s = H(a);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + e + ")";
  } else {
    if (typeof a == "number" && typeof e == "number" && typeof t == "number" && typeof o == "number")
      return o >= 1 ? Fe(a, e, t) : "rgba(" + a + "," + e + "," + t + "," + o + ")";
    if (typeof a == "object" && e === void 0 && t === void 0 && o === void 0)
      return a.alpha >= 1 ? Fe(a.red, a.green, a.blue) : "rgba(" + a.red + "," + a.green + "," + a.blue + "," + a.alpha + ")";
  }
  throw new T(7);
}
var Ba = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Pa = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, Da = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Ra = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function _(a) {
  if (typeof a != "object") throw new T(8);
  if (Pa(a)) return ne(a);
  if (Ba(a)) return Fe(a);
  if (Ra(a)) return xa(a);
  if (Da(a)) return Ca(a);
  throw new T(8);
}
function rr(a, e, t) {
  return function() {
    var s = t.concat(Array.prototype.slice.call(arguments));
    return s.length >= e ? a.apply(this, s) : rr(a, e, s);
  };
}
function P(a) {
  return rr(a, a.length, []);
}
function Ta(a, e) {
  if (e === "transparent") return e;
  var t = A(e);
  return _(B({}, t, {
    hue: t.hue + parseFloat(a)
  }));
}
P(Ta);
function Y(a, e, t) {
  return Math.max(a, Math.min(e, t));
}
function ka(a, e) {
  if (e === "transparent") return e;
  var t = A(e);
  return _(B({}, t, {
    lightness: Y(0, 1, t.lightness - parseFloat(a))
  }));
}
var Aa = P(ka), ee = Aa;
function _a(a, e) {
  if (e === "transparent") return e;
  var t = A(e);
  return _(B({}, t, {
    saturation: Y(0, 1, t.saturation - parseFloat(a))
  }));
}
P(_a);
function Oa(a, e) {
  if (e === "transparent") return e;
  var t = A(e);
  return _(B({}, t, {
    lightness: Y(0, 1, t.lightness + parseFloat(a))
  }));
}
var ja = P(Oa), L = ja;
function Ia(a, e, t) {
  if (e === "transparent") return t;
  if (t === "transparent") return e;
  if (a === 0) return t;
  var o = H(e), s = B({}, o, {
    alpha: typeof o.alpha == "number" ? o.alpha : 1
  }), n = H(t), l = B({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), d = s.alpha - l.alpha, f = parseFloat(a) * 2 - 1, p = f * d === -1 ? f : f + d, m = 1 + f * d, v = (p / m + 1) / 2, y = 1 - v, C = {
    red: Math.floor(s.red * v + l.red * y),
    green: Math.floor(s.green * v + l.green * y),
    blue: Math.floor(s.blue * v + l.blue * y),
    alpha: s.alpha * parseFloat(a) + l.alpha * (1 - parseFloat(a))
  };
  return ne(C);
}
var Ma = P(Ia), ar = Ma;
function $a(a, e) {
  if (e === "transparent") return e;
  var t = H(e), o = typeof t.alpha == "number" ? t.alpha : 1, s = B({}, t, {
    alpha: Y(0, 1, (o * 100 + parseFloat(a) * 100) / 100)
  });
  return ne(s);
}
P($a);
function La(a, e) {
  if (e === "transparent") return e;
  var t = A(e);
  return _(B({}, t, {
    saturation: Y(0, 1, t.saturation + parseFloat(a))
  }));
}
P(La);
function Ha(a, e) {
  return e === "transparent" ? e : _(B({}, A(e), {
    hue: parseFloat(a)
  }));
}
P(Ha);
function Ya(a, e) {
  return e === "transparent" ? e : _(B({}, A(e), {
    lightness: parseFloat(a)
  }));
}
P(Ya);
function Wa(a, e) {
  return e === "transparent" ? e : _(B({}, A(e), {
    saturation: parseFloat(a)
  }));
}
P(Wa);
function Ga(a, e) {
  return e === "transparent" ? e : ar(parseFloat(a), "rgb(0, 0, 0)", e);
}
P(Ga);
function za(a, e) {
  return e === "transparent" ? e : ar(parseFloat(a), "rgb(255, 255, 255)", e);
}
P(za);
function Na(a, e) {
  if (e === "transparent") return e;
  var t = H(e), o = typeof t.alpha == "number" ? t.alpha : 1, s = B({}, t, {
    alpha: Y(0, 1, +(o * 100 - parseFloat(a) * 100).toFixed(2) / 100)
  });
  return ne(s);
}
P(Na);
function Ua(a) {
  return {
    "00": L(0.42, a),
    "05": L(0.38, a),
    10: L(0.32, a),
    20: L(0.25, a),
    30: L(0.18, a),
    40: L(0.1, a),
    50: a,
    60: ee(0.07, a),
    70: ee(0.14, a),
    80: ee(0.2, a),
    90: ee(0.25, a)
  };
}
const qa = (a, e) => oa(e) ? {
  brand: a[e],
  isCustomHex: !1
} : (na(e), {
  brand: Ua(e),
  isCustomHex: !0
}), Se = (a, e) => {
  const t = a === "light" ? Ve : ta, { brand: o, isCustomHex: s } = qa(t, e);
  return {
    ...t,
    brand: a === "dark" && s ? t.purple : o
  };
}, Xa = (a) => {
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
  } = Se("dark", a), m = e[50], v = n[80], y = n["00"], C = Qe(m, v, y);
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
    textAccentContrast: C,
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
}, Ja = (a) => {
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
  } = Se("light", a), m = e[50], v = n[80], y = n["00"], C = Qe(m, v, y);
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
    textAccentContrast: C,
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
}, Ka = (a, e) => {
  const t = Ja(a), o = Xa(a);
  return e == "light" ? t : o;
}, Za = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Qa = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), Va = () => ({
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
var we = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function et() {
  if (Je) return G;
  Je = 1;
  var a = Ze, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, f, p) {
    var m, v = {}, y = null, C = null;
    p !== void 0 && (y = "" + p), f.key !== void 0 && (y = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (m in f) o.call(f, m) && !n.hasOwnProperty(m) && (v[m] = f[m]);
    if (d && d.defaultProps) for (m in f = d.defaultProps, f) v[m] === void 0 && (v[m] = f[m]);
    return { $$typeof: e, type: d, key: y, ref: C, props: v, _owner: s.current };
  }
  return G.Fragment = t, G.jsx = l, G.jsxs = l, G;
}
var z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function rt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var a = Ze, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), q = Symbol.iterator, oe = "@@iterator";
    function X(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = q && r[q] || r[oe];
      return typeof i == "function" ? i : null;
    }
    var R = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(r) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          u[c - 1] = arguments[c];
        tr("error", r, u);
      }
    }
    function tr(r, i, u) {
      {
        var c = R.ReactDebugCurrentFrame, b = c.getStackAddendum();
        b !== "" && (i += "%s", u = u.concat([b]));
        var F = u.map(function(g) {
          return String(g);
        });
        F.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, F);
      }
    }
    var nr = !1, or = !1, ir = !1, sr = !1, ur = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function lr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === n || ur || r === s || r === p || r === m || sr || r === C || nr || or || ir || typeof r == "object" && r !== null && (r.$$typeof === y || r.$$typeof === v || r.$$typeof === l || r.$$typeof === d || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === Ee || r.getModuleId !== void 0));
    }
    function fr(r, i, u) {
      var c = r.displayName;
      if (c)
        return c;
      var b = i.displayName || i.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function Ce(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
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
            return Ce(i) + ".Consumer";
          case l:
            var u = r;
            return Ce(u._context) + ".Provider";
          case f:
            return fr(r, r.render, "ForwardRef");
          case v:
            var c = r.displayName || null;
            return c !== null ? c : O(r.type) || "Memo";
          case y: {
            var b = r, F = b._payload, g = b._init;
            try {
              return O(g(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, xe, Be, Pe, De, Re, Te, ke;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function dr() {
      {
        if (W === 0) {
          xe = console.log, Be = console.info, Pe = console.warn, De = console.error, Re = console.group, Te = console.groupCollapsed, ke = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
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
    function cr() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, r, {
              value: xe
            }),
            info: j({}, r, {
              value: Be
            }),
            warn: j({}, r, {
              value: Pe
            }),
            error: j({}, r, {
              value: De
            }),
            group: j({}, r, {
              value: Re
            }),
            groupCollapsed: j({}, r, {
              value: Te
            }),
            groupEnd: j({}, r, {
              value: ke
            })
          });
        }
        W < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, se;
    function J(r, i, u) {
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
    var ue = !1, K;
    {
      var pr = typeof WeakMap == "function" ? WeakMap : Map;
      K = new pr();
    }
    function _e(r, i) {
      if (!r || ue)
        return "";
      {
        var u = K.get(r);
        if (u !== void 0)
          return u;
      }
      var c;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = ie.current, ie.current = null, dr();
      try {
        if (i) {
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
            } catch (k) {
              c = k;
            }
            Reflect.construct(r, [], g);
          } else {
            try {
              g.call();
            } catch (k) {
              c = k;
            }
            r.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            c = k;
          }
          r();
        }
      } catch (k) {
        if (k && c && typeof k.stack == "string") {
          for (var h = k.stack.split(`
`), E = c.stack.split(`
`), w = h.length - 1, S = E.length - 1; w >= 1 && S >= 0 && h[w] !== E[S]; )
            S--;
          for (; w >= 1 && S >= 0; w--, S--)
            if (h[w] !== E[S]) {
              if (w !== 1 || S !== 1)
                do
                  if (w--, S--, S < 0 || h[w] !== E[S]) {
                    var D = `
` + h[w].replace(" at new ", " at ");
                    return r.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", r.displayName)), typeof r == "function" && K.set(r, D), D;
                  }
                while (w >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ue = !1, ie.current = F, cr(), Error.prepareStackTrace = b;
      }
      var $ = r ? r.displayName || r.name : "", qe = $ ? J($) : "";
      return typeof r == "function" && K.set(r, qe), qe;
    }
    function hr(r, i, u) {
      return _e(r, !1);
    }
    function gr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function Z(r, i, u) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return _e(r, gr(r));
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
          case f:
            return hr(r.render);
          case v:
            return Z(r.type, i, u);
          case y: {
            var c = r, b = c._payload, F = c._init;
            try {
              return Z(F(b), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, Oe = {}, je = R.ReactDebugCurrentFrame;
    function V(r) {
      if (r) {
        var i = r._owner, u = Z(r.type, r._source, i ? i.type : null);
        je.setExtraStackFrame(u);
      } else
        je.setExtraStackFrame(null);
    }
    function mr(r, i, u, c, b) {
      {
        var F = Function.call.bind(Q);
        for (var g in r)
          if (F(r, g)) {
            var h = void 0;
            try {
              if (typeof r[g] != "function") {
                var E = Error((c || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              h = r[g](i, g, c, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              h = w;
            }
            h && !(h instanceof Error) && (V(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", u, g, typeof h), V(null)), h instanceof Error && !(h.message in Oe) && (Oe[h.message] = !0, V(b), x("Failed %s type: %s", u, h.message), V(null));
          }
      }
    }
    var br = Array.isArray;
    function le(r) {
      return br(r);
    }
    function vr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u;
      }
    }
    function yr(r) {
      try {
        return Ie(r), !1;
      } catch {
        return !0;
      }
    }
    function Ie(r) {
      return "" + r;
    }
    function Me(r) {
      if (yr(r))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(r)), Ie(r);
    }
    var $e = R.ReactCurrentOwner, Fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, He;
    function wr(r) {
      if (Q.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Sr(r) {
      if (Q.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Er(r, i) {
      typeof r.ref == "string" && $e.current;
    }
    function Cr(r, i) {
      {
        var u = function() {
          Le || (Le = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function xr(r, i) {
      {
        var u = function() {
          He || (He = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Br = function(r, i, u, c, b, F, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: r,
        key: i,
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
    function Pr(r, i, u, c, b) {
      {
        var F, g = {}, h = null, E = null;
        u !== void 0 && (Me(u), h = "" + u), Sr(i) && (Me(i.key), h = "" + i.key), wr(i) && (E = i.ref, Er(i, b));
        for (F in i)
          Q.call(i, F) && !Fr.hasOwnProperty(F) && (g[F] = i[F]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (F in w)
            g[F] === void 0 && (g[F] = w[F]);
        }
        if (h || E) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          h && Cr(g, S), E && xr(g, S);
        }
        return Br(r, h, E, b, c, $e.current, g);
      }
    }
    var fe = R.ReactCurrentOwner, Ye = R.ReactDebugCurrentFrame;
    function M(r) {
      if (r) {
        var i = r._owner, u = Z(r.type, r._source, i ? i.type : null);
        Ye.setExtraStackFrame(u);
      } else
        Ye.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function ce(r) {
      return typeof r == "object" && r !== null && r.$$typeof === e;
    }
    function We() {
      {
        if (fe.current) {
          var r = O(fe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Dr(r) {
      return "";
    }
    var Ge = {};
    function Rr(r) {
      {
        var i = We();
        if (!i) {
          var u = typeof r == "string" ? r : r.displayName || r.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function ze(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var u = Rr(i);
        if (Ge[u])
          return;
        Ge[u] = !0;
        var c = "";
        r && r._owner && r._owner !== fe.current && (c = " It was passed a child from " + O(r._owner.type) + "."), M(r), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, c), M(null);
      }
    }
    function Ne(r, i) {
      {
        if (typeof r != "object")
          return;
        if (le(r))
          for (var u = 0; u < r.length; u++) {
            var c = r[u];
            ce(c) && ze(c, i);
          }
        else if (ce(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var b = X(r);
          if (typeof b == "function" && b !== r.entries)
            for (var F = b.call(r), g; !(g = F.next()).done; )
              ce(g.value) && ze(g.value, i);
        }
      }
    }
    function Tr(r) {
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
          var c = O(i);
          mr(u, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !de) {
          de = !0;
          var b = O(i);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(r) {
      {
        for (var i = Object.keys(r.props), u = 0; u < i.length; u++) {
          var c = i[u];
          if (c !== "children" && c !== "key") {
            M(r), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), M(null);
            break;
          }
        }
        r.ref !== null && (M(r), x("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function Ue(r, i, u, c, b, F) {
      {
        var g = lr(r);
        if (!g) {
          var h = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = Dr();
          E ? h += E : h += We();
          var w;
          r === null ? w = "null" : le(r) ? w = "array" : r !== void 0 && r.$$typeof === e ? (w = "<" + (O(r.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, h);
        }
        var S = Pr(r, i, u, b, F);
        if (S == null)
          return S;
        if (g) {
          var D = i.children;
          if (D !== void 0)
            if (c)
              if (le(D)) {
                for (var $ = 0; $ < D.length; $++)
                  Ne(D[$], r);
                Object.freeze && Object.freeze(D);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(D, r);
        }
        return r === o ? kr(S) : Tr(S), S;
      }
    }
    function Ar(r, i, u) {
      return Ue(r, i, u, !0);
    }
    function _r(r, i, u) {
      return Ue(r, i, u, !1);
    }
    var Or = _r, jr = Ar;
    z.Fragment = o, z.jsx = Or, z.jsxs = jr;
  }()), z;
}
process.env.NODE_ENV === "production" ? we.exports = et() : we.exports = rt();
var re = we.exports;
const at = Ir`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, st = ({ brandOption: a, mode: e, children: t }) => {
  const o = Se(e, a), s = $r(), n = Za(), l = Qa(), d = Va(), f = Ka(a, e), m = { constants: {
    ...s,
    ...n,
    ...l,
    ...d
  }, mode: e, brand: a, vars: f, palettes: o };
  return /* @__PURE__ */ re.jsxs(re.Fragment, { children: [
    /* @__PURE__ */ re.jsx(at, {}),
    /* @__PURE__ */ re.jsx(Mr, { theme: m, children: t })
  ] });
};
export {
  st as SaguaroThemeProvider,
  ot as getPrimaryPreviewColor,
  it as getSecondaryPreviewColor,
  oa as isPalette,
  $r as useBorderTokens,
  Ka as useColorTokens,
  Za as useFontTokens,
  Qa as useHeightTokens,
  Se as usePaletteBoard,
  Va as useSpacingTokens
};
