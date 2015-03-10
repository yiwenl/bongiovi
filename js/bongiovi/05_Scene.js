(function() {
	var GL = bongiovi.GL;

	var Scene = function() {
		this.gl = bongiovi.GLTool.gl;
		this._children = [];
		this._init();
	};

	var p = Scene.prototype;

	p._init = function() {
		this.camera = new bongiovi.SimpleCamera();
		console.debug("GL aspectRatio", GL.aspectRatio);
		this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
		this.camera.lockRotation();

		var eye            = vec3.clone([0, 0, 500]  );
		var center         = vec3.create( );
		var up             = vec3.clone( [0,-1,0] );
		this.camera.lookAt(eye, center, up);
		
		this.sceneRotation = new bongiovi.SceneRotation();
		this.rotationFront = mat4.create();
		mat4.identity(this.rotationFront);
		
		this.cameraOtho    = new bongiovi.Camera();

		// In SuperClass should call following functions.
		this._initTextures();
		this._initViews();

		window.addEventListener("resize", this._onResize.bind(this));
	};

	p._initTextures = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	p._initViews = function() {
		// console.log("Should be overwritten by SuperClass");
	};

	p.loop = function() {
		this.update();
		this.render();
	};

	p.update = function() {
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
		this.sceneRotation.update();
		bongiovi.GLTool.setMatrices(this.camera );
		bongiovi.GLTool.rotate(this.sceneRotation.matrix);
	};

	p.resize = function() {
		this._onResize();
	};

	p.render = function() {

	};

	p._onResize = function(aEvent) {
		console.log("Resizing : ", GL.aspectRatio, GL.width, GL.height);
		if(this.camera.resize) this.camera.resize(GL.aspectRatio);
	};

	bongiovi.Scene = Scene;

})();