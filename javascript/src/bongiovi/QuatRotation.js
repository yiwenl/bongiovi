"use strict";

var glm = require("gl-matrix");

function QuatRotation(mListenerTarget) {
	if(mListenerTarget === undefined) {	mListenerTarget = document;	}
	this._isRotateZ     = 0;
	this.matrix         = glm.mat4.create();
	this.m              = glm.mat4.create();
	this._vZaxis        = glm.vec3.clone([0, 0, 0]);
	this._zAxis         = glm.vec3.clone([0, 0, -1]);
	this.preMouse       = {x:0, y:0};
	this.mouse          = {x:0, y:0};
	this._isMouseDown   = false;
	this._rotation      = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation   = glm.quat.clone([0, 0, 0, 0]);
	this._rotateZMargin = 0;
	this.diffX          = 0;
	this.diffY          = 0;
	this._currDiffX     = 0;
	this._currDiffY     = 0;
	this._offset        = 0.004;
	this._easing        = 0.1;
	this._slerp			= -1;
	this._isLocked 		= false;

	var that = this;
	mListenerTarget.addEventListener("mousedown", function(aEvent) { that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("touchstart", function(aEvent) {	that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("mouseup", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("touchend", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("mousemove", function(aEvent) { that._onMouseMove(aEvent); });
	mListenerTarget.addEventListener("touchmove", function(aEvent) { that._onMouseMove(aEvent); });
}


var p = QuatRotation.prototype;

p.inverseControl = function(value) {
	if(value === undefined) {	
		this._isInvert = true;	
	} else {
		this._isInvert = value;
	}
};

p.lock = function(value) {
	if(value === undefined) {	
		this._isLocked = true;	
	} else {	
		this._isLocked = value;	
	}
};

p.getMousePos = function(aEvent) {
	var mouseX, mouseY;

	if(aEvent.changedTouches !== undefined) {
		mouseX = aEvent.changedTouches[0].pageX;
		mouseY = aEvent.changedTouches[0].pageY;
	} else {
		mouseX = aEvent.clientX;
		mouseY = aEvent.clientY;
	}
	
	return {x:mouseX, y:mouseY};
};

p._onMouseDown = function(aEvent) {
	if(this._isLocked) {return;}
	if(this._isMouseDown) {return;}

	var mouse = this.getMousePos(aEvent);
	var tempRotation = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation = tempRotation;

	this._isMouseDown = true;
	this._isRotateZ = 0;
	this.preMouse = {x:mouse.x, y:mouse.y};

	if(mouse.y < this._rotateZMargin || mouse.y > (window.innerHeight - this._rotateZMargin) ) {	this._isRotateZ = 1;	}
	else if(mouse.x < this._rotateZMargin || mouse.x > (window.innerWidth - this._rotateZMargin) ) {	this._isRotateZ = 2;	}

	this._currDiffX = this.diffX = 0;
	this._currDiffY = this.diffY = 0;
};

p._onMouseMove = function(aEvent) {
	if(this._isLocked) {return;}
	if(aEvent.touches) {aEvent.preventDefault();}
	this.mouse = this.getMousePos(aEvent);
};

p._onMouseUp = function() {
	if(this._isLocked) {return;}
	if(!this._isMouseDown) {return;}
	this._isMouseDown = false;
};

p.setCameraPos = function(mQuat, speed) {
	speed             = speed || this._easing;
	this._easing      = speed;
	if(this._slerp > 0) {return;}
	
	var tempRotation  = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation    = glm.quat.clone(tempRotation);
	this._currDiffX   = this.diffX = 0;
	this._currDiffY   = this.diffY = 0;
	
	this._isMouseDown = false;
	this._isRotateZ   = 0;
	
	this._targetQuat  = glm.quat.clone(mQuat);
	this._slerp       = 1;
};

p.resetQuat = function() {
	this._rotation    = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation = glm.quat.clone([0, 0, 0, 0]);
	this._targetQuat  = undefined;
	this._slerp       = -1;
};

p.update = function() {
	glm.mat4.identity(this.m);

	if(this._targetQuat === undefined) { 
		glm.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]);
		this._updateRotation(this.tempRotation);
	} else {
		this._slerp += (0 - this._slerp) * 0.1;

		if(this._slerp < 0.001) {
			// quat.set(this._targetQuat, this._rotation);
			glm.quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
			this._targetQuat = undefined;
			this._slerp = -1;
		} else {
			glm.quat.set(this.tempRotation, 0, 0, 0, 0);
			glm.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp);
		}
	}

	glm.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation);

	glm.mat4.fromQuat(this.matrix, this.tempRotation);
};

p._updateRotation = function(aTempRotation) {
	if(this._isMouseDown && !this._isLocked) {
		this.diffX = -(this.mouse.x - this.preMouse.x);
		this.diffY = (this.mouse.y - this.preMouse.y);

		if(this._isInvert) {
			this.diffX = -this.diffX;
			this.diffY = -this.diffY;
		}
	}
	
	this._currDiffX += (this.diffX - this._currDiffX) * this._easing;
	this._currDiffY += (this.diffY - this._currDiffY) * this._easing;

	var angle, _quat;

	if(this._isRotateZ > 0) {
		if(this._isRotateZ === 1) {
			angle = -this._currDiffX * this._offset; 
			angle *= (this.preMouse.y < this._rotateZMargin) ? -1 : 1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		} else {
			angle = -this._currDiffY * this._offset; 
			angle *= (this.preMouse.x < this._rotateZMargin) ? 1 : -1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		}
	} else {
		var v = glm.vec3.clone([this._currDiffX, this._currDiffY, 0]);
		var axis = glm.vec3.create();
		glm.vec3.cross(axis, v, this._zAxis);
		glm.vec3.normalize(axis, axis);
		angle = glm.vec3.length(v) * this._offset;
		_quat = glm.quat.clone( [Math.sin(angle) * axis[0], Math.sin(angle) * axis[1], Math.sin(angle) * axis[2], Math.cos(angle) ] );
		glm.quat.multiply(aTempRotation, _quat, aTempRotation);
	}

};


module.exports = QuatRotation;