// SceneApp.js

var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;

function SceneApp() {
	bongiovi.Scene.call(this);
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis();
};


p._initTextures = function() {
	console.log('Init Textures');
};


p.render = function() {
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	this._vAxis.render();
};

module.exports = SceneApp;