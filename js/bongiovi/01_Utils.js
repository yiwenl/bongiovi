// Utils.js

bongiovi.Utils = {};

(function() {
	var EaseNumber = function(mValue, mEasing) {
		this._easing = mEasing || .1;
		this._value = mValue;
		this._targetValue = mValue;

		bongiovi.Scheduler.addEF(this, this._update);
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

	p._checkLimit = function() {
		if(this._min && this._targetValue < this._min) {
			this._targetValue = this._min;
		} 

		if(this._max && this._targetValue > this._max) {
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

	bongiovi.EaseNumber = EaseNumber;
})();