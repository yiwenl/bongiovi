bongiovi = window.bongiovi || {};

(function() {

	var SceneRotation = function(aListenerTarget) {
		if(aListenerTarget == undefined) aListenerTarget = document;
		this._isRotateZ     = 0;
		this.matrix         = mat4.create();
		this.m              = mat4.create();
		this._vZaxis        = vec3.clone([0, 0, 0]);
		this._zAxis         = vec3.clone([0, 0, -1]);
		this.preMouse       = {x:0, y:0};
		this.mouse          = {x:0, y:0};
		this._isMouseDown   = false;
		this._rotation      = quat.clone([0, 0, 1, 0]);
		this.tempRotation   = quat.clone([0, 0, 0, 0]);
		this._rotateZMargin = 80;
		this.diffX          = 0;
		this.diffY          = 0;
		this._currDiffX     = 0;
		this._currDiffY     = 0;
		this._offset        = .004;
		this._easing        = .1;
		this._slerp			= -1;
		this._isLocked 		= false;

		var that = this;
		aListenerTarget.addEventListener("mousedown", function(aEvent) { that._onMouseDown(aEvent); });
		aListenerTarget.addEventListener("touchstart", function(aEvent) {	that._onMouseDown(aEvent); });
		aListenerTarget.addEventListener("mouseup", function(aEvent) { that._onMouseUp(aEvent); });
		aListenerTarget.addEventListener("touchend", function(aEvent) { that._onMouseUp(aEvent); });
		aListenerTarget.addEventListener("mousemove", function(aEvent) { that._onMouseMove(aEvent); });
		aListenerTarget.addEventListener("touchmove", function(aEvent) { that._onMouseMove(aEvent); });
		// aListenerTarget.addEventListener("mousewheel", function(aEvent) {	that._onMouseWheel(aEvent); });
		// aListenerTarget.addEventListener("DOMMouseScroll", function(aEvent) {	that._onMouseWheel(aEvent); });
	};

	var p = SceneRotation.prototype;

	p.inverseControl = function(value) {
		if(value == undefined) this._isInvert = true;
		else this._isInvert = value;
	};

	p.lock = function(value) {
		if(value == undefined) this._isLocked = true
		else this._isLocked = value;
	};

	p.getMousePos = function(aEvent) {
		var mouseX, mouseY;

		if(aEvent.changedTouches != undefined) {
			mouseX = aEvent.changedTouches[0].pageX;
			mouseY = aEvent.changedTouches[0].pageY;
		} else {
			mouseX = aEvent.clientX;
			mouseY = aEvent.clientY;
		}
		
		return {x:mouseX, y:mouseY};
	};

	p._onMouseDown = function(aEvent) {
		if(this._isLocked) return;
		if(this._isMouseDown) return;

		var mouse = this.getMousePos(aEvent);
		var tempRotation = quat.clone(this._rotation);
		this._updateRotation(tempRotation);
		this._rotation = tempRotation;

		this._isMouseDown = true;
		this._isRotateZ = 0;
		this.preMouse = {x:mouse.x, y:mouse.y};

		if(mouse.y < this._rotateZMargin || mouse.y > (window.innerHeight - this._rotateZMargin) ) this._isRotateZ = 1;
		else if(mouse.x < this._rotateZMargin || mouse.x > (window.innerWidth - this._rotateZMargin) ) this._isRotateZ = 2;	

		this._currDiffX = this.diffX = 0;
		this._currDiffY = this.diffY = 0;
	};

	p._onMouseMove = function(aEvent) {
		if(this._isLocked) return;
		if(aEvent.touches) aEvent.preventDefault();
		this.mouse = this.getMousePos(aEvent);
	};

	p._onMouseUp = function(aEvent) {
		if(this._isLocked) return;
		if(!this._isMouseDown) return;
		this._isMouseDown = false;
	};

	p.setCameraPos = function(mQuat, speed) {
		speed = speed || this._easing;
		this._easing = speed;
		if(this._slerp > 0) {
			quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
			this._targetQuat = undefined;
		}

		var tempRotation = quat.clone(this._rotation);
		this._updateRotation(tempRotation);
		this._rotation = quat.clone(tempRotation);
		this._currDiffX = this.diffX = 0;
		this._currDiffY = this.diffY = 0;

		this._isMouseDown = false;
		this._isRotateZ = 0;

		this._targetQuat = quat.clone(mQuat);
		this._slerp = 1;

	};


	p.resetQuat = function() {
		this._rotation    = quat.clone([0, 0, 1, 0]);
		this.tempRotation = quat.clone([0, 0, 0, 0]);
		this._targetQuat  = undefined;
		this._slerp       = -1;
	};

	p.update = function() {
		mat4.identity(this.m);

		if(this._targetQuat == undefined) { 
			quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]);
			this._updateRotation(this.tempRotation);
		} else {
			this._slerp += (0 - this._slerp) * .1;

			if(this._slerp < .001) {
				// quat.set(this._targetQuat, this._rotation);
				quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
				this._targetQuat = undefined;
				this._slerp = -1;
			} else {
				quat.set(this.tempRotation, 0, 0, 0, 0);
				quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp);
			}
		}

		vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation);

		mat4.fromQuat(this.matrix, this.tempRotation);
	};

	p._updateRotation = function(aTempRotation) {
		if(this._isMouseDown && !this._isLocked) {
			this.diffX = -(this.mouse.x - this.preMouse.x);
			this.diffY = (this.mouse.y - this.preMouse.y);

			if(this._isInvert) this.diffX = -this.diffX;
			if(this._isInvert) this.diffY = -this.diffY;
		}
		
		this._currDiffX += (this.diffX - this._currDiffX) * this._easing;
		this._currDiffY += (this.diffY - this._currDiffY) * this._easing;
		if(this._isRotateZ > 0) {
			if(this._isRotateZ == 1) {
				var angle = -this._currDiffX * this._offset; 
				angle *= (this.preMouse.y < this._rotateZMargin) ? -1 : 1;
				var _quat = quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
				quat.multiply(aTempRotation, _quat, aTempRotation);
			} else {
				var angle = -this._currDiffY * this._offset; 
				angle *= (this.preMouse.x < this._rotateZMargin) ? 1 : -1;
				var _quat = quat.clone( [0, 0, -Math.sin(angle), Math.cos(angle) ] );
				quat.multiply(aTempRotation, _quat, aTempRotation);
			}
		} else {
			var v = vec3.clone([this._currDiffX, this._currDiffY, 0]);
			var axis = vec3.create();
			vec3.cross(axis, v, this._zAxis);
			vec3.normalize(axis, axis);
			var angle = vec3.length(v) * this._offset;
			var _quat = quat.clone( [Math.sin(angle) * axis[0], Math.sin(angle) * axis[1], Math.sin(angle) * axis[2], Math.cos(angle) ] );
			quat.multiply(aTempRotation, _quat, aTempRotation);
		}

	};

	p.__defineGetter__("rotateMargin", function() {
		return this._rotateZMargin
	});


	p.__defineSetter__("rotateMargin", function(mValue) {
		this._rotateZMargin = mValue;
	});

	bongiovi.SceneRotation = SceneRotation;
	
})();