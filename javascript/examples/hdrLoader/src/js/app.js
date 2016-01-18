// app.js
// window.bongiovi = require("./libs/bongiovi.js");
window.bongiovi = require("../../../../dist/bongiovi.js");
var dat = require("dat-gui");
var parseHDR = require("parse-hdr");
var HDRLoader = require("./HDRLoader");

window.params = {
	exposure:1.0
};

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		var l = new bongiovi.SimpleImageLoader();
		var a = ['assets/test.jpg'];
		l.load(a, this, this._onImageLoaded);
	}

	var p = App.prototype;


	p._onImageLoaded = function(imgs) {

		window.images = imgs;
		if(document.body) this._init();
		else {
			window.addEventListener("load", this._init.bind(this));
		}
	};

	p._init = function() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.canvas.className = "Main-Canvas";
		document.body.appendChild(this.canvas);
		bongiovi.GL.init(this.canvas);

		this._scene = new SceneApp();
		bongiovi.Scheduler.addEF(this, this._loop);

		this.gui = new dat.GUI({width:300});
		this.gui.add(params, 'exposure', 1, 5);


		this.loadHDR();
	};


	p.loadHDR = function() {
		this.hdrLoader = new HDRLoader();
		this.hdrLoader.load('./assets/test.hdr', this._onLoad.bind(this));
	};


	p._onLoad = function(hdr) {
		console.log('on Loaded : ', hdr);
		window.images.hdr = hdr;
	};

	p._loop = function() {
		this._scene.loop();
	};

})();


new App();