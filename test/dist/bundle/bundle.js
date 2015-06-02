(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// app.js

var bongiovi = require("./libs/bongiovi");

console.log('Test App', bongiovi);
},{"./libs/bongiovi":2}],2:[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,o.bongiovi=e()}}(function(){return function e(o,n,t){function r(f,u){if(!n[f]){if(!o[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var c=n[f]={exports:{}};o[f][0].call(c.exports,function(e){var n=o[f][1][e];return r(n?n:e)},c,c.exports,e,o,n,t)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)r(t[f]);return r}({1:[function(e,o){"use strict";function n(){console.log("bongiovi : v1.0.0"),console.log("test"),console.log("test"),console.log("test"),console.log("test")}o.exports=new n},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
