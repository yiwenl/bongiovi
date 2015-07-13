// EaseNumber.js

"use strict";

var Scheduler = require("./Scheduler");

function EaseNumber(mValue, mEasing) {
	this._easing = mEasing || 0.1;
	this._value = mValue;
	this._targetValue = mValue;

	Scheduler.addEF(this, this._update);
}

var p = EaseNumber.prototype;


p._update = function() {
	this._checkLimit();
	this._value += (this._targetValue - this._value) * this._easing;	
};


p.setTo = function(mValue) {
	this._targetValue = this._value = mValue;
};


p.add = function(mAdd) {
	this._targetValue += mAdd;
};

p.limit = function(mMin, mMax) {
	this._min = mMin;
	this._max = mMax;

	this._checkLimit();
};

p.setEasing = function(mValue) {
	this._easing = mValue;
};

p._checkLimit = function() {
	if(this._min !== undefined && this._targetValue < this._min) {
		this._targetValue = this._min;
	} 

	if(this._max !== undefined && this._targetValue > this._max) {
		this._targetValue = this._max;
	} 
};


p.__defineGetter__("value", function() {
	return this._value;
});


p.__defineGetter__("targetValue", function() {
	return this._targetValue;
});


p.__defineSetter__("value", function(mValue) {
	this._targetValue = mValue;
});


module.exports = EaseNumber;