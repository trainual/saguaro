import Xe, { useContext as Ye } from "react";
import { ThemeContext as qe, createGlobalStyle as Or, ThemeProvider as _r } from "styled-components";
const kr = () => ({
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
}), Je = {
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
  90: "#3AB993",
  transparent1: "rgba(97, 210, 176, 0.05)",
  transparent2: "rgba(97, 210, 176, 0.1)",
  transparent3: "rgba(97, 210, 176, 0.25)"
}, jr = {
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
}, Ir = {
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
}, $r = {
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
}, Hr = {
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
}, Lr = {
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
}, Wr = {
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
}, Yr = {
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
}, qr = {
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
}, zr = {
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
  transparent1: "rgba(0, 120, 160, 0.05)",
  transparent2: "rgba(0, 120, 160, 0.1)",
  transparent3: "rgba(0, 120, 160, 0.25)"
}, Nr = {
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
}, Ke = {
  aquamarine: Je,
  blue: jr,
  green: Ir,
  grey: $r,
  magenta: Hr,
  neutral: Lr,
  ochre: Mr,
  orange: Wr,
  purple: Yr,
  red: qr,
  teal: zr,
  violet: Nr
}, Gr = {
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
}, Ur = {
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
}, Xr = {
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
}, Jr = {
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
}, Kr = {
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
}, Zr = {
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
}, Qr = {
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
}, Vr = {
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
}, et = {
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
}, rt = {
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
}, tt = {
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
}, at = {
  aquamarine: Je,
  blue: Gr,
  green: Ur,
  grey: Xr,
  magenta: Jr,
  neutral: Kr,
  ochre: Zr,
  orange: Qr,
  purple: Vr,
  red: et,
  teal: rt,
  violet: tt
};
function nt(t) {
  if (!t.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function ot(t) {
  return Object.keys(Ke).includes(t);
}
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var o = arguments[e];
      for (var n in o)
        Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }
    return t;
  }, Q.apply(this, arguments);
}
function st(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function z(t, e) {
  return z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, s) {
    return n.__proto__ = s, n;
  }, z(t, e);
}
function it(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, z(t, e);
}
function pe(t) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, pe(t);
}
function ut(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function ct() {
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
function Z(t, e, o) {
  return ct() ? Z = Reflect.construct.bind() : Z = function(s, l, h) {
    var a = [null];
    a.push.apply(a, l);
    var d = Function.bind.apply(s, a), c = new d();
    return h && z(c, h.prototype), c;
  }, Z.apply(null, arguments);
}
function he(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return he = function(n) {
    if (n === null || !ut(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, s);
    }
    function s() {
      return Z(n, arguments, pe(this).constructor);
    }
    return s.prototype = Object.create(n.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), z(s, n);
  }, he(t);
}
var ft = {
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
function lt() {
  for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++)
    e[o] = arguments[o];
  var n = e[0], s = [], l;
  for (l = 1; l < e.length; l += 1)
    s.push(e[l]);
  return s.forEach(function(h) {
    n = n.replace(/%[a-z]/, h);
  }), n;
}
var P = /* @__PURE__ */ function(t) {
  it(e, t);
  function e(o) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = t.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o + " for more information.") || this;
    else {
      for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
        l[h - 1] = arguments[h];
      n = t.call(this, lt.apply(void 0, [ft[o]].concat(l))) || this;
    }
    return st(n);
  }
  return e;
}(/* @__PURE__ */ he(Error));
function ue(t) {
  return Math.round(t * 255);
}
function dt(t, e, o) {
  return ue(t) + "," + ue(e) + "," + ue(o);
}
function N(t, e, o, n) {
  if (n === void 0 && (n = dt), e === 0)
    return n(o, o, o);
  var s = (t % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * o - 1)) * e, h = l * (1 - Math.abs(s % 2 - 1)), a = 0, d = 0, c = 0;
  s >= 0 && s < 1 ? (a = l, d = h) : s >= 1 && s < 2 ? (a = h, d = l) : s >= 2 && s < 3 ? (d = l, c = h) : s >= 3 && s < 4 ? (d = h, c = l) : s >= 4 && s < 5 ? (a = h, c = l) : s >= 5 && s < 6 && (a = l, c = h);
  var g = o - l / 2, f = a + g, b = d + g, E = c + g;
  return n(f, b, E);
}
var ze = {
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
function pt(t) {
  if (typeof t != "string")
    return t;
  var e = t.toLowerCase();
  return ze[e] ? "#" + ze[e] : t;
}
var ht = /^#[a-fA-F0-9]{6}$/, gt = /^#[a-fA-F0-9]{8}$/, bt = /^#[a-fA-F0-9]{3}$/, mt = /^#[a-fA-F0-9]{4}$/, ce = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, vt = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Ft = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, yt = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ze(t) {
  if (typeof t != "string")
    throw new P(3);
  var e = pt(t);
  if (e.match(ht))
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16)
    };
  if (e.match(gt)) {
    var o = parseFloat((parseInt("" + e[7] + e[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[2], 16),
      green: parseInt("" + e[3] + e[4], 16),
      blue: parseInt("" + e[5] + e[6], 16),
      alpha: o
    };
  }
  if (e.match(bt))
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16)
    };
  if (e.match(mt)) {
    var n = parseFloat((parseInt("" + e[4] + e[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + e[1] + e[1], 16),
      green: parseInt("" + e[2] + e[2], 16),
      blue: parseInt("" + e[3] + e[3], 16),
      alpha: n
    };
  }
  var s = ce.exec(e);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var l = vt.exec(e.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var h = Ft.exec(e);
  if (h) {
    var a = parseInt("" + h[1], 10), d = parseInt("" + h[2], 10) / 100, c = parseInt("" + h[3], 10) / 100, g = "rgb(" + N(a, d, c) + ")", f = ce.exec(g);
    if (!f)
      throw new P(4, e, g);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var b = yt.exec(e.substring(0, 50));
  if (b) {
    var E = parseInt("" + b[1], 10), F = parseInt("" + b[2], 10) / 100, O = parseInt("" + b[3], 10) / 100, W = "rgb(" + N(E, F, O) + ")", _ = ce.exec(W);
    if (!_)
      throw new P(4, e, W);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10),
      alpha: parseFloat("" + b[4]) > 1 ? parseFloat("" + b[4]) / 100 : parseFloat("" + b[4])
    };
  }
  throw new P(5);
}
function xt(t) {
  var e = t.red / 255, o = t.green / 255, n = t.blue / 255, s = Math.max(e, o, n), l = Math.min(e, o, n), h = (s + l) / 2;
  if (s === l)
    return t.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: h,
      alpha: t.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: h
    };
  var a, d = s - l, c = h > 0.5 ? d / (2 - s - l) : d / (s + l);
  switch (s) {
    case e:
      a = (o - n) / d + (o < n ? 6 : 0);
      break;
    case o:
      a = (n - e) / d + 2;
      break;
    default:
      a = (e - o) / d + 4;
      break;
  }
  return a *= 60, t.alpha !== void 0 ? {
    hue: a,
    saturation: c,
    lightness: h,
    alpha: t.alpha
  } : {
    hue: a,
    saturation: c,
    lightness: h
  };
}
function Qe(t) {
  return xt(Ze(t));
}
var Et = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, ge = Et;
function k(t) {
  var e = t.toString(16);
  return e.length === 1 ? "0" + e : e;
}
function fe(t) {
  return k(Math.round(t * 255));
}
function Ct(t, e, o) {
  return ge("#" + fe(t) + fe(e) + fe(o));
}
function V(t, e, o) {
  return N(t, e, o, Ct);
}
function wt(t, e, o) {
  if (typeof t == "number" && typeof e == "number" && typeof o == "number")
    return V(t, e, o);
  if (typeof t == "object" && e === void 0 && o === void 0)
    return V(t.hue, t.saturation, t.lightness);
  throw new P(1);
}
function Tt(t, e, o, n) {
  if (typeof t == "number" && typeof e == "number" && typeof o == "number" && typeof n == "number")
    return n >= 1 ? V(t, e, o) : "rgba(" + N(t, e, o) + "," + n + ")";
  if (typeof t == "object" && e === void 0 && o === void 0 && n === void 0)
    return t.alpha >= 1 ? V(t.hue, t.saturation, t.lightness) : "rgba(" + N(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
  throw new P(2);
}
function be(t, e, o) {
  if (typeof t == "number" && typeof e == "number" && typeof o == "number")
    return ge("#" + k(t) + k(e) + k(o));
  if (typeof t == "object" && e === void 0 && o === void 0)
    return ge("#" + k(t.red) + k(t.green) + k(t.blue));
  throw new P(6);
}
function Dt(t, e, o, n) {
  if (typeof t == "string" && typeof e == "number") {
    var s = Ze(t);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + e + ")";
  } else {
    if (typeof t == "number" && typeof e == "number" && typeof o == "number" && typeof n == "number")
      return n >= 1 ? be(t, e, o) : "rgba(" + t + "," + e + "," + o + "," + n + ")";
    if (typeof t == "object" && e === void 0 && o === void 0 && n === void 0)
      return t.alpha >= 1 ? be(t.red, t.green, t.blue) : "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")";
  }
  throw new P(7);
}
var St = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, At = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, Pt = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Bt = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function Ve(t) {
  if (typeof t != "object")
    throw new P(8);
  if (At(t))
    return Dt(t);
  if (St(t))
    return be(t);
  if (Bt(t))
    return Tt(t);
  if (Pt(t))
    return wt(t);
  throw new P(8);
}
function er(t, e, o) {
  return function() {
    var s = o.concat(Array.prototype.slice.call(arguments));
    return s.length >= e ? t.apply(this, s) : er(t, e, s);
  };
}
function rr(t) {
  return er(t, t.length, []);
}
function tr(t, e, o) {
  return Math.max(t, Math.min(e, o));
}
function Rt(t, e) {
  if (e === "transparent")
    return e;
  var o = Qe(e);
  return Ve(Q({}, o, {
    lightness: tr(0, 1, o.lightness - parseFloat(t))
  }));
}
var Ot = /* @__PURE__ */ rr(Rt), H = Ot;
function _t(t, e) {
  if (e === "transparent")
    return e;
  var o = Qe(e);
  return Ve(Q({}, o, {
    lightness: tr(0, 1, o.lightness + parseFloat(t))
  }));
}
var kt = /* @__PURE__ */ rr(_t), L = kt;
function jt(t) {
  return {
    "00": L(0.36, t),
    "05": L(0.32, t),
    10: L(0.27, t),
    15: L(0.14, t),
    20: L(0.1, t),
    30: L(0, t),
    40: H(0.07, t),
    50: H(0.14, t),
    60: H(0.2, t),
    70: H(0.25, t),
    80: H(0.31, t),
    90: H(0.36, t)
  };
}
const It = (t, e) => ot(e) ? t[e] : (nt(e), jt(e)), ar = (t, e) => {
  const o = t == "light" ? Ke : at, n = It(o, e);
  return {
    ...o,
    brand: n
  };
}, $t = (t) => {
  const {
    brand: e,
    aquamarine: o,
    blue: n,
    green: s,
    grey: l,
    magenta: h,
    neutral: a,
    ochre: d,
    orange: c,
    purple: g,
    red: f,
    teal: b,
    violet: E
  } = ar("dark", t), F = {
    // Trainual Brand
    trainualBrand1: E[50],
    // State
    stateInfo: n[50],
    stateError: f[50],
    stateCaution: c[50],
    stateFavorite: d[50],
    stateSuccess: s[50],
    stateInfoBackground: b["05"],
    stateCautionBackground: c["05"],
    stateErrorBackground: f["00"],
    stateSuccessBackground: s["05"],
    stateInfoHover: n[30],
    stateErrorHover: f[30],
    stateCautionHover: c[30],
    stateSuccessHover: s[30],
    // Foundation
    foundationBase1: a[15],
    foundationBase2: a[30],
    foundationSurface1: a[20],
    foundationSurface2: a[90],
    foundationSurface3: e[30],
    foundationSurface4: d[10],
    foundationHover: a[15],
    // Icon
    icon1: a[80],
    icon2: a[90],
    // Text
    textPlaceholder: a[40],
    textDefault: a[70],
    textSubdued: a[50],
    textSurface: a[20],
    textActiveVibrant: b[40],
    textHoverVibrant: b[50],
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
    blueDefault: n[60],
    greenDefault: s[60],
    greyDefault: l[60],
    magentaDefault: h[60],
    neutralDefault: a[60],
    ocreDefault: d[60],
    orangeDefault: c[60],
    purpleDefault: g[60],
    redDefault: f[60],
    tealDefault: b[60],
    violetDefault: E[60],
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
    ctaPrimary: n[90],
    trainPlanText: E[30],
    //Replace with trainualBrand1
    trainPlanNontext: E[30],
    //Replace with trainualBrand1
    // Charts & Graphs
    chartOne00: n["00"],
    chartOne05: n["05"],
    chartOne10: n[10],
    chartOne15: n[15],
    chartOne20: n[20],
    chartOne30: n[30],
    chartOne40: n[40],
    chartOne50: n[50],
    chartOne60: n[60],
    chartOne70: n[70],
    chartOne80: n[80],
    chartOne90: n[90],
    chartTwo00: s["00"],
    chartTwo05: s["05"],
    chartTwo10: s[10],
    chartTwo15: s[15],
    chartTwo20: s[20],
    chartTwo30: s[30],
    chartTwo40: s[40],
    chartTwo50: s[50],
    chartTwo60: s[60],
    chartTwo70: s[70],
    chartTwo80: s[80],
    chartTwo90: s[90],
    chartThree00: c["00"],
    chartThree05: c["05"],
    chartThree10: c[10],
    chartThree15: c[15],
    chartThree20: c[20],
    chartThree30: c[30],
    chartThree40: c[40],
    chartThree50: c[50],
    chartThree60: c[60],
    chartThree70: c[70],
    chartThree80: c[80],
    chartThree90: c[90],
    chartFour00: f["00"],
    chartFour05: f["05"],
    chartFour10: f[10],
    chartFour15: f[15],
    chartFour20: f[20],
    chartFour30: f[30],
    chartFour40: f[40],
    chartFour50: f[50],
    chartFour60: f[60],
    chartFour70: f[70],
    chartFour80: f[80],
    chartFour90: f[90],
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
  }, O = {
    trainualPurple: F.trainualBrand1,
    iconOverdue: F.stateError,
    iconActive: F.stateSuccess,
    borderActive: F.stateInfo,
    accentSecondaryDefault: F.foundationSurface1,
    badgeError: F.stateError,
    badgeCaution: F.stateCaution,
    badgeSuccess: F.stateSuccess,
    badgeInfo: F.stateInfo,
    logoBkgColor: F.foundationSurface1
  };
  return {
    ...F,
    ...O
  };
}, Ht = (t) => {
  const {
    brand: e,
    aquamarine: o,
    blue: n,
    green: s,
    grey: l,
    magenta: h,
    neutral: a,
    ochre: d,
    orange: c,
    purple: g,
    red: f,
    teal: b,
    violet: E
  } = ar("light", t), F = {
    // Trainual Brand
    trainualBrand1: E[30],
    // State
    stateInfo: n[20],
    stateError: f[50],
    stateCaution: c[50],
    stateFavorite: d[50],
    stateSuccess: s[50],
    stateInfoBackground: b["05"],
    stateCautionBackground: c["00"],
    stateErrorBackground: f["00"],
    stateSuccessBackground: s["00"],
    stateInfoHover: n[40],
    stateErrorHover: f[40],
    stateCautionHover: c[40],
    stateSuccessHover: s[40],
    // Foundation
    foundationBase1: a["05"],
    foundationBase2: a[10],
    foundationSurface1: a["00"],
    foundationSurface2: a[90],
    foundationSurface3: e[30],
    foundationSurface4: d[10],
    foundationHover: a["05"],
    // Icon
    icon1: a[70],
    icon2: a[80],
    // Text
    textPlaceholder: a[40],
    textDefault: a[80],
    textSubdued: a[50],
    textSurface: a["00"],
    textActiveVibrant: b[20],
    textHoverVibrant: b[30],
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
    blueDefault: n[30],
    greenDefault: s[30],
    greyDefault: l[30],
    magentaDefault: h[30],
    neutralDefault: a[30],
    ocreDefault: d[30],
    orangeDefault: c[30],
    purpleDefault: g[30],
    redDefault: f[30],
    tealDefault: b[30],
    violetDefault: E[30],
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
    ctaPrimary: n[90],
    trainPlanText: E[30],
    //Replace with trainualBrand1
    trainPlanNontext: E[30],
    //Replace with trainualBrand1
    // Charts & Graphs
    chartOne00: n["00"],
    chartOne05: n["05"],
    chartOne10: n[10],
    chartOne15: n[15],
    chartOne20: n[20],
    chartOne30: n[30],
    chartOne40: n[40],
    chartOne50: n[50],
    chartOne60: n[60],
    chartOne70: n[70],
    chartOne80: n[80],
    chartOne90: n[90],
    chartTwo00: s["00"],
    chartTwo05: s["05"],
    chartTwo10: s[10],
    chartTwo15: s[15],
    chartTwo20: s[20],
    chartTwo30: s[30],
    chartTwo40: s[40],
    chartTwo50: s[50],
    chartTwo60: s[60],
    chartTwo70: s[70],
    chartTwo80: s[80],
    chartTwo90: s[90],
    chartThree00: c["00"],
    chartThree05: c["05"],
    chartThree10: c[10],
    chartThree15: c[15],
    chartThree20: c[20],
    chartThree30: c[30],
    chartThree40: c[40],
    chartThree50: c[50],
    chartThree60: c[60],
    chartThree70: c[70],
    chartThree80: c[80],
    chartThree90: c[90],
    chartFour00: f["00"],
    chartFour05: f["05"],
    chartFour10: f[10],
    chartFour15: f[15],
    chartFour20: f[20],
    chartFour30: f[30],
    chartFour40: f[40],
    chartFour50: f[50],
    chartFour60: f[60],
    chartFour70: f[70],
    chartFour80: f[80],
    chartFour90: f[90],
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
  }, O = {
    trainualPurple: F.trainualBrand1,
    iconOverdue: F.stateError,
    iconActive: F.stateSuccess,
    borderActive: F.stateInfo,
    accentSecondaryDefault: F.foundationSurface1,
    badgeError: F.stateError,
    badgeCaution: F.stateCaution,
    badgeSuccess: F.stateSuccess,
    badgeInfo: F.stateInfo,
    logoBkgColor: F.foundationSurface1
  };
  return {
    ...F,
    ...O
  };
}, Lt = (t, e) => {
  const o = Ht(t), n = $t(t);
  return e == "light" ? o : n;
}, Mt = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), Wt = () => ({
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
}), Ut = () => (console.log(">>> ThemeContext: ", qe), console.log(">>> useContext: ", Ye), Ye(qe));
var me = { exports: {} }, M = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var le, Ne;
function nr() {
  if (Ne)
    return le;
  Ne = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function n(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var h = {}, a = 0; a < 10; a++)
        h["_" + String.fromCharCode(a)] = a;
      var d = Object.getOwnPropertyNames(h).map(function(g) {
        return h[g];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(g) {
        c[g] = g;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return le = s() ? Object.assign : function(l, h) {
    for (var a, d = n(l), c, g = 1; g < arguments.length; g++) {
      a = Object(arguments[g]);
      for (var f in a)
        e.call(a, f) && (d[f] = a[f]);
      if (t) {
        c = t(a);
        for (var b = 0; b < c.length; b++)
          o.call(a, c[b]) && (d[c[b]] = a[c[b]]);
      }
    }
    return d;
  }, le;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Yt() {
  if (Ge)
    return M;
  Ge = 1, nr();
  var t = Xe, e = 60103;
  if (M.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var o = Symbol.for;
    e = o("react.element"), M.Fragment = o("react.fragment");
  }
  var n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = Object.prototype.hasOwnProperty, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(a, d, c) {
    var g, f = {}, b = null, E = null;
    c !== void 0 && (b = "" + c), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (g in d)
      s.call(d, g) && !l.hasOwnProperty(g) && (f[g] = d[g]);
    if (a && a.defaultProps)
      for (g in d = a.defaultProps, d)
        f[g] === void 0 && (f[g] = d[g]);
    return { $$typeof: e, type: a, key: b, ref: E, props: f, _owner: n.current };
  }
  return M.jsx = h, M.jsxs = h, M;
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
function qt() {
  return Ue || (Ue = 1, function(t) {
    process.env.NODE_ENV !== "production" && function() {
      var e = Xe, o = nr(), n = 60103, s = 60106;
      t.Fragment = 60107;
      var l = 60108, h = 60114, a = 60109, d = 60110, c = 60112, g = 60113, f = 60120, b = 60115, E = 60116, F = 60121, O = 60122, W = 60117, _ = 60129, ve = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var w = Symbol.for;
        n = w("react.element"), s = w("react.portal"), t.Fragment = w("react.fragment"), l = w("react.strict_mode"), h = w("react.profiler"), a = w("react.provider"), d = w("react.context"), c = w("react.forward_ref"), g = w("react.suspense"), f = w("react.suspense_list"), b = w("react.memo"), E = w("react.lazy"), F = w("react.block"), O = w("react.server.block"), W = w("react.fundamental"), w("react.scope"), w("react.opaque.id"), _ = w("react.debug_trace_mode"), w("react.offscreen"), ve = w("react.legacy_hidden");
      }
      var Fe = typeof Symbol == "function" && Symbol.iterator, or = "@@iterator";
      function sr(r) {
        if (r === null || typeof r != "object")
          return null;
        var i = Fe && r[Fe] || r[or];
        return typeof i == "function" ? i : null;
      }
      var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function S(r) {
        {
          for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
            u[p - 1] = arguments[p];
          ir("error", r, u);
        }
      }
      function ir(r, i, u) {
        {
          var p = j.ReactDebugCurrentFrame, y = p.getStackAddendum();
          y !== "" && (i += "%s", u = u.concat([y]));
          var x = u.map(function(v) {
            return "" + v;
          });
          x.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, x);
        }
      }
      var ur = !1;
      function cr(r) {
        return !!(typeof r == "string" || typeof r == "function" || r === t.Fragment || r === h || r === _ || r === l || r === g || r === f || r === ve || ur || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === b || r.$$typeof === a || r.$$typeof === d || r.$$typeof === c || r.$$typeof === W || r.$$typeof === F || r[0] === O));
      }
      function fr(r, i, u) {
        var p = i.displayName || i.name || "";
        return r.displayName || (p !== "" ? u + "(" + p + ")" : u);
      }
      function ye(r) {
        return r.displayName || "Context";
      }
      function A(r) {
        if (r == null)
          return null;
        if (typeof r.tag == "number" && S("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
        switch (r) {
          case t.Fragment:
            return "Fragment";
          case s:
            return "Portal";
          case h:
            return "Profiler";
          case l:
            return "StrictMode";
          case g:
            return "Suspense";
          case f:
            return "SuspenseList";
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case d:
              var i = r;
              return ye(i) + ".Consumer";
            case a:
              var u = r;
              return ye(u._context) + ".Provider";
            case c:
              return fr(r, r.render, "ForwardRef");
            case b:
              return A(r.type);
            case F:
              return A(r._render);
            case E: {
              var p = r, y = p._payload, x = p._init;
              try {
                return A(x(y));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Y = 0, xe, Ee, Ce, we, Te, De, Se;
      function Ae() {
      }
      Ae.__reactDisabledLog = !0;
      function lr() {
        {
          if (Y === 0) {
            xe = console.log, Ee = console.info, Ce = console.warn, we = console.error, Te = console.group, De = console.groupCollapsed, Se = console.groupEnd;
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
          Y++;
        }
      }
      function dr() {
        {
          if (Y--, Y === 0) {
            var r = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, r, {
                value: xe
              }),
              info: o({}, r, {
                value: Ee
              }),
              warn: o({}, r, {
                value: Ce
              }),
              error: o({}, r, {
                value: we
              }),
              group: o({}, r, {
                value: Te
              }),
              groupCollapsed: o({}, r, {
                value: De
              }),
              groupEnd: o({}, r, {
                value: Se
              })
            });
          }
          Y < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ee = j.ReactCurrentDispatcher, re;
      function G(r, i, u) {
        {
          if (re === void 0)
            try {
              throw Error();
            } catch (y) {
              var p = y.stack.trim().match(/\n( *(at )?)/);
              re = p && p[1] || "";
            }
          return `
` + re + r;
        }
      }
      var te = !1, U;
      {
        var pr = typeof WeakMap == "function" ? WeakMap : Map;
        U = new pr();
      }
      function Pe(r, i) {
        if (!r || te)
          return "";
        {
          var u = U.get(r);
          if (u !== void 0)
            return u;
        }
        var p;
        te = !0;
        var y = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var x;
        x = ee.current, ee.current = null, lr();
        try {
          if (i) {
            var v = function() {
              throw Error();
            };
            if (Object.defineProperty(v.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(v, []);
              } catch (R) {
                p = R;
              }
              Reflect.construct(r, [], v);
            } else {
              try {
                v.call();
              } catch (R) {
                p = R;
              }
              r.call(v.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (R) {
              p = R;
            }
            r();
          }
        } catch (R) {
          if (R && p && typeof R.stack == "string") {
            for (var m = R.stack.split(`
`), D = p.stack.split(`
`), C = m.length - 1, T = D.length - 1; C >= 1 && T >= 0 && m[C] !== D[T]; )
              T--;
            for (; C >= 1 && T >= 0; C--, T--)
              if (m[C] !== D[T]) {
                if (C !== 1 || T !== 1)
                  do
                    if (C--, T--, T < 0 || m[C] !== D[T]) {
                      var B = `
` + m[C].replace(" at new ", " at ");
                      return typeof r == "function" && U.set(r, B), B;
                    }
                  while (C >= 1 && T >= 0);
                break;
              }
          }
        } finally {
          te = !1, ee.current = x, dr(), Error.prepareStackTrace = y;
        }
        var $ = r ? r.displayName || r.name : "", We = $ ? G($) : "";
        return typeof r == "function" && U.set(r, We), We;
      }
      function Be(r, i, u) {
        return Pe(r, !1);
      }
      function hr(r) {
        var i = r.prototype;
        return !!(i && i.isReactComponent);
      }
      function X(r, i, u) {
        if (r == null)
          return "";
        if (typeof r == "function")
          return Pe(r, hr(r));
        if (typeof r == "string")
          return G(r);
        switch (r) {
          case g:
            return G("Suspense");
          case f:
            return G("SuspenseList");
        }
        if (typeof r == "object")
          switch (r.$$typeof) {
            case c:
              return Be(r.render);
            case b:
              return X(r.type, i, u);
            case F:
              return Be(r._render);
            case E: {
              var p = r, y = p._payload, x = p._init;
              try {
                return X(x(y), i, u);
              } catch {
              }
            }
          }
        return "";
      }
      var Re = {}, Oe = j.ReactDebugCurrentFrame;
      function J(r) {
        if (r) {
          var i = r._owner, u = X(r.type, r._source, i ? i.type : null);
          Oe.setExtraStackFrame(u);
        } else
          Oe.setExtraStackFrame(null);
      }
      function gr(r, i, u, p, y) {
        {
          var x = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var v in r)
            if (x(r, v)) {
              var m = void 0;
              try {
                if (typeof r[v] != "function") {
                  var D = Error((p || "React class") + ": " + u + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw D.name = "Invariant Violation", D;
                }
                m = r[v](i, v, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (C) {
                m = C;
              }
              m && !(m instanceof Error) && (J(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, v, typeof m), J(null)), m instanceof Error && !(m.message in Re) && (Re[m.message] = !0, J(y), S("Failed %s type: %s", u, m.message), J(null));
            }
        }
      }
      var q = j.ReactCurrentOwner, ae = Object.prototype.hasOwnProperty, br = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, _e, ke, ne;
      ne = {};
      function mr(r) {
        if (ae.call(r, "ref")) {
          var i = Object.getOwnPropertyDescriptor(r, "ref").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.ref !== void 0;
      }
      function vr(r) {
        if (ae.call(r, "key")) {
          var i = Object.getOwnPropertyDescriptor(r, "key").get;
          if (i && i.isReactWarning)
            return !1;
        }
        return r.key !== void 0;
      }
      function Fr(r, i) {
        if (typeof r.ref == "string" && q.current && i && q.current.stateNode !== i) {
          var u = A(q.current.type);
          ne[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(q.current.type), r.ref), ne[u] = !0);
        }
      }
      function yr(r, i) {
        {
          var u = function() {
            _e || (_e = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
            ke || (ke = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
          };
          u.isReactWarning = !0, Object.defineProperty(r, "ref", {
            get: u,
            configurable: !0
          });
        }
      }
      var Er = function(r, i, u, p, y, x, v) {
        var m = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: r,
          key: i,
          ref: u,
          props: v,
          // Record the component responsible for creating this element.
          _owner: x
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
          value: y
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      };
      function Cr(r, i, u, p, y) {
        {
          var x, v = {}, m = null, D = null;
          u !== void 0 && (m = "" + u), vr(i) && (m = "" + i.key), mr(i) && (D = i.ref, Fr(i, y));
          for (x in i)
            ae.call(i, x) && !br.hasOwnProperty(x) && (v[x] = i[x]);
          if (r && r.defaultProps) {
            var C = r.defaultProps;
            for (x in C)
              v[x] === void 0 && (v[x] = C[x]);
          }
          if (m || D) {
            var T = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
            m && yr(v, T), D && xr(v, T);
          }
          return Er(r, m, D, y, p, q.current, v);
        }
      }
      var oe = j.ReactCurrentOwner, je = j.ReactDebugCurrentFrame;
      function I(r) {
        if (r) {
          var i = r._owner, u = X(r.type, r._source, i ? i.type : null);
          je.setExtraStackFrame(u);
        } else
          je.setExtraStackFrame(null);
      }
      var se;
      se = !1;
      function ie(r) {
        return typeof r == "object" && r !== null && r.$$typeof === n;
      }
      function Ie() {
        {
          if (oe.current) {
            var r = A(oe.current.type);
            if (r)
              return `

Check the render method of \`` + r + "`.";
          }
          return "";
        }
      }
      function wr(r) {
        {
          if (r !== void 0) {
            var i = r.fileName.replace(/^.*[\\\/]/, ""), u = r.lineNumber;
            return `

Check your code at ` + i + ":" + u + ".";
          }
          return "";
        }
      }
      var $e = {};
      function Tr(r) {
        {
          var i = Ie();
          if (!i) {
            var u = typeof r == "string" ? r : r.displayName || r.name;
            u && (i = `

Check the top-level render call using <` + u + ">.");
          }
          return i;
        }
      }
      function He(r, i) {
        {
          if (!r._store || r._store.validated || r.key != null)
            return;
          r._store.validated = !0;
          var u = Tr(i);
          if ($e[u])
            return;
          $e[u] = !0;
          var p = "";
          r && r._owner && r._owner !== oe.current && (p = " It was passed a child from " + A(r._owner.type) + "."), I(r), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), I(null);
        }
      }
      function Le(r, i) {
        {
          if (typeof r != "object")
            return;
          if (Array.isArray(r))
            for (var u = 0; u < r.length; u++) {
              var p = r[u];
              ie(p) && He(p, i);
            }
          else if (ie(r))
            r._store && (r._store.validated = !0);
          else if (r) {
            var y = sr(r);
            if (typeof y == "function" && y !== r.entries)
              for (var x = y.call(r), v; !(v = x.next()).done; )
                ie(v.value) && He(v.value, i);
          }
        }
      }
      function Dr(r) {
        {
          var i = r.type;
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
            var p = A(i);
            gr(u, r.props, "prop", p, r);
          } else if (i.PropTypes !== void 0 && !se) {
            se = !0;
            var y = A(i);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
          }
          typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sr(r) {
        {
          for (var i = Object.keys(r.props), u = 0; u < i.length; u++) {
            var p = i[u];
            if (p !== "children" && p !== "key") {
              I(r), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), I(null);
              break;
            }
          }
          r.ref !== null && (I(r), S("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
        }
      }
      function Me(r, i, u, p, y, x) {
        {
          var v = cr(r);
          if (!v) {
            var m = "";
            (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var D = wr(y);
            D ? m += D : m += Ie();
            var C;
            r === null ? C = "null" : Array.isArray(r) ? C = "array" : r !== void 0 && r.$$typeof === n ? (C = "<" + (A(r.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : C = typeof r, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, m);
          }
          var T = Cr(r, i, u, y, x);
          if (T == null)
            return T;
          if (v) {
            var B = i.children;
            if (B !== void 0)
              if (p)
                if (Array.isArray(B)) {
                  for (var $ = 0; $ < B.length; $++)
                    Le(B[$], r);
                  Object.freeze && Object.freeze(B);
                } else
                  S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Le(B, r);
          }
          return r === t.Fragment ? Sr(T) : Dr(T), T;
        }
      }
      function Ar(r, i, u) {
        return Me(r, i, u, !0);
      }
      function Pr(r, i, u) {
        return Me(r, i, u, !1);
      }
      var Br = Pr, Rr = Ar;
      t.jsx = Br, t.jsxs = Rr;
    }();
  }(de)), de;
}
process.env.NODE_ENV === "production" ? me.exports = Yt() : me.exports = qt();
var K = me.exports;
const zt = Or`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Xt = ({ brandOption: t, mode: e, children: o }) => {
  const n = kr(), s = Mt(), l = Wt(), h = Lt(t, e), d = { constants: {
    ...n,
    ...s,
    ...l
  }, mode: e, brand: t, vars: h };
  return /* @__PURE__ */ K.jsxs(K.Fragment, { children: [
    /* @__PURE__ */ K.jsx(zt, {}),
    /* @__PURE__ */ K.jsx(_r, { theme: d, children: o })
  ] });
};
export {
  Xt as SaguaroThemeProvider,
  kr as useBorderTokens,
  Lt as useColorTokens,
  Mt as useFontTokens,
  Ut as useSaguaroTheme,
  Wt as useSpacingTokens
};
