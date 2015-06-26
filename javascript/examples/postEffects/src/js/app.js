// app.js

// window.bongiovi = require("./libs/bongiovi.min");
window.bongiovi = require("./libs/bongiovi");

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		new bongiovi.SimpleImageLoader().load([
			"assets/image.jpg"
			], this, this._onImageLoaded);
	}

	var p = App.prototype;


	p._onImageLoaded = function(img) {
		console.log("Image Loaded : ", img);
		window.image = img.image;

		if(document.body) {
			this._init();	
		} else {
			window.addEventListener('load', this._init.bind(this));
		}
	};


	p._init = function() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		document.body.appendChild(this.canvas);

		bongiovi.GL.init(this.canvas);
		this._scene = new SceneApp();

		bongiovi.Scheduler.addEF(this, this.loop);
	};

	p.loop = function() {
		this._scene.loop();
		// bongiovi.GL.clear(1, 0, 0, 1);
	};
})();


new App();