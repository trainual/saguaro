const Ye = () => ({
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
});
function w() {
  return w = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var t in o)
        Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
    }
    return r;
  }, w.apply(this, arguments);
}
function G(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function y(r, e) {
  return y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, y(r, e);
}
function Y(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, y(r, e);
}
function S(r) {
  return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, S(r);
}
function J(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function K() {
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
function C(r, e, o) {
  return K() ? C = Reflect.construct.bind() : C = function(n, c, u) {
    var a = [null];
    a.push.apply(a, c);
    var p = Function.bind.apply(n, a), s = new p();
    return u && y(s, u.prototype), s;
  }, C.apply(null, arguments);
}
function P(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return P = function(t) {
    if (t === null || !J(t))
      return t;
    if (typeof t != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(t))
        return e.get(t);
      e.set(t, n);
    }
    function n() {
      return C(t, arguments, S(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), y(n, t);
  }, P(r);
}
var Q = {
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
function U() {
  for (var r = arguments.length, e = new Array(r), o = 0; o < r; o++)
    e[o] = arguments[o];
  var t = e[0], n = [], c;
  for (c = 1; c < e.length; c += 1)
    n.push(e[c]);
  return n.forEach(function(u) {
    t = t.replace(/%[a-z]/, u);
  }), t;
}
var m = /* @__PURE__ */ function(r) {
  Y(e, r);
  function e(o) {
    var t;
    if (process.env.NODE_ENV === "production")
      t = r.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o + " for more information.") || this;
    else {
      for (var n = arguments.length, c = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
        c[u - 1] = arguments[u];
      t = r.call(this, U.apply(void 0, [Q[o]].concat(c))) || this;
    }
    return G(t);
  }
  return e;
}(/* @__PURE__ */ P(Error));
function T(r) {
  return Math.round(r * 255);
}
function Z(r, e, o) {
  return T(r) + "," + T(e) + "," + T(o);
}
function x(r, e, o, t) {
  if (t === void 0 && (t = Z), e === 0)
    return t(o, o, o);
  var n = (r % 360 + 360) % 360 / 60, c = (1 - Math.abs(2 * o - 1)) * e, u = c * (1 - Math.abs(n % 2 - 1)), a = 0, p = 0, s = 0;
  n >= 0 && n < 1 ? (a = c, p = u) : n >= 1 && n < 2 ? (a = u, p = c) : n >= 2 && n < 3 ? (p = c, s = u) : n >= 3 && n < 4 ? (p = u, s = c) : n >= 4 && n < 5 ? (a = u, s = c) : n >= 5 && n < 6 && (a = c, s = u);
  var b = o - c / 2, i = a + b, l = p + b, f = s + b;
  return t(i, l, f);
}
var $ = {
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
function V(r) {
  if (typeof r != "string")
    return r;
  var e = r.toLowerCase();
  return $[e] ? "#" + $[e] : r;
}
var ee = /^#[a-fA-F0-9]{6}$/, re = /^#[a-fA-F0-9]{8}$/, ae = /^#[a-fA-F0-9]{3}$/, te = /^#[a-fA-F0-9]{4}$/, E = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, ne = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, oe = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, se = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function j(r) {
  if (typeof r != "string")
    throw new m(3);
  var e = V(r);
  if (e.match(ee))
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16)
    };
  if (e.match(re)) {
    var o = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: o
    };
  }
  if (e.match(ae))
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16)
    };
  if (e.match(te)) {
    var t = parseFloat((parseInt("" + e[4] + e[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16),
      alpha: t
    };
  }
  var n = E.exec(e);
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10)
    };
  var c = ne.exec(e.substring(0, 50));
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10),
      alpha: parseFloat("" + c[4]) > 1 ? parseFloat("" + c[4]) / 100 : parseFloat("" + c[4])
    };
  var u = oe.exec(e);
  if (u) {
    var a = parseInt("" + u[1], 10), p = parseInt("" + u[2], 10) / 100, s = parseInt("" + u[3], 10) / 100, b = "rgb(" + x(a, p, s) + ")", i = E.exec(b);
    if (!i)
      throw new m(4, e, b);
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10)
    };
  }
  var l = se.exec(e.substring(0, 50));
  if (l) {
    var f = parseInt("" + l[1], 10), d = parseInt("" + l[2], 10) / 100, v = parseInt("" + l[3], 10) / 100, H = "rgb(" + x(f, d, v) + ")", D = E.exec(H);
    if (!D)
      throw new m(4, e, H);
    return {
      red: parseInt("" + D[1], 10),
      green: parseInt("" + D[2], 10),
      blue: parseInt("" + D[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  }
  throw new m(5);
}
function ie(r) {
  var e = r.red / 255, o = r.green / 255, t = r.blue / 255, n = Math.max(e, o, t), c = Math.min(e, o, t), u = (n + c) / 2;
  if (n === c)
    return r.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: u,
      alpha: r.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: u
    };
  var a, p = n - c, s = u > 0.5 ? p / (2 - n - c) : p / (n + c);
  switch (n) {
    case e:
      a = (o - t) / p + (o < t ? 6 : 0);
      break;
    case o:
      a = (t - e) / p + 2;
      break;
    default:
      a = (e - o) / p + 4;
      break;
  }
  return a *= 60, r.alpha !== void 0 ? {
    hue: a,
    saturation: s,
    lightness: u,
    alpha: r.alpha
  } : {
    hue: a,
    saturation: s,
    lightness: u
  };
}
function z(r) {
  return ie(j(r));
}
var ce = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, k = ce;
function F(r) {
  var e = r.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function A(r) {
  return F(Math.round(r * 255));
}
function ue(r, e, o) {
  return k("#" + A(r) + A(e) + A(o));
}
function B(r, e, o) {
  return x(r, e, o, ue);
}
function de(r, e, o) {
  if (typeof r == "number" && typeof e == "number" && typeof o == "number")
    return B(r, e, o);
  if (typeof r == "object" && e === void 0 && o === void 0)
    return B(r.hue, r.saturation, r.lightness);
  throw new m(1);
}
function pe(r, e, o, t) {
  if (typeof r == "number" && typeof e == "number" && typeof o == "number" && typeof t == "number")
    return t >= 1 ? B(r, e, o) : "rgba(" + x(r, e, o) + "," + t + ")";
  if (typeof r == "object" && e === void 0 && o === void 0 && t === void 0)
    return r.alpha >= 1 ? B(r.hue, r.saturation, r.lightness) : "rgba(" + x(r.hue, r.saturation, r.lightness) + "," + r.alpha + ")";
  throw new m(2);
}
function O(r, e, o) {
  if (typeof r == "number" && typeof e == "number" && typeof o == "number")
    return k("#" + F(r) + F(e) + F(o));
  if (typeof r == "object" && e === void 0 && o === void 0)
    return k("#" + F(r.red) + F(r.green) + F(r.blue));
  throw new m(6);
}
function le(r, e, o, t) {
  if (typeof r == "string" && typeof e == "number") {
    var n = j(r);
    return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + e + ")";
  } else {
    if (typeof r == "number" && typeof e == "number" && typeof o == "number" && typeof t == "number")
      return t >= 1 ? O(r, e, o) : "rgba(" + r + "," + e + "," + o + "," + t + ")";
    if (typeof r == "object" && e === void 0 && o === void 0 && t === void 0)
      return r.alpha >= 1 ? O(r.red, r.green, r.blue) : "rgba(" + r.red + "," + r.green + "," + r.blue + "," + r.alpha + ")";
  }
  throw new m(7);
}
var fe = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, he = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, ge = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, be = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function M(r) {
  if (typeof r != "object")
    throw new m(8);
  if (he(r))
    return le(r);
  if (fe(r))
    return O(r);
  if (be(r))
    return pe(r);
  if (ge(r))
    return de(r);
  throw new m(8);
}
function L(r, e, o) {
  return function() {
    var n = o.concat(Array.prototype.slice.call(arguments));
    return n.length >= e ? r.apply(this, n) : L(r, e, n);
  };
}
function q(r) {
  return L(r, r.length, []);
}
function W(r, e, o) {
  return Math.max(r, Math.min(e, o));
}
function me(r, e) {
  if (e === "transparent")
    return e;
  var o = z(e);
  return M(w({}, o, {
    lightness: W(0, 1, o.lightness - parseFloat(r))
  }));
}
var Fe = /* @__PURE__ */ q(me), h = Fe;
function ve(r, e) {
  if (e === "transparent")
    return e;
  var o = z(e);
  return M(w({}, o, {
    lightness: W(0, 1, o.lightness + parseFloat(r))
  }));
}
var ye = /* @__PURE__ */ q(ve), g = ye;
const N = {
  "00": "#61D2B0",
  "05": "#61D2B0",
  10: "#61D2B0",
  15: "#61D2B0",
  20: "#61D2B0",
  30: "#61D2B0",
  40: "#61D2B0",
  50: "#61D2B0",
  60: "#3AB993",
  70: "#3AB993",
  80: "#3AB993",
  90: "#3AB993"
}, xe = {
  "00": "#131345",
  "05": "#1A1A77",
  10: "#1E20A6",
  15: "#2A2FB9",
  20: "#353FE0",
  30: "#0068E2",
  40: "#1B7AEA",
  50: "#129AFD",
  60: "#42B0FF",
  70: "#89CEFF",
  80: "#B2DFFF",
  90: "#DAEFFF",
  transparent1: "rgba(27, 122, 234, 0.4)",
  transparent2: "rgba(27, 122, 234, 0.5)",
  transparent3: "rgba(27, 122, 234, 0.6)"
}, De = {
  "00": "#06290B",
  "05": "#0F3715",
  10: "#0A4914",
  15: "#0F5F1C",
  20: "#127321",
  30: "#168F29",
  40: "#1AAA31",
  50: "#1DBE36",
  60: "#49D95F",
  70: "#6BF17E",
  80: "#87FE9A",
  90: "#B5FFC2",
  transparent1: "rgba( 26, 170, 49, 0.4)",
  transparent2: "rgba( 26, 170, 49, 0.5)",
  transparent3: "rgba( 26, 170, 49, 0.6)"
}, Ce = {
  "00": "#0F1E27",
  "05": "#1C2D38",
  10: "#233641",
  15: "#3B505C",
  20: "#4B626F",
  30: "#667B86",
  40: "#8A9FA9",
  50: "#A2B1B8",
  60: "#B8C3C9",
  70: "#D0DADE",
  80: "#E2E7EA",
  90: "#EEF4F8",
  transparent1: "rgba(138, 159, 169, 0.4)",
  transparent2: "rgba(138, 159, 169, 0.5)",
  transparent3: "rgba(138, 159, 169, 0.6)"
}, we = {
  "00": "#450C14",
  "05": "#661125",
  10: "#89002F",
  15: "#A9004C",
  20: "#C11F79",
  30: "#DC36A4",
  40: "#ED42C5",
  50: "#FD57E7",
  60: "#FD77F3",
  70: "#FF9BFC",
  80: "#FDC6FF",
  90: "#FBD9FF",
  transparent1: "rgba(237, 66, 197, 0.4)",
  transparent2: "rgba(237, 66, 197, 0.5)",
  transparent3: "rgba(237, 66, 197, 0.6)"
}, Be = {
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
}, Te = {
  "00": "#3F2C11",
  "05": "#583C15",
  10: "#714A13",
  15: "#96660B",
  20: "#BB8213",
  30: "#E19B14",
  40: "#EFB400",
  50: "#FFC30F",
  60: "#FFD24B",
  70: "#FFDF80",
  80: "#FFEAA8",
  90: "#FFF2CE",
  transparent1: "rgba( 239, 180, 0, 0.4)",
  transparent2: "rgba( 239, 180, 0, 0.5)",
  transparent3: "rgba( 239, 180, 0, 0.6)"
}, Ee = {
  "00": "#3F1C0B",
  "05": "#5A2806",
  10: "#732F02",
  15: "#953601",
  20: "#C54407",
  30: "#E3581D",
  40: "#F55D1E",
  50: "#FF7237",
  60: "#FF8F60",
  70: "#FFB293",
  80: "#FFC9B1",
  90: "#FFDED1",
  transparent1: "rgba(245, 93, 30, 0.4)",
  transparent2: "rgba(245, 93, 30, 0.5)",
  transparent3: "rgba(245, 93, 30, 0.6)"
}, Ae = {
  "00": "#360D37",
  "05": "#580D5E",
  10: "#750B82",
  15: "#9202AC",
  20: "#AD00D9",
  30: "#BF32ED",
  40: "#CA4EFF",
  50: "#CC6AFE",
  60: "#D28BFB",
  70: "#DCA7FF",
  80: "#E8C7FF",
  90: "#F2E0FF",
  transparent1: "rgba(202, 78, 255, 0.4)",
  transparent2: "rgba(202, 78, 255, 0.5)",
  transparent3: "rgba(202, 78, 255, 0.6)"
}, Se = {
  "00": "#430E0E",
  "05": "#661214",
  10: "#801012",
  15: "#A11416",
  20: "#CC2528",
  30: "#EB3336",
  40: "#FD4749",
  50: "#FF6265",
  60: "#FF8688",
  70: "#FFA9AC",
  80: "#FFC9CA",
  90: "#FFE2E2",
  transparent1: "rgba(253, 71, 73, 0.4)",
  transparent2: "rgba(253, 71, 73, 0.5)",
  transparent3: "rgba(253, 71, 73, 0.6)"
}, Pe = {
  "00": "#08262F",
  "05": "#054054",
  10: "#01536D",
  15: "#016182",
  20: "#00749B",
  30: "#008AB8",
  40: "#00A3D9",
  50: "#1AB9EE",
  60: "#50CCF5",
  70: "#81DFFF",
  80: "#A8E9FF",
  90: "#D3F4FF",
  transparent1: "rgba( 0, 163, 217, 0.4)",
  transparent2: "rgba( 0, 163, 217, 0.5)",
  transparent3: "rgba( 0, 163, 217, 0.6)"
}, ke = {
  "00": "#20025B",
  "05": "#2B027C",
  10: "#380798",
  15: "#3E02B1",
  20: "#4A08CB",
  30: "#6A28EA",
  40: "#8140FF",
  50: "#9056FF",
  60: "#A77AFF",
  70: "#C4A6FF",
  80: "#DDCBFF",
  90: "#ECE2FF",
  transparent1: "rgba(143, 95, 250, 0.4)",
  transparent2: "rgba(143, 95, 250, 0.5)",
  transparent3: "rgba(143, 95, 250, 0.6)"
}, R = {
  aquamarine: N,
  blue: xe,
  green: De,
  grey: Ce,
  magenta: we,
  neutral: Be,
  ochre: Te,
  orange: Ee,
  purple: Ae,
  red: Se,
  teal: Pe,
  violet: ke
}, Oe = {
  "00": "#D2ECFF",
  "05": "#B9E2FF",
  10: "#93D2FF",
  15: "#4AB3FF",
  20: "#0094FF",
  30: "#0066FF",
  40: "#2B3FFA",
  50: "#1F2AD8",
  60: "#1016BF",
  70: "#060999",
  80: "#02026A",
  90: "#000043",
  transparent1: "rgba(43, 63, 250, 0.05)",
  transparent2: "rgba(43, 63, 250, 0.1)",
  transparent3: "rgba(43, 63, 250, 0.25)"
}, Ie = {
  "00": "#E2FFE7",
  "05": "#C8FFD1",
  10: "#9EFFAC",
  15: "#22DA3F",
  20: "#1DBE36",
  30: "#1AAA31",
  40: "#168F29",
  50: "#127321",
  60: "#0C5518",
  70: "#084011",
  80: "#06330D",
  90: "#032408",
  transparent1: "rgba( 22, 143, 41, 0.05)",
  transparent2: "rgba( 22, 143, 41, 0.1)",
  transparent3: "rgba( 22, 143, 41, 0.25)"
}, He = {
  "00": "#F2F6F9",
  "05": "#EBF0F3",
  10: "#D8E2E6",
  15: "#C5D3DA",
  20: "#B4C5CD",
  30: "#93A9B4",
  40: "#758E9B",
  50: "#5A7482",
  60: "#425B69",
  70: "#2D4450",
  80: "#1C2D38",
  90: "#11212C",
  transparent1: "rgba( 117, 142, 155, 0.05)",
  transparent2: "rgba( 117, 142, 155, 0.1)",
  transparent3: "rgba( 117, 142, 155, 0.25)"
}, $e = {
  "00": "#FCE0FF",
  "05": "#FDCFFF",
  10: "#FFB4FD",
  15: "#F76BED",
  20: "#F452DF",
  30: "#E922BB",
  40: "#DA0090",
  50: "#C5006D",
  60: "#A9004C",
  70: "#89002F",
  80: "#670019",
  90: "#52000C",
  transparent1: "rgba( 218, 0, 144, 0.05)",
  transparent2: "rgba( 218, 0, 144, 0.1)",
  transparent3: "rgba( 218, 0, 144, 0.25)"
}, Re = {
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
}, je = {
  "00": "#FFF6DD",
  "05": "#FFF1C6",
  10: "#FFE596",
  15: "#FFD24B",
  20: "#FFC000",
  30: "#EFB400",
  40: "#CD8E15",
  50: "#A57518",
  60: "#8A5F0A",
  70: "#714A13",
  80: "#513610",
  90: "#3C280C",
  transparent1: "rgba( 239, 180, 0, 0.05)",
  transparent2: "rgba( 239, 180, 0, 0.1)",
  transparent3: "rgba( 239, 180, 0, 0.25)"
}, ze = {
  "00": "#FFE2D6",
  "05": "#FFD2BE",
  10: "#FFC0A6",
  15: "#FF8F60",
  20: "#FF773E",
  30: "#FB5A17",
  40: "#D34000",
  50: "#AF3900",
  60: "#893100",
  70: "#622700",
  80: "#4E1F00",
  90: "#401D0C",
  transparent1: "rgba( 211, 64, 0, 0.05)",
  transparent2: "rgba( 211, 64, 0, 0.1)",
  transparent3: "rgba( 211, 64, 0, 0.25)"
}, Me = {
  "00": "#F3E3FF",
  "05": "#EDD3FF",
  10: "#E5BDFF",
  15: "#D28BFB",
  20: "#D073FF",
  30: "#CA4EFF",
  40: "#BF39EB",
  50: "#B61ADD",
  60: "#A800C7",
  70: "#9400A6",
  80: "#74007C",
  90: "#59015B",
  transparent1: "rgba( 191, 57, 235, 0.05)",
  transparent2: "rgba( 191, 57, 235, 0.1)",
  transparent3: "rgba( 191, 57, 235, 0.25)"
}, Le = {
  "00": "#FFE2E2",
  "05": "#FFD1D2",
  10: "#FFC0C2",
  15: "#FB8688",
  20: "#F96467",
  30: "#FC3638",
  40: "#EB0004",
  50: "#DD0004",
  60: "#C70003",
  70: "#A60003",
  80: "#7C0002",
  90: "#650304",
  transparent1: "rgba( 235, 0, 4, 0.05)",
  transparent2: "rgba( 235, 0, 4, 0.1)",
  transparent3: "rgba( 235, 0, 4, 0.25)"
}, qe = {
  "00": "#EFE7FF",
  "05": "#E5D8FF",
  10: "#DBC9FF",
  15: "#AB80FF",
  20: "#8B4FFF",
  30: "#6A28EA",
  40: "#5817D8",
  50: "#4A08CB",
  60: "#3E02B1",
  70: "#380798",
  80: "#2B027C",
  90: "#20025B",
  transparent1: "rgba( 126, 64, 234, 0.05)",
  transparent2: "rgba( 126, 64, 234, 0.1)",
  transparent3: "rgba( 126, 64, 234, 0.25)"
}, We = {
  "00": "#D3F4FF",
  "05": "#A8E9FF",
  10: "#81DFFF",
  15: "#50CCF5",
  20: "#1AB9EE",
  30: "#00A3D9",
  40: "#008AB8",
  50: "#0078A0",
  60: "#006587",
  70: "#005571",
  80: "#004055",
  90: "#072B36",
  transparent1: "rgba( 0, 163, 217, 0.05)",
  transparent2: "rgba( 0, 163, 217, 0.1)",
  transparent3: "rgba( 0, 163, 217, 0.25)"
}, I = {
  aquamarine: N,
  blue: Oe,
  green: Ie,
  grey: He,
  magenta: $e,
  neutral: Re,
  ochre: je,
  orange: ze,
  purple: Me,
  red: Le,
  teal: qe,
  violet: We
};
function X(r) {
  if (!r.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function _(r) {
  return Object.keys(I).includes(r);
}
function Ne(r) {
  return X(r), {
    "00": g(0.36, r),
    "05": g(0.32, r),
    10: g(0.27, r),
    15: g(0.14, r),
    20: g(0.1, r),
    30: g(0, r),
    40: h(0.07, r),
    50: h(0.14, r),
    60: h(0.2, r),
    70: h(0.25, r),
    80: h(0.31, r),
    90: h(0.36, r)
  };
}
const Xe = (r) => {
  const e = _(r) ? R[r] : Ne(r), {
    aquamarine: o,
    blue: t,
    green: n,
    grey: c,
    magenta: u,
    neutral: a,
    ochre: p,
    orange: s,
    purple: b,
    red: i,
    teal: l,
    violet: f
  } = R, d = {
    // Trainual Brand
    trainualBrand1: f[50],
    // State
    stateInfo: t[50],
    stateError: i[50],
    stateCaution: s[50],
    stateFavorite: p[50],
    stateSuccess: n[50],
    stateInfoBackground: l["05"],
    stateCautionBackground: s["05"],
    stateErrorBackground: i["00"],
    stateSuccessBackground: n["05"],
    stateInfoHover: t[30],
    stateErrorHover: i[30],
    stateCautionHover: s[30],
    stateSuccessHover: n[30],
    // Foundation
    foundationBase1: a[15],
    foundationBase2: a[30],
    foundationSurface1: a[20],
    foundationSurface2: a[90],
    foundationSurface3: e[30],
    foundationSurface4: p[10],
    foundationHover: a[15],
    // Icon
    icon1: a[80],
    icon2: a[90],
    // Text
    textPlaceholder: a[40],
    textDefault: a[70],
    textSubdued: a[50],
    textSurface: a[20],
    textActiveVibrant: l[40],
    textHoverVibrant: l[50],
    textDisabled: a[50],
    // Border
    borderSurface1: a[25],
    borderSurface2: a[30],
    borderSurface3: e[40],
    borderDefault: a[40],
    borderHover: a[60],
    borderDisabled: a[40],
    // The representative for each palette. 
    //  Used in places like the palette picker.
    blueDefault: t[60],
    greenDefault: n[60],
    greyDefault: c[60],
    magentaDefault: u[60],
    neutralDefault: a[60],
    ocreDefault: p[60],
    orangeDefault: s[60],
    purpleDefault: b[60],
    redDefault: i[60],
    tealDefault: l[60],
    violetDefault: f[60],
    // Accent Primary
    accentPrimaryDefault: e[30],
    accentPrimaryHover: e[50],
    accentPrimaryPressed: e[60],
    accentPrimaryDisabled: a[30],
    // Accent Secondary
    accentSecondaryHover: e["00"],
    accentSecondaryPressed: e["05"],
    accentSecondaryDisabled: a[50],
    // Accent Border
    accentBorderDefault: e[30],
    accentBorderHover: e[60],
    accentBorderDisabled: a[40],
    // Accent Text
    accentTextPlaceholder: e[10],
    accentTextDefault: e[50],
    accentTextHover: e[60],
    accentTextActive: e[70],
    accentTextPressed: e[70],
    accentTextDisabled: a[25],
    // Accent Toggle
    accentToggleOff: a[25],
    // toggle switch
    accentToggleOn: e[70],
    // toggle switch
    accentToggleDefault: e[15],
    // toggle switch bg
    accentToggleHover: e[20],
    // toggle switch bg
    accentToggleActive: e[50],
    // toggle switch bg
    accentToggleActiveHover: e[40],
    // toggle switch
    accentToggleDisabled: a[50],
    // toggle switch bg
    // Badge
    //  TODO: Overly specific. Add foundationBase3 instead.
    badgeGeneral: a[60],
    // Billing Page
    //  TODO: Overly specific. Refactor to use trainualBrand1, 2, 3, etc
    scalePlanText: o[60],
    scalePlanNontext: o[50],
    ctaSecondary: o[50],
    ctaPrimary: t[90],
    trainPlanText: f[30],
    //Replace with trainualBrand1
    trainPlanNontext: f[30],
    //Replace with trainualBrand1
    // Charts & Graphs
    chartOne00: t["00"],
    chartOne05: t["05"],
    chartOne10: t[10],
    chartOne15: t[15],
    chartOne20: t[20],
    chartOne30: t[30],
    chartOne40: t[40],
    chartOne50: t[50],
    chartOne60: t[60],
    chartOne70: t[70],
    chartOne80: t[80],
    chartOne90: t[90],
    chartTwo00: n["00"],
    chartTwo05: n["05"],
    chartTwo10: n[10],
    chartTwo15: n[15],
    chartTwo20: n[20],
    chartTwo30: n[30],
    chartTwo40: n[40],
    chartTwo50: n[50],
    chartTwo60: n[60],
    chartTwo70: n[70],
    chartTwo80: n[80],
    chartTwo90: n[90],
    chartThree00: s["00"],
    chartThree05: s["05"],
    chartThree10: s[10],
    chartThree15: s[15],
    chartThree20: s[20],
    chartThree30: s[30],
    chartThree40: s[40],
    chartThree50: s[50],
    chartThree60: s[60],
    chartThree70: s[70],
    chartThree80: s[80],
    chartThree90: s[90],
    chartFour00: i["00"],
    chartFour05: i["05"],
    chartFour10: i[10],
    chartFour15: i[15],
    chartFour20: i[20],
    chartFour30: i[30],
    chartFour40: i[40],
    chartFour50: i[50],
    chartFour60: i[60],
    chartFour70: i[70],
    chartFour80: i[80],
    chartFour90: i[90],
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
    // Progress Colors
    progressColorBad: "#EB5757",
    progressColorAcceptable: "#F9AE58",
    progressColorFair: "#B4CC52",
    progressColorGood: "#75C181",
    // A11y
    focusOutlineColor: "#99C8FF"
  }, v = {
    trainualPurple: d.trainualBrand1,
    iconOverdue: d.stateError,
    iconActive: d.stateSuccess,
    borderActive: d.stateInfo,
    accentSecondaryDefault: d.foundationSurface1,
    badgeError: d.stateError,
    badgeCaution: d.stateCaution,
    badgeSuccess: d.stateSuccess,
    badgeInfo: d.stateInfo,
    logoBkgColor: d.foundationSurface1
  };
  return {
    ...d,
    ...v
  };
};
function _e(r) {
  return X(r), {
    "00": g(0.36, r),
    "05": g(0.32, r),
    10: g(0.27, r),
    15: g(0.14, r),
    20: g(0.1, r),
    30: g(0, r),
    40: h(0.07, r),
    50: h(0.14, r),
    60: h(0.2, r),
    70: h(0.25, r),
    80: h(0.31, r),
    90: h(0.36, r)
  };
}
const Ge = (r) => {
  const e = _(r) ? I[r] : _e(r), {
    aquamarine: o,
    blue: t,
    green: n,
    grey: c,
    magenta: u,
    neutral: a,
    ochre: p,
    orange: s,
    purple: b,
    red: i,
    teal: l,
    violet: f
  } = I, d = {
    // Trainual Brand
    trainualBrand1: f[30],
    // State
    stateInfo: t[20],
    stateError: i[50],
    stateCaution: s[50],
    stateFavorite: p[50],
    stateSuccess: n[50],
    stateInfoBackground: l["05"],
    stateCautionBackground: s["00"],
    stateErrorBackground: i["00"],
    stateSuccessBackground: n["00"],
    stateInfoHover: t[40],
    stateErrorHover: i[40],
    stateCautionHover: s[40],
    stateSuccessHover: n[40],
    // Foundation
    foundationBase1: a["05"],
    foundationBase2: a[10],
    foundationSurface1: a["00"],
    foundationSurface2: a[90],
    foundationSurface3: e[30],
    foundationSurface4: p[10],
    foundationHover: a["05"],
    // Icon
    icon1: a[70],
    icon2: a[80],
    // Text
    textPlaceholder: a[40],
    textDefault: a[80],
    textSubdued: a[50],
    textSurface: a["00"],
    textActiveVibrant: l[20],
    textHoverVibrant: l[30],
    textDisabled: a[30],
    // Border
    borderSurface1: a[10],
    borderSurface2: a[15],
    borderSurface3: a[30],
    borderDefault: a[40],
    borderHover: a[60],
    borderDisabled: a[25],
    // The representative for each palette. 
    //  Used in places like the palette picker.
    blueDefault: t[30],
    greenDefault: n[30],
    greyDefault: c[30],
    magentaDefault: u[30],
    neutralDefault: a[30],
    ocreDefault: p[30],
    orangeDefault: s[30],
    purpleDefault: b[30],
    redDefault: i[30],
    tealDefault: l[30],
    violetDefault: f[30],
    // Accent Primary
    accentPrimaryDefault: e[30],
    accentPrimaryHover: e[50],
    accentPrimaryPressed: e[60],
    accentPrimaryDisabled: e[15],
    // Accent Secondary
    accentSecondaryHover: e["00"],
    accentSecondaryPressed: e["05"],
    accentSecondaryDisabled: a[15],
    // Accent Border
    accentBorderDefault: e[20],
    accentBorderHover: e[30],
    accentBorderDisabled: a[25],
    // Accent Text
    accentTextPlaceholder: e[15],
    accentTextDefault: e[30],
    accentTextHover: e[40],
    accentTextActive: e[70],
    accentTextPressed: e[70],
    accentTextDisabled: a[30],
    // Accent Toggle
    accentToggleOff: a["00"],
    // toggle switch
    accentToggleOn: e["00"],
    // toggle switch
    accentToggleDefault: e["05"],
    // toggle switch bg
    accentToggleHover: e[10],
    // toggle switch bg
    accentToggleActive: e[30],
    // toggle switch bg
    accentToggleActiveHover: e[20],
    // toggle switch
    accentToggleDisabled: a[20],
    // toggle switch bg
    // Badge
    //  TODO: Overly specific. Add foundationBase3 instead.
    badgeGeneral: a[50],
    // Billing Page
    //  TODO: Overly specific. Refactor to use trainualBrand1, 2, 3, etc
    scalePlanText: o[60],
    scalePlanNontext: o[50],
    ctaSecondary: o[50],
    ctaPrimary: t[90],
    trainPlanText: f[30],
    //Replace with trainualBrand1
    trainPlanNontext: f[30],
    //Replace with trainualBrand1
    // Charts & Graphs
    chartOne00: t["00"],
    chartOne05: t["05"],
    chartOne10: t[10],
    chartOne15: t[15],
    chartOne20: t[20],
    chartOne30: t[30],
    chartOne40: t[40],
    chartOne50: t[50],
    chartOne60: t[60],
    chartOne70: t[70],
    chartOne80: t[80],
    chartOne90: t[90],
    chartTwo00: n["00"],
    chartTwo05: n["05"],
    chartTwo10: n[10],
    chartTwo15: n[15],
    chartTwo20: n[20],
    chartTwo30: n[30],
    chartTwo40: n[40],
    chartTwo50: n[50],
    chartTwo60: n[60],
    chartTwo70: n[70],
    chartTwo80: n[80],
    chartTwo90: n[90],
    chartThree00: s["00"],
    chartThree05: s["05"],
    chartThree10: s[10],
    chartThree15: s[15],
    chartThree20: s[20],
    chartThree30: s[30],
    chartThree40: s[40],
    chartThree50: s[50],
    chartThree60: s[60],
    chartThree70: s[70],
    chartThree80: s[80],
    chartThree90: s[90],
    chartFour00: i["00"],
    chartFour05: i["05"],
    chartFour10: i[10],
    chartFour15: i[15],
    chartFour20: i[20],
    chartFour30: i[30],
    chartFour40: i[40],
    chartFour50: i[50],
    chartFour60: i[60],
    chartFour70: i[70],
    chartFour80: i[80],
    chartFour90: i[90],
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
    // Progress Colors
    progressColorBad: "#EB5757",
    progressColorAcceptable: "#F9AE58",
    progressColorFair: "#B4CC52",
    progressColorGood: "#75C181",
    // A11y
    focusOutlineColor: "#99C8FF"
  }, v = {
    trainualPurple: d.trainualBrand1,
    iconOverdue: d.stateError,
    iconActive: d.stateSuccess,
    borderActive: d.stateInfo,
    accentSecondaryDefault: d.foundationSurface1,
    badgeError: d.stateError,
    badgeCaution: d.stateCaution,
    badgeSuccess: d.stateSuccess,
    badgeInfo: d.stateInfo,
    logoBkgColor: d.foundationSurface1
  };
  return {
    ...d,
    ...v
  };
}, Je = (r, e) => {
  const o = Ge(r), t = Xe(r);
  return e == "light" ? o : t;
}, Ke = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Qe = () => ({
  spacer2xs: "0.125rem",
  spacerXs: "0.25rem",
  spacerSm: "0.5rem",
  spacerMd: "1rem",
  spacerLg: "1.5rem",
  spacerXl: "2rem",
  spacer2xl: "2.5rem",
  spacer3xl: "3rem",
  height2xs: "1rem",
  heightXs: "1.5rem",
  heightSm: "2rem",
  heightMd: "2.25rem",
  heightLg: "2.5rem"
});
export {
  Ye as useBorderTokens,
  Je as useColorTokens,
  Ke as useFontTokens,
  Qe as useSpacingTokens
};
