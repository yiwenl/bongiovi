"use strict";

var Pass = require("./Pass");

var EffectComposer = function() {
	this._passes = [];
}

var p = EffectComposer.prototype = new Pass();


p.addPass = function(pass) {
	this._passes.push(pass);
};


p.render = function(texture) {
	this.texture = texture;
	for(var i=0; i<this._passes.length; i++) {
		this.texture = this._passes[i].render(this.texture);
	}

	return this.texture;
};

p.getTexture = function() {
	return this.texture;	
};


module.exports =EffectComposer;