// SceneApp.js

var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;

function SceneApp() {
	bongiovi.Scene.call(this);
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	console.log('Init Views');
};


p._initTextures = function() {
	console.log('Init Textures');
};


p.render = function() {
	var grey = .96;
	GL.clear(grey, grey, grey, 1.0);
};

module.exports = SceneApp;