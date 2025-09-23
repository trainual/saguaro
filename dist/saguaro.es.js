import Je from "react";
import { createGlobalStyle as Or, ThemeProvider as kr } from "styled-components";
const jr = () => ({
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
}), fe = { r: 0.2126, g: 0.7152, b: 0.0722 }, Ir = 255, Mr = (r) => {
  const e = r.length === 4 ? `#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}` : r, [n, o, i] = [1, 3, 5].map((t) => parseInt(e.slice(t, t + 2), 16));
  return { r: n, g: o, b: i };
}, Ke = (r, e, n) => {
  const { r: o, g: i, b: t } = Mr(r);
  return (o * fe.r + i * fe.g + t * fe.b) / Ir > 0.62 ? e : n;
}, $r = {
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
}, Lr = {
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
}, Hr = {
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
}, Wr = {
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
}, Gr = {
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
}, Nr = {
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
}, zr = {
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
  blue: $r,
  green: Lr,
  magenta: Hr,
  neutral: Yr,
  orange: Wr,
  purple: Gr,
  red: Nr,
  yellow: zr
}, Ur = {
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
}, qr = {
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
}, Vr = {
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
}, ea = {
  blue: Ur,
  green: qr,
  magenta: Vr,
  neutral: Xr,
  orange: Jr,
  purple: Kr,
  red: Zr,
  yellow: Qr
};
function ra(r) {
  if (!r.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function aa(r) {
  return Object.keys(Ze).includes(r);
}
function at(r, e) {
  return e["preview" + Qe(r) + "Primary"];
}
function tt(r, e) {
  return e["preview" + Qe(r) + "Secondary"];
}
const Qe = (r) => r.charAt(0).toUpperCase() + r.slice(1);
function B() {
  return B = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n) ({}).hasOwnProperty.call(n, o) && (r[o] = n[o]);
    }
    return r;
  }, B.apply(null, arguments);
}
function ta(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function U(r, e) {
  return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, U(r, e);
}
function na(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, U(r, e);
}
function me(r) {
  return me = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, me(r);
}
function oa(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function er() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (er = function() {
    return !!r;
  })();
}
function sa(r, e, n) {
  if (er()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var i = new (r.bind.apply(r, o))();
  return n && U(i, n.prototype), i;
}
function be(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return be = function(o) {
    if (o === null || !oa(o)) return o;
    if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
    if (e !== void 0) {
      if (e.has(o)) return e.get(o);
      e.set(o, i);
    }
    function i() {
      return sa(o, arguments, me(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), U(i, o);
  }, be(r);
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
function ua() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++)
    e[n] = arguments[n];
  var o = e[0], i = [], t;
  for (t = 1; t < e.length; t += 1)
    i.push(e[t]);
  return i.forEach(function(l) {
    o = o.replace(/%[a-z]/, l);
  }), o;
}
var R = /* @__PURE__ */ function(r) {
  na(e, r);
  function e(n) {
    var o;
    if (process.env.NODE_ENV === "production")
      o = r.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + n + " for more information.") || this;
    else {
      for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
        t[l - 1] = arguments[l];
      o = r.call(this, ua.apply(void 0, [ia[n]].concat(t))) || this;
    }
    return ta(o);
  }
  return e;
}(/* @__PURE__ */ be(Error));
function de(r) {
  return Math.round(r * 255);
}
function la(r, e, n) {
  return de(r) + "," + de(e) + "," + de(n);
}
function re(r, e, n, o) {
  if (o === void 0 && (o = la), e === 0)
    return o(n, n, n);
  var i = (r % 360 + 360) % 360 / 60, t = (1 - Math.abs(2 * n - 1)) * e, l = t * (1 - Math.abs(i % 2 - 1)), d = 0, f = 0, c = 0;
  i >= 0 && i < 1 ? (d = t, f = l) : i >= 1 && i < 2 ? (d = l, f = t) : i >= 2 && i < 3 ? (f = t, c = l) : i >= 3 && i < 4 ? (f = l, c = t) : i >= 4 && i < 5 ? (d = l, c = t) : i >= 5 && i < 6 && (d = t, c = l);
  var h = n - t / 2, v = d + h, g = f + h, S = c + h;
  return o(v, g, S);
}
var Ue = {
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
function fa(r) {
  if (typeof r != "string") return r;
  var e = r.toLowerCase();
  return Ue[e] ? "#" + Ue[e] : r;
}
var da = /^#[a-fA-F0-9]{6}$/, ca = /^#[a-fA-F0-9]{8}$/, pa = /^#[a-fA-F0-9]{3}$/, ha = /^#[a-fA-F0-9]{4}$/, ce = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ga = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, ma = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, ba = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function q(r) {
  if (typeof r != "string")
    throw new R(3);
  var e = fa(r);
  if (e.match(da))
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16)
    };
  if (e.match(ca)) {
    var n = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: n
    };
  }
  if (e.match(pa))
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16)
    };
  if (e.match(ha)) {
    var o = parseFloat((parseInt("" + e[4] + e[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16),
      alpha: o
    };
  }
  var i = ce.exec(e);
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10)
    };
  var t = ga.exec(e.substring(0, 50));
  if (t)
    return {
      red: parseInt("" + t[1], 10),
      green: parseInt("" + t[2], 10),
      blue: parseInt("" + t[3], 10),
      alpha: parseFloat("" + t[4]) > 1 ? parseFloat("" + t[4]) / 100 : parseFloat("" + t[4])
    };
  var l = ma.exec(e);
  if (l) {
    var d = parseInt("" + l[1], 10), f = parseInt("" + l[2], 10) / 100, c = parseInt("" + l[3], 10) / 100, h = "rgb(" + re(d, f, c) + ")", v = ce.exec(h);
    if (!v)
      throw new R(4, e, h);
    return {
      red: parseInt("" + v[1], 10),
      green: parseInt("" + v[2], 10),
      blue: parseInt("" + v[3], 10)
    };
  }
  var g = ba.exec(e.substring(0, 50));
  if (g) {
    var S = parseInt("" + g[1], 10), M = parseInt("" + g[2], 10) / 100, V = parseInt("" + g[3], 10) / 100, N = "rgb(" + re(S, M, V) + ")", j = ce.exec(N);
    if (!j)
      throw new R(4, e, N);
    return {
      red: parseInt("" + j[1], 10),
      green: parseInt("" + j[2], 10),
      blue: parseInt("" + j[3], 10),
      alpha: parseFloat("" + g[4]) > 1 ? parseFloat("" + g[4]) / 100 : parseFloat("" + g[4])
    };
  }
  throw new R(5);
}
function va(r) {
  var e = r.red / 255, n = r.green / 255, o = r.blue / 255, i = Math.max(e, n, o), t = Math.min(e, n, o), l = (i + t) / 2;
  if (i === t)
    return r.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: l,
      alpha: r.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: l
    };
  var d, f = i - t, c = l > 0.5 ? f / (2 - i - t) : f / (i + t);
  switch (i) {
    case e:
      d = (n - o) / f + (n < o ? 6 : 0);
      break;
    case n:
      d = (o - e) / f + 2;
      break;
    default:
      d = (e - n) / f + 4;
      break;
  }
  return d *= 60, r.alpha !== void 0 ? {
    hue: d,
    saturation: c,
    lightness: l,
    alpha: r.alpha
  } : {
    hue: d,
    saturation: c,
    lightness: l
  };
}
function O(r) {
  return va(q(r));
}
var ya = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, ve = ya;
function I(r) {
  var e = r.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function pe(r) {
  return I(Math.round(r * 255));
}
function wa(r, e, n) {
  return ve("#" + pe(r) + pe(e) + pe(n));
}
function rr(r, e, n) {
  return re(r, e, n, wa);
}
function Fa(r, e, n) {
  if (typeof r == "object" && e === void 0 && n === void 0)
    return rr(r.hue, r.saturation, r.lightness);
  throw new R(1);
}
function Ca(r, e, n, o) {
  if (typeof r == "object" && e === void 0 && n === void 0 && o === void 0)
    return r.alpha >= 1 ? rr(r.hue, r.saturation, r.lightness) : "rgba(" + re(r.hue, r.saturation, r.lightness) + "," + r.alpha + ")";
  throw new R(2);
}
function ar(r, e, n) {
  if (typeof r == "number" && typeof e == "number" && typeof n == "number")
    return ve("#" + I(r) + I(e) + I(n));
  if (typeof r == "object" && e === void 0 && n === void 0)
    return ve("#" + I(r.red) + I(r.green) + I(r.blue));
  throw new R(6);
}
function ae(r, e, n, o) {
  if (typeof r == "object" && e === void 0 && n === void 0 && o === void 0)
    return r.alpha >= 1 ? ar(r.red, r.green, r.blue) : "rgba(" + r.red + "," + r.green + "," + r.blue + "," + r.alpha + ")";
  throw new R(7);
}
var Ea = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Sa = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, xa = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Ba = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function k(r) {
  if (typeof r != "object") throw new R(8);
  if (Sa(r)) return ae(r);
  if (Ea(r)) return ar(r);
  if (Ba(r)) return Ca(r);
  if (xa(r)) return Fa(r);
  throw new R(8);
}
function tr(r, e, n) {
  return function() {
    var i = n.concat(Array.prototype.slice.call(arguments));
    return i.length >= e ? r.apply(this, i) : tr(r, e, i);
  };
}
function D(r) {
  return tr(r, r.length, []);
}
function Pa(r, e) {
  if (e === "transparent") return e;
  var n = O(e);
  return k(B({}, n, {
    hue: n.hue + parseFloat(r)
  }));
}
D(Pa);
function G(r, e, n) {
  return Math.max(r, Math.min(e, n));
}
function Da(r, e) {
  if (e === "transparent") return e;
  var n = O(e);
  return k(B({}, n, {
    lightness: G(0, 1, n.lightness - parseFloat(r))
  }));
}
var Ra = D(Da), Q = Ra;
function Ta(r, e) {
  if (e === "transparent") return e;
  var n = O(e);
  return k(B({}, n, {
    saturation: G(0, 1, n.saturation - parseFloat(r))
  }));
}
D(Ta);
function _a(r, e) {
  if (e === "transparent") return e;
  var n = O(e);
  return k(B({}, n, {
    lightness: G(0, 1, n.lightness + parseFloat(r))
  }));
}
var Aa = D(_a), Y = Aa;
function Oa(r, e, n) {
  if (e === "transparent") return n;
  if (n === "transparent") return e;
  if (r === 0) return n;
  var o = q(e), i = B({}, o, {
    alpha: typeof o.alpha == "number" ? o.alpha : 1
  }), t = q(n), l = B({}, t, {
    alpha: typeof t.alpha == "number" ? t.alpha : 1
  }), d = i.alpha - l.alpha, f = parseFloat(r) * 2 - 1, c = f * d === -1 ? f : f + d, h = 1 + f * d, v = (c / h + 1) / 2, g = 1 - v, S = {
    red: Math.floor(i.red * v + l.red * g),
    green: Math.floor(i.green * v + l.green * g),
    blue: Math.floor(i.blue * v + l.blue * g),
    alpha: i.alpha * parseFloat(r) + l.alpha * (1 - parseFloat(r))
  };
  return ae(S);
}
var ka = D(Oa), nr = ka;
function ja(r, e) {
  if (e === "transparent") return e;
  var n = q(e), o = typeof n.alpha == "number" ? n.alpha : 1, i = B({}, n, {
    alpha: G(0, 1, (o * 100 + parseFloat(r) * 100) / 100)
  });
  return ae(i);
}
D(ja);
function Ia(r, e) {
  if (e === "transparent") return e;
  var n = O(e);
  return k(B({}, n, {
    saturation: G(0, 1, n.saturation + parseFloat(r))
  }));
}
D(Ia);
function Ma(r, e) {
  return e === "transparent" ? e : k(B({}, O(e), {
    hue: parseFloat(r)
  }));
}
D(Ma);
function $a(r, e) {
  return e === "transparent" ? e : k(B({}, O(e), {
    lightness: parseFloat(r)
  }));
}
D($a);
function La(r, e) {
  return e === "transparent" ? e : k(B({}, O(e), {
    saturation: parseFloat(r)
  }));
}
D(La);
function Ha(r, e) {
  return e === "transparent" ? e : nr(parseFloat(r), "rgb(0, 0, 0)", e);
}
D(Ha);
function Ya(r, e) {
  return e === "transparent" ? e : nr(parseFloat(r), "rgb(255, 255, 255)", e);
}
D(Ya);
function Wa(r, e) {
  if (e === "transparent") return e;
  var n = q(e), o = typeof n.alpha == "number" ? n.alpha : 1, i = B({}, n, {
    alpha: G(0, 1, +(o * 100 - parseFloat(r) * 100).toFixed(2) / 100)
  });
  return ae(i);
}
D(Wa);
function Ga(r) {
  return {
    "00": Y(0.42, r),
    "05": Y(0.38, r),
    10: Y(0.32, r),
    20: Y(0.25, r),
    30: Y(0.18, r),
    40: Y(0.1, r),
    50: r,
    60: Q(0.07, r),
    70: Q(0.14, r),
    80: Q(0.2, r),
    90: Q(0.25, r)
  };
}
const Na = (r, e) => aa(e) ? {
  brand: r[e],
  isCustomHex: !1
} : (ra(e), {
  brand: Ga(e),
  isCustomHex: !0
}), we = (r, e) => {
  const n = r === "light" ? Ze : ea, { brand: o, isCustomHex: i } = Na(n, e);
  return {
    ...n,
    brand: r === "dark" && i ? n.purple : o
  };
}, za = (r) => {
  const {
    brand: e,
    blue: n,
    green: o,
    magenta: i,
    neutral: t,
    orange: l,
    purple: d,
    red: f,
    yellow: c
  } = we("dark", r), h = e[50], v = t[80], g = t["00"], S = Ke(h, v, g);
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
    textSurface: g,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: h,
    accentPrimaryHover: e[60],
    accentPrimaryPressed: e[70],
    accentSubdued1: e["00"],
    accentSubdued2: e["05"],
    accentSubdued3: e[10],
    accentSubdued4: e[20],
    accentStrong1: e[80],
    accentStrong2: e[90],
    textAccentContrast: S,
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
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, Ua = (r) => {
  const {
    brand: e,
    blue: n,
    green: o,
    magenta: i,
    neutral: t,
    orange: l,
    purple: d,
    red: f,
    yellow: c
  } = we("light", r), h = e[50], v = t[80], g = t["00"], S = Ke(h, v, g);
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
    textSurface: g,
    textHover: t[90],
    textDisabled: t[30],
    // Accent
    accentPrimaryDefault: h,
    accentPrimaryHover: e[60],
    accentPrimaryPressed: e[70],
    accentSubdued1: e["00"],
    accentSubdued2: e["05"],
    accentSubdued3: e[10],
    accentSubdued4: e[20],
    accentStrong1: e[80],
    accentStrong2: e[90],
    textAccentContrast: S,
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
    thisIsAOneOffGreyAndWillMakeYouCryIfUsed: "#C5D3DA"
  };
}, qa = (r, e) => {
  const n = Ua(r), o = za(r);
  return e == "light" ? n : o;
}, Va = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Xa = () => ({
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
}), Ja = () => ({
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
var ye = { exports: {} }, W = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var he, qe;
function or() {
  if (qe) return he;
  qe = 1;
  var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(t) {
    if (t == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var t = new String("abc");
      if (t[5] = "de", Object.getOwnPropertyNames(t)[0] === "5")
        return !1;
      for (var l = {}, d = 0; d < 10; d++)
        l["_" + String.fromCharCode(d)] = d;
      var f = Object.getOwnPropertyNames(l).map(function(h) {
        return l[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        c[h] = h;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return he = i() ? Object.assign : function(t, l) {
    for (var d, f = o(t), c, h = 1; h < arguments.length; h++) {
      d = Object(arguments[h]);
      for (var v in d)
        e.call(d, v) && (f[v] = d[v]);
      if (r) {
        c = r(d);
        for (var g = 0; g < c.length; g++)
          n.call(d, c[g]) && (f[c[g]] = d[c[g]]);
      }
    }
    return f;
  }, he;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Ka() {
  if (Ve) return W;
  Ve = 1, or();
  var r = Je, e = 60103;
  if (W.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    e = n("react.element"), W.Fragment = n("react.fragment");
  }
  var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = Object.prototype.hasOwnProperty, t = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, f, c) {
    var h, v = {}, g = null, S = null;
    c !== void 0 && (g = "" + c), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (h in f) i.call(f, h) && !t.hasOwnProperty(h) && (v[h] = f[h]);
    if (d && d.defaultProps) for (h in f = d.defaultProps, f) v[h] === void 0 && (v[h] = f[h]);
    return { $$typeof: e, type: d, key: g, ref: S, props: v, _owner: o.current };
  }
  return W.jsx = l, W.jsxs = l, W;
}
var ge = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Za() {
  return Xe || (Xe = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var e = Je, n = or(), o = 60103, i = 60106;
      r.Fragment = 60107;
      var t = 60108, l = 60114, d = 60109, f = 60110, c = 60112, h = 60113, v = 60120, g = 60115, S = 60116, M = 60121, V = 60122, N = 60117, j = 60129, Fe = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var C = Symbol.for;
        o = C("react.element"), i = C("react.portal"), r.Fragment = C("react.fragment"), t = C("react.strict_mode"), l = C("react.profiler"), d = C("react.provider"), f = C("react.context"), c = C("react.forward_ref"), h = C("react.suspense"), v = C("react.suspense_list"), g = C("react.memo"), S = C("react.lazy"), M = C("react.block"), V = C("react.server.block"), N = C("react.fundamental"), C("react.scope"), C("react.opaque.id"), j = C("react.debug_trace_mode"), C("react.offscreen"), Fe = C("react.legacy_hidden");
      }
      var Ce = typeof Symbol == "function" && Symbol.iterator, sr = "@@iterator";
      function ir(a) {
        if (a === null || typeof a != "object")
          return null;
        var s = Ce && a[Ce] || a[sr];
        return typeof s == "function" ? s : null;
      }
      var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function P(a) {
        {
          for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
            u[p - 1] = arguments[p];
          ur("error", a, u);
        }
      }
      function ur(a, s, u) {
        {
          var p = $.ReactDebugCurrentFrame, w = p.getStackAddendum();
          w !== "" && (s += "%s", u = u.concat([w]));
          var y = u.map(function(b) {
            return "" + b;
          });
          y.unshift("Warning: " + s), Function.prototype.apply.call(console[a], console, y);
        }
      }
      var lr = !1;
      function fr(a) {
        return !!(typeof a == "string" || typeof a == "function" || a === r.Fragment || a === l || a === j || a === t || a === h || a === v || a === Fe || lr || typeof a == "object" && a !== null && (a.$$typeof === S || a.$$typeof === g || a.$$typeof === d || a.$$typeof === f || a.$$typeof === c || a.$$typeof === N || a.$$typeof === M || a[0] === V));
      }
      function dr(a, s, u) {
        var p = s.displayName || s.name || "";
        return a.displayName || (p !== "" ? u + "(" + p + ")" : u);
      }
      function Ee(a) {
        return a.displayName || "Context";
      }
      function A(a) {
        if (a == null)
          return null;
        if (typeof a.tag == "number" && P("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof a == "function")
          return a.displayName || a.name || null;
        if (typeof a == "string")
          return a;
        switch (a) {
          case r.Fragment:
            return "Fragment";
          case i:
            return "Portal";
          case l:
            return "Profiler";
          case t:
            return "StrictMode";
          case h:
            return "Suspense";
          case v:
            return "SuspenseList";
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case f:
              var s = a;
              return Ee(s) + ".Consumer";
            case d:
              var u = a;
              return Ee(u._context) + ".Provider";
            case c:
              return dr(a, a.render, "ForwardRef");
            case g:
              return A(a.type);
            case M:
              return A(a._render);
            case S: {
              var p = a, w = p._payload, y = p._init;
              try {
                return A(y(w));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var z = 0, Se, xe, Be, Pe, De, Re, Te;
      function _e() {
      }
      _e.__reactDisabledLog = !0;
      function cr() {
        {
          if (z === 0) {
            Se = console.log, xe = console.info, Be = console.warn, Pe = console.error, De = console.group, Re = console.groupCollapsed, Te = console.groupEnd;
            var a = {
              configurable: !0,
              enumerable: !0,
              value: _e,
              writable: !0
            };
            Object.defineProperties(console, {
              info: a,
              log: a,
              warn: a,
              error: a,
              group: a,
              groupCollapsed: a,
              groupEnd: a
            });
          }
          z++;
        }
      }
      function pr() {
        {
          if (z--, z === 0) {
            var a = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: n({}, a, {
                value: Se
              }),
              info: n({}, a, {
                value: xe
              }),
              warn: n({}, a, {
                value: Be
              }),
              error: n({}, a, {
                value: Pe
              }),
              group: n({}, a, {
                value: De
              }),
              groupCollapsed: n({}, a, {
                value: Re
              }),
              groupEnd: n({}, a, {
                value: Te
              })
            });
          }
          z < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var te = $.ReactCurrentDispatcher, ne;
      function X(a, s, u) {
        {
          if (ne === void 0)
            try {
              throw Error();
            } catch (w) {
              var p = w.stack.trim().match(/\n( *(at )?)/);
              ne = p && p[1] || "";
            }
          return `
` + ne + a;
        }
      }
      var oe = !1, J;
      {
        var hr = typeof WeakMap == "function" ? WeakMap : Map;
        J = new hr();
      }
      function Ae(a, s) {
        if (!a || oe)
          return "";
        {
          var u = J.get(a);
          if (u !== void 0)
            return u;
        }
        var p;
        oe = !0;
        var w = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var y;
        y = te.current, te.current = null, cr();
        try {
          if (s) {
            var b = function() {
              throw Error();
            };
            if (Object.defineProperty(b.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(b, []);
              } catch (_) {
                p = _;
              }
              Reflect.construct(a, [], b);
            } else {
              try {
                b.call();
              } catch (_) {
                p = _;
              }
              a.call(b.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (_) {
              p = _;
            }
            a();
          }
        } catch (_) {
          if (_ && p && typeof _.stack == "string") {
            for (var m = _.stack.split(`
`), x = p.stack.split(`
`), F = m.length - 1, E = x.length - 1; F >= 1 && E >= 0 && m[F] !== x[E]; )
              E--;
            for (; F >= 1 && E >= 0; F--, E--)
              if (m[F] !== x[E]) {
                if (F !== 1 || E !== 1)
                  do
                    if (F--, E--, E < 0 || m[F] !== x[E]) {
                      var T = `
` + m[F].replace(" at new ", " at ");
                      return typeof a == "function" && J.set(a, T), T;
                    }
                  while (F >= 1 && E >= 0);
                break;
              }
          }
        } finally {
          oe = !1, te.current = y, pr(), Error.prepareStackTrace = w;
        }
        var H = a ? a.displayName || a.name : "", ze = H ? X(H) : "";
        return typeof a == "function" && J.set(a, ze), ze;
      }
      function Oe(a, s, u) {
        return Ae(a, !1);
      }
      function gr(a) {
        var s = a.prototype;
        return !!(s && s.isReactComponent);
      }
      function K(a, s, u) {
        if (a == null)
          return "";
        if (typeof a == "function")
          return Ae(a, gr(a));
        if (typeof a == "string")
          return X(a);
        switch (a) {
          case h:
            return X("Suspense");
          case v:
            return X("SuspenseList");
        }
        if (typeof a == "object")
          switch (a.$$typeof) {
            case c:
              return Oe(a.render);
            case g:
              return K(a.type, s, u);
            case M:
              return Oe(a._render);
            case S: {
              var p = a, w = p._payload, y = p._init;
              try {
                return K(y(w), s, u);
              } catch {
              }
            }
          }
        return "";
      }
      var ke = {}, je = $.ReactDebugCurrentFrame;
      function Z(a) {
        if (a) {
          var s = a._owner, u = K(a.type, a._source, s ? s.type : null);
          je.setExtraStackFrame(u);
        } else
          je.setExtraStackFrame(null);
      }
      function mr(a, s, u, p, w) {
        {
          var y = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var b in a)
            if (y(a, b)) {
              var m = void 0;
              try {
                if (typeof a[b] != "function") {
                  var x = Error((p || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw x.name = "Invariant Violation", x;
                }
                m = a[b](s, b, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (F) {
                m = F;
              }
              m && !(m instanceof Error) && (Z(w), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, b, typeof m), Z(null)), m instanceof Error && !(m.message in ke) && (ke[m.message] = !0, Z(w), P("Failed %s type: %s", u, m.message), Z(null));
            }
        }
      }
      var Ie = $.ReactCurrentOwner, se = Object.prototype.hasOwnProperty, br = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Me, $e;
      function vr(a) {
        if (se.call(a, "ref")) {
          var s = Object.getOwnPropertyDescriptor(a, "ref").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.ref !== void 0;
      }
      function yr(a) {
        if (se.call(a, "key")) {
          var s = Object.getOwnPropertyDescriptor(a, "key").get;
          if (s && s.isReactWarning)
            return !1;
        }
        return a.key !== void 0;
      }
      function wr(a, s) {
        typeof a.ref == "string" && Ie.current;
      }
      function Fr(a, s) {
        {
          var u = function() {
            Me || (Me = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "key", {
            get: u,
            configurable: !0
          });
        }
      }
      function Cr(a, s) {
        {
          var u = function() {
            $e || ($e = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
          };
          u.isReactWarning = !0, Object.defineProperty(a, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var Er = function(a, s, u, p, w, y, b) {
        var m = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: o,
          // Built-in properties that belong on the element
          type: a,
          key: s,
          ref: u,
          props: b,
          // Record the component responsible for creating this element.
          _owner: y
        };
        return m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(m, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(m, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: w
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      };
      function Sr(a, s, u, p, w) {
        {
          var y, b = {}, m = null, x = null;
          u !== void 0 && (m = "" + u), yr(s) && (m = "" + s.key), vr(s) && (x = s.ref, wr(s, w));
          for (y in s)
            se.call(s, y) && !br.hasOwnProperty(y) && (b[y] = s[y]);
          if (a && a.defaultProps) {
            var F = a.defaultProps;
            for (y in F)
              b[y] === void 0 && (b[y] = F[y]);
          }
          if (m || x) {
            var E = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
            m && Fr(b, E), x && Cr(b, E);
          }
          return Er(a, m, x, w, p, Ie.current, b);
        }
      }
      var ie = $.ReactCurrentOwner, Le = $.ReactDebugCurrentFrame;
      function L(a) {
        if (a) {
          var s = a._owner, u = K(a.type, a._source, s ? s.type : null);
          Le.setExtraStackFrame(u);
        } else
          Le.setExtraStackFrame(null);
      }
      var ue;
      ue = !1;
      function le(a) {
        return typeof a == "object" && a !== null && a.$$typeof === o;
      }
      function He() {
        {
          if (ie.current) {
            var a = A(ie.current.type);
            if (a)
              return `

Check the render method of \`` + a + "`.";
          }
          return "";
        }
      }
      function xr(a) {
        return "";
      }
      var Ye = {};
      function Br(a) {
        {
          var s = He();
          if (!s) {
            var u = typeof a == "string" ? a : a.displayName || a.name;
            u && (s = `

Check the top-level render call using <` + u + ">.");
          }
          return s;
        }
      }
      function We(a, s) {
        {
          if (!a._store || a._store.validated || a.key != null)
            return;
          a._store.validated = !0;
          var u = Br(s);
          if (Ye[u])
            return;
          Ye[u] = !0;
          var p = "";
          a && a._owner && a._owner !== ie.current && (p = " It was passed a child from " + A(a._owner.type) + "."), L(a), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), L(null);
        }
      }
      function Ge(a, s) {
        {
          if (typeof a != "object")
            return;
          if (Array.isArray(a))
            for (var u = 0; u < a.length; u++) {
              var p = a[u];
              le(p) && We(p, s);
            }
          else if (le(a))
            a._store && (a._store.validated = !0);
          else if (a) {
            var w = ir(a);
            if (typeof w == "function" && w !== a.entries)
              for (var y = w.call(a), b; !(b = y.next()).done; )
                le(b.value) && We(b.value, s);
          }
        }
      }
      function Pr(a) {
        {
          var s = a.type;
          if (s == null || typeof s == "string")
            return;
          var u;
          if (typeof s == "function")
            u = s.propTypes;
          else if (typeof s == "object" && (s.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          s.$$typeof === g))
            u = s.propTypes;
          else
            return;
          if (u) {
            var p = A(s);
            mr(u, a.props, "prop", p, a);
          } else if (s.PropTypes !== void 0 && !ue) {
            ue = !0;
            var w = A(s);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
          }
          typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Dr(a) {
        {
          for (var s = Object.keys(a.props), u = 0; u < s.length; u++) {
            var p = s[u];
            if (p !== "children" && p !== "key") {
              L(a), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), L(null);
              break;
            }
          }
          a.ref !== null && (L(a), P("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
        }
      }
      function Ne(a, s, u, p, w, y) {
        {
          var b = fr(a);
          if (!b) {
            var m = "";
            (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var x = xr();
            x ? m += x : m += He();
            var F;
            a === null ? F = "null" : Array.isArray(a) ? F = "array" : a !== void 0 && a.$$typeof === o ? (F = "<" + (A(a.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : F = typeof a, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, m);
          }
          var E = Sr(a, s, u, w, y);
          if (E == null)
            return E;
          if (b) {
            var T = s.children;
            if (T !== void 0)
              if (p)
                if (Array.isArray(T)) {
                  for (var H = 0; H < T.length; H++)
                    Ge(T[H], a);
                  Object.freeze && Object.freeze(T);
                } else
                  P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ge(T, a);
          }
          return a === r.Fragment ? Dr(E) : Pr(E), E;
        }
      }
      function Rr(a, s, u) {
        return Ne(a, s, u, !0);
      }
      function Tr(a, s, u) {
        return Ne(a, s, u, !1);
      }
      var _r = Tr, Ar = Rr;
      r.jsx = _r, r.jsxs = Ar;
    }();
  }(ge)), ge;
}
process.env.NODE_ENV === "production" ? ye.exports = Ka() : ye.exports = Za();
var ee = ye.exports;
const Qa = Or`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, nt = ({ brandOption: r, mode: e, children: n }) => {
  const o = we(e, r), i = jr(), t = Va(), l = Xa(), d = Ja(), f = qa(r, e), h = { constants: {
    ...i,
    ...t,
    ...l,
    ...d
  }, mode: e, brand: r, vars: f, palettes: o };
  return /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
    /* @__PURE__ */ ee.jsx(Qa, {}),
    /* @__PURE__ */ ee.jsx(kr, { theme: h, children: n })
  ] });
};
export {
  nt as SaguaroThemeProvider,
  at as getPrimaryPreviewColor,
  tt as getSecondaryPreviewColor,
  aa as isPalette,
  jr as useBorderTokens,
  qa as useColorTokens,
  Va as useFontTokens,
  Xa as useHeightTokens,
  we as usePaletteBoard,
  Ja as useSpacingTokens
};
