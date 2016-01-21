(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

!function t(n, r, a) {
  function e(o, i) {
    if (!r[o]) {
      if (!n[o]) {
        var c = "function" == typeof require && require;if (!i && c) return c(o, !0);if (u) return u(o, !0);var s = new Error("Cannot find module '" + o + "'");throw s.code = "MODULE_NOT_FOUND", s;
      }var f = r[o] = { exports: {} };n[o][0].call(f.exports, function (t) {
        var r = n[o][1][t];return e(r ? r : t);
      }, f, f.exports, t, n, r, a);
    }return r[o].exports;
  }for (var u = "function" == typeof require && require, o = 0; o < a.length; o++) {
    e(a[o]);
  }return e;
}({ 1: [function (t, n, r) {
    r.glMatrix = t("./gl-matrix/common.js"), r.mat2 = t("./gl-matrix/mat2.js"), r.mat2d = t("./gl-matrix/mat2d.js"), r.mat3 = t("./gl-matrix/mat3.js"), r.mat4 = t("./gl-matrix/mat4.js"), r.quat = t("./gl-matrix/quat.js"), r.vec2 = t("./gl-matrix/vec2.js"), r.vec3 = t("./gl-matrix/vec3.js"), r.vec4 = t("./gl-matrix/vec4.js");
  }, { "./gl-matrix/common.js": 2, "./gl-matrix/mat2.js": 3, "./gl-matrix/mat2d.js": 4, "./gl-matrix/mat3.js": 5, "./gl-matrix/mat4.js": 6, "./gl-matrix/quat.js": 7, "./gl-matrix/vec2.js": 8, "./gl-matrix/vec3.js": 9, "./gl-matrix/vec4.js": 10 }], 2: [function (t, n, r) {
    var a = {};a.EPSILON = 1e-6, a.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, a.RANDOM = Math.random, a.setMatrixArrayType = function (t) {
      GLMAT_ARRAY_TYPE = t;
    };var e = Math.PI / 180;a.toRadian = function (t) {
      return t * e;
    }, n.exports = a;
  }, {}], 3: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(4);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(4);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
    }, e.identity = function (t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }, e.transpose = function (t, n) {
      if (t === n) {
        var r = n[1];t[1] = n[2], t[2] = r;
      } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];return t;
    }, e.invert = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = r * u - e * a;return o ? (o = 1 / o, t[0] = u * o, t[1] = -a * o, t[2] = -e * o, t[3] = r * o, t) : null;
    }, e.adjoint = function (t, n) {
      var r = n[0];return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = r, t;
    }, e.determinant = function (t) {
      return t[0] * t[3] - t[2] * t[1];
    }, e.multiply = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[0],
          c = r[1],
          s = r[2],
          f = r[3];return t[0] = a * i + u * c, t[1] = e * i + o * c, t[2] = a * s + u * f, t[3] = e * s + o * f, t;
    }, e.mul = e.multiply, e.rotate = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = Math.sin(r),
          c = Math.cos(r);return t[0] = a * c + u * i, t[1] = e * c + o * i, t[2] = a * -i + u * c, t[3] = e * -i + o * c, t;
    }, e.scale = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[0],
          c = r[1];return t[0] = a * i, t[1] = e * i, t[2] = u * c, t[3] = o * c, t;
    }, e.fromRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t;
    }, e.fromScaling = function (t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t;
    }, e.str = function (t) {
      return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    }, e.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
    }, e.LDU = function (t, n, r, a) {
      return t[2] = a[2] / a[0], r[0] = a[0], r[1] = a[1], r[3] = a[3] - t[2] * r[1], [t, n, r];
    }, n.exports = e;
  }, { "./common.js": 2 }], 4: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(6);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(6);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t;
    }, e.identity = function (t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }, e.invert = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = r * u - a * e;return c ? (c = 1 / c, t[0] = u * c, t[1] = -a * c, t[2] = -e * c, t[3] = r * c, t[4] = (e * i - u * o) * c, t[5] = (a * o - r * i) * c, t) : null;
    }, e.determinant = function (t) {
      return t[0] * t[3] - t[1] * t[2];
    }, e.multiply = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = r[0],
          f = r[1],
          l = r[2],
          m = r[3],
          h = r[4],
          M = r[5];return t[0] = a * s + u * f, t[1] = e * s + o * f, t[2] = a * l + u * m, t[3] = e * l + o * m, t[4] = a * h + u * M + i, t[5] = e * h + o * M + c, t;
    }, e.mul = e.multiply, e.rotate = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = Math.sin(r),
          f = Math.cos(r);return t[0] = a * f + u * s, t[1] = e * f + o * s, t[2] = a * -s + u * f, t[3] = e * -s + o * f, t[4] = i, t[5] = c, t;
    }, e.scale = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = r[0],
          f = r[1];return t[0] = a * s, t[1] = e * s, t[2] = u * f, t[3] = o * f, t[4] = i, t[5] = c, t;
    }, e.translate = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = r[0],
          f = r[1];return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = a * s + u * f + i, t[5] = e * s + o * f + c, t;
    }, e.fromRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = a, t[1] = r, t[2] = -r, t[3] = a, t[4] = 0, t[5] = 0, t;
    }, e.fromScaling = function (t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t;
    }, e.fromTranslation = function (t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t;
    }, e.str = function (t) {
      return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
    }, e.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
    }, n.exports = e;
  }, { "./common.js": 2 }], 5: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(9);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }, e.fromMat4 = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(9);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
    }, e.identity = function (t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }, e.transpose = function (t, n) {
      if (t === n) {
        var r = n[1],
            a = n[2],
            e = n[5];t[1] = n[3], t[2] = n[6], t[3] = r, t[5] = n[7], t[6] = a, t[7] = e;
      } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];return t;
    }, e.invert = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          s = n[7],
          f = n[8],
          l = f * o - i * s,
          m = -f * u + i * c,
          h = s * u - o * c,
          M = r * l + a * m + e * h;return M ? (M = 1 / M, t[0] = l * M, t[1] = (-f * a + e * s) * M, t[2] = (i * a - e * o) * M, t[3] = m * M, t[4] = (f * r - e * c) * M, t[5] = (-i * r + e * u) * M, t[6] = h * M, t[7] = (-s * r + a * c) * M, t[8] = (o * r - a * u) * M, t) : null;
    }, e.adjoint = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          s = n[7],
          f = n[8];return t[0] = o * f - i * s, t[1] = e * s - a * f, t[2] = a * i - e * o, t[3] = i * c - u * f, t[4] = r * f - e * c, t[5] = e * u - r * i, t[6] = u * s - o * c, t[7] = a * c - r * s, t[8] = r * o - a * u, t;
    }, e.determinant = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3],
          u = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          s = t[8];return n * (s * u - o * c) + r * (-s * e + o * i) + a * (c * e - u * i);
    }, e.multiply = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = n[6],
          f = n[7],
          l = n[8],
          m = r[0],
          h = r[1],
          M = r[2],
          v = r[3],
          d = r[4],
          p = r[5],
          g = r[6],
          A = r[7],
          w = r[8];return t[0] = m * a + h * o + M * s, t[1] = m * e + h * i + M * f, t[2] = m * u + h * c + M * l, t[3] = v * a + d * o + p * s, t[4] = v * e + d * i + p * f, t[5] = v * u + d * c + p * l, t[6] = g * a + A * o + w * s, t[7] = g * e + A * i + w * f, t[8] = g * u + A * c + w * l, t;
    }, e.mul = e.multiply, e.translate = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = n[6],
          f = n[7],
          l = n[8],
          m = r[0],
          h = r[1];return t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = i, t[5] = c, t[6] = m * a + h * o + s, t[7] = m * e + h * i + f, t[8] = m * u + h * c + l, t;
    }, e.rotate = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = n[6],
          f = n[7],
          l = n[8],
          m = Math.sin(r),
          h = Math.cos(r);return t[0] = h * a + m * o, t[1] = h * e + m * i, t[2] = h * u + m * c, t[3] = h * o - m * a, t[4] = h * i - m * e, t[5] = h * c - m * u, t[6] = s, t[7] = f, t[8] = l, t;
    }, e.scale = function (t, n, r) {
      var a = r[0],
          e = r[1];return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = e * n[3], t[4] = e * n[4], t[5] = e * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
    }, e.fromTranslation = function (t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t;
    }, e.fromRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = a, t[1] = r, t[2] = 0, t[3] = -r, t[4] = a, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }, e.fromScaling = function (t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    }, e.fromMat2d = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t;
    }, e.fromQuat = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = r + r,
          i = a + a,
          c = e + e,
          s = r * o,
          f = a * o,
          l = a * i,
          m = e * o,
          h = e * i,
          M = e * c,
          v = u * o,
          d = u * i,
          p = u * c;return t[0] = 1 - l - M, t[3] = f - p, t[6] = m + d, t[1] = f + p, t[4] = 1 - s - M, t[7] = h - v, t[2] = m - d, t[5] = h + v, t[8] = 1 - s - l, t;
    }, e.normalFromMat4 = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          s = n[7],
          f = n[8],
          l = n[9],
          m = n[10],
          h = n[11],
          M = n[12],
          v = n[13],
          d = n[14],
          p = n[15],
          g = r * i - a * o,
          A = r * c - e * o,
          w = r * s - u * o,
          R = a * c - e * i,
          q = a * s - u * i,
          x = e * s - u * c,
          j = f * v - l * M,
          Y = f * d - m * M,
          y = f * p - h * M,
          P = l * d - m * v,
          E = l * p - h * v,
          T = m * p - h * d,
          _ = g * T - A * E + w * P + R * y - q * Y + x * j;return _ ? (_ = 1 / _, t[0] = (i * T - c * E + s * P) * _, t[1] = (c * y - o * T - s * Y) * _, t[2] = (o * E - i * y + s * j) * _, t[3] = (e * E - a * T - u * P) * _, t[4] = (r * T - e * y + u * Y) * _, t[5] = (a * y - r * E - u * j) * _, t[6] = (v * x - d * q + p * R) * _, t[7] = (d * w - M * x - p * A) * _, t[8] = (M * q - v * w + p * g) * _, t) : null;
    }, e.str = function (t) {
      return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
    }, e.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
    }, n.exports = e;
  }, { "./common.js": 2 }], 6: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(16);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(16);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
    }, e.identity = function (t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.transpose = function (t, n) {
      if (t === n) {
        var r = n[1],
            a = n[2],
            e = n[3],
            u = n[6],
            o = n[7],
            i = n[11];t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = r, t[6] = n[9], t[7] = n[13], t[8] = a, t[9] = u, t[11] = n[14], t[12] = e, t[13] = o, t[14] = i;
      } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];return t;
    }, e.invert = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          s = n[7],
          f = n[8],
          l = n[9],
          m = n[10],
          h = n[11],
          M = n[12],
          v = n[13],
          d = n[14],
          p = n[15],
          g = r * i - a * o,
          A = r * c - e * o,
          w = r * s - u * o,
          R = a * c - e * i,
          q = a * s - u * i,
          x = e * s - u * c,
          j = f * v - l * M,
          Y = f * d - m * M,
          y = f * p - h * M,
          P = l * d - m * v,
          E = l * p - h * v,
          T = m * p - h * d,
          _ = g * T - A * E + w * P + R * y - q * Y + x * j;return _ ? (_ = 1 / _, t[0] = (i * T - c * E + s * P) * _, t[1] = (e * E - a * T - u * P) * _, t[2] = (v * x - d * q + p * R) * _, t[3] = (m * q - l * x - h * R) * _, t[4] = (c * y - o * T - s * Y) * _, t[5] = (r * T - e * y + u * Y) * _, t[6] = (d * w - M * x - p * A) * _, t[7] = (f * x - m * w + h * A) * _, t[8] = (o * E - i * y + s * j) * _, t[9] = (a * y - r * E - u * j) * _, t[10] = (M * q - v * w + p * g) * _, t[11] = (l * w - f * q - h * g) * _, t[12] = (i * Y - o * P - c * j) * _, t[13] = (r * P - a * Y + e * j) * _, t[14] = (v * A - M * R - d * g) * _, t[15] = (f * R - l * A + m * g) * _, t) : null;
    }, e.adjoint = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          s = n[7],
          f = n[8],
          l = n[9],
          m = n[10],
          h = n[11],
          M = n[12],
          v = n[13],
          d = n[14],
          p = n[15];return t[0] = i * (m * p - h * d) - l * (c * p - s * d) + v * (c * h - s * m), t[1] = -(a * (m * p - h * d) - l * (e * p - u * d) + v * (e * h - u * m)), t[2] = a * (c * p - s * d) - i * (e * p - u * d) + v * (e * s - u * c), t[3] = -(a * (c * h - s * m) - i * (e * h - u * m) + l * (e * s - u * c)), t[4] = -(o * (m * p - h * d) - f * (c * p - s * d) + M * (c * h - s * m)), t[5] = r * (m * p - h * d) - f * (e * p - u * d) + M * (e * h - u * m), t[6] = -(r * (c * p - s * d) - o * (e * p - u * d) + M * (e * s - u * c)), t[7] = r * (c * h - s * m) - o * (e * h - u * m) + f * (e * s - u * c), t[8] = o * (l * p - h * v) - f * (i * p - s * v) + M * (i * h - s * l), t[9] = -(r * (l * p - h * v) - f * (a * p - u * v) + M * (a * h - u * l)), t[10] = r * (i * p - s * v) - o * (a * p - u * v) + M * (a * s - u * i), t[11] = -(r * (i * h - s * l) - o * (a * h - u * l) + f * (a * s - u * i)), t[12] = -(o * (l * d - m * v) - f * (i * d - c * v) + M * (i * m - c * l)), t[13] = r * (l * d - m * v) - f * (a * d - e * v) + M * (a * m - e * l), t[14] = -(r * (i * d - c * v) - o * (a * d - e * v) + M * (a * c - e * i)), t[15] = r * (i * m - c * l) - o * (a * m - e * l) + f * (a * c - e * i), t;
    }, e.determinant = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3],
          u = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          s = t[8],
          f = t[9],
          l = t[10],
          m = t[11],
          h = t[12],
          M = t[13],
          v = t[14],
          d = t[15],
          p = n * o - r * u,
          g = n * i - a * u,
          A = n * c - e * u,
          w = r * i - a * o,
          R = r * c - e * o,
          q = a * c - e * i,
          x = s * M - f * h,
          j = s * v - l * h,
          Y = s * d - m * h,
          y = f * v - l * M,
          P = f * d - m * M,
          E = l * d - m * v;return p * E - g * P + A * y + w * Y - R * j + q * x;
    }, e.multiply = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          s = n[6],
          f = n[7],
          l = n[8],
          m = n[9],
          h = n[10],
          M = n[11],
          v = n[12],
          d = n[13],
          p = n[14],
          g = n[15],
          A = r[0],
          w = r[1],
          R = r[2],
          q = r[3];return t[0] = A * a + w * i + R * l + q * v, t[1] = A * e + w * c + R * m + q * d, t[2] = A * u + w * s + R * h + q * p, t[3] = A * o + w * f + R * M + q * g, A = r[4], w = r[5], R = r[6], q = r[7], t[4] = A * a + w * i + R * l + q * v, t[5] = A * e + w * c + R * m + q * d, t[6] = A * u + w * s + R * h + q * p, t[7] = A * o + w * f + R * M + q * g, A = r[8], w = r[9], R = r[10], q = r[11], t[8] = A * a + w * i + R * l + q * v, t[9] = A * e + w * c + R * m + q * d, t[10] = A * u + w * s + R * h + q * p, t[11] = A * o + w * f + R * M + q * g, A = r[12], w = r[13], R = r[14], q = r[15], t[12] = A * a + w * i + R * l + q * v, t[13] = A * e + w * c + R * m + q * d, t[14] = A * u + w * s + R * h + q * p, t[15] = A * o + w * f + R * M + q * g, t;
    }, e.mul = e.multiply, e.translate = function (t, n, r) {
      var a,
          e,
          u,
          o,
          i,
          c,
          s,
          f,
          l,
          m,
          h,
          M,
          v = r[0],
          d = r[1],
          p = r[2];return n === t ? (t[12] = n[0] * v + n[4] * d + n[8] * p + n[12], t[13] = n[1] * v + n[5] * d + n[9] * p + n[13], t[14] = n[2] * v + n[6] * d + n[10] * p + n[14], t[15] = n[3] * v + n[7] * d + n[11] * p + n[15]) : (a = n[0], e = n[1], u = n[2], o = n[3], i = n[4], c = n[5], s = n[6], f = n[7], l = n[8], m = n[9], h = n[10], M = n[11], t[0] = a, t[1] = e, t[2] = u, t[3] = o, t[4] = i, t[5] = c, t[6] = s, t[7] = f, t[8] = l, t[9] = m, t[10] = h, t[11] = M, t[12] = a * v + i * d + l * p + n[12], t[13] = e * v + c * d + m * p + n[13], t[14] = u * v + s * d + h * p + n[14], t[15] = o * v + f * d + M * p + n[15]), t;
    }, e.scale = function (t, n, r) {
      var a = r[0],
          e = r[1],
          u = r[2];return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * e, t[5] = n[5] * e, t[6] = n[6] * e, t[7] = n[7] * e, t[8] = n[8] * u, t[9] = n[9] * u, t[10] = n[10] * u, t[11] = n[11] * u, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
    }, e.rotate = function (t, n, r, e) {
      var u,
          o,
          i,
          c,
          s,
          f,
          l,
          m,
          h,
          M,
          v,
          d,
          p,
          g,
          A,
          w,
          R,
          q,
          x,
          j,
          Y,
          y,
          P,
          E,
          T = e[0],
          _ = e[1],
          D = e[2],
          b = Math.sqrt(T * T + _ * _ + D * D);return Math.abs(b) < a.EPSILON ? null : (b = 1 / b, T *= b, _ *= b, D *= b, u = Math.sin(r), o = Math.cos(r), i = 1 - o, c = n[0], s = n[1], f = n[2], l = n[3], m = n[4], h = n[5], M = n[6], v = n[7], d = n[8], p = n[9], g = n[10], A = n[11], w = T * T * i + o, R = _ * T * i + D * u, q = D * T * i - _ * u, x = T * _ * i - D * u, j = _ * _ * i + o, Y = D * _ * i + T * u, y = T * D * i + _ * u, P = _ * D * i - T * u, E = D * D * i + o, t[0] = c * w + m * R + d * q, t[1] = s * w + h * R + p * q, t[2] = f * w + M * R + g * q, t[3] = l * w + v * R + A * q, t[4] = c * x + m * j + d * Y, t[5] = s * x + h * j + p * Y, t[6] = f * x + M * j + g * Y, t[7] = l * x + v * j + A * Y, t[8] = c * y + m * P + d * E, t[9] = s * y + h * P + p * E, t[10] = f * y + M * P + g * E, t[11] = l * y + v * P + A * E, n !== t && (t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t);
    }, e.rotateX = function (t, n, r) {
      var a = Math.sin(r),
          e = Math.cos(r),
          u = n[4],
          o = n[5],
          i = n[6],
          c = n[7],
          s = n[8],
          f = n[9],
          l = n[10],
          m = n[11];return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = u * e + s * a, t[5] = o * e + f * a, t[6] = i * e + l * a, t[7] = c * e + m * a, t[8] = s * e - u * a, t[9] = f * e - o * a, t[10] = l * e - i * a, t[11] = m * e - c * a, t;
    }, e.rotateY = function (t, n, r) {
      var a = Math.sin(r),
          e = Math.cos(r),
          u = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          s = n[8],
          f = n[9],
          l = n[10],
          m = n[11];return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e - s * a, t[1] = o * e - f * a, t[2] = i * e - l * a, t[3] = c * e - m * a, t[8] = u * a + s * e, t[9] = o * a + f * e, t[10] = i * a + l * e, t[11] = c * a + m * e, t;
    }, e.rotateZ = function (t, n, r) {
      var a = Math.sin(r),
          e = Math.cos(r),
          u = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          s = n[4],
          f = n[5],
          l = n[6],
          m = n[7];return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = u * e + s * a, t[1] = o * e + f * a, t[2] = i * e + l * a, t[3] = c * e + m * a, t[4] = s * e - u * a, t[5] = f * e - o * a, t[6] = l * e - i * a, t[7] = m * e - c * a, t;
    }, e.fromTranslation = function (t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
    }, e.fromScaling = function (t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.fromRotation = function (t, n, r) {
      var e,
          u,
          o,
          i = r[0],
          c = r[1],
          s = r[2],
          f = Math.sqrt(i * i + c * c + s * s);return Math.abs(f) < a.EPSILON ? null : (f = 1 / f, i *= f, c *= f, s *= f, e = Math.sin(n), u = Math.cos(n), o = 1 - u, t[0] = i * i * o + u, t[1] = c * i * o + s * e, t[2] = s * i * o - c * e, t[3] = 0, t[4] = i * c * o - s * e, t[5] = c * c * o + u, t[6] = s * c * o + i * e, t[7] = 0, t[8] = i * s * o + c * e, t[9] = c * s * o - i * e, t[10] = s * s * o + u, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
    }, e.fromXRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.fromYRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = a, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.fromZRotation = function (t, n) {
      var r = Math.sin(n),
          a = Math.cos(n);return t[0] = a, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = a, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.fromRotationTranslation = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = a + a,
          c = e + e,
          s = u + u,
          f = a * i,
          l = a * c,
          m = a * s,
          h = e * c,
          M = e * s,
          v = u * s,
          d = o * i,
          p = o * c,
          g = o * s;return t[0] = 1 - (h + v), t[1] = l + g, t[2] = m - p, t[3] = 0, t[4] = l - g, t[5] = 1 - (f + v), t[6] = M + d, t[7] = 0, t[8] = m + p, t[9] = M - d, t[10] = 1 - (f + h), t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
    }, e.fromRotationTranslationScale = function (t, n, r, a) {
      var e = n[0],
          u = n[1],
          o = n[2],
          i = n[3],
          c = e + e,
          s = u + u,
          f = o + o,
          l = e * c,
          m = e * s,
          h = e * f,
          M = u * s,
          v = u * f,
          d = o * f,
          p = i * c,
          g = i * s,
          A = i * f,
          w = a[0],
          R = a[1],
          q = a[2];return t[0] = (1 - (M + d)) * w, t[1] = (m + A) * w, t[2] = (h - g) * w, t[3] = 0, t[4] = (m - A) * R, t[5] = (1 - (l + d)) * R, t[6] = (v + p) * R, t[7] = 0, t[8] = (h + g) * q, t[9] = (v - p) * q, t[10] = (1 - (l + M)) * q, t[11] = 0, t[12] = r[0], t[13] = r[1], t[14] = r[2], t[15] = 1, t;
    }, e.fromRotationTranslationScaleOrigin = function (t, n, r, a, e) {
      var u = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          s = u + u,
          f = o + o,
          l = i + i,
          m = u * s,
          h = u * f,
          M = u * l,
          v = o * f,
          d = o * l,
          p = i * l,
          g = c * s,
          A = c * f,
          w = c * l,
          R = a[0],
          q = a[1],
          x = a[2],
          j = e[0],
          Y = e[1],
          y = e[2];return t[0] = (1 - (v + p)) * R, t[1] = (h + w) * R, t[2] = (M - A) * R, t[3] = 0, t[4] = (h - w) * q, t[5] = (1 - (m + p)) * q, t[6] = (d + g) * q, t[7] = 0, t[8] = (M + A) * x, t[9] = (d - g) * x, t[10] = (1 - (m + v)) * x, t[11] = 0, t[12] = r[0] + j - (t[0] * j + t[4] * Y + t[8] * y), t[13] = r[1] + Y - (t[1] * j + t[5] * Y + t[9] * y), t[14] = r[2] + y - (t[2] * j + t[6] * Y + t[10] * y), t[15] = 1, t;
    }, e.fromQuat = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = r + r,
          i = a + a,
          c = e + e,
          s = r * o,
          f = a * o,
          l = a * i,
          m = e * o,
          h = e * i,
          M = e * c,
          v = u * o,
          d = u * i,
          p = u * c;return t[0] = 1 - l - M, t[1] = f + p, t[2] = m - d, t[3] = 0, t[4] = f - p, t[5] = 1 - s - M, t[6] = h + v, t[7] = 0, t[8] = m + d, t[9] = h - v, t[10] = 1 - s - l, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    }, e.frustum = function (t, n, r, a, e, u, o) {
      var i = 1 / (r - n),
          c = 1 / (e - a),
          s = 1 / (u - o);return t[0] = 2 * u * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * u * c, t[6] = 0, t[7] = 0, t[8] = (r + n) * i, t[9] = (e + a) * c, t[10] = (o + u) * s, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * u * 2 * s, t[15] = 0, t;
    }, e.perspective = function (t, n, r, a, e) {
      var u = 1 / Math.tan(n / 2),
          o = 1 / (a - e);return t[0] = u / r, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (e + a) * o, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * e * a * o, t[15] = 0, t;
    }, e.perspectiveFromFieldOfView = function (t, n, r, a) {
      var e = Math.tan(n.upDegrees * Math.PI / 180),
          u = Math.tan(n.downDegrees * Math.PI / 180),
          o = Math.tan(n.leftDegrees * Math.PI / 180),
          i = Math.tan(n.rightDegrees * Math.PI / 180),
          c = 2 / (o + i),
          s = 2 / (e + u);return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s, t[6] = 0, t[7] = 0, t[8] = -((o - i) * c * .5), t[9] = (e - u) * s * .5, t[10] = a / (r - a), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * r / (r - a), t[15] = 0, t;
    }, e.ortho = function (t, n, r, a, e, u, o) {
      var i = 1 / (n - r),
          c = 1 / (a - e),
          s = 1 / (u - o);return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * s, t[11] = 0, t[12] = (n + r) * i, t[13] = (e + a) * c, t[14] = (o + u) * s, t[15] = 1, t;
    }, e.lookAt = function (t, n, r, u) {
      var o,
          i,
          c,
          s,
          f,
          l,
          m,
          h,
          M,
          v,
          d = n[0],
          p = n[1],
          g = n[2],
          A = u[0],
          w = u[1],
          R = u[2],
          q = r[0],
          x = r[1],
          j = r[2];return Math.abs(d - q) < a.EPSILON && Math.abs(p - x) < a.EPSILON && Math.abs(g - j) < a.EPSILON ? e.identity(t) : (m = d - q, h = p - x, M = g - j, v = 1 / Math.sqrt(m * m + h * h + M * M), m *= v, h *= v, M *= v, o = w * M - R * h, i = R * m - A * M, c = A * h - w * m, v = Math.sqrt(o * o + i * i + c * c), v ? (v = 1 / v, o *= v, i *= v, c *= v) : (o = 0, i = 0, c = 0), s = h * c - M * i, f = M * o - m * c, l = m * i - h * o, v = Math.sqrt(s * s + f * f + l * l), v ? (v = 1 / v, s *= v, f *= v, l *= v) : (s = 0, f = 0, l = 0), t[0] = o, t[1] = s, t[2] = m, t[3] = 0, t[4] = i, t[5] = f, t[6] = h, t[7] = 0, t[8] = c, t[9] = l, t[10] = M, t[11] = 0, t[12] = -(o * d + i * p + c * g), t[13] = -(s * d + f * p + l * g), t[14] = -(m * d + h * p + M * g), t[15] = 1, t);
    }, e.str = function (t) {
      return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
    }, e.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
    }, n.exports = e;
  }, { "./common.js": 2 }], 7: [function (t, n, r) {
    var a = t("./common.js"),
        e = t("./mat3.js"),
        u = t("./vec3.js"),
        o = t("./vec4.js"),
        i = {};i.create = function () {
      var t = new a.ARRAY_TYPE(4);return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }, i.rotationTo = function () {
      var t = u.create(),
          n = u.fromValues(1, 0, 0),
          r = u.fromValues(0, 1, 0);return function (a, e, o) {
        var c = u.dot(e, o);return -.999999 > c ? (u.cross(t, n, e), u.length(t) < 1e-6 && u.cross(t, r, e), u.normalize(t, t), i.setAxisAngle(a, t, Math.PI), a) : c > .999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (u.cross(t, e, o), a[0] = t[0], a[1] = t[1], a[2] = t[2], a[3] = 1 + c, i.normalize(a, a));
      };
    }(), i.setAxes = function () {
      var t = e.create();return function (n, r, a, e) {
        return t[0] = a[0], t[3] = a[1], t[6] = a[2], t[1] = e[0], t[4] = e[1], t[7] = e[2], t[2] = -r[0], t[5] = -r[1], t[8] = -r[2], i.normalize(n, i.fromMat3(n, t));
      };
    }(), i.clone = o.clone, i.fromValues = o.fromValues, i.copy = o.copy, i.set = o.set, i.identity = function (t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
    }, i.setAxisAngle = function (t, n, r) {
      r = .5 * r;var a = Math.sin(r);return t[0] = a * n[0], t[1] = a * n[1], t[2] = a * n[2], t[3] = Math.cos(r), t;
    }, i.add = o.add, i.multiply = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = r[0],
          c = r[1],
          s = r[2],
          f = r[3];return t[0] = a * f + o * i + e * s - u * c, t[1] = e * f + o * c + u * i - a * s, t[2] = u * f + o * s + a * c - e * i, t[3] = o * f - a * i - e * c - u * s, t;
    }, i.mul = i.multiply, i.scale = o.scale, i.rotateX = function (t, n, r) {
      r *= .5;var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = Math.sin(r),
          c = Math.cos(r);return t[0] = a * c + o * i, t[1] = e * c + u * i, t[2] = u * c - e * i, t[3] = o * c - a * i, t;
    }, i.rotateY = function (t, n, r) {
      r *= .5;var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = Math.sin(r),
          c = Math.cos(r);return t[0] = a * c - u * i, t[1] = e * c + o * i, t[2] = u * c + a * i, t[3] = o * c - e * i, t;
    }, i.rotateZ = function (t, n, r) {
      r *= .5;var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3],
          i = Math.sin(r),
          c = Math.cos(r);return t[0] = a * c + e * i, t[1] = e * c - a * i, t[2] = u * c + o * i, t[3] = o * c - u * i, t;
    }, i.calculateW = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2];return t[0] = r, t[1] = a, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - r * r - a * a - e * e)), t;
    }, i.dot = o.dot, i.lerp = o.lerp, i.slerp = function (t, n, r, a) {
      var e,
          u,
          o,
          i,
          c,
          s = n[0],
          f = n[1],
          l = n[2],
          m = n[3],
          h = r[0],
          M = r[1],
          v = r[2],
          d = r[3];return u = s * h + f * M + l * v + m * d, 0 > u && (u = -u, h = -h, M = -M, v = -v, d = -d), 1 - u > 1e-6 ? (e = Math.acos(u), o = Math.sin(e), i = Math.sin((1 - a) * e) / o, c = Math.sin(a * e) / o) : (i = 1 - a, c = a), t[0] = i * s + c * h, t[1] = i * f + c * M, t[2] = i * l + c * v, t[3] = i * m + c * d, t;
    }, i.sqlerp = function () {
      var t = i.create(),
          n = i.create();return function (r, a, e, u, o, c) {
        return i.slerp(t, a, o, c), i.slerp(n, e, u, c), i.slerp(r, t, n, 2 * c * (1 - c)), r;
      };
    }(), i.invert = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = r * r + a * a + e * e + u * u,
          i = o ? 1 / o : 0;return t[0] = -r * i, t[1] = -a * i, t[2] = -e * i, t[3] = u * i, t;
    }, i.conjugate = function (t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t;
    }, i.length = o.length, i.len = i.length, i.squaredLength = o.squaredLength, i.sqrLen = i.squaredLength, i.normalize = o.normalize, i.fromMat3 = function (t, n) {
      var r,
          a = n[0] + n[4] + n[8];if (a > 0) r = Math.sqrt(a + 1), t[3] = .5 * r, r = .5 / r, t[0] = (n[5] - n[7]) * r, t[1] = (n[6] - n[2]) * r, t[2] = (n[1] - n[3]) * r;else {
        var e = 0;n[4] > n[0] && (e = 1), n[8] > n[3 * e + e] && (e = 2);var u = (e + 1) % 3,
            o = (e + 2) % 3;r = Math.sqrt(n[3 * e + e] - n[3 * u + u] - n[3 * o + o] + 1), t[e] = .5 * r, r = .5 / r, t[3] = (n[3 * u + o] - n[3 * o + u]) * r, t[u] = (n[3 * u + e] + n[3 * e + u]) * r, t[o] = (n[3 * o + e] + n[3 * e + o]) * r;
      }return t;
    }, i.str = function (t) {
      return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    }, n.exports = i;
  }, { "./common.js": 2, "./mat3.js": 5, "./vec3.js": 9, "./vec4.js": 10 }], 8: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(2);return t[0] = 0, t[1] = 0, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(2);return n[0] = t[0], n[1] = t[1], n;
    }, e.fromValues = function (t, n) {
      var r = new a.ARRAY_TYPE(2);return r[0] = t, r[1] = n, r;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t;
    }, e.set = function (t, n, r) {
      return t[0] = n, t[1] = r, t;
    }, e.add = function (t, n, r) {
      return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t;
    }, e.subtract = function (t, n, r) {
      return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t;
    }, e.sub = e.subtract, e.multiply = function (t, n, r) {
      return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t;
    }, e.mul = e.multiply, e.divide = function (t, n, r) {
      return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t;
    }, e.div = e.divide, e.min = function (t, n, r) {
      return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t;
    }, e.max = function (t, n, r) {
      return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t;
    }, e.scale = function (t, n, r) {
      return t[0] = n[0] * r, t[1] = n[1] * r, t;
    }, e.scaleAndAdd = function (t, n, r, a) {
      return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t;
    }, e.distance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1];return Math.sqrt(r * r + a * a);
    }, e.dist = e.distance, e.squaredDistance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1];return r * r + a * a;
    }, e.sqrDist = e.squaredDistance, e.length = function (t) {
      var n = t[0],
          r = t[1];return Math.sqrt(n * n + r * r);
    }, e.len = e.length, e.squaredLength = function (t) {
      var n = t[0],
          r = t[1];return n * n + r * r;
    }, e.sqrLen = e.squaredLength, e.negate = function (t, n) {
      return t[0] = -n[0], t[1] = -n[1], t;
    }, e.inverse = function (t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t;
    }, e.normalize = function (t, n) {
      var r = n[0],
          a = n[1],
          e = r * r + a * a;return e > 0 && (e = 1 / Math.sqrt(e), t[0] = n[0] * e, t[1] = n[1] * e), t;
    }, e.dot = function (t, n) {
      return t[0] * n[0] + t[1] * n[1];
    }, e.cross = function (t, n, r) {
      var a = n[0] * r[1] - n[1] * r[0];return t[0] = t[1] = 0, t[2] = a, t;
    }, e.lerp = function (t, n, r, a) {
      var e = n[0],
          u = n[1];return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t;
    }, e.random = function (t, n) {
      n = n || 1;var r = 2 * a.RANDOM() * Math.PI;return t[0] = Math.cos(r) * n, t[1] = Math.sin(r) * n, t;
    }, e.transformMat2 = function (t, n, r) {
      var a = n[0],
          e = n[1];return t[0] = r[0] * a + r[2] * e, t[1] = r[1] * a + r[3] * e, t;
    }, e.transformMat2d = function (t, n, r) {
      var a = n[0],
          e = n[1];return t[0] = r[0] * a + r[2] * e + r[4], t[1] = r[1] * a + r[3] * e + r[5], t;
    }, e.transformMat3 = function (t, n, r) {
      var a = n[0],
          e = n[1];return t[0] = r[0] * a + r[3] * e + r[6], t[1] = r[1] * a + r[4] * e + r[7], t;
    }, e.transformMat4 = function (t, n, r) {
      var a = n[0],
          e = n[1];return t[0] = r[0] * a + r[4] * e + r[12], t[1] = r[1] * a + r[5] * e + r[13], t;
    }, e.forEach = function () {
      var t = e.create();return function (n, r, a, e, u, o) {
        var i, c;for (r || (r = 2), a || (a = 0), c = e ? Math.min(e * r + a, n.length) : n.length, i = a; c > i; i += r) {
          t[0] = n[i], t[1] = n[i + 1], u(t, t, o), n[i] = t[0], n[i + 1] = t[1];
        }return n;
      };
    }(), e.str = function (t) {
      return "vec2(" + t[0] + ", " + t[1] + ")";
    }, n.exports = e;
  }, { "./common.js": 2 }], 9: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(3);return t[0] = 0, t[1] = 0, t[2] = 0, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(3);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n;
    }, e.fromValues = function (t, n, r) {
      var e = new a.ARRAY_TYPE(3);return e[0] = t, e[1] = n, e[2] = r, e;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
    }, e.set = function (t, n, r, a) {
      return t[0] = n, t[1] = r, t[2] = a, t;
    }, e.add = function (t, n, r) {
      return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t;
    }, e.subtract = function (t, n, r) {
      return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t;
    }, e.sub = e.subtract, e.multiply = function (t, n, r) {
      return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t;
    }, e.mul = e.multiply, e.divide = function (t, n, r) {
      return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t;
    }, e.div = e.divide, e.min = function (t, n, r) {
      return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t;
    }, e.max = function (t, n, r) {
      return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t;
    }, e.scale = function (t, n, r) {
      return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t;
    }, e.scaleAndAdd = function (t, n, r, a) {
      return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t;
    }, e.distance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2];return Math.sqrt(r * r + a * a + e * e);
    }, e.dist = e.distance, e.squaredDistance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2];return r * r + a * a + e * e;
    }, e.sqrDist = e.squaredDistance, e.length = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2];return Math.sqrt(n * n + r * r + a * a);
    }, e.len = e.length, e.squaredLength = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2];return n * n + r * r + a * a;
    }, e.sqrLen = e.squaredLength, e.negate = function (t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t;
    }, e.inverse = function (t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t;
    }, e.normalize = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = r * r + a * a + e * e;return u > 0 && (u = 1 / Math.sqrt(u), t[0] = n[0] * u, t[1] = n[1] * u, t[2] = n[2] * u), t;
    }, e.dot = function (t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
    }, e.cross = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = r[0],
          i = r[1],
          c = r[2];return t[0] = e * c - u * i, t[1] = u * o - a * c, t[2] = a * i - e * o, t;
    }, e.lerp = function (t, n, r, a) {
      var e = n[0],
          u = n[1],
          o = n[2];return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t;
    }, e.hermite = function (t, n, r, a, e, u) {
      var o = u * u,
          i = o * (2 * u - 3) + 1,
          c = o * (u - 2) + u,
          s = o * (u - 1),
          f = o * (3 - 2 * u);return t[0] = n[0] * i + r[0] * c + a[0] * s + e[0] * f, t[1] = n[1] * i + r[1] * c + a[1] * s + e[1] * f, t[2] = n[2] * i + r[2] * c + a[2] * s + e[2] * f, t;
    }, e.bezier = function (t, n, r, a, e, u) {
      var o = 1 - u,
          i = o * o,
          c = u * u,
          s = i * o,
          f = 3 * u * i,
          l = 3 * c * o,
          m = c * u;return t[0] = n[0] * s + r[0] * f + a[0] * l + e[0] * m, t[1] = n[1] * s + r[1] * f + a[1] * l + e[1] * m, t[2] = n[2] * s + r[2] * f + a[2] * l + e[2] * m, t;
    }, e.random = function (t, n) {
      n = n || 1;var r = 2 * a.RANDOM() * Math.PI,
          e = 2 * a.RANDOM() - 1,
          u = Math.sqrt(1 - e * e) * n;return t[0] = Math.cos(r) * u, t[1] = Math.sin(r) * u, t[2] = e * n, t;
    }, e.transformMat4 = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = r[3] * a + r[7] * e + r[11] * u + r[15];return o = o || 1, t[0] = (r[0] * a + r[4] * e + r[8] * u + r[12]) / o, t[1] = (r[1] * a + r[5] * e + r[9] * u + r[13]) / o, t[2] = (r[2] * a + r[6] * e + r[10] * u + r[14]) / o, t;
    }, e.transformMat3 = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2];return t[0] = a * r[0] + e * r[3] + u * r[6], t[1] = a * r[1] + e * r[4] + u * r[7], t[2] = a * r[2] + e * r[5] + u * r[8], t;
    }, e.transformQuat = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = r[0],
          i = r[1],
          c = r[2],
          s = r[3],
          f = s * a + i * u - c * e,
          l = s * e + c * a - o * u,
          m = s * u + o * e - i * a,
          h = -o * a - i * e - c * u;return t[0] = f * s + h * -o + l * -c - m * -i, t[1] = l * s + h * -i + m * -o - f * -c, t[2] = m * s + h * -c + f * -i - l * -o, t;
    }, e.rotateX = function (t, n, r, a) {
      var e = [],
          u = [];return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0], u[1] = e[1] * Math.cos(a) - e[2] * Math.sin(a), u[2] = e[1] * Math.sin(a) + e[2] * Math.cos(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
    }, e.rotateY = function (t, n, r, a) {
      var e = [],
          u = [];return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[2] * Math.sin(a) + e[0] * Math.cos(a), u[1] = e[1], u[2] = e[2] * Math.cos(a) - e[0] * Math.sin(a), t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
    }, e.rotateZ = function (t, n, r, a) {
      var e = [],
          u = [];return e[0] = n[0] - r[0], e[1] = n[1] - r[1], e[2] = n[2] - r[2], u[0] = e[0] * Math.cos(a) - e[1] * Math.sin(a), u[1] = e[0] * Math.sin(a) + e[1] * Math.cos(a), u[2] = e[2], t[0] = u[0] + r[0], t[1] = u[1] + r[1], t[2] = u[2] + r[2], t;
    }, e.forEach = function () {
      var t = e.create();return function (n, r, a, e, u, o) {
        var i, c;for (r || (r = 3), a || (a = 0), c = e ? Math.min(e * r + a, n.length) : n.length, i = a; c > i; i += r) {
          t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2];
        }return n;
      };
    }(), e.angle = function (t, n) {
      var r = e.fromValues(t[0], t[1], t[2]),
          a = e.fromValues(n[0], n[1], n[2]);e.normalize(r, r), e.normalize(a, a);var u = e.dot(r, a);return u > 1 ? 0 : Math.acos(u);
    }, e.str = function (t) {
      return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    }, n.exports = e;
  }, { "./common.js": 2 }], 10: [function (t, n, r) {
    var a = t("./common.js"),
        e = {};e.create = function () {
      var t = new a.ARRAY_TYPE(4);return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
    }, e.clone = function (t) {
      var n = new a.ARRAY_TYPE(4);return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
    }, e.fromValues = function (t, n, r, e) {
      var u = new a.ARRAY_TYPE(4);return u[0] = t, u[1] = n, u[2] = r, u[3] = e, u;
    }, e.copy = function (t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
    }, e.set = function (t, n, r, a, e) {
      return t[0] = n, t[1] = r, t[2] = a, t[3] = e, t;
    }, e.add = function (t, n, r) {
      return t[0] = n[0] + r[0], t[1] = n[1] + r[1], t[2] = n[2] + r[2], t[3] = n[3] + r[3], t;
    }, e.subtract = function (t, n, r) {
      return t[0] = n[0] - r[0], t[1] = n[1] - r[1], t[2] = n[2] - r[2], t[3] = n[3] - r[3], t;
    }, e.sub = e.subtract, e.multiply = function (t, n, r) {
      return t[0] = n[0] * r[0], t[1] = n[1] * r[1], t[2] = n[2] * r[2], t[3] = n[3] * r[3], t;
    }, e.mul = e.multiply, e.divide = function (t, n, r) {
      return t[0] = n[0] / r[0], t[1] = n[1] / r[1], t[2] = n[2] / r[2], t[3] = n[3] / r[3], t;
    }, e.div = e.divide, e.min = function (t, n, r) {
      return t[0] = Math.min(n[0], r[0]), t[1] = Math.min(n[1], r[1]), t[2] = Math.min(n[2], r[2]), t[3] = Math.min(n[3], r[3]), t;
    }, e.max = function (t, n, r) {
      return t[0] = Math.max(n[0], r[0]), t[1] = Math.max(n[1], r[1]), t[2] = Math.max(n[2], r[2]), t[3] = Math.max(n[3], r[3]), t;
    }, e.scale = function (t, n, r) {
      return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t;
    }, e.scaleAndAdd = function (t, n, r, a) {
      return t[0] = n[0] + r[0] * a, t[1] = n[1] + r[1] * a, t[2] = n[2] + r[2] * a, t[3] = n[3] + r[3] * a, t;
    }, e.distance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2],
          u = n[3] - t[3];return Math.sqrt(r * r + a * a + e * e + u * u);
    }, e.dist = e.distance, e.squaredDistance = function (t, n) {
      var r = n[0] - t[0],
          a = n[1] - t[1],
          e = n[2] - t[2],
          u = n[3] - t[3];return r * r + a * a + e * e + u * u;
    }, e.sqrDist = e.squaredDistance, e.length = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3];return Math.sqrt(n * n + r * r + a * a + e * e);
    }, e.len = e.length, e.squaredLength = function (t) {
      var n = t[0],
          r = t[1],
          a = t[2],
          e = t[3];return n * n + r * r + a * a + e * e;
    }, e.sqrLen = e.squaredLength, e.negate = function (t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
    }, e.inverse = function (t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
    }, e.normalize = function (t, n) {
      var r = n[0],
          a = n[1],
          e = n[2],
          u = n[3],
          o = r * r + a * a + e * e + u * u;
      return o > 0 && (o = 1 / Math.sqrt(o), t[0] = r * o, t[1] = a * o, t[2] = e * o, t[3] = u * o), t;
    }, e.dot = function (t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
    }, e.lerp = function (t, n, r, a) {
      var e = n[0],
          u = n[1],
          o = n[2],
          i = n[3];return t[0] = e + a * (r[0] - e), t[1] = u + a * (r[1] - u), t[2] = o + a * (r[2] - o), t[3] = i + a * (r[3] - i), t;
    }, e.random = function (t, n) {
      return n = n || 1, t[0] = a.RANDOM(), t[1] = a.RANDOM(), t[2] = a.RANDOM(), t[3] = a.RANDOM(), e.normalize(t, t), e.scale(t, t, n), t;
    }, e.transformMat4 = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = n[3];return t[0] = r[0] * a + r[4] * e + r[8] * u + r[12] * o, t[1] = r[1] * a + r[5] * e + r[9] * u + r[13] * o, t[2] = r[2] * a + r[6] * e + r[10] * u + r[14] * o, t[3] = r[3] * a + r[7] * e + r[11] * u + r[15] * o, t;
    }, e.transformQuat = function (t, n, r) {
      var a = n[0],
          e = n[1],
          u = n[2],
          o = r[0],
          i = r[1],
          c = r[2],
          s = r[3],
          f = s * a + i * u - c * e,
          l = s * e + c * a - o * u,
          m = s * u + o * e - i * a,
          h = -o * a - i * e - c * u;return t[0] = f * s + h * -o + l * -c - m * -i, t[1] = l * s + h * -i + m * -o - f * -c, t[2] = m * s + h * -c + f * -i - l * -o, t[3] = n[3], t;
    }, e.forEach = function () {
      var t = e.create();return function (n, r, a, e, u, o) {
        var i, c;for (r || (r = 4), a || (a = 0), c = e ? Math.min(e * r + a, n.length) : n.length, i = a; c > i; i += r) {
          t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], u(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
        }return n;
      };
    }(), e.str = function (t) {
      return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    }, n.exports = e;
  }, { "./common.js": 2 }], 11: [function (t, n, r) {
    "use strict";
    function a(t) {
      return t && t.__esModule ? t : { "default": t };
    }Object.defineProperty(r, "__esModule", { value: !0 });var e = t("./test"),
        u = a(e),
        o = t("gl-matrix"),
        i = a(o),
        c = { glm: i["default"], test: u["default"], title: "title" };console.log(c, u["default"]), r["default"] = c;
  }, { "./test": 12, "gl-matrix": 1 }], 12: [function (t, n, r) {
    "use strict";
    function a(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(r, "__esModule", { value: !0 });var e = function u() {
      a(this, u), console.log("This is test");
    };r["default"] = e;
  }, {}] }, {}, [11]);


},{}],2:[function(require,module,exports){
"use strict";

// app.js
window.bongiovi = require("../../../../build/bongiovi.js");

console.log('bongiovi : ', bongiovi);
// window.bongiovi = require("./libs/bongiovi.js");
// var dat = require("dat-gui");

// (function() {
// 	var SceneApp = require("./SceneApp");

// 	var App = function() {
// 		let a = 10.0;
// 		const b = 20.0;
// 		console.log(a, b);
// 		if(document.body) this._init();
// 		else {
// 			window.addEventListener("load", this._init.bind(this));
// 		}
// 	}

// 	var p = App.prototype;

// 	p._init = function() {
// 		this.canvas = document.createElement("canvas");
// 		this.canvas.width = window.innerWidth;
// 		this.canvas.height = window.innerHeight;
// 		this.canvas.className = "Main-Canvas";
// 		document.body.appendChild(this.canvas);
// 		bongiovi.GL.init(this.canvas);

// 		this._scene = new SceneApp();
// 		bongiovi.Scheduler.addEF(this, this._loop);

// 		// this.gui = new dat.GUI({width:300});
// 	};

// 	p._loop = function() {
// 		this._scene.loop();
// 	};

// 	new App();
// })();

},{"../../../../build/bongiovi.js":1}]},{},[2]);
