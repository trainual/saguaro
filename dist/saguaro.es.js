import Ye from "react";
import { createGlobalStyle as kr, ThemeProvider as _r } from "styled-components";
const jr = () => ({
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
}), qe = {
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
}, Ir = {
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
}, $r = {
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
}, Hr = {
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
}, Mr = {
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
}, Wr = {
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
}, zr = {
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
}, Nr = {
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
}, Yr = {
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
}, qr = {
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
  90: "#072B36"
}, Gr = {
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
}, Ge = {
  aquamarine: qe,
  blue: Ir,
  green: $r,
  grey: Hr,
  magenta: Mr,
  neutral: Lr,
  ochre: Wr,
  orange: zr,
  purple: Nr,
  red: Yr,
  teal: qr,
  violet: Gr
}, Ur = {
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
}, Xr = {
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
}, Jr = {
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
}, Kr = {
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
}, Zr = {
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
}, Qr = {
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
}, Vr = {
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
}, et = {
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
}, rt = {
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
}, tt = {
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
}, at = {
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
}, nt = {
  aquamarine: qe,
  blue: Ur,
  green: Xr,
  grey: Jr,
  magenta: Kr,
  neutral: Zr,
  ochre: Qr,
  orange: Vr,
  purple: et,
  red: rt,
  teal: tt,
  violet: at
};
function ot(t) {
  if (!t.startsWith("#"))
    throw new Error("Custom color must be a hex code.");
}
function st(t) {
  return Object.keys(Ge).includes(t);
}
function V() {
  return V = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, V.apply(this, arguments);
}
function it(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function N(t, r) {
  return N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, s) {
    return n.__proto__ = s, n;
  }, N(t, r);
}
function ut(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, N(t, r);
}
function de(t) {
  return de = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, de(t);
}
function ct(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function lt() {
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
function Q(t, r, i) {
  return lt() ? Q = Reflect.construct.bind() : Q = function(s, d, h) {
    var a = [null];
    a.push.apply(a, d);
    var p = Function.bind.apply(s, a), c = new p();
    return h && N(c, h.prototype), c;
  }, Q.apply(null, arguments);
}
function pe(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pe = function(n) {
    if (n === null || !ct(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(n))
        return r.get(n);
      r.set(n, s);
    }
    function s() {
      return Q(n, arguments, de(this).constructor);
    }
    return s.prototype = Object.create(n.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), N(s, n);
  }, pe(t);
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
function dt() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  var n = r[0], s = [], d;
  for (d = 1; d < r.length; d += 1)
    s.push(r[d]);
  return s.forEach(function(h) {
    n = n.replace(/%[a-z]/, h);
  }), n;
}
var A = /* @__PURE__ */ function(t) {
  ut(r, t);
  function r(i) {
    var n;
    if (process.env.NODE_ENV === "production")
      n = t.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + i + " for more information.") || this;
    else {
      for (var s = arguments.length, d = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
        d[h - 1] = arguments[h];
      n = t.call(this, dt.apply(void 0, [ft[i]].concat(d))) || this;
    }
    return it(n);
  }
  return r;
}(/* @__PURE__ */ pe(Error));
function ce(t) {
  return Math.round(t * 255);
}
function pt(t, r, i) {
  return ce(t) + "," + ce(r) + "," + ce(i);
}
function Y(t, r, i, n) {
  if (n === void 0 && (n = pt), r === 0)
    return n(i, i, i);
  var s = (t % 360 + 360) % 360 / 60, d = (1 - Math.abs(2 * i - 1)) * r, h = d * (1 - Math.abs(s % 2 - 1)), a = 0, p = 0, c = 0;
  s >= 0 && s < 1 ? (a = d, p = h) : s >= 1 && s < 2 ? (a = h, p = d) : s >= 2 && s < 3 ? (p = d, c = h) : s >= 3 && s < 4 ? (p = h, c = d) : s >= 4 && s < 5 ? (a = h, c = d) : s >= 5 && s < 6 && (a = d, c = h);
  var E = i - d / 2, l = a + E, F = p + E, T = c + E;
  return n(l, F, T);
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
function ht(t) {
  if (typeof t != "string")
    return t;
  var r = t.toLowerCase();
  return We[r] ? "#" + We[r] : t;
}
var gt = /^#[a-fA-F0-9]{6}$/, bt = /^#[a-fA-F0-9]{8}$/, mt = /^#[a-fA-F0-9]{3}$/, vt = /^#[a-fA-F0-9]{4}$/, le = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Ft = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, yt = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Et = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ue(t) {
  if (typeof t != "string")
    throw new A(3);
  var r = ht(t);
  if (r.match(gt))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(bt)) {
    var i = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: i
    };
  }
  if (r.match(mt))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(vt)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var s = le.exec(r);
  if (s)
    return {
      red: parseInt("" + s[1], 10),
      green: parseInt("" + s[2], 10),
      blue: parseInt("" + s[3], 10)
    };
  var d = Ft.exec(r.substring(0, 50));
  if (d)
    return {
      red: parseInt("" + d[1], 10),
      green: parseInt("" + d[2], 10),
      blue: parseInt("" + d[3], 10),
      alpha: parseFloat("" + d[4]) > 1 ? parseFloat("" + d[4]) / 100 : parseFloat("" + d[4])
    };
  var h = yt.exec(r);
  if (h) {
    var a = parseInt("" + h[1], 10), p = parseInt("" + h[2], 10) / 100, c = parseInt("" + h[3], 10) / 100, E = "rgb(" + Y(a, p, c) + ")", l = le.exec(E);
    if (!l)
      throw new A(4, r, E);
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10)
    };
  }
  var F = Et.exec(r.substring(0, 50));
  if (F) {
    var T = parseInt("" + F[1], 10), v = parseInt("" + F[2], 10) / 100, O = parseInt("" + F[3], 10) / 100, q = "rgb(" + Y(T, v, O) + ")", B = le.exec(q);
    if (!B)
      throw new A(4, r, q);
    return {
      red: parseInt("" + B[1], 10),
      green: parseInt("" + B[2], 10),
      blue: parseInt("" + B[3], 10),
      alpha: parseFloat("" + F[4]) > 1 ? parseFloat("" + F[4]) / 100 : parseFloat("" + F[4])
    };
  }
  throw new A(5);
}
function xt(t) {
  var r = t.red / 255, i = t.green / 255, n = t.blue / 255, s = Math.max(r, i, n), d = Math.min(r, i, n), h = (s + d) / 2;
  if (s === d)
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
  var a, p = s - d, c = h > 0.5 ? p / (2 - s - d) : p / (s + d);
  switch (s) {
    case r:
      a = (i - n) / p + (i < n ? 6 : 0);
      break;
    case i:
      a = (n - r) / p + 2;
      break;
    default:
      a = (r - i) / p + 4;
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
function Xe(t) {
  return xt(Ue(t));
}
var Ct = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, he = Ct;
function _(t) {
  var r = t.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function fe(t) {
  return _(Math.round(t * 255));
}
function Tt(t, r, i) {
  return he("#" + fe(t) + fe(r) + fe(i));
}
function ee(t, r, i) {
  return Y(t, r, i, Tt);
}
function wt(t, r, i) {
  if (typeof t == "number" && typeof r == "number" && typeof i == "number")
    return ee(t, r, i);
  if (typeof t == "object" && r === void 0 && i === void 0)
    return ee(t.hue, t.saturation, t.lightness);
  throw new A(1);
}
function Dt(t, r, i, n) {
  if (typeof t == "number" && typeof r == "number" && typeof i == "number" && typeof n == "number")
    return n >= 1 ? ee(t, r, i) : "rgba(" + Y(t, r, i) + "," + n + ")";
  if (typeof t == "object" && r === void 0 && i === void 0 && n === void 0)
    return t.alpha >= 1 ? ee(t.hue, t.saturation, t.lightness) : "rgba(" + Y(t.hue, t.saturation, t.lightness) + "," + t.alpha + ")";
  throw new A(2);
}
function ge(t, r, i) {
  if (typeof t == "number" && typeof r == "number" && typeof i == "number")
    return he("#" + _(t) + _(r) + _(i));
  if (typeof t == "object" && r === void 0 && i === void 0)
    return he("#" + _(t.red) + _(t.green) + _(t.blue));
  throw new A(6);
}
function St(t, r, i, n) {
  if (typeof t == "string" && typeof r == "number") {
    var s = Ue(t);
    return "rgba(" + s.red + "," + s.green + "," + s.blue + "," + r + ")";
  } else {
    if (typeof t == "number" && typeof r == "number" && typeof i == "number" && typeof n == "number")
      return n >= 1 ? ge(t, r, i) : "rgba(" + t + "," + r + "," + i + "," + n + ")";
    if (typeof t == "object" && r === void 0 && i === void 0 && n === void 0)
      return t.alpha >= 1 ? ge(t.red, t.green, t.blue) : "rgba(" + t.red + "," + t.green + "," + t.blue + "," + t.alpha + ")";
  }
  throw new A(7);
}
var Bt = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, At = function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, Pt = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, Rt = function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
};
function Je(t) {
  if (typeof t != "object")
    throw new A(8);
  if (At(t))
    return St(t);
  if (Bt(t))
    return ge(t);
  if (Rt(t))
    return Dt(t);
  if (Pt(t))
    return wt(t);
  throw new A(8);
}
function Ke(t, r, i) {
  return function() {
    var s = i.concat(Array.prototype.slice.call(arguments));
    return s.length >= r ? t.apply(this, s) : Ke(t, r, s);
  };
}
function Ze(t) {
  return Ke(t, t.length, []);
}
function Qe(t, r, i) {
  return Math.max(t, Math.min(r, i));
}
function Ot(t, r) {
  if (r === "transparent")
    return r;
  var i = Xe(r);
  return Je(V({}, i, {
    lightness: Qe(0, 1, i.lightness - parseFloat(t))
  }));
}
var kt = /* @__PURE__ */ Ze(Ot), $ = kt;
function _t(t, r) {
  if (r === "transparent")
    return r;
  var i = Xe(r);
  return Je(V({}, i, {
    lightness: Qe(0, 1, i.lightness + parseFloat(t))
  }));
}
var jt = /* @__PURE__ */ Ze(_t), H = jt;
function It(t) {
  return {
    "00": H(0.36, t),
    "05": H(0.32, t),
    10: H(0.27, t),
    15: H(0.14, t),
    20: H(0.1, t),
    30: H(0, t),
    40: $(0.07, t),
    50: $(0.14, t),
    60: $(0.2, t),
    70: $(0.25, t),
    80: $(0.31, t),
    90: $(0.36, t)
  };
}
const $t = (t, r) => st(r) ? t[r] : (ot(r), It(r)), Ve = (t, r) => {
  const i = t == "light" ? Ge : nt, n = $t(i, r);
  return {
    ...i,
    brand: n
  };
}, Ht = (t) => {
  const {
    brand: r,
    aquamarine: i,
    blue: n,
    green: s,
    grey: d,
    magenta: h,
    neutral: a,
    ochre: p,
    orange: c,
    purple: E,
    red: l,
    teal: F,
    violet: T
  } = Ve("dark", t), v = {
    // Trainual Brand
    trainualBrand1: T[50],
    // State
    stateInfo: n[50],
    stateError: l[50],
    stateCaution: c[50],
    stateFavorite: p[50],
    stateSuccess: s[50],
    stateInfoBackground: F["05"],
    stateCautionBackground: c["05"],
    stateErrorBackground: l["00"],
    stateSuccessBackground: s["05"],
    stateInfoHover: n[30],
    stateErrorHover: l[30],
    stateCautionHover: c[30],
    stateSuccessHover: s[30],
    // Foundation
    foundationBase1: a[15],
    foundationBase2: a[30],
    foundationSurface1: a[20],
    foundationSurface2: a[90],
    foundationSurface3: r[30],
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
    textActiveVibrant: F[40],
    textHoverVibrant: F[50],
    textDisabled: a[50],
    // Border
    borderSurface1: a[25],
    borderSurface2: a[30],
    borderSurface3: r[40],
    borderDefault: a[40],
    borderHover: a[60],
    borderDisabled: a[40],
    // The representative for each palette. 
    //  Used in places like the palette picker.
    blueDefault: n[60],
    greenDefault: s[60],
    greyDefault: d[60],
    magentaDefault: h[60],
    neutralDefault: a[60],
    ocreDefault: p[60],
    orangeDefault: c[60],
    purpleDefault: E[60],
    redDefault: l[60],
    tealDefault: F[60],
    violetDefault: T[60],
    // Accent Primary
    accentPrimaryDefault: r[30],
    accentPrimaryHover: r[50],
    accentPrimaryPressed: r[60],
    accentPrimaryDisabled: a[30],
    // Accent Secondary
    accentSecondaryHover: r["00"],
    accentSecondaryPressed: r["05"],
    accentSecondaryDisabled: a[50],
    // Accent Border
    accentBorderDefault: r[30],
    accentBorderHover: r[60],
    accentBorderDisabled: a[40],
    // Accent Text
    accentTextPlaceholder: r[10],
    accentTextDefault: r[50],
    accentTextHover: r[60],
    accentTextActive: r[70],
    accentTextPressed: r[70],
    accentTextDisabled: a[25],
    // Accent Toggle
    accentToggleOff: a[25],
    // toggle switch
    accentToggleOn: r[70],
    // toggle switch
    accentToggleDefault: r[15],
    // toggle switch bg
    accentToggleHover: r[20],
    // toggle switch bg
    accentToggleActive: r[50],
    // toggle switch bg
    accentToggleActiveHover: r[40],
    // toggle switch
    accentToggleDisabled: a[50],
    // toggle switch bg
    // Badge
    //  TODO: Overly specific. Add foundationBase3 instead.
    badgeGeneral: a[60],
    // Billing Page
    //  TODO: Overly specific. Refactor to use trainualBrand1, 2, 3, etc
    scalePlanText: i[60],
    scalePlanNontext: i[50],
    ctaSecondary: i[50],
    ctaPrimary: n[90],
    trainPlanText: T[30],
    //Replace with trainualBrand1
    trainPlanNontext: T[30],
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
    chartFour00: l["00"],
    chartFour05: l["05"],
    chartFour10: l[10],
    chartFour15: l[15],
    chartFour20: l[20],
    chartFour30: l[30],
    chartFour40: l[40],
    chartFour50: l[50],
    chartFour60: l[60],
    chartFour70: l[70],
    chartFour80: l[80],
    chartFour90: l[90],
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
    trainualPurple: v.trainualBrand1,
    iconOverdue: v.stateError,
    iconActive: v.stateSuccess,
    borderActive: v.stateInfo,
    accentSecondaryDefault: v.foundationSurface1,
    badgeError: v.stateError,
    badgeCaution: v.stateCaution,
    badgeSuccess: v.stateSuccess,
    badgeInfo: v.stateInfo,
    logoBkgColor: v.foundationSurface1
  };
  return {
    ...v,
    ...O
  };
}, Mt = (t) => {
  const {
    brand: r,
    aquamarine: i,
    blue: n,
    green: s,
    grey: d,
    magenta: h,
    neutral: a,
    ochre: p,
    orange: c,
    purple: E,
    red: l,
    teal: F,
    violet: T
  } = Ve("light", t), v = {
    // Trainual Brand
    trainualBrand1: T[30],
    // State
    stateInfo: n[20],
    stateError: l[50],
    stateCaution: c[50],
    stateFavorite: p[50],
    stateSuccess: s[50],
    stateInfoBackground: F["05"],
    stateCautionBackground: c["00"],
    stateErrorBackground: l["00"],
    stateSuccessBackground: s["00"],
    stateInfoHover: n[40],
    stateErrorHover: l[40],
    stateCautionHover: c[40],
    stateSuccessHover: s[40],
    // Foundation
    foundationBase1: a["05"],
    foundationBase2: a[10],
    foundationSurface1: a["00"],
    foundationSurface2: a[90],
    foundationSurface3: r[30],
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
    textActiveVibrant: F[20],
    textHoverVibrant: F[30],
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
    greyDefault: d[30],
    magentaDefault: h[30],
    neutralDefault: a[30],
    ocreDefault: p[30],
    orangeDefault: c[30],
    purpleDefault: E[30],
    redDefault: l[30],
    tealDefault: F[30],
    violetDefault: T[30],
    // Accent Primary
    accentPrimaryDefault: r[30],
    accentPrimaryHover: r[50],
    accentPrimaryPressed: r[60],
    accentPrimaryDisabled: r[15],
    // Accent Secondary
    accentSecondaryHover: r["00"],
    accentSecondaryPressed: r["05"],
    accentSecondaryDisabled: a[15],
    // Accent Border
    accentBorderDefault: r[20],
    accentBorderHover: r[30],
    accentBorderDisabled: a[25],
    // Accent Text
    accentTextPlaceholder: r[15],
    accentTextDefault: r[30],
    accentTextHover: r[40],
    accentTextActive: r[70],
    accentTextPressed: r[70],
    accentTextDisabled: a[30],
    // Accent Toggle
    accentToggleOff: a["00"],
    // toggle switch
    accentToggleOn: r["00"],
    // toggle switch
    accentToggleDefault: r["05"],
    // toggle switch bg
    accentToggleHover: r[10],
    // toggle switch bg
    accentToggleActive: r[30],
    // toggle switch bg
    accentToggleActiveHover: r[20],
    // toggle switch
    accentToggleDisabled: a[20],
    // toggle switch bg
    // Badge
    //  TODO: Overly specific. Add foundationBase3 instead.
    badgeGeneral: a[50],
    // Billing Page
    //  TODO: Overly specific. Refactor to use trainualBrand1, 2, 3, etc
    scalePlanText: i[60],
    scalePlanNontext: i[50],
    ctaSecondary: i[50],
    ctaPrimary: n[90],
    trainPlanText: T[30],
    //Replace with trainualBrand1
    trainPlanNontext: T[30],
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
    chartFour00: l["00"],
    chartFour05: l["05"],
    chartFour10: l[10],
    chartFour15: l[15],
    chartFour20: l[20],
    chartFour30: l[30],
    chartFour40: l[40],
    chartFour50: l[50],
    chartFour60: l[60],
    chartFour70: l[70],
    chartFour80: l[80],
    chartFour90: l[90],
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
    trainualPurple: v.trainualBrand1,
    iconOverdue: v.stateError,
    iconActive: v.stateSuccess,
    borderActive: v.stateInfo,
    accentSecondaryDefault: v.foundationSurface1,
    badgeError: v.stateError,
    badgeCaution: v.stateCaution,
    badgeSuccess: v.stateSuccess,
    badgeInfo: v.stateInfo,
    logoBkgColor: v.foundationSurface1
  };
  return {
    ...v,
    ...O
  };
}, Lt = (t, r) => {
  const i = Mt(t), n = Ht(t);
  return r == "light" ? i : n;
}, Wt = () => ({
  fontExtralight: "200",
  fontLight: "300",
  fontRegular: "400",
  fontMedium: "500",
  fontSemibold: "600",
  fontBold: "700",
  fontExtrabold: "800",
  fontHeavy: "900"
}), zt = () => ({
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
var be = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Nt() {
  if (ze)
    return W;
  ze = 1;
  var t = Ye, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(a, p, c) {
    var E, l = {}, F = null, T = null;
    c !== void 0 && (F = "" + c), p.key !== void 0 && (F = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (E in p)
      n.call(p, E) && !d.hasOwnProperty(E) && (l[E] = p[E]);
    if (a && a.defaultProps)
      for (E in p = a.defaultProps, p)
        l[E] === void 0 && (l[E] = p[E]);
    return { $$typeof: r, type: a, key: F, ref: T, props: l, _owner: s.current };
  }
  return W.Fragment = i, W.jsx = h, W.jsxs = h, W;
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
var Ne;
function Yt() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ye, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), a = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), v = Symbol.iterator, O = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var o = v && e[v] || e[O];
      return typeof o == "function" ? o : null;
    }
    var B = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++)
          u[f - 1] = arguments[f];
        er("error", e, u);
      }
    }
    function er(e, o, u) {
      {
        var f = B.ReactDebugCurrentFrame, m = f.getStackAddendum();
        m !== "" && (o += "%s", u = u.concat([m]));
        var y = u.map(function(b) {
          return String(b);
        });
        y.unshift("Warning: " + o), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var rr = !1, tr = !1, ar = !1, nr = !1, or = !1, me;
    me = Symbol.for("react.module.reference");
    function sr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === d || or || e === s || e === c || e === E || nr || e === T || rr || tr || ar || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === l || e.$$typeof === h || e.$$typeof === a || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function ir(e, o, u) {
      var f = e.displayName;
      if (f)
        return f;
      var m = o.displayName || o.name || "";
      return m !== "" ? u + "(" + m + ")" : u;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var o = e;
            return ve(o) + ".Consumer";
          case h:
            var u = e;
            return ve(u._context) + ".Provider";
          case p:
            return ir(e, e.render, "ForwardRef");
          case l:
            var f = e.displayName || null;
            return f !== null ? f : P(e.type) || "Memo";
          case F: {
            var m = e, y = m._payload, b = m._init;
            try {
              return P(b(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, M = 0, Fe, ye, Ee, xe, Ce, Te, we;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function ur() {
      {
        if (M === 0) {
          Fe = console.log, ye = console.info, Ee = console.warn, xe = console.error, Ce = console.group, Te = console.groupCollapsed, we = console.groupEnd;
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
        M++;
      }
    }
    function cr() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: Fe
            }),
            info: k({}, e, {
              value: ye
            }),
            warn: k({}, e, {
              value: Ee
            }),
            error: k({}, e, {
              value: xe
            }),
            group: k({}, e, {
              value: Ce
            }),
            groupCollapsed: k({}, e, {
              value: Te
            }),
            groupEnd: k({}, e, {
              value: we
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = B.ReactCurrentDispatcher, te;
    function G(e, o, u) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (m) {
            var f = m.stack.trim().match(/\n( *(at )?)/);
            te = f && f[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ae = !1, U;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      U = new lr();
    }
    function Se(e, o) {
      if (!e || ae)
        return "";
      {
        var u = U.get(e);
        if (u !== void 0)
          return u;
      }
      var f;
      ae = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = re.current, re.current = null, ur();
      try {
        if (o) {
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
            } catch (R) {
              f = R;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (R) {
              f = R;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            f = R;
          }
          e();
        }
      } catch (R) {
        if (R && f && typeof R.stack == "string") {
          for (var g = R.stack.split(`
`), D = f.stack.split(`
`), x = g.length - 1, C = D.length - 1; x >= 1 && C >= 0 && g[x] !== D[C]; )
            C--;
          for (; x >= 1 && C >= 0; x--, C--)
            if (g[x] !== D[C]) {
              if (x !== 1 || C !== 1)
                do
                  if (x--, C--, C < 0 || g[x] !== D[C]) {
                    var S = `
` + g[x].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, S), S;
                  }
                while (x >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ae = !1, re.current = y, cr(), Error.prepareStackTrace = m;
      }
      var I = e ? e.displayName || e.name : "", Le = I ? G(I) : "";
      return typeof e == "function" && U.set(e, Le), Le;
    }
    function fr(e, o, u) {
      return Se(e, !1);
    }
    function dr(e) {
      var o = e.prototype;
      return !!(o && o.isReactComponent);
    }
    function X(e, o, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, dr(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case c:
          return G("Suspense");
        case E:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return fr(e.render);
          case l:
            return X(e.type, o, u);
          case F: {
            var f = e, m = f._payload, y = f._init;
            try {
              return X(y(m), o, u);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Be = {}, Ae = B.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var o = e._owner, u = X(e.type, e._source, o ? o.type : null);
        Ae.setExtraStackFrame(u);
      } else
        Ae.setExtraStackFrame(null);
    }
    function pr(e, o, u, f, m) {
      {
        var y = Function.call.bind(J);
        for (var b in e)
          if (y(e, b)) {
            var g = void 0;
            try {
              if (typeof e[b] != "function") {
                var D = Error((f || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              g = e[b](o, b, f, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              g = x;
            }
            g && !(g instanceof Error) && (K(m), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", u, b, typeof g), K(null)), g instanceof Error && !(g.message in Be) && (Be[g.message] = !0, K(m), w("Failed %s type: %s", u, g.message), K(null));
          }
      }
    }
    var hr = Array.isArray;
    function ne(e) {
      return hr(e);
    }
    function gr(e) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function br(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Re(e) {
      if (br(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Pe(e);
    }
    var L = B.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, ke, oe;
    oe = {};
    function vr(e) {
      if (J.call(e, "ref")) {
        var o = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Fr(e) {
      if (J.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yr(e, o) {
      if (typeof e.ref == "string" && L.current && o && L.current.stateNode !== o) {
        var u = P(L.current.type);
        oe[u] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(L.current.type), e.ref), oe[u] = !0);
      }
    }
    function Er(e, o) {
      {
        var u = function() {
          Oe || (Oe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function xr(e, o) {
      {
        var u = function() {
          ke || (ke = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Cr = function(e, o, u, f, m, y, b) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: o,
        ref: u,
        props: b,
        // Record the component responsible for creating this element.
        _owner: y
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
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Tr(e, o, u, f, m) {
      {
        var y, b = {}, g = null, D = null;
        u !== void 0 && (Re(u), g = "" + u), Fr(o) && (Re(o.key), g = "" + o.key), vr(o) && (D = o.ref, yr(o, m));
        for (y in o)
          J.call(o, y) && !mr.hasOwnProperty(y) && (b[y] = o[y]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (y in x)
            b[y] === void 0 && (b[y] = x[y]);
        }
        if (g || D) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Er(b, C), D && xr(b, C);
        }
        return Cr(e, g, D, m, f, L.current, b);
      }
    }
    var se = B.ReactCurrentOwner, _e = B.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var o = e._owner, u = X(e.type, e._source, o ? o.type : null);
        _e.setExtraStackFrame(u);
      } else
        _e.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function je() {
      {
        if (se.current) {
          var e = P(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wr(e) {
      {
        if (e !== void 0) {
          var o = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + o + ":" + u + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Dr(e) {
      {
        var o = je();
        if (!o) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (o = `

Check the top-level render call using <` + u + ">.");
        }
        return o;
      }
    }
    function $e(e, o) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Dr(o);
        if (Ie[u])
          return;
        Ie[u] = !0;
        var f = "";
        e && e._owner && e._owner !== se.current && (f = " It was passed a child from " + P(e._owner.type) + "."), j(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, f), j(null);
      }
    }
    function He(e, o) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var u = 0; u < e.length; u++) {
            var f = e[u];
            ue(f) && $e(f, o);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = q(e);
          if (typeof m == "function" && m !== e.entries)
            for (var y = m.call(e), b; !(b = y.next()).done; )
              ue(b.value) && $e(b.value, o);
        }
      }
    }
    function Sr(e) {
      {
        var o = e.type;
        if (o == null || typeof o == "string")
          return;
        var u;
        if (typeof o == "function")
          u = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === l))
          u = o.propTypes;
        else
          return;
        if (u) {
          var f = P(o);
          pr(u, e.props, "prop", f, e);
        } else if (o.PropTypes !== void 0 && !ie) {
          ie = !0;
          var m = P(o);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(e) {
      {
        for (var o = Object.keys(e.props), u = 0; u < o.length; u++) {
          var f = o[u];
          if (f !== "children" && f !== "key") {
            j(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Me(e, o, u, f, m, y) {
      {
        var b = sr(e);
        if (!b) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = wr(m);
          D ? g += D : g += je();
          var x;
          e === null ? x = "null" : ne(e) ? x = "array" : e !== void 0 && e.$$typeof === r ? (x = "<" + (P(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, g);
        }
        var C = Tr(e, o, u, m, y);
        if (C == null)
          return C;
        if (b) {
          var S = o.children;
          if (S !== void 0)
            if (f)
              if (ne(S)) {
                for (var I = 0; I < S.length; I++)
                  He(S[I], e);
                Object.freeze && Object.freeze(S);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(S, e);
        }
        return e === n ? Br(C) : Sr(C), C;
      }
    }
    function Ar(e, o, u) {
      return Me(e, o, u, !0);
    }
    function Pr(e, o, u) {
      return Me(e, o, u, !1);
    }
    var Rr = Pr, Or = Ar;
    z.Fragment = n, z.jsx = Rr, z.jsxs = Or;
  }()), z;
}
process.env.NODE_ENV === "production" ? be.exports = Nt() : be.exports = Yt();
var Z = be.exports;
const qt = kr`
  body * {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`, Xt = ({ brandOption: t, mode: r, children: i }) => {
  const n = jr(), s = Wt(), d = zt(), h = Lt(t, r), p = { constants: {
    ...n,
    ...s,
    ...d
  }, mode: r, brand: t, vars: h };
  return /* @__PURE__ */ Z.jsxs(Z.Fragment, { children: [
    /* @__PURE__ */ Z.jsx(qt, {}),
    /* @__PURE__ */ Z.jsx(_r, { theme: p, children: i })
  ] });
};
export {
  Xt as TokenThemeProvider,
  jr as useBorderTokens,
  Lt as useColorTokens,
  Wt as useFontTokens,
  zt as useSpacingTokens
};
