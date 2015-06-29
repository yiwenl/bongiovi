(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
<<<<<<< HEAD
// app.js

// window.bongiovi = require("./libs/bongiovi.min");
window.bongiovi = require("../../../../dist/bongiovi.min");

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		if(document.body) {
			this._init();	
		} else {
			window.addEventListener('load', this._init.bind(this));
		}
	}

	var p = App.prototype;


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
},{"../../../../dist/bongiovi.min":2,"./SceneApp":3}],2:[function(require,module,exports){
(function (global){
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.bongiovi=t()}}(function(){var t;return function e(t,i,r){function n(s,o){if(!i[s]){if(!t[s]){var h="function"==typeof require&&require;if(!o&&h)return h(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=i[s]={exports:{}};t[s][0].call(f.exports,function(e){var i=t[s][1][e];return n(i?i:e)},f,f.exports,e,t,i,r)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)n(r[s]);return n}({1:[function(t,e){"use strict";var i=t("./bongiovi/GLTools"),r={GL:i,GLTools:i,Scheduler:t("./bongiovi/Scheduler"),SimpleImageLoader:t("./bongiovi/SimpleImageLoader"),EaseNumber:t("./bongiovi/EaseNumber"),QuatRotation:t("./bongiovi/QuatRotation"),Scene:t("./bongiovi/Scene"),Camera:t("./bongiovi/Camera"),SimpleCamera:t("./bongiovi/SimpleCamera"),CameraPerspective:t("./bongiovi/CameraPerspective"),Mesh:t("./bongiovi/Mesh"),Face:t("./bongiovi/Face"),GLShader:t("./bongiovi/GLShader"),GLTexture:t("./bongiovi/GLTexture"),ShaderLibs:t("./bongiovi/ShaderLibs"),View:t("./bongiovi/View"),ViewCopy:t("./bongiovi/ViewCopy"),ViewAxis:t("./bongiovi/ViewAxis"),ViewDotPlane:t("./bongiovi/ViewDotPlanes"),MeshUtils:t("./bongiovi/MeshUtils"),FrameBuffer:t("./bongiovi/FrameBuffer"),glm:t("gl-matrix")};e.exports=r},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(e,i,r){!function(n){"use strict";var a={};"undefined"==typeof r?"function"==typeof t&&"object"==typeof t.amd&&t.amd?(a.exports={},t(function(){return a.exports})):a.exports="undefined"!=typeof window?window:n:a.exports=r,function(r){if(!n)var n=1e-6;if(!a)var a="undefined"!=typeof Float32Array?Float32Array:Array;if(!s)var s=Math.random;var o={};o.setMatrixArrayType=function(t){a=t},"undefined"!=typeof r&&(r.glMatrix=o);var h=Math.PI/180;o.toRadian=function(t){return t*h};var u={};u.create=function(){var t=new a(2);return t[0]=0,t[1]=0,t},u.clone=function(t){var e=new a(2);return e[0]=t[0],e[1]=t[1],e},u.fromValues=function(t,e){var i=new a(2);return i[0]=t,i[1]=e,i},u.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},u.set=function(t,e,i){return t[0]=e,t[1]=i,t},u.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},u.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},u.sub=u.subtract,u.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},u.mul=u.multiply,u.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},u.div=u.divide,u.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},u.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t},u.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},u.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t},u.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(i*i+r*r)},u.dist=u.distance,u.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1];return i*i+r*r},u.sqrDist=u.squaredDistance,u.length=function(t){var e=t[0],i=t[1];return Math.sqrt(e*e+i*i)},u.len=u.length,u.squaredLength=function(t){var e=t[0],i=t[1];return e*e+i*i},u.sqrLen=u.squaredLength,u.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},u.normalize=function(t,e){var i=e[0],r=e[1],n=i*i+r*r;return n>0&&(n=1/Math.sqrt(n),t[0]=e[0]*n,t[1]=e[1]*n),t},u.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},u.cross=function(t,e,i){var r=e[0]*i[1]-e[1]*i[0];return t[0]=t[1]=0,t[2]=r,t},u.lerp=function(t,e,i,r){var n=e[0],a=e[1];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t},u.random=function(t,e){e=e||1;var i=2*s()*Math.PI;return t[0]=Math.cos(i)*e,t[1]=Math.sin(i)*e,t},u.transformMat2=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[2]*n,t[1]=i[1]*r+i[3]*n,t},u.transformMat2d=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[2]*n+i[4],t[1]=i[1]*r+i[3]*n+i[5],t},u.transformMat3=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[3]*n+i[6],t[1]=i[1]*r+i[4]*n+i[7],t},u.transformMat4=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[4]*n+i[12],t[1]=i[1]*r+i[5]*n+i[13],t},u.forEach=function(){var t=u.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=2),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],a(t,t,s),e[o]=t[0],e[o+1]=t[1];return e}}(),u.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},"undefined"!=typeof r&&(r.vec2=u);var f={};f.create=function(){var t=new a(3);return t[0]=0,t[1]=0,t[2]=0,t},f.clone=function(t){var e=new a(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},f.fromValues=function(t,e,i){var r=new a(3);return r[0]=t,r[1]=e,r[2]=i,r},f.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},f.set=function(t,e,i,r){return t[0]=e,t[1]=i,t[2]=r,t},f.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t},f.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t},f.sub=f.subtract,f.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t},f.mul=f.multiply,f.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t},f.div=f.divide,f.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t[2]=Math.min(e[2],i[2]),t},f.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t[2]=Math.max(e[2],i[2]),t},f.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t},f.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t[2]=e[2]+i[2]*r,t},f.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(i*i+r*r+n*n)},f.dist=f.distance,f.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return i*i+r*r+n*n},f.sqrDist=f.squaredDistance,f.length=function(t){var e=t[0],i=t[1],r=t[2];return Math.sqrt(e*e+i*i+r*r)},f.len=f.length,f.squaredLength=function(t){var e=t[0],i=t[1],r=t[2];return e*e+i*i+r*r},f.sqrLen=f.squaredLength,f.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},f.normalize=function(t,e){var i=e[0],r=e[1],n=e[2],a=i*i+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t},f.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},f.cross=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2];return t[0]=n*h-a*o,t[1]=a*s-r*h,t[2]=r*o-n*s,t},f.lerp=function(t,e,i,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t[2]=s+r*(i[2]-s),t},f.random=function(t,e){e=e||1;var i=2*s()*Math.PI,r=2*s()-1,n=Math.sqrt(1-r*r)*e;return t[0]=Math.cos(i)*n,t[1]=Math.sin(i)*n,t[2]=r*e,t},f.transformMat4=function(t,e,i){var r=e[0],n=e[1],a=e[2];return t[0]=i[0]*r+i[4]*n+i[8]*a+i[12],t[1]=i[1]*r+i[5]*n+i[9]*a+i[13],t[2]=i[2]*r+i[6]*n+i[10]*a+i[14],t},f.transformMat3=function(t,e,i){var r=e[0],n=e[1],a=e[2];return t[0]=r*i[0]+n*i[3]+a*i[6],t[1]=r*i[1]+n*i[4]+a*i[7],t[2]=r*i[2]+n*i[5]+a*i[8],t},f.transformQuat=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2],u=i[3],f=u*r+o*a-h*n,c=u*n+h*r-s*a,l=u*a+s*n-o*r,d=-s*r-o*n-h*a;return t[0]=f*u+d*-s+c*-h-l*-o,t[1]=c*u+d*-o+l*-s-f*-h,t[2]=l*u+d*-h+f*-o-c*-s,t},f.rotateX=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[0],a[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),a[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},f.rotateY=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),a[1]=n[1],a[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},f.rotateZ=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),a[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),a[2]=n[2],t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},f.forEach=function(){var t=f.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=3),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],a(t,t,s),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}}(),f.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},"undefined"!=typeof r&&(r.vec3=f);var c={};c.create=function(){var t=new a(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},c.clone=function(t){var e=new a(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},c.fromValues=function(t,e,i,r){var n=new a(4);return n[0]=t,n[1]=e,n[2]=i,n[3]=r,n},c.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},c.set=function(t,e,i,r,n){return t[0]=e,t[1]=i,t[2]=r,t[3]=n,t},c.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t},c.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t},c.sub=c.subtract,c.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],t},c.mul=c.multiply,c.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t[3]=e[3]/i[3],t},c.div=c.divide,c.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t[2]=Math.min(e[2],i[2]),t[3]=Math.min(e[3],i[3]),t},c.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t[2]=Math.max(e[2],i[2]),t[3]=Math.max(e[3],i[3]),t},c.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t},c.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t[2]=e[2]+i[2]*r,t[3]=e[3]+i[3]*r,t},c.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(i*i+r*r+n*n+a*a)},c.dist=c.distance,c.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return i*i+r*r+n*n+a*a},c.sqrDist=c.squaredDistance,c.length=function(t){var e=t[0],i=t[1],r=t[2],n=t[3];return Math.sqrt(e*e+i*i+r*r+n*n)},c.len=c.length,c.squaredLength=function(t){var e=t[0],i=t[1],r=t[2],n=t[3];return e*e+i*i+r*r+n*n},c.sqrLen=c.squaredLength,c.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},c.normalize=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i*i+r*r+n*n+a*a;return s>0&&(s=1/Math.sqrt(s),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s),t},c.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},c.lerp=function(t,e,i,r){var n=e[0],a=e[1],s=e[2],o=e[3];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t[2]=s+r*(i[2]-s),t[3]=o+r*(i[3]-o),t},c.random=function(t,e){return e=e||1,t[0]=s(),t[1]=s(),t[2]=s(),t[3]=s(),c.normalize(t,t),c.scale(t,t,e),t},c.transformMat4=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3];return t[0]=i[0]*r+i[4]*n+i[8]*a+i[12]*s,t[1]=i[1]*r+i[5]*n+i[9]*a+i[13]*s,t[2]=i[2]*r+i[6]*n+i[10]*a+i[14]*s,t[3]=i[3]*r+i[7]*n+i[11]*a+i[15]*s,t},c.transformQuat=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2],u=i[3],f=u*r+o*a-h*n,c=u*n+h*r-s*a,l=u*a+s*n-o*r,d=-s*r-o*n-h*a;return t[0]=f*u+d*-s+c*-h-l*-o,t[1]=c*u+d*-o+l*-s-f*-h,t[2]=l*u+d*-h+f*-o-c*-s,t},c.forEach=function(){var t=c.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=4),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],a(t,t,s),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}}(),c.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},"undefined"!=typeof r&&(r.vec4=c);var l={};l.create=function(){var t=new a(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},l.clone=function(t){var e=new a(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},l.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},l.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},l.transpose=function(t,e){if(t===e){var i=e[1];t[1]=e[2],t[2]=i}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t},l.invert=function(n,a){var s=a[0],o=a[1],h=a[2],u=a[3],f=s*u-h*o;return f?(f=1/f,n[0]=u*f,n[1]=-o*f,n[2]=-h*f,n[3]=s*f,n):function(e){if("object"==typeof r&&"undefined"!=typeof i)i.exports=e();else if("function"==typeof t&&t.amd)t([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.bongiovi=e()}}(function(){var t;return function i(t,r,n){function a(o,h){if(!r[o]){if(!t[o]){var u="function"==typeof e&&e;if(!h&&u)return u(o,!0);if(s)return s(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var c=r[o]={exports:{}};t[o][0].call(c.exports,function(e){var i=t[o][1][e];return a(i?i:e)},c,c.exports,i,t,r,n)}return r[o].exports}for(var s="function"==typeof e&&e,o=0;o<n.length;o++)a(n[o]);return a}({1:[function(t,e){var i=t("./bongiovi/GLTools"),r={GL:i,GLTools:i,Scheduler:t("./bongiovi/Scheduler"),SimpleImageLoader:t("./bongiovi/SimpleImageLoader"),EaseNumber:t("./bongiovi/EaseNumber"),QuatRotation:t("./bongiovi/QuatRotation"),Scene:t("./bongiovi/Scene"),Camera:t("./bongiovi/Camera"),SimpleCamera:t("./bongiovi/SimpleCamera"),CameraPerspective:t("./bongiovi/CameraPerspective"),Mesh:t("./bongiovi/Mesh"),Face:t("./bongiovi/Face"),GLShader:t("./bongiovi/GLShader"),GLTexture:t("./bongiovi/GLTexture"),ShaderLibs:t("./bongiovi/ShaderLibs"),View:t("./bongiovi/View"),ViewCopy:t("./bongiovi/ViewCopy"),ViewAxis:t("./bongiovi/ViewAxis"),ViewDotPlane:t("./bongiovi/ViewDotPlanes"),MeshUtils:t("./bongiovi/MeshUtils"),FrameBuffer:t("./bongiovi/FrameBuffer"),glm:t("gl-matrix")};e.exports=r},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(e,i,r){!function(e){var i={};"undefined"==typeof r?"function"==typeof t&&"object"==typeof t.amd&&t.amd?(i.exports={},t(function(){return i.exports})):i.exports="undefined"!=typeof window?window:e:i.exports=r,function(t){if(!e)var e=1e-6;if(!i)var i="undefined"!=typeof Float32Array?Float32Array:Array;if(!r)var r=Math.random;var n={};n.setMatrixArrayType=function(t){i=t},"undefined"!=typeof t&&(t.glMatrix=n);var a=Math.PI/180;n.toRadian=function(t){return t*a};var s={};s.create=function(){var t=new i(2);return t[0]=0,t[1]=0,t},s.clone=function(t){var e=new i(2);return e[0]=t[0],e[1]=t[1],e},s.fromValues=function(t,e){var r=new i(2);return r[0]=t,r[1]=e,r},s.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},s.set=function(t,e,i){return t[0]=e,t[1]=i,t},s.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t},s.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t},s.sub=s.subtract,s.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},s.mul=s.multiply,s.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},s.div=s.divide,s.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t},s.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t},s.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t},s.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t},s.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1];return Math.sqrt(i*i+r*r)},s.dist=s.distance,s.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1];return i*i+r*r},s.sqrDist=s.squaredDistance,s.length=function(t){var e=t[0],i=t[1];return Math.sqrt(e*e+i*i)},s.len=s.length,s.squaredLength=function(t){var e=t[0],i=t[1];return e*e+i*i},s.sqrLen=s.squaredLength,s.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},s.normalize=function(t,e){var i=e[0],r=e[1],n=i*i+r*r;return n>0&&(n=1/Math.sqrt(n),t[0]=e[0]*n,t[1]=e[1]*n),t},s.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},s.cross=function(t,e,i){var r=e[0]*i[1]-e[1]*i[0];return t[0]=t[1]=0,t[2]=r,t},s.lerp=function(t,e,i,r){var n=e[0],a=e[1];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t},s.random=function(t,e){e=e||1;var i=2*r()*Math.PI;return t[0]=Math.cos(i)*e,t[1]=Math.sin(i)*e,t},s.transformMat2=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[2]*n,t[1]=i[1]*r+i[3]*n,t},s.transformMat2d=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[2]*n+i[4],t[1]=i[1]*r+i[3]*n+i[5],t},s.transformMat3=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[3]*n+i[6],t[1]=i[1]*r+i[4]*n+i[7],t},s.transformMat4=function(t,e,i){var r=e[0],n=e[1];return t[0]=i[0]*r+i[4]*n+i[12],t[1]=i[1]*r+i[5]*n+i[13],t},s.forEach=function(){var t=s.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=2),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],a(t,t,s),e[o]=t[0],e[o+1]=t[1];return e}}(),s.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},"undefined"!=typeof t&&(t.vec2=s);var o={};o.create=function(){var t=new i(3);return t[0]=0,t[1]=0,t[2]=0,t},o.clone=function(t){var e=new i(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},o.fromValues=function(t,e,r){var n=new i(3);return n[0]=t,n[1]=e,n[2]=r,n},o.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},o.set=function(t,e,i,r){return t[0]=e,t[1]=i,t[2]=r,t},o.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t},o.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t},o.sub=o.subtract,o.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t},o.mul=o.multiply,o.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t},o.div=o.divide,o.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t[2]=Math.min(e[2],i[2]),t},o.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t[2]=Math.max(e[2],i[2]),t},o.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t},o.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t[2]=e[2]+i[2]*r,t},o.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(i*i+r*r+n*n)},o.dist=o.distance,o.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return i*i+r*r+n*n},o.sqrDist=o.squaredDistance,o.length=function(t){var e=t[0],i=t[1],r=t[2];return Math.sqrt(e*e+i*i+r*r)},o.len=o.length,o.squaredLength=function(t){var e=t[0],i=t[1],r=t[2];return e*e+i*i+r*r},o.sqrLen=o.squaredLength,o.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},o.normalize=function(t,e){var i=e[0],r=e[1],n=e[2],a=i*i+r*r+n*n;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t},o.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},o.cross=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2];return t[0]=n*h-a*o,t[1]=a*s-r*h,t[2]=r*o-n*s,t},o.lerp=function(t,e,i,r){var n=e[0],a=e[1],s=e[2];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t[2]=s+r*(i[2]-s),t},o.random=function(t,e){e=e||1;var i=2*r()*Math.PI,n=2*r()-1,a=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(i)*a,t[1]=Math.sin(i)*a,t[2]=n*e,t},o.transformMat4=function(t,e,i){var r=e[0],n=e[1],a=e[2];return t[0]=i[0]*r+i[4]*n+i[8]*a+i[12],t[1]=i[1]*r+i[5]*n+i[9]*a+i[13],t[2]=i[2]*r+i[6]*n+i[10]*a+i[14],t},o.transformMat3=function(t,e,i){var r=e[0],n=e[1],a=e[2];return t[0]=r*i[0]+n*i[3]+a*i[6],t[1]=r*i[1]+n*i[4]+a*i[7],t[2]=r*i[2]+n*i[5]+a*i[8],t},o.transformQuat=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2],u=i[3],f=u*r+o*a-h*n,c=u*n+h*r-s*a,l=u*a+s*n-o*r,d=-s*r-o*n-h*a;return t[0]=f*u+d*-s+c*-h-l*-o,t[1]=c*u+d*-o+l*-s-f*-h,t[2]=l*u+d*-h+f*-o-c*-s,t},o.rotateX=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[0],a[1]=n[1]*Math.cos(r)-n[2]*Math.sin(r),a[2]=n[1]*Math.sin(r)+n[2]*Math.cos(r),t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},o.rotateY=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[2]*Math.sin(r)+n[0]*Math.cos(r),a[1]=n[1],a[2]=n[2]*Math.cos(r)-n[0]*Math.sin(r),t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},o.rotateZ=function(t,e,i,r){var n=[],a=[];return n[0]=e[0]-i[0],n[1]=e[1]-i[1],n[2]=e[2]-i[2],a[0]=n[0]*Math.cos(r)-n[1]*Math.sin(r),a[1]=n[0]*Math.sin(r)+n[1]*Math.cos(r),a[2]=n[2],t[0]=a[0]+i[0],t[1]=a[1]+i[1],t[2]=a[2]+i[2],t},o.forEach=function(){var t=o.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=3),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],a(t,t,s),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}}(),o.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},"undefined"!=typeof t&&(t.vec3=o);var h={};h.create=function(){var t=new i(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},h.clone=function(t){var e=new i(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},h.fromValues=function(t,e,r,n){var a=new i(4);return a[0]=t,a[1]=e,a[2]=r,a[3]=n,a},h.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},h.set=function(t,e,i,r,n){return t[0]=e,t[1]=i,t[2]=r,t[3]=n,t},h.add=function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],t[3]=e[3]+i[3],t},h.subtract=function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],t[3]=e[3]-i[3],t},h.sub=h.subtract,h.multiply=function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],t},h.mul=h.multiply,h.divide=function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],t[3]=e[3]/i[3],t},h.div=h.divide,h.min=function(t,e,i){return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t[2]=Math.min(e[2],i[2]),t[3]=Math.min(e[3],i[3]),t},h.max=function(t,e,i){return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t[2]=Math.max(e[2],i[2]),t[3]=Math.max(e[3],i[3]),t},h.scale=function(t,e,i){return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t},h.scaleAndAdd=function(t,e,i,r){return t[0]=e[0]+i[0]*r,t[1]=e[1]+i[1]*r,t[2]=e[2]+i[2]*r,t[3]=e[3]+i[3]*r,t},h.distance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(i*i+r*r+n*n+a*a)},h.dist=h.distance,h.squaredDistance=function(t,e){var i=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2],a=e[3]-t[3];return i*i+r*r+n*n+a*a},h.sqrDist=h.squaredDistance,h.length=function(t){var e=t[0],i=t[1],r=t[2],n=t[3];return Math.sqrt(e*e+i*i+r*r+n*n)},h.len=h.length,h.squaredLength=function(t){var e=t[0],i=t[1],r=t[2],n=t[3];return e*e+i*i+r*r+n*n},h.sqrLen=h.squaredLength,h.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},h.normalize=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i*i+r*r+n*n+a*a;return s>0&&(s=1/Math.sqrt(s),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s),t},h.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},h.lerp=function(t,e,i,r){var n=e[0],a=e[1],s=e[2],o=e[3];return t[0]=n+r*(i[0]-n),t[1]=a+r*(i[1]-a),t[2]=s+r*(i[2]-s),t[3]=o+r*(i[3]-o),t},h.random=function(t,e){return e=e||1,t[0]=r(),t[1]=r(),t[2]=r(),t[3]=r(),h.normalize(t,t),h.scale(t,t,e),t},h.transformMat4=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3];return t[0]=i[0]*r+i[4]*n+i[8]*a+i[12]*s,t[1]=i[1]*r+i[5]*n+i[9]*a+i[13]*s,t[2]=i[2]*r+i[6]*n+i[10]*a+i[14]*s,t[3]=i[3]*r+i[7]*n+i[11]*a+i[15]*s,t},h.transformQuat=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=i[0],o=i[1],h=i[2],u=i[3],f=u*r+o*a-h*n,c=u*n+h*r-s*a,l=u*a+s*n-o*r,d=-s*r-o*n-h*a;return t[0]=f*u+d*-s+c*-h-l*-o,t[1]=c*u+d*-o+l*-s-f*-h,t[2]=l*u+d*-h+f*-o-c*-s,t},h.forEach=function(){var t=h.create();return function(e,i,r,n,a,s){var o,h;for(i||(i=4),r||(r=0),h=n?Math.min(n*i+r,e.length):e.length,o=r;h>o;o+=i)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],a(t,t,s),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}}(),h.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},"undefined"!=typeof t&&(t.vec4=h);var u={};u.create=function(){var t=new i(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},u.clone=function(t){var e=new i(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},u.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},u.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},u.transpose=function(t,e){if(t===e){var i=e[1];t[1]=e[2],t[2]=i}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t},u.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i*a-n*r;return s?(s=1/s,t[0]=a*s,t[1]=-r*s,t[2]=-n*s,t[3]=i*s,t):null},u.adjoint=function(t,e){var i=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=i,t},u.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},u.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1],u=i[2],f=i[3];return t[0]=r*o+a*h,t[1]=n*o+s*h,t[2]=r*u+a*f,t[3]=n*u+s*f,t},u.mul=u.multiply,u.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+a*o,t[1]=n*h+s*o,t[2]=r*-o+a*h,t[3]=n*-o+s*h,t},u.scale=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1];return t[0]=r*o,t[1]=n*o,t[2]=a*h,t[3]=s*h,t},u.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},u.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},u.LDU=function(t,e,i,r){return t[2]=r[2]/r[0],i[0]=r[0],i[1]=r[1],i[3]=r[3]-t[2]*i[1],[t,e,i]},"undefined"!=typeof t&&(t.mat2=u);var f={};f.create=function(){var t=new i(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},f.clone=function(t){var e=new i(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},f.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},f.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},f.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=i*a-r*n;return h?(h=1/h,t[0]=a*h,t[1]=-r*h,t[2]=-n*h,t[3]=i*h,t[4]=(n*o-a*s)*h,t[5]=(r*s-i*o)*h,t):null},f.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},f.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1],c=i[2],l=i[3],d=i[4],m=i[5];return t[0]=r*u+a*f,t[1]=n*u+s*f,t[2]=r*c+a*l,t[3]=n*c+s*l,t[4]=r*d+a*m+o,t[5]=n*d+s*m+h,t},f.mul=f.multiply,f.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=Math.sin(i),f=Math.cos(i);return t[0]=r*f+a*u,t[1]=n*f+s*u,t[2]=r*-u+a*f,t[3]=n*-u+s*f,t[4]=o,t[5]=h,t},f.scale=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1];return t[0]=r*u,t[1]=n*u,t[2]=a*f,t[3]=s*f,t[4]=o,t[5]=h,t},f.translate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1];return t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=r*u+a*f+o,t[5]=n*u+s*f+h,t},f.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},f.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},"undefined"!=typeof t&&(t.mat2d=f);var c={};c.create=function(){var t=new i(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},c.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},c.clone=function(t){var e=new i(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},c.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},c.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},c.transpose=function(t,e){if(t===e){var i=e[1],r=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=i,t[5]=e[7],t[6]=r,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},c.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=f*s-o*u,l=-f*a+o*h,d=u*a-s*h,m=i*c+r*l+n*d;return m?(m=1/m,t[0]=c*m,t[1]=(-f*r+n*u)*m,t[2]=(o*r-n*s)*m,t[3]=l*m,t[4]=(f*i-n*h)*m,t[5]=(-o*i+n*a)*m,t[6]=d*m,t[7]=(-u*i+r*h)*m,t[8]=(s*i-r*a)*m,t):null},c.adjoint=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8];return t[0]=s*f-o*u,t[1]=n*u-r*f,t[2]=r*o-n*s,t[3]=o*h-a*f,t[4]=i*f-n*h,t[5]=n*a-i*o,t[6]=a*u-s*h,t[7]=r*h-i*u,t[8]=i*s-r*a,t},c.determinant=function(t){var e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],h=t[7],u=t[8];return e*(u*a-s*h)+i*(-u*n+s*o)+r*(h*n-a*o)},c.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=i[0],d=i[1],m=i[2],_=i[3],v=i[4],g=i[5],p=i[6],x=i[7],M=i[8];return t[0]=l*r+d*s+m*u,t[1]=l*n+d*o+m*f,t[2]=l*a+d*h+m*c,t[3]=_*r+v*s+g*u,t[4]=_*n+v*o+g*f,t[5]=_*a+v*h+g*c,t[6]=p*r+x*s+M*u,t[7]=p*n+x*o+M*f,t[8]=p*a+x*h+M*c,t},c.mul=c.multiply,c.translate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=i[0],d=i[1];return t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=o,t[5]=h,t[6]=l*r+d*s+u,t[7]=l*n+d*o+f,t[8]=l*a+d*h+c,t},c.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=Math.sin(i),d=Math.cos(i);return t[0]=d*r+l*s,t[1]=d*n+l*o,t[2]=d*a+l*h,t[3]=d*s-l*r,t[4]=d*o-l*n,t[5]=d*h-l*a,t[6]=u,t[7]=f,t[8]=c,t},c.scale=function(t,e,i){var r=i[0],n=i[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},c.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},c.fromQuat=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i+i,o=r+r,h=n+n,u=i*s,f=r*s,c=r*o,l=n*s,d=n*o,m=n*h,_=a*s,v=a*o,g=a*h;return t[0]=1-c-m,t[3]=f-g,t[6]=l+v,t[1]=f+g,t[4]=1-u-m,t[7]=d-_,t[2]=l-v,t[5]=d+_,t[8]=1-u-c,t},c.normalFromMat4=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15],p=i*o-r*s,x=i*h-n*s,M=i*u-a*s,T=r*h-n*o,E=r*u-a*o,R=n*u-a*h,w=f*_-c*m,A=f*v-l*m,b=f*g-d*m,y=c*v-l*_,L=c*g-d*_,P=l*g-d*v,F=p*P-x*L+M*y+T*b-E*A+R*w;return F?(F=1/F,t[0]=(o*P-h*L+u*y)*F,t[1]=(h*b-s*P-u*A)*F,t[2]=(s*L-o*b+u*w)*F,t[3]=(n*L-r*P-a*y)*F,t[4]=(i*P-n*b+a*A)*F,t[5]=(r*b-i*L-a*w)*F,t[6]=(_*R-v*E+g*T)*F,t[7]=(v*M-m*R-g*x)*F,t[8]=(m*E-_*M+g*p)*F,t):null},c.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},c.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},"undefined"!=typeof t&&(t.mat3=c);var l={};l.create=function(){var t=new i(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},l.clone=function(t){var e=new i(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},l.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},l.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},l.transpose=function(t,e){if(t===e){var i=e[1],r=e[2],n=e[3],a=e[6],s=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=i,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},l.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15],p=i*o-r*s,x=i*h-n*s,M=i*u-a*s,T=r*h-n*o,E=r*u-a*o,R=n*u-a*h,w=f*_-c*m,A=f*v-l*m,b=f*g-d*m,y=c*v-l*_,L=c*g-d*_,P=l*g-d*v,F=p*P-x*L+M*y+T*b-E*A+R*w;
return F?(F=1/F,t[0]=(o*P-h*L+u*y)*F,t[1]=(n*L-r*P-a*y)*F,t[2]=(_*R-v*E+g*T)*F,t[3]=(l*E-c*R-d*T)*F,t[4]=(h*b-s*P-u*A)*F,t[5]=(i*P-n*b+a*A)*F,t[6]=(v*M-m*R-g*x)*F,t[7]=(f*R-l*M+d*x)*F,t[8]=(s*L-o*b+u*w)*F,t[9]=(r*b-i*L-a*w)*F,t[10]=(m*E-_*M+g*p)*F,t[11]=(c*M-f*E-d*p)*F,t[12]=(o*A-s*y-h*w)*F,t[13]=(i*y-r*A+n*w)*F,t[14]=(_*x-m*T-v*p)*F,t[15]=(f*T-c*x+l*p)*F,t):null},l.adjoint=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15];return t[0]=o*(l*g-d*v)-c*(h*g-u*v)+_*(h*d-u*l),t[1]=-(r*(l*g-d*v)-c*(n*g-a*v)+_*(n*d-a*l)),t[2]=r*(h*g-u*v)-o*(n*g-a*v)+_*(n*u-a*h),t[3]=-(r*(h*d-u*l)-o*(n*d-a*l)+c*(n*u-a*h)),t[4]=-(s*(l*g-d*v)-f*(h*g-u*v)+m*(h*d-u*l)),t[5]=i*(l*g-d*v)-f*(n*g-a*v)+m*(n*d-a*l),t[6]=-(i*(h*g-u*v)-s*(n*g-a*v)+m*(n*u-a*h)),t[7]=i*(h*d-u*l)-s*(n*d-a*l)+f*(n*u-a*h),t[8]=s*(c*g-d*_)-f*(o*g-u*_)+m*(o*d-u*c),t[9]=-(i*(c*g-d*_)-f*(r*g-a*_)+m*(r*d-a*c)),t[10]=i*(o*g-u*_)-s*(r*g-a*_)+m*(r*u-a*o),t[11]=-(i*(o*d-u*c)-s*(r*d-a*c)+f*(r*u-a*o)),t[12]=-(s*(c*v-l*_)-f*(o*v-h*_)+m*(o*l-h*c)),t[13]=i*(c*v-l*_)-f*(r*v-n*_)+m*(r*l-n*c),t[14]=-(i*(o*v-h*_)-s*(r*v-n*_)+m*(r*h-n*o)),t[15]=i*(o*l-h*c)-s*(r*l-n*c)+f*(r*h-n*o),t},l.determinant=function(t){var e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],h=t[7],u=t[8],f=t[9],c=t[10],l=t[11],d=t[12],m=t[13],_=t[14],v=t[15],g=e*s-i*a,p=e*o-r*a,x=e*h-n*a,M=i*o-r*s,T=i*h-n*s,E=r*h-n*o,R=u*m-f*d,w=u*_-c*d,A=u*v-l*d,b=f*_-c*m,y=f*v-l*m,L=c*v-l*_;return g*L-p*y+x*b+M*A-T*w+E*R},l.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=e[9],d=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],x=i[0],M=i[1],T=i[2],E=i[3];return t[0]=x*r+M*o+T*c+E*_,t[1]=x*n+M*h+T*l+E*v,t[2]=x*a+M*u+T*d+E*g,t[3]=x*s+M*f+T*m+E*p,x=i[4],M=i[5],T=i[6],E=i[7],t[4]=x*r+M*o+T*c+E*_,t[5]=x*n+M*h+T*l+E*v,t[6]=x*a+M*u+T*d+E*g,t[7]=x*s+M*f+T*m+E*p,x=i[8],M=i[9],T=i[10],E=i[11],t[8]=x*r+M*o+T*c+E*_,t[9]=x*n+M*h+T*l+E*v,t[10]=x*a+M*u+T*d+E*g,t[11]=x*s+M*f+T*m+E*p,x=i[12],M=i[13],T=i[14],E=i[15],t[12]=x*r+M*o+T*c+E*_,t[13]=x*n+M*h+T*l+E*v,t[14]=x*a+M*u+T*d+E*g,t[15]=x*s+M*f+T*m+E*p,t},l.mul=l.multiply,l.translate=function(t,e,i){var r,n,a,s,o,h,u,f,c,l,d,m,_=i[0],v=i[1],g=i[2];return e===t?(t[12]=e[0]*_+e[4]*v+e[8]*g+e[12],t[13]=e[1]*_+e[5]*v+e[9]*g+e[13],t[14]=e[2]*_+e[6]*v+e[10]*g+e[14],t[15]=e[3]*_+e[7]*v+e[11]*g+e[15]):(r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=e[9],d=e[10],m=e[11],t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=o,t[5]=h,t[6]=u,t[7]=f,t[8]=c,t[9]=l,t[10]=d,t[11]=m,t[12]=r*_+o*v+c*g+e[12],t[13]=n*_+h*v+l*g+e[13],t[14]=a*_+u*v+d*g+e[14],t[15]=s*_+f*v+m*g+e[15]),t},l.scale=function(t,e,i){var r=i[0],n=i[1],a=i[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},l.rotate=function(t,i,r,n){var a,s,o,h,u,f,c,l,d,m,_,v,g,p,x,M,T,E,R,w,A,b,y,L,P=n[0],F=n[1],S=n[2],D=Math.sqrt(P*P+F*F+S*S);return Math.abs(D)<e?null:(D=1/D,P*=D,F*=D,S*=D,a=Math.sin(r),s=Math.cos(r),o=1-s,h=i[0],u=i[1],f=i[2],c=i[3],l=i[4],d=i[5],m=i[6],_=i[7],v=i[8],g=i[9],p=i[10],x=i[11],M=P*P*o+s,T=F*P*o+S*a,E=S*P*o-F*a,R=P*F*o-S*a,w=F*F*o+s,A=S*F*o+P*a,b=P*S*o+F*a,y=F*S*o-P*a,L=S*S*o+s,t[0]=h*M+l*T+v*E,t[1]=u*M+d*T+g*E,t[2]=f*M+m*T+p*E,t[3]=c*M+_*T+x*E,t[4]=h*R+l*w+v*A,t[5]=u*R+d*w+g*A,t[6]=f*R+m*w+p*A,t[7]=c*R+_*w+x*A,t[8]=h*b+l*y+v*L,t[9]=u*b+d*y+g*L,t[10]=f*b+m*y+p*L,t[11]=c*b+_*y+x*L,i!==t&&(t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15]),t)},l.rotateX=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[4],s=e[5],o=e[6],h=e[7],u=e[8],f=e[9],c=e[10],l=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+u*r,t[5]=s*n+f*r,t[6]=o*n+c*r,t[7]=h*n+l*r,t[8]=u*n-a*r,t[9]=f*n-s*r,t[10]=c*n-o*r,t[11]=l*n-h*r,t},l.rotateY=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[0],s=e[1],o=e[2],h=e[3],u=e[8],f=e[9],c=e[10],l=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-u*r,t[1]=s*n-f*r,t[2]=o*n-c*r,t[3]=h*n-l*r,t[8]=a*r+u*n,t[9]=s*r+f*n,t[10]=o*r+c*n,t[11]=h*r+l*n,t},l.rotateZ=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[0],s=e[1],o=e[2],h=e[3],u=e[4],f=e[5],c=e[6],l=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+u*r,t[1]=s*n+f*r,t[2]=o*n+c*r,t[3]=h*n+l*r,t[4]=u*n-a*r,t[5]=f*n-s*r,t[6]=c*n-o*r,t[7]=l*n-h*r,t},l.fromRotationTranslation=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=r+r,h=n+n,u=a+a,f=r*o,c=r*h,l=r*u,d=n*h,m=n*u,_=a*u,v=s*o,g=s*h,p=s*u;return t[0]=1-(d+_),t[1]=c+p,t[2]=l-g,t[3]=0,t[4]=c-p,t[5]=1-(f+_),t[6]=m+v,t[7]=0,t[8]=l+g,t[9]=m-v,t[10]=1-(f+d),t[11]=0,t[12]=i[0],t[13]=i[1],t[14]=i[2],t[15]=1,t},l.fromQuat=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i+i,o=r+r,h=n+n,u=i*s,f=r*s,c=r*o,l=n*s,d=n*o,m=n*h,_=a*s,v=a*o,g=a*h;return t[0]=1-c-m,t[1]=f+g,t[2]=l-v,t[3]=0,t[4]=f-g,t[5]=1-u-m,t[6]=d+_,t[7]=0,t[8]=l+v,t[9]=d-_,t[10]=1-u-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},l.frustum=function(t,e,i,r,n,a,s){var o=1/(i-e),h=1/(n-r),u=1/(a-s);return t[0]=2*a*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*h,t[6]=0,t[7]=0,t[8]=(i+e)*o,t[9]=(n+r)*h,t[10]=(s+a)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*u,t[15]=0,t},l.perspective=function(t,e,i,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t},l.ortho=function(t,e,i,r,n,a,s){var o=1/(e-i),h=1/(r-n),u=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+i)*o,t[13]=(n+r)*h,t[14]=(s+a)*u,t[15]=1,t},l.lookAt=function(t,i,r,n){var a,s,o,h,u,f,c,d,m,_,v=i[0],g=i[1],p=i[2],x=n[0],M=n[1],T=n[2],E=r[0],R=r[1],w=r[2];return Math.abs(v-E)<e&&Math.abs(g-R)<e&&Math.abs(p-w)<e?l.identity(t):(c=v-E,d=g-R,m=p-w,_=1/Math.sqrt(c*c+d*d+m*m),c*=_,d*=_,m*=_,a=M*m-T*d,s=T*c-x*m,o=x*d-M*c,_=Math.sqrt(a*a+s*s+o*o),_?(_=1/_,a*=_,s*=_,o*=_):(a=0,s=0,o=0),h=d*o-m*s,u=m*a-c*o,f=c*s-d*a,_=Math.sqrt(h*h+u*u+f*f),_?(_=1/_,h*=_,u*=_,f*=_):(h=0,u=0,f=0),t[0]=a,t[1]=h,t[2]=c,t[3]=0,t[4]=s,t[5]=u,t[6]=d,t[7]=0,t[8]=o,t[9]=f,t[10]=m,t[11]=0,t[12]=-(a*v+s*g+o*p),t[13]=-(h*v+u*g+f*p),t[14]=-(c*v+d*g+m*p),t[15]=1,t)},l.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},l.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},"undefined"!=typeof t&&(t.mat4=l);var d={};d.create=function(){var t=new i(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},d.rotationTo=function(){var t=o.create(),e=o.fromValues(1,0,0),i=o.fromValues(0,1,0);return function(r,n,a){var s=o.dot(n,a);return-.999999>s?(o.cross(t,e,n),o.length(t)<1e-6&&o.cross(t,i,n),o.normalize(t,t),d.setAxisAngle(r,t,Math.PI),r):s>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(o.cross(t,n,a),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1+s,d.normalize(r,r))}}(),d.setAxes=function(){var t=c.create();return function(e,i,r,n){return t[0]=r[0],t[3]=r[1],t[6]=r[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-i[0],t[5]=-i[1],t[8]=-i[2],d.normalize(e,d.fromMat3(e,t))}}(),d.clone=h.clone,d.fromValues=h.fromValues,d.copy=h.copy,d.set=h.set,d.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},d.setAxisAngle=function(t,e,i){i=.5*i;var r=Math.sin(i);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(i),t},d.add=h.add,d.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1],u=i[2],f=i[3];return t[0]=r*f+s*o+n*u-a*h,t[1]=n*f+s*h+a*o-r*u,t[2]=a*f+s*u+r*h-n*o,t[3]=s*f-r*o-n*h-a*u,t},d.mul=d.multiply,d.scale=h.scale,d.rotateX=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+s*o,t[1]=n*h+a*o,t[2]=a*h-n*o,t[3]=s*h-r*o,t},d.rotateY=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h-a*o,t[1]=n*h+s*o,t[2]=a*h+r*o,t[3]=s*h-n*o,t},d.rotateZ=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+n*o,t[1]=n*h-r*o,t[2]=a*h+s*o,t[3]=s*h-a*o,t},d.calculateW=function(t,e){var i=e[0],r=e[1],n=e[2];return t[0]=i,t[1]=r,t[2]=n,t[3]=-Math.sqrt(Math.abs(1-i*i-r*r-n*n)),t},d.dot=h.dot,d.lerp=h.lerp,d.slerp=function(t,e,i,r){var n,a,s,o,h,u=e[0],f=e[1],c=e[2],l=e[3],d=i[0],m=i[1],_=i[2],v=i[3];return a=u*d+f*m+c*_+l*v,0>a&&(a=-a,d=-d,m=-m,_=-_,v=-v),1-a>1e-6?(n=Math.acos(a),s=Math.sin(n),o=Math.sin((1-r)*n)/s,h=Math.sin(r*n)/s):(o=1-r,h=r),t[0]=o*u+h*d,t[1]=o*f+h*m,t[2]=o*c+h*_,t[3]=o*l+h*v,t},d.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i*i+r*r+n*n+a*a,o=s?1/s:0;return t[0]=-i*o,t[1]=-r*o,t[2]=-n*o,t[3]=a*o,t},d.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},d.length=h.length,d.len=d.length,d.squaredLength=h.squaredLength,d.sqrLen=d.squaredLength,d.normalize=h.normalize,d.fromMat3=function(t,e){var i,r=e[0]+e[4]+e[8];if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[7]-e[5])*i,t[1]=(e[2]-e[6])*i,t[2]=(e[3]-e[1])*i;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);var a=(n+1)%3,s=(n+2)%3;i=Math.sqrt(e[3*n+n]-e[3*a+a]-e[3*s+s]+1),t[n]=.5*i,i=.5/i,t[3]=(e[3*s+a]-e[3*a+s])*i,t[a]=(e[3*a+n]+e[3*n+a])*i,t[s]=(e[3*s+n]+e[3*n+s])*i}return t},d.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},"undefined"!=typeof t&&(t.quat=d)}(i.exports)}(this)},{}],3:[function(t,e){var i=t("gl-matrix"),r=function(){this.matrix=i.mat4.create(),i.mat4.identity(this.matrix),this.position=i.vec3.create()},n=r.prototype;n.lookAt=function(t,e,r){i.vec3.copy(this.position,t),i.mat4.identity(this.matrix),i.mat4.lookAt(this.matrix,t,e,r)},n.getMatrix=function(){return this.matrix},e.exports=r},{"gl-matrix":2}],4:[function(t,e){var i=t("./Camera"),r=t("gl-matrix"),n=function(){i.call(this),this.projection=r.mat4.create(),this.mtxFinal=r.mat4.create()},a=n.prototype=new i;a.setPerspective=function(t,e,i,n){this._fov=t,this._near=i,this._far=n,this._aspect=e,r.mat4.perspective(this.projection,t,e,i,n)},a.getMatrix=function(){return this.matrix},a.resize=function(t){this._aspect=t,r.mat4.perspective(this.projection,this._fov,t,this._near,this._far)},a.__defineGetter__("near",function(){return this._near}),a.__defineGetter__("far",function(){return this._far}),e.exports=n},{"./Camera":3,"gl-matrix":2}],5:[function(t,e){function i(t,e){this._easing=e||.1,this._value=t,this._targetValue=t,r.addEF(this,this._update)}var r=t("./Scheduler"),n=i.prototype;n._update=function(){this._checkLimit(),this._value+=(this._targetValue-this._value)*this._easing},n.setTo=function(t){this._targetValue=this._value=t},n.add=function(t){this._targetValue+=t},n.limit=function(t,e){this._min=t,this._max=e,this._checkLimit()},n._checkLimit=function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)},n.__defineGetter__("value",function(){return this._value}),n.__defineGetter__("targetValue",function(){return this._targetValue}),n.__defineSetter__("value",function(t){this._targetValue=t}),e.exports=i},{"./Scheduler":15}],6:[function(t,e){var i=t("gl-matrix"),r=function(t,e,i){this._vertexA=t,this._vertexB=e,this._vertexC=i,this._init()},n=r.prototype;n._init=function(){var t=i.vec3.create(),e=i.vec3.create();i.vec3.sub(t,this._vertexB,this._vertexA),i.vec3.sub(e,this._vertexC,this._vertexA),this._faceNormal=i.vec3.create(),i.vec3.cross(this._faceNormal,t,e),i.vec3.normalize(this._faceNormal,this._faceNormal)},n.contains=function(t){return a(t,this._vertexA)||a(t,this._vertexB)||a(t,this._vertexC)},n.__defineGetter__("faceNormal",function(){return this._faceNormal});var a=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]};e.exports=r},{"gl-matrix":2}],7:[function(t,e){var i,r=t("./GLTools"),n=t("./GLTexture"),a=function(t){return!(0===t||t&t-1)},s=function(t,e,n){i=r.gl,n=n||{},this.width=t,this.height=e,this.magFilter=n.magFilter||i.LINEAR,this.minFilter=n.minFilter||i.LINEAR,this.wrapS=n.wrapS||i.MIRRORED_REPEAT,this.wrapT=n.wrapT||i.MIRRORED_REPEAT,a(t)&&a(e)||(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)),this._init()},o=s.prototype;o._init=function(){if(this.texture=i.createTexture(),this.glTexture=new n(this.texture,!0),this.frameBuffer=i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,this.frameBuffer),this.frameBuffer.width=this.width,this.frameBuffer.height=this.height,i.bindTexture(i.TEXTURE_2D,this.texture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),r.depthTextureExt?i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,i.RGBA,i.FLOAT,null):i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,i.RGBA,i.UNSIGNED_BYTE,null),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.texture,0),null===r.depthTextureExt){var t=i.createRenderbuffer();i.bindRenderbuffer(i.RENDERBUFFER,t),i.renderbufferStorage(i.RENDERBUFFER,i.RGBA4,this.frameBuffer.width,this.frameBuffer.height)}else this.depthTexture=i.createTexture(),this.glDepthTexture=new n(this.depthTexture,!0),i.bindTexture(i.TEXTURE_2D,this.depthTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,i.DEPTH_COMPONENT,this.width,this.height,0,i.DEPTH_COMPONENT,i.UNSIGNED_SHORT,null),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,this.depthTexture,0);i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.bindFramebuffer(i.FRAMEBUFFER,null)},o.bind=function(){i.bindFramebuffer(i.FRAMEBUFFER,this.frameBuffer)},o.unbind=function(){i.bindFramebuffer(i.FRAMEBUFFER,null)},o.getTexture=function(){return this.glTexture},o.getDepthTexture=function(){return this.glDepthTexture},o.destroy=function(){i.deleteFramebuffer(this.frameBuffer),this.glTexture.destroy(),this.glDepthTexture&&this.glDepthTexture.destroy()},e.exports=s},{"./GLTexture":9,"./GLTools":10}],8:[function(t,e){var i,r=t("./GLTools"),n=t("./ShaderLibs"),a=function(t){for(var e=t.split("\n"),i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join("\n")},s=function(t,e){i=r.gl,this.idVertex=t,this.idFragment=e,this.parameters=[],this.uniformValues={},this.uniformTextures=[],this.vertexShader=void 0,this.fragmentShader=void 0,this._isReady=!1,this._loadedCount=0,(void 0===t||null===t)&&this.createVertexShaderProgram(n.getShader("copyVert")),(void 0===e||null===t)&&this.createFragmentShaderProgram(n.getShader("copyFrag")),this.init()},o=s.prototype;o.init=function(){this.idVertex&&this.idVertex.indexOf("main(void)")>-1?this.createVertexShaderProgram(this.idVertex):this.getShader(this.idVertex,!0),this.idFragment&&this.idFragment.indexOf("main(void)")>-1?this.createFragmentShaderProgram(this.idFragment):this.getShader(this.idFragment,!1)},o.getShader=function(t,e){if(t){var i=new XMLHttpRequest;i.hasCompleted=!1;var r=this;i.onreadystatechange=function(t){4===t.target.readyState&&(e?r.createVertexShaderProgram(t.target.responseText):r.createFragmentShaderProgram(t.target.responseText))},i.open("GET",t,!0),i.send(null)}},o.createVertexShaderProgram=function(t){if(i){var e=i.createShader(i.VERTEX_SHADER);if(i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))return console.warn("Error in Vertex Shader : ",this.idVertex,":",i.getShaderInfoLog(e)),console.log(a(t)),null;this.vertexShader=e,void 0!==this.vertexShader&&void 0!==this.fragmentShader&&this.attachShaderProgram(),this._loadedCount++}},o.createFragmentShaderProgram=function(t){if(i){var e=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))return console.warn("Error in Fragment Shader: ",this.idFragment,":",i.getShaderInfoLog(e)),console.log(a(t)),null;this.fragmentShader=e,void 0!==this.vertexShader&&void 0!==this.fragmentShader&&this.attachShaderProgram(),this._loadedCount++}},o.attachShaderProgram=function(){this._isReady=!0,this.shaderProgram=i.createProgram(),i.attachShader(this.shaderProgram,this.vertexShader),i.attachShader(this.shaderProgram,this.fragmentShader),i.linkProgram(this.shaderProgram)},o.bind=function(){this._isReady&&(i.useProgram(this.shaderProgram),void 0===this.shaderProgram.pMatrixUniform&&(this.shaderProgram.pMatrixUniform=i.getUniformLocation(this.shaderProgram,"uPMatrix")),void 0===this.shaderProgram.mvMatrixUniform&&(this.shaderProgram.mvMatrixUniform=i.getUniformLocation(this.shaderProgram,"uMVMatrix")),r.setShader(this),r.setShaderProgram(this.shaderProgram),this.uniformTextures=[])},o.isReady=function(){return this._isReady},o.clearUniforms=function(){this.parameters=[],this.uniformValues={}},o.uniform=function(t,e,r){if(this._isReady){"texture"===e&&(e="uniform1i");for(var n,a=!1,s=0;s<this.parameters.length;s++)if(n=this.parameters[s],n.name===t){n.value=r,a=!0;break}a?this.shaderProgram[t]=n.uniformLoc:(this.shaderProgram[t]=i.getUniformLocation(this.shaderProgram,t),this.parameters.push({name:t,type:e,value:r,uniformLoc:this.shaderProgram[t]})),-1===e.indexOf("Matrix")?a?this.checkUniform(t,e,r)&&i[e](this.shaderProgram[t],r):(i[e](this.shaderProgram[t],r),this.uniformValues[t]=r):(i[e](this.shaderProgram[t],!1,r),a||(i[e](this.shaderProgram[t],r),this.uniformValues[t]=r)),"uniform1i"===e&&(this.uniformTextures[r]=this.shaderProgram[t])}},o.checkUniform=function(t,e,i){if(!this.uniformValues[t])return this.uniformValues[t]=i,!0;if("uniform1i"===e)return this.uniformValues[t]=i,!0;var r=this.uniformValues[t],n=r===i?!1:!0;return n&&(this.uniformValues[t]=i),n},o.unbind=function(){},o.destroy=function(){i.detachShader(this.shaderProgram,this.vertexShader),i.detachShader(this.shaderProgram,this.fragmentShader),i.deleteShader(this.vertexShader),i.deleteShader(this.fragmentShader),i.deleteProgram(this.shaderProgram)},e.exports=s},{"./GLTools":10,"./ShaderLibs":16}],9:[function(t,e){var i,r=t("./GLTools"),n=function(t){var e=!(0===t||t&t-1);return e},a=function(t){var e=t.width||t.videoWidth,i=t.height||t.videoHeight;return e&&i?n(e)&&n(i):!1},s=function(t,e,n){if(e=e||!1,n=n||{},i=r.gl,e)this.texture=t;else{this._source=t,this.texture=i.createTexture(),this._isVideo="VIDEO"===t.tagName,this.magFilter=n.magFilter||i.LINEAR,this.minFilter=n.minFilter||i.LINEAR_MIPMAP_NEAREST,this.wrapS=n.wrapS||i.MIRRORED_REPEAT,this.wrapT=n.wrapT||i.MIRRORED_REPEAT;var s=t.width||t.videoWidth;s?a(t)||(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)):(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)),i.bindTexture(i.TEXTURE_2D,this.texture),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,this.wrapS),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,this.wrapT),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null)}},o=s.prototype;o.updateTexture=function(t){t&&(this._source=t),i.bindTexture(i.TEXTURE_2D,this.texture),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,this._source),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null)},o.bind=function(t){void 0===t&&(t=0),r.shader&&(i.activeTexture(i.TEXTURE0+t),i.bindTexture(i.TEXTURE_2D,this.texture),i.uniform1i(r.shader.uniformTextures[t],t),this._bindIndex=t)},o.unbind=function(){i.bindTexture(i.TEXTURE_2D,null)},o.destroy=function(){i.deleteTexture(this.texture)},e.exports=s},{"./GLTools":10}],10:[function(t,e){function i(){this.aspectRatio=1,this.fieldOfView=45,this.zNear=5,this.zFar=3e3,this.canvas=null,this.gl=null,this.shader=null,this.shaderProgram=null}var r=t("gl-matrix"),n=i.prototype;n.init=function(t,e,i,n){this.canvas=t||document.createElement("canvas");var a=n||{};a.antialias=!0,this.gl=this.canvas.getContext("webgl",a)||this.canvas.getContext("experimental-webgl",a),console.log("GL TOOLS : ",this.gl),void 0!==e&&void 0!==i?this.setSize(e,i):this.setSize(window.innerWidth,window.innerHeight),this.gl.viewport(0,0,this.gl.viewportWidth,this.gl.viewportHeight),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.BLEND),this.gl.clearColor(0,0,0,1),this.gl.clearDepth(1),this.matrix=r.mat4.create(),r.mat4.identity(this.matrix),this.normalMatrix=r.mat3.create(),this.depthTextureExt=this.gl.getExtension("WEBKIT_WEBGL_depth_texture"),this.floatTextureExt=this.gl.getExtension("OES_texture_float"),this.floatTextureLinearExt=this.gl.getExtension("OES_texture_float_linear"),this.standardDerivativesExt=this.gl.getExtension("OES_standard_derivatives"),this.enabledVertexAttribute=[],this.enableAlphaBlending(),this._viewport=[0,0,this.width,this.height]},n.getGL=function(){return this.gl},n.setShader=function(t){this.shader=t},n.setShaderProgram=function(t){this.shaderProgram=t},n.setViewport=function(t,e,i,r){var n=!1;t!==this._viewport[0]&&(n=!0),e!==this._viewport[1]&&(n=!0),i!==this._viewport[2]&&(n=!0),r!==this._viewport[3]&&(n=!0),n&&(this.gl.viewport(t,e,i,r),this._viewport=[t,e,i,r])},n.setMatrices=function(t){this.camera=t},n.rotate=function(t){r.mat4.copy(this.matrix,t),r.mat4.multiply(this.matrix,this.camera.getMatrix(),this.matrix),r.mat3.fromMat4(this.normalMatrix,this.matrix),r.mat3.invert(this.normalMatrix,this.normalMatrix),r.mat3.transpose(this.normalMatrix,this.normalMatrix)},n.enableAlphaBlending=function(){this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)},n.enableAdditiveBlending=function(){this.gl.blendFunc(this.gl.ONE,this.gl.ONE)},n.clear=function(t,e,i,r){this.gl.clearColor(t,e,i,r),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)},n.draw=function(t){function e(t,e,i){return void 0===e.cacheAttribLoc&&(e.cacheAttribLoc={}),void 0===e.cacheAttribLoc[i]&&(e.cacheAttribLoc[i]=t.getAttribLocation(e,i)),e.cacheAttribLoc[i]}if(!this.shaderProgram)return void console.warn("Shader program not ready yet");if(this.shaderProgram.pMatrixValue){var i=this.camera.projection||this.camera.getMatrix();r.mat4.str(this.shaderProgram.pMatrixValue)!==r.mat4.str(i)&&(this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform,!1,this.camera.projection||this.camera.getMatrix()),r.mat4.copy(this.shaderProgram.pMatrixValue,i))}else this.shaderProgram.pMatrixValue=r.mat4.create(),this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform,!1,this.camera.projection||this.camera.getMatrix()),r.mat4.copy(this.shaderProgram.pMatrixValue,this.camera.projection||this.camera.getMatrix());this.shaderProgram.mvMatrixValue?r.mat4.str(this.shaderProgram.mvMatrixValue)!==r.mat4.str(this.matrix)&&(this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform,!1,this.matrix),r.mat4.copy(this.shaderProgram.mvMatrixValue,this.matrix)):(this.shaderProgram.mvMatrixValue=r.mat4.create(),this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform,!1,this.matrix),r.mat4.copy(this.shaderProgram.mvMatrixValue,this.matrix)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.vBufferPos);var n=e(this.gl,this.shaderProgram,"aVertexPosition");this.gl.vertexAttribPointer(n,t.vBufferPos.itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(n)&&(this.gl.enableVertexAttribArray(n),this.enabledVertexAttribute.push(n)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.vBufferUV);var a=e(this.gl,this.shaderProgram,"aTextureCoord");this.gl.vertexAttribPointer(a,t.vBufferUV.itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(a)&&(this.gl.enableVertexAttribArray(a),this.enabledVertexAttribute.push(a)),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.iBuffer);for(var s=0;s<t.extraAttributes.length;s++){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.extraAttributes[s].buffer);var o=e(this.gl,this.shaderProgram,t.extraAttributes[s].name);this.gl.vertexAttribPointer(o,t.extraAttributes[s].itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(o)&&(this.gl.enableVertexAttribArray(o),this.enabledVertexAttribute.push(o))}t.drawType===this.gl.POINTS?this.gl.drawArrays(t.drawType,0,t.vertexSize):this.gl.drawElements(t.drawType,t.iBuffer.numItems,this.gl.UNSIGNED_SHORT,0)},n.setSize=function(t,e){this._width=t,this._height=e,this.canvas.width=this._width,this.canvas.height=this._height,this.gl.viewportWidth=this._width,this.gl.viewportHeight=this._height,this.gl.viewport(0,0,this._width,this._height),this.aspectRatio=this._width/this._height},n.__defineGetter__("width",function(){return this._width}),n.__defineGetter__("height",function(){return this._height}),n.__defineGetter__("viewport",function(){return this._viewport});var a=null;i.getInstance=function(){return null===a&&(a=new i),a},e.exports=i.getInstance()},{"gl-matrix":2}],11:[function(t,e){var i=t("./Face"),r=t("./GLTools"),n=t("gl-matrix"),a=function(t,e,i){this.gl=r.gl,this.vertexSize=t,this.indexSize=e,this.drawType=i,this.extraAttributes=[],this.vBufferPos=void 0,this._floatArrayVertex=void 0,this._init()},s=a.prototype;s._init=function(){},s.bufferVertex=function(t,e){var i=[],r=e?this.gl.DYNAMIC_DRAW:this.gl.STATIC_DRAW;this._vertices=[];for(var a=0;a<t.length;a++){for(var s=0;s<t[a].length;s++)i.push(t[a][s]);this._vertices.push(n.vec3.clone(t[a]))}if(void 0===this.vBufferPos&&(this.vBufferPos=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferPos),void 0===this._floatArrayVertex)this._floatArrayVertex=new Float32Array(i);else if(t.length!==this._floatArrayVertex.length)this._floatArrayVertex=new Float32Array(i);else for(var o=0;o<t.length;o++)this._floatArrayVertex[o]=t[o];this.gl.bufferData(this.gl.ARRAY_BUFFER,this._floatArrayVertex,r),this.vBufferPos.itemSize=3},s.bufferTexCoords=function(t){for(var e=[],i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)e.push(t[i][r]);this.vBufferUV=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferUV),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.vBufferUV.itemSize=2},s.bufferData=function(t,e,i,r){var n=-1,a=r?this.gl.DYNAMIC_DRAW:this.gl.STATIC_DRAW,s=0;for(s=0;s<this.extraAttributes.length;s++)if(this.extraAttributes[s].name===e){this.extraAttributes[s].data=t,n=s;break}var o=[];for(s=0;s<t.length;s++)for(var h=0;h<t[s].length;h++)o.push(t[s][h]);var u,f;if(-1===n)u=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u),f=new Float32Array(o),this.gl.bufferData(this.gl.ARRAY_BUFFER,f,a),this.extraAttributes.push({name:e,data:t,itemSize:i,buffer:u,floatArray:f});else{for(u=this.extraAttributes[n].buffer,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u),f=this.extraAttributes[n].floatArray,s=0;s<o.length;s++)f[s]=o[s];this.gl.bufferData(this.gl.ARRAY_BUFFER,f,a)}},s.bufferIndices=function(t){this._indices=t,this.iBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.iBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(t),this.gl.STATIC_DRAW),this.iBuffer.itemSize=1,this.iBuffer.numItems=t.length},s.computeNormals=function(){if(this.drawType===this.gl.TRIANGLES){void 0===this._faces&&this._generateFaces(),console.log("Start computing");var t=(new Date).getTime(),e=0;this._normals=[];for(var i=0;i<this._vertices.length;i++){var r=n.vec3.create(),a=0;for(e=0;e<this._faces.length;e++)this._faces[e].contains(this._vertices[i])&&(n.vec3.add(r,r,this._faces[e].faceNormal),a++);n.vec3.normalize(r,r),this._normals.push(r)}this.bufferData(this._normals,"aNormal",3);var s=(new Date).getTime()-t;console.log("Total Time : ",s)}},s.computeTangent=function(){},s._generateFaces=function(){this._faces=[];for(var t=0;t<this._indices.length;t+=3){var e=this._vertices[this._indices[t+0]],r=this._vertices[this._indices[t+1]],n=this._vertices[this._indices[t+2]];this._faces.push(new i(e,r,n))}},e.exports=a},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(t,e){var i=t("./GLTools"),r=t("./Mesh"),n={};n.createPlane=function(t,e,n){for(var a=[],s=[],o=[],h=t/n,u=e/n,f=1/n,c=0,l=.5*-t,d=.5*-e,m=0;n>m;m++)for(var _=0;n>_;_++){var v=h*m+l,g=u*_+d;a.push([v,g,0]),a.push([v+h,g,0]),a.push([v+h,g+u,0]),a.push([v,g+u,0]);var p=m/n,x=_/n;s.push([p,x]),s.push([p+f,x]),s.push([p+f,x+f]),s.push([p,x+f]),o.push(4*c+0),o.push(4*c+1),o.push(4*c+2),o.push(4*c+0),o.push(4*c+2),o.push(4*c+3),c++}var M=new r(a.length,o.length,i.gl.TRIANGLES);return M.bufferVertex(a),M.bufferTexCoords(s),M.bufferIndices(o),M},n.createSphere=function(t,e){for(var n=[],a=[],s=[],o=0,h=1/e,u=function(i,r){var n=i/e*Math.PI-.5*Math.PI,a=r/e*Math.PI*2,s=t,o=[];o[1]=Math.sin(n)*s;var h=Math.cos(n)*s;o[0]=Math.cos(a)*h,o[2]=Math.sin(a)*h;var u=1e4;return o[0]=Math.floor(o[0]*u)/u,o[1]=Math.floor(o[1]*u)/u,o[2]=Math.floor(o[2]*u)/u,o},f=0;e>f;f++)for(var c=0;e>c;c++){n.push(u(f,c)),n.push(u(f+1,c)),n.push(u(f+1,c+1)),n.push(u(f,c+1));var l=c/e,d=f/e;a.push([1-l,d]),a.push([1-l,d+h]),a.push([1-l-h,d+h]),a.push([1-l-h,d]),s.push(4*o+0),s.push(4*o+1),s.push(4*o+2),s.push(4*o+0),s.push(4*o+2),s.push(4*o+3),o++}var m=new r(n.length,s.length,i.gl.TRIANGLES);return m.bufferVertex(n),m.bufferTexCoords(a),m.bufferIndices(s),m},e.exports=n},{"./GLTools":10,"./Mesh":11}],13:[function(t,e){function i(t){void 0===t&&(t=document),this._isRotateZ=0,this.matrix=r.mat4.create(),this.m=r.mat4.create(),this._vZaxis=r.vec3.clone([0,0,0]),this._zAxis=r.vec3.clone([0,0,-1]),this.preMouse={x:0,y:0},this.mouse={x:0,y:0},this._isMouseDown=!1,this._rotation=r.quat.clone([0,0,1,0]),this.tempRotation=r.quat.clone([0,0,0,0]),this._rotateZMargin=0,this.diffX=0,this.diffY=0,this._currDiffX=0,this._currDiffY=0,this._offset=.004,this._easing=.1,this._slerp=-1,this._isLocked=!1;var e=this;t.addEventListener("mousedown",function(t){e._onMouseDown(t)}),t.addEventListener("touchstart",function(t){e._onMouseDown(t)}),t.addEventListener("mouseup",function(t){e._onMouseUp(t)}),t.addEventListener("touchend",function(t){e._onMouseUp(t)}),t.addEventListener("mousemove",function(t){e._onMouseMove(t)}),t.addEventListener("touchmove",function(t){e._onMouseMove(t)})}var r=t("gl-matrix"),n=i.prototype;n.inverseControl=function(t){this._isInvert=void 0===t?!0:t},n.lock=function(t){this._isLocked=void 0===t?!0:t},n.getMousePos=function(t){var e,i;return void 0!==t.changedTouches?(e=t.changedTouches[0].pageX,i=t.changedTouches[0].pageY):(e=t.clientX,i=t.clientY),{x:e,y:i}},n._onMouseDown=function(t){if(!this._isLocked&&!this._isMouseDown){var e=this.getMousePos(t),i=r.quat.clone(this._rotation);this._updateRotation(i),this._rotation=i,this._isMouseDown=!0,this._isRotateZ=0,this.preMouse={x:e.x,y:e.y},e.y<this._rotateZMargin||e.y>window.innerHeight-this._rotateZMargin?this._isRotateZ=1:(e.x<this._rotateZMargin||e.x>window.innerWidth-this._rotateZMargin)&&(this._isRotateZ=2),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0
}},n._onMouseMove=function(t){this._isLocked||(t.touches&&t.preventDefault(),this.mouse=this.getMousePos(t))},n._onMouseUp=function(){this._isLocked||this._isMouseDown&&(this._isMouseDown=!1)},n.setCameraPos=function(t,e){if(e=e||this._easing,this._easing=e,!(this._slerp>0)){var i=r.quat.clone(this._rotation);this._updateRotation(i),this._rotation=r.quat.clone(i),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0,this._isMouseDown=!1,this._isRotateZ=0,this._targetQuat=r.quat.clone(t),this._slerp=1}},n.resetQuat=function(){this._rotation=r.quat.clone([0,0,1,0]),this.tempRotation=r.quat.clone([0,0,0,0]),this._targetQuat=void 0,this._slerp=-1},n.update=function(){r.mat4.identity(this.m),void 0===this._targetQuat?(r.quat.set(this.tempRotation,this._rotation[0],this._rotation[1],this._rotation[2],this._rotation[3]),this._updateRotation(this.tempRotation)):(this._slerp+=.1*(0-this._slerp),this._slerp<.001?(r.quat.set(this._rotation,this._targetQuat[0],this._targetQuat[1],this._targetQuat[2],this._targetQuat[3]),this._targetQuat=void 0,this._slerp=-1):(r.quat.set(this.tempRotation,0,0,0,0),r.quat.slerp(this.tempRotation,this._targetQuat,this._rotation,this._slerp))),r.vec3.transformQuat(this._vZaxis,this._vZaxis,this.tempRotation),r.mat4.fromQuat(this.matrix,this.tempRotation)},n._updateRotation=function(t){this._isMouseDown&&!this._isLocked&&(this.diffX=-(this.mouse.x-this.preMouse.x),this.diffY=this.mouse.y-this.preMouse.y,this._isInvert&&(this.diffX=-this.diffX,this.diffY=-this.diffY)),this._currDiffX+=(this.diffX-this._currDiffX)*this._easing,this._currDiffY+=(this.diffY-this._currDiffY)*this._easing;var e,i;if(this._isRotateZ>0)1===this._isRotateZ?(e=-this._currDiffX*this._offset,e*=this.preMouse.y<this._rotateZMargin?-1:1,i=r.quat.clone([0,0,Math.sin(e),Math.cos(e)]),r.quat.multiply(i,t,i)):(e=-this._currDiffY*this._offset,e*=this.preMouse.x<this._rotateZMargin?1:-1,i=r.quat.clone([0,0,Math.sin(e),Math.cos(e)]),r.quat.multiply(i,t,i));else{var n=r.vec3.clone([this._currDiffX,this._currDiffY,0]),a=r.vec3.create();r.vec3.cross(a,n,this._zAxis),r.vec3.normalize(a,a),e=r.vec3.length(n)*this._offset,i=r.quat.clone([Math.sin(e)*a[0],Math.sin(e)*a[1],Math.sin(e)*a[2],Math.cos(e)]),r.quat.multiply(t,i,t)}},e.exports=i},{"gl-matrix":2}],14:[function(t,e){var i=t("./GLTools"),r=t("./QuatRotation"),n=t("./Camera"),a=t("./SimpleCamera"),s=t("gl-matrix"),o=function(){null!==i.canvas&&(this.gl=i.gl,this._children=[],this._init())},h=o.prototype;h._init=function(){this.camera=new a(i.canvas),this.camera.setPerspective(45*Math.PI/180,i.aspectRatio,5,3e3),this.camera.lockRotation();var t=s.vec3.clone([0,0,500]),e=s.vec3.create(),o=s.vec3.clone([0,-1,0]);this.camera.lookAt(t,e,o),this.sceneRotation=new r(i.canvas),this.rotationFront=s.mat4.create(),s.mat4.identity(this.rotationFront),this.cameraOtho=new n,this._initTextures(),this._initViews(),window.addEventListener("resize",this._onResize.bind(this))},h._initTextures=function(){},h._initViews=function(){},h.loop=function(){this.update(),this.render()},h.update=function(){this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.sceneRotation.update(),i.setViewport(0,0,i.width,i.height),i.setMatrices(this.camera),i.rotate(this.sceneRotation.matrix)},h.resize=function(){this.camera.resize&&this.camera.resize(i.aspectRatio)},h.render=function(){},h._onResize=function(){},e.exports=o},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(t,e){function i(){this.FRAMERATE=60,this._delayTasks=[],this._nextTasks=[],this._deferTasks=[],this._highTasks=[],this._usurpTask=[],this._enterframeTasks=[],this._idTable=0,window.requestAnimFrame(this._loop.bind(this))}void 0===window.requestAnimFrame&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}());var r=i.prototype;r._loop=function(){window.requestAnimFrame(this._loop.bind(this)),this._process()},r._process=function(){var t,e,i,r=0;for(r=0;r<this._enterframeTasks.length;r++)t=this._enterframeTasks[r],null!==t&&void 0!==t&&t.func.apply(t.scope,t.params);for(;this._highTasks.length>0;)t=this._highTasks.pop(),t.func.apply(t.scope,t.params);var n=(new Date).getTime();for(r=0;r<this._delayTasks.length;r++)t=this._delayTasks[r],n-t.time>t.delay&&(t.func.apply(t.scope,t.params),this._delayTasks.splice(r,1));for(n=(new Date).getTime(),e=1e3/this.FRAMERATE;this._deferTasks.length>0;){if(t=this._deferTasks.shift(),i=(new Date).getTime(),!(e>i-n)){this._deferTasks.unshift(t);break}t.func.apply(t.scope,t.params)}for(n=(new Date).getTime(),e=1e3/this.FRAMERATE;this._usurpTask.length>0&&(t=this._usurpTask.shift(),i=(new Date).getTime(),e>i-n);)t.func.apply(t.scope,t.params);this._highTasks=this._highTasks.concat(this._nextTasks),this._nextTasks=[],this._usurpTask=[]},r.addEF=function(t,e,i){i=i||[];var r=this._idTable;return this._enterframeTasks[r]={scope:t,func:e,params:i},this._idTable++,r},r.removeEF=function(t){return void 0!==this._enterframeTasks[t]&&(this._enterframeTasks[t]=null),-1},r.delay=function(t,e,i,r){var n=(new Date).getTime(),a={scope:t,func:e,params:i,delay:r,time:n};this._delayTasks.push(a)},r.defer=function(t,e,i){var r={scope:t,func:e,params:i};this._deferTasks.push(r)},r.next=function(t,e,i){var r={scope:t,func:e,params:i};this._nextTasks.push(r)},r.usurp=function(t,e,i){var r={scope:t,func:e,params:i};this._usurpTask.push(r)};var n=null;i.getInstance=function(){return null===n&&(n=new i),n},e.exports=i.getInstance()},{}],16:[function(t,e){var i=function(){};i.shaders={},i.shaders.copyVert="#define GLSLIFY 1\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i.shaders.generalVert="#define GLSLIFY 1\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i.shaders.copyFrag="#define GLSLIFY 1\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}",i.shaders.alphaFrag="#define GLSLIFY 1\n\n#define SHADER_NAME TEXTURE_WITH_ALPHA\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}",i.shaders.simpleColorFrag="#define GLSLIFY 1\n\n#define SHADER_NAME SIMPLE_COLOR_FRAGMENT\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}",i.shaders.depthFrag="#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n	return (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}",i.getShader=function(t){return this.shaders[t]},i.get=i.getShader,e.exports=i},{}],17:[function(t,e){var i=t("gl-matrix"),r=t("./CameraPerspective"),n=t("./EaseNumber"),a=function(t){this._listenerTarget=t||window,r.call(this),this._isLocked=!1,this._init()},s=a.prototype=new r,o=r.prototype;s._init=function(){this.radius=new n(500),this.position[2]=this.radius.value,this.center=i.vec3.create(),this.up=i.vec3.clone([0,-1,0]),this.lookAt(this.position,this.center,this.up),this._mouse={},this._preMouse={},this._isMouseDown=!1,this._rx=new n(0),this._rx.limit(-Math.PI/2,Math.PI/2),this._ry=new n(0),this._preRX=0,this._preRY=0,this._isLocked=!1,this._isLockRotation=!1,this._isInvert=!1,this._listenerTarget.addEventListener("mousewheel",this._onWheel.bind(this)),this._listenerTarget.addEventListener("DOMMouseScroll",this._onWheel.bind(this)),this._listenerTarget.addEventListener("mousedown",this._onMouseDown.bind(this)),this._listenerTarget.addEventListener("touchstart",this._onMouseDown.bind(this)),this._listenerTarget.addEventListener("mousemove",this._onMouseMove.bind(this)),this._listenerTarget.addEventListener("touchmove",this._onMouseMove.bind(this)),window.addEventListener("mouseup",this._onMouseUp.bind(this)),window.addEventListener("touchend",this._onMouseUp.bind(this))},s.inverseControl=function(t){this._isInvert=void 0===t?!0:t},s.lock=function(t){this._isLocked=void 0===t?!0:t},s.lockRotation=function(t){this._isLockRotation=void 0===t?!0:t},s._onMouseDown=function(t){this._isLockRotation||this._isLocked||(this._isMouseDown=!0,h(t,this._mouse),h(t,this._preMouse),this._preRX=this._rx.targetValue,this._preRY=this._ry.targetValue)},s._onMouseMove=function(t){if(!this._isLockRotation&&!this._isLocked&&(h(t,this._mouse),t.touches&&t.preventDefault(),this._isMouseDown)){var e=this._mouse.x-this._preMouse.x;this._isInvert&&(e*=-1),this._ry.value=this._preRY-.01*e;var i=this._mouse.y-this._preMouse.y;this._isInvert&&(i*=-1),this._rx.value=this._preRX-.01*i,this._rx.targetValue>.5*Math.PI&&(this._rx.targetValue=Math)}},s._onMouseUp=function(){this._isLockRotation||this._isLocked||(this._isMouseDown=!1)},s._onWheel=function(t){if(!this._isLocked){var e=t.wheelDelta,i=t.detail,r=0;r=i?e?e/i/40*i>0?1:-1:-i/3:e/120,this.radius.add(5*-r)}},s.getMatrix=function(){return this._updateCameraPosition(),this.lookAt(this.position,this.center,this.up),o.getMatrix.call(this)},s._updateCameraPosition=function(){this.position[2]=this.radius.value,this.position[1]=Math.sin(this._rx.value)*this.radius.value;var t=Math.cos(this._rx.value)*this.radius.value;this.position[0]=Math.cos(this._ry.value+.5*Math.PI)*t,this.position[2]=Math.sin(this._ry.value+.5*Math.PI)*t};var h=function(t,e){var i=e||{};return t.touches?(i.x=t.touches[0].pageX,i.y=t.touches[0].pageY):(i.x=t.clientX,i.y=t.clientY),i};s.__defineGetter__("rx",function(){return this._rx.targetValue}),s.__defineSetter__("rx",function(t){this._rx.value=t}),s.__defineGetter__("ry",function(){return this._ry.targetValue}),s.__defineSetter__("ry",function(t){this._ry.value=t}),e.exports=a},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(t,e){var i=function(){this._imgs={},this._loadedCount=0,this._toLoadCount=0,this._scope=void 0,this._callback=void 0,this._callbackProgress=void 0},r=i.prototype;r.load=function(t,e,i,r){this._imgs={},this._loadedCount=0,this._toLoadCount=t.length,this._scope=e,this._callback=i,this._callbackProgress=r,this._imgLoadedBind=this._onImageLoaded.bind(this);for(var n=0;n<t.length;n++){var a=new Image;a.onload=this._imgLoadedBind;var s=t[n],o=s.split("/"),h=o[o.length-1].split(".")[0];this._imgs[h]=a,a.src=s}},r._onImageLoaded=function(){if(this._loadedCount++,this._loadedCount===this._toLoadCount)this._callback.call(this._scope,this._imgs);else{var t=this._loadedCount/this._toLoadCount;this._callbackProgress&&this._callbackProgress.call(this._scope,t)}},e.exports=i},{}],19:[function(t,e){var i=t("./GLShader"),r=function(t,e){this.shader=new i(t,e),this._init()},n=r.prototype;n._init=function(){},n.render=function(){},e.exports=r},{"./GLShader":8}],20:[function(t,e){var i=t("./GLTools"),r=t("./View"),n=t("./Mesh"),a="precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}",s="precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}",o=function(t,e){this.lineWidth=void 0===t?2:t;var i=void 0===e?s:e;r.call(this,a,i)},h=o.prototype=new r;h._init=function(){var t=[],e=[],r=[],a=[0,1,2,3,4,5],s=9999;t.push([-s,0,0]),t.push([s,0,0]),t.push([0,-s,0]),t.push([0,s,0]),t.push([0,0,-s]),t.push([0,0,s]),e.push([1,0,0]),e.push([1,0,0]),e.push([0,1,0]),e.push([0,1,0]),e.push([0,0,1]),e.push([0,0,1]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),this.mesh=new n(t.length,a.length,i.gl.LINES),this.mesh.bufferVertex(t),this.mesh.bufferTexCoords(r),this.mesh.bufferIndices(a),this.mesh.bufferData(e,"aColor",3,!1)},h.render=function(){this.shader.isReady()&&(this.shader.bind(),i.gl.lineWidth(this.lineWidth),i.draw(this.mesh),i.gl.lineWidth(1))},e.exports=o},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(t,e){var i=t("./View"),r=t("./GLTools"),n=t("./MeshUtils"),a=function(t,e){i.call(this,t,e)},s=a.prototype=new i;s._init=function(){this.mesh=n.createPlane(2,2,1)},s.render=function(t){this.shader.isReady()&&(this.shader.bind(),this.shader.uniform("texture","uniform1i",0),t.bind(0),r.draw(this.mesh))},e.exports=a},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(t,e){var i=t("./GLTools"),r=t("./View"),n=t("./ShaderLibs"),a=t("./Mesh"),s=function(t,e){var i=.75;this.color=void 0===t?[i,i,i]:t;var a=void 0===e?n.get("simpleColorFrag"):e;r.call(this,null,a)},o=s.prototype=new r;o._init=function(){var t,e,r=[],n=[],s=[],o=0,h=100,u=3e3,f=u/h;for(t=-u/2;u>t;t+=f)for(e=-u/2;u>e;e+=f)r.push([t,e,0]),n.push([0,0]),s.push(o),o++,r.push([t,0,e]),n.push([0,0]),s.push(o),o++;this.mesh=new a(r.length,s.length,i.gl.DOTS),this.mesh.bufferVertex(r),this.mesh.bufferTexCoords(n),this.mesh.bufferIndices(s)},o.render=function(){this.shader.bind(),this.shader.uniform("color","uniform3fv",this.color),this.shader.uniform("opacity","uniform1f",1),i.draw(this.mesh)},e.exports=s},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)})},l.adjoint=function(t,e){var i=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=i,t},l.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},l.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1],u=i[2],f=i[3];return t[0]=r*o+a*h,t[1]=n*o+s*h,t[2]=r*u+a*f,t[3]=n*u+s*f,t},l.mul=l.multiply,l.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+a*o,t[1]=n*h+s*o,t[2]=r*-o+a*h,t[3]=n*-o+s*h,t},l.scale=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1];return t[0]=r*o,t[1]=n*o,t[2]=a*h,t[3]=s*h,t},l.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},l.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},l.LDU=function(t,e,i,r){return t[2]=r[2]/r[0],i[0]=r[0],i[1]=r[1],i[3]=r[3]-t[2]*i[1],[t,e,i]},"undefined"!=typeof r&&(r.mat2=l);var d={};d.create=function(){var t=new a(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},d.clone=function(t){var e=new a(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},d.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},d.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},d.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=i*a-r*n;return h?(h=1/h,t[0]=a*h,t[1]=-r*h,t[2]=-n*h,t[3]=i*h,t[4]=(n*o-a*s)*h,t[5]=(r*s-i*o)*h,t):null},d.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},d.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1],c=i[2],l=i[3],d=i[4],m=i[5];return t[0]=r*u+a*f,t[1]=n*u+s*f,t[2]=r*c+a*l,t[3]=n*c+s*l,t[4]=r*d+a*m+o,t[5]=n*d+s*m+h,t},d.mul=d.multiply,d.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=Math.sin(i),f=Math.cos(i);return t[0]=r*f+a*u,t[1]=n*f+s*u,t[2]=r*-u+a*f,t[3]=n*-u+s*f,t[4]=o,t[5]=h,t},d.scale=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1];return t[0]=r*u,t[1]=n*u,t[2]=a*f,t[3]=s*f,t[4]=o,t[5]=h,t},d.translate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=i[0],f=i[1];return t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=r*u+a*f+o,t[5]=n*u+s*f+h,t},d.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},d.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},"undefined"!=typeof r&&(r.mat2d=d);var m={};m.create=function(){var t=new a(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},m.fromMat4=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},m.clone=function(t){var e=new a(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},m.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},m.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},m.transpose=function(t,e){if(t===e){var i=e[1],r=e[2],n=e[5];t[1]=e[3],t[2]=e[6],t[3]=i,t[5]=e[7],t[6]=r,t[7]=n}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},m.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=f*s-o*u,l=-f*a+o*h,d=u*a-s*h,m=i*c+r*l+n*d;return m?(m=1/m,t[0]=c*m,t[1]=(-f*r+n*u)*m,t[2]=(o*r-n*s)*m,t[3]=l*m,t[4]=(f*i-n*h)*m,t[5]=(-o*i+n*a)*m,t[6]=d*m,t[7]=(-u*i+r*h)*m,t[8]=(s*i-r*a)*m,t):null},m.adjoint=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8];return t[0]=s*f-o*u,t[1]=n*u-r*f,t[2]=r*o-n*s,t[3]=o*h-a*f,t[4]=i*f-n*h,t[5]=n*a-i*o,t[6]=a*u-s*h,t[7]=r*h-i*u,t[8]=i*s-r*a,t},m.determinant=function(t){var e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],h=t[7],u=t[8];return e*(u*a-s*h)+i*(-u*n+s*o)+r*(h*n-a*o)},m.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=i[0],d=i[1],m=i[2],_=i[3],v=i[4],g=i[5],p=i[6],x=i[7],M=i[8];return t[0]=l*r+d*s+m*u,t[1]=l*n+d*o+m*f,t[2]=l*a+d*h+m*c,t[3]=_*r+v*s+g*u,t[4]=_*n+v*o+g*f,t[5]=_*a+v*h+g*c,t[6]=p*r+x*s+M*u,t[7]=p*n+x*o+M*f,t[8]=p*a+x*h+M*c,t},m.mul=m.multiply,m.translate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=i[0],d=i[1];return t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=o,t[5]=h,t[6]=l*r+d*s+u,t[7]=l*n+d*o+f,t[8]=l*a+d*h+c,t},m.rotate=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=Math.sin(i),d=Math.cos(i);return t[0]=d*r+l*s,t[1]=d*n+l*o,t[2]=d*a+l*h,t[3]=d*s-l*r,t[4]=d*o-l*n,t[5]=d*h-l*a,t[6]=u,t[7]=f,t[8]=c,t},m.scale=function(t,e,i){var r=i[0],n=i[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},m.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},m.fromQuat=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i+i,o=r+r,h=n+n,u=i*s,f=r*s,c=r*o,l=n*s,d=n*o,m=n*h,_=a*s,v=a*o,g=a*h;return t[0]=1-c-m,t[3]=f-g,t[6]=l+v,t[1]=f+g,t[4]=1-u-m,t[7]=d-_,t[2]=l-v,t[5]=d+_,t[8]=1-u-c,t},m.normalFromMat4=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15],p=i*o-r*s,x=i*h-n*s,M=i*u-a*s,T=r*h-n*o,E=r*u-a*o,R=n*u-a*h,w=f*_-c*m,A=f*v-l*m,b=f*g-d*m,y=c*v-l*_,L=c*g-d*_,P=l*g-d*v,F=p*P-x*L+M*y+T*b-E*A+R*w;return F?(F=1/F,t[0]=(o*P-h*L+u*y)*F,t[1]=(h*b-s*P-u*A)*F,t[2]=(s*L-o*b+u*w)*F,t[3]=(n*L-r*P-a*y)*F,t[4]=(i*P-n*b+a*A)*F,t[5]=(r*b-i*L-a*w)*F,t[6]=(_*R-v*E+g*T)*F,t[7]=(v*M-m*R-g*x)*F,t[8]=(m*E-_*M+g*p)*F,t):null},m.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},m.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},"undefined"!=typeof r&&(r.mat3=m);var _={};_.create=function(){var t=new a(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},_.clone=function(t){var e=new a(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},_.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},_.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},_.transpose=function(t,e){if(t===e){var i=e[1],r=e[2],n=e[3],a=e[6],s=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=i,t[6]=e[9],t[7]=e[13],t[8]=r,t[9]=a,t[11]=e[14],t[12]=n,t[13]=s,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},_.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15],p=i*o-r*s,x=i*h-n*s,M=i*u-a*s,T=r*h-n*o,E=r*u-a*o,R=n*u-a*h,w=f*_-c*m,A=f*v-l*m,b=f*g-d*m,y=c*v-l*_,L=c*g-d*_,P=l*g-d*v,F=p*P-x*L+M*y+T*b-E*A+R*w;return F?(F=1/F,t[0]=(o*P-h*L+u*y)*F,t[1]=(n*L-r*P-a*y)*F,t[2]=(_*R-v*E+g*T)*F,t[3]=(l*E-c*R-d*T)*F,t[4]=(h*b-s*P-u*A)*F,t[5]=(i*P-n*b+a*A)*F,t[6]=(v*M-m*R-g*x)*F,t[7]=(f*R-l*M+d*x)*F,t[8]=(s*L-o*b+u*w)*F,t[9]=(r*b-i*L-a*w)*F,t[10]=(m*E-_*M+g*p)*F,t[11]=(c*M-f*E-d*p)*F,t[12]=(o*A-s*y-h*w)*F,t[13]=(i*y-r*A+n*w)*F,t[14]=(_*x-m*T-v*p)*F,t[15]=(f*T-c*x+l*p)*F,t):null},_.adjoint=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=e[4],o=e[5],h=e[6],u=e[7],f=e[8],c=e[9],l=e[10],d=e[11],m=e[12],_=e[13],v=e[14],g=e[15];return t[0]=o*(l*g-d*v)-c*(h*g-u*v)+_*(h*d-u*l),t[1]=-(r*(l*g-d*v)-c*(n*g-a*v)+_*(n*d-a*l)),t[2]=r*(h*g-u*v)-o*(n*g-a*v)+_*(n*u-a*h),t[3]=-(r*(h*d-u*l)-o*(n*d-a*l)+c*(n*u-a*h)),t[4]=-(s*(l*g-d*v)-f*(h*g-u*v)+m*(h*d-u*l)),t[5]=i*(l*g-d*v)-f*(n*g-a*v)+m*(n*d-a*l),t[6]=-(i*(h*g-u*v)-s*(n*g-a*v)+m*(n*u-a*h)),t[7]=i*(h*d-u*l)-s*(n*d-a*l)+f*(n*u-a*h),t[8]=s*(c*g-d*_)-f*(o*g-u*_)+m*(o*d-u*c),t[9]=-(i*(c*g-d*_)-f*(r*g-a*_)+m*(r*d-a*c)),t[10]=i*(o*g-u*_)-s*(r*g-a*_)+m*(r*u-a*o),t[11]=-(i*(o*d-u*c)-s*(r*d-a*c)+f*(r*u-a*o)),t[12]=-(s*(c*v-l*_)-f*(o*v-h*_)+m*(o*l-h*c)),t[13]=i*(c*v-l*_)-f*(r*v-n*_)+m*(r*l-n*c),t[14]=-(i*(o*v-h*_)-s*(r*v-n*_)+m*(r*h-n*o)),t[15]=i*(o*l-h*c)-s*(r*l-n*c)+f*(r*h-n*o),t},_.determinant=function(t){var e=t[0],i=t[1],r=t[2],n=t[3],a=t[4],s=t[5],o=t[6],h=t[7],u=t[8],f=t[9],c=t[10],l=t[11],d=t[12],m=t[13],_=t[14],v=t[15],g=e*s-i*a,p=e*o-r*a,x=e*h-n*a,M=i*o-r*s,T=i*h-n*s,E=r*h-n*o,R=u*m-f*d,w=u*_-c*d,A=u*v-l*d,b=f*_-c*m,y=f*v-l*m,L=c*v-l*_;return g*L-p*y+x*b+M*A-T*w+E*R},_.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=e[9],d=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],x=i[0],M=i[1],T=i[2],E=i[3];return t[0]=x*r+M*o+T*c+E*_,t[1]=x*n+M*h+T*l+E*v,t[2]=x*a+M*u+T*d+E*g,t[3]=x*s+M*f+T*m+E*p,x=i[4],M=i[5],T=i[6],E=i[7],t[4]=x*r+M*o+T*c+E*_,t[5]=x*n+M*h+T*l+E*v,t[6]=x*a+M*u+T*d+E*g,t[7]=x*s+M*f+T*m+E*p,x=i[8],M=i[9],T=i[10],E=i[11],t[8]=x*r+M*o+T*c+E*_,t[9]=x*n+M*h+T*l+E*v,t[10]=x*a+M*u+T*d+E*g,t[11]=x*s+M*f+T*m+E*p,x=i[12],M=i[13],T=i[14],E=i[15],t[12]=x*r+M*o+T*c+E*_,t[13]=x*n+M*h+T*l+E*v,t[14]=x*a+M*u+T*d+E*g,t[15]=x*s+M*f+T*m+E*p,t},_.mul=_.multiply,_.translate=function(t,e,i){var r,n,a,s,o,h,u,f,c,l,d,m,_=i[0],v=i[1],g=i[2];return e===t?(t[12]=e[0]*_+e[4]*v+e[8]*g+e[12],t[13]=e[1]*_+e[5]*v+e[9]*g+e[13],t[14]=e[2]*_+e[6]*v+e[10]*g+e[14],t[15]=e[3]*_+e[7]*v+e[11]*g+e[15]):(r=e[0],n=e[1],a=e[2],s=e[3],o=e[4],h=e[5],u=e[6],f=e[7],c=e[8],l=e[9],d=e[10],m=e[11],t[0]=r,t[1]=n,t[2]=a,t[3]=s,t[4]=o,t[5]=h,t[6]=u,t[7]=f,t[8]=c,t[9]=l,t[10]=d,t[11]=m,t[12]=r*_+o*v+c*g+e[12],t[13]=n*_+h*v+l*g+e[13],t[14]=a*_+u*v+d*g+e[14],t[15]=s*_+f*v+m*g+e[15]),t},_.scale=function(t,e,i){var r=i[0],n=i[1],a=i[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},_.rotate=function(t,e,i,r){var a,s,o,h,u,f,c,l,d,m,_,v,g,p,x,M,T,E,R,w,A,b,y,L,P=r[0],F=r[1],S=r[2],D=Math.sqrt(P*P+F*F+S*S);return Math.abs(D)<n?null:(D=1/D,P*=D,F*=D,S*=D,a=Math.sin(i),s=Math.cos(i),o=1-s,h=e[0],u=e[1],f=e[2],c=e[3],l=e[4],d=e[5],m=e[6],_=e[7],v=e[8],g=e[9],p=e[10],x=e[11],M=P*P*o+s,T=F*P*o+S*a,E=S*P*o-F*a,R=P*F*o-S*a,w=F*F*o+s,A=S*F*o+P*a,b=P*S*o+F*a,y=F*S*o-P*a,L=S*S*o+s,t[0]=h*M+l*T+v*E,t[1]=u*M+d*T+g*E,t[2]=f*M+m*T+p*E,t[3]=c*M+_*T+x*E,t[4]=h*R+l*w+v*A,t[5]=u*R+d*w+g*A,t[6]=f*R+m*w+p*A,t[7]=c*R+_*w+x*A,t[8]=h*b+l*y+v*L,t[9]=u*b+d*y+g*L,t[10]=f*b+m*y+p*L,t[11]=c*b+_*y+x*L,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},_.rotateX=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[4],s=e[5],o=e[6],h=e[7],u=e[8],f=e[9],c=e[10],l=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*n+u*r,t[5]=s*n+f*r,t[6]=o*n+c*r,t[7]=h*n+l*r,t[8]=u*n-a*r,t[9]=f*n-s*r,t[10]=c*n-o*r,t[11]=l*n-h*r,t},_.rotateY=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[0],s=e[1],o=e[2],h=e[3],u=e[8],f=e[9],c=e[10],l=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n-u*r,t[1]=s*n-f*r,t[2]=o*n-c*r,t[3]=h*n-l*r,t[8]=a*r+u*n,t[9]=s*r+f*n,t[10]=o*r+c*n,t[11]=h*r+l*n,t},_.rotateZ=function(t,e,i){var r=Math.sin(i),n=Math.cos(i),a=e[0],s=e[1],o=e[2],h=e[3],u=e[4],f=e[5],c=e[6],l=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*n+u*r,t[1]=s*n+f*r,t[2]=o*n+c*r,t[3]=h*n+l*r,t[4]=u*n-a*r,t[5]=f*n-s*r,t[6]=c*n-o*r,t[7]=l*n-h*r,t},_.fromRotationTranslation=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=r+r,h=n+n,u=a+a,f=r*o,c=r*h,l=r*u,d=n*h,m=n*u,_=a*u,v=s*o,g=s*h,p=s*u;return t[0]=1-(d+_),t[1]=c+p,t[2]=l-g,t[3]=0,t[4]=c-p,t[5]=1-(f+_),t[6]=m+v,t[7]=0,t[8]=l+g,t[9]=m-v,t[10]=1-(f+d),t[11]=0,t[12]=i[0],t[13]=i[1],t[14]=i[2],t[15]=1,t},_.fromQuat=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i+i,o=r+r,h=n+n,u=i*s,f=r*s,c=r*o,l=n*s,d=n*o,m=n*h,_=a*s,v=a*o,g=a*h;return t[0]=1-c-m,t[1]=f+g,t[2]=l-v,t[3]=0,t[4]=f-g,t[5]=1-u-m,t[6]=d+_,t[7]=0,t[8]=l+v,t[9]=d-_,t[10]=1-u-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},_.frustum=function(t,e,i,r,n,a,s){var o=1/(i-e),h=1/(n-r),u=1/(a-s);return t[0]=2*a*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*h,t[6]=0,t[7]=0,t[8]=(i+e)*o,t[9]=(n+r)*h,t[10]=(s+a)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=s*a*2*u,t[15]=0,t},_.perspective=function(t,e,i,r,n){var a=1/Math.tan(e/2),s=1/(r-n);return t[0]=a/i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*s,t[15]=0,t},_.ortho=function(t,e,i,r,n,a,s){var o=1/(e-i),h=1/(r-n),u=1/(a-s);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+i)*o,t[13]=(n+r)*h,t[14]=(s+a)*u,t[15]=1,t},_.lookAt=function(t,e,i,r){var a,s,o,h,u,f,c,l,d,m,v=e[0],g=e[1],p=e[2],x=r[0],M=r[1],T=r[2],E=i[0],R=i[1],w=i[2];return Math.abs(v-E)<n&&Math.abs(g-R)<n&&Math.abs(p-w)<n?_.identity(t):(c=v-E,l=g-R,d=p-w,m=1/Math.sqrt(c*c+l*l+d*d),c*=m,l*=m,d*=m,a=M*d-T*l,s=T*c-x*d,o=x*l-M*c,m=Math.sqrt(a*a+s*s+o*o),m?(m=1/m,a*=m,s*=m,o*=m):(a=0,s=0,o=0),h=l*o-d*s,u=d*a-c*o,f=c*s-l*a,m=Math.sqrt(h*h+u*u+f*f),m?(m=1/m,h*=m,u*=m,f*=m):(h=0,u=0,f=0),t[0]=a,t[1]=h,t[2]=c,t[3]=0,t[4]=s,t[5]=u,t[6]=l,t[7]=0,t[8]=o,t[9]=f,t[10]=d,t[11]=0,t[12]=-(a*v+s*g+o*p),t[13]=-(h*v+u*g+f*p),t[14]=-(c*v+l*g+d*p),t[15]=1,t)},_.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},_.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},"undefined"!=typeof r&&(r.mat4=_);var v={};v.create=function(){var t=new a(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},v.rotationTo=function(){var t=f.create(),e=f.fromValues(1,0,0),i=f.fromValues(0,1,0);return function(r,n,a){var s=f.dot(n,a);return-.999999>s?(f.cross(t,e,n),f.length(t)<1e-6&&f.cross(t,i,n),f.normalize(t,t),v.setAxisAngle(r,t,Math.PI),r):s>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(f.cross(t,n,a),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1+s,v.normalize(r,r))}}(),v.setAxes=function(){var t=m.create();return function(e,i,r,n){return t[0]=r[0],t[3]=r[1],t[6]=r[2],t[1]=n[0],t[4]=n[1],t[7]=n[2],t[2]=-i[0],t[5]=-i[1],t[8]=-i[2],v.normalize(e,v.fromMat3(e,t))}}(),v.clone=c.clone,v.fromValues=c.fromValues,v.copy=c.copy,v.set=c.set,v.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},v.setAxisAngle=function(t,e,i){i=.5*i;var r=Math.sin(i);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(i),t},v.add=c.add,v.multiply=function(t,e,i){var r=e[0],n=e[1],a=e[2],s=e[3],o=i[0],h=i[1],u=i[2],f=i[3];return t[0]=r*f+s*o+n*u-a*h,t[1]=n*f+s*h+a*o-r*u,t[2]=a*f+s*u+r*h-n*o,t[3]=s*f-r*o-n*h-a*u,t},v.mul=v.multiply,v.scale=c.scale,v.rotateX=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+s*o,t[1]=n*h+a*o,t[2]=a*h-n*o,t[3]=s*h-r*o,t},v.rotateY=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h-a*o,t[1]=n*h+s*o,t[2]=a*h+r*o,t[3]=s*h-n*o,t},v.rotateZ=function(t,e,i){i*=.5;var r=e[0],n=e[1],a=e[2],s=e[3],o=Math.sin(i),h=Math.cos(i);return t[0]=r*h+n*o,t[1]=n*h-r*o,t[2]=a*h+s*o,t[3]=s*h-a*o,t},v.calculateW=function(t,e){var i=e[0],r=e[1],n=e[2];return t[0]=i,t[1]=r,t[2]=n,t[3]=-Math.sqrt(Math.abs(1-i*i-r*r-n*n)),t},v.dot=c.dot,v.lerp=c.lerp,v.slerp=function(t,e,i,r){var n,a,s,o,h,u=e[0],f=e[1],c=e[2],l=e[3],d=i[0],m=i[1],_=i[2],v=i[3];return a=u*d+f*m+c*_+l*v,0>a&&(a=-a,d=-d,m=-m,_=-_,v=-v),1-a>1e-6?(n=Math.acos(a),s=Math.sin(n),o=Math.sin((1-r)*n)/s,h=Math.sin(r*n)/s):(o=1-r,h=r),t[0]=o*u+h*d,t[1]=o*f+h*m,t[2]=o*c+h*_,t[3]=o*l+h*v,t},v.invert=function(t,e){var i=e[0],r=e[1],n=e[2],a=e[3],s=i*i+r*r+n*n+a*a,o=s?1/s:0;return t[0]=-i*o,t[1]=-r*o,t[2]=-n*o,t[3]=a*o,t},v.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},v.length=c.length,v.len=v.length,v.squaredLength=c.squaredLength,v.sqrLen=v.squaredLength,v.normalize=c.normalize,v.fromMat3=function(t,e){var i,r=e[0]+e[4]+e[8];if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[7]-e[5])*i,t[1]=(e[2]-e[6])*i,t[2]=(e[3]-e[1])*i;else{var n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);var a=(n+1)%3,s=(n+2)%3;i=Math.sqrt(e[3*n+n]-e[3*a+a]-e[3*s+s]+1),t[n]=.5*i,i=.5/i,t[3]=(e[3*s+a]-e[3*a+s])*i,t[a]=(e[3*a+n]+e[3*n+a])*i,t[s]=(e[3*s+n]+e[3*n+s])*i}return t},v.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},"undefined"!=typeof r&&(r.quat=v)}(a.exports)}(this)},{}],3:[function(t,e){"use strict";var i=t("gl-matrix"),r=function(){this.matrix=i.mat4.create(),i.mat4.identity(this.matrix),this.position=i.vec3.create()},n=r.prototype;n.lookAt=function(t,e,r){i.vec3.copy(this.position,t),i.mat4.identity(this.matrix),i.mat4.lookAt(this.matrix,t,e,r)},n.getMatrix=function(){return this.matrix},e.exports=r},{"gl-matrix":2}],4:[function(t,e){"use strict";var i=t("./Camera"),r=t("gl-matrix"),n=function(){i.call(this),this.projection=r.mat4.create(),this.mtxFinal=r.mat4.create()
},a=n.prototype=new i;a.setPerspective=function(t,e,i,n){this._fov=t,this._near=i,this._far=n,this._aspect=e,r.mat4.perspective(this.projection,t,e,i,n)},a.getMatrix=function(){return this.matrix},a.resize=function(t){this._aspect=t,r.mat4.perspective(this.projection,this._fov,t,this._near,this._far)},a.__defineGetter__("near",function(){return this._near}),a.__defineGetter__("far",function(){return this._far}),e.exports=n},{"./Camera":3,"gl-matrix":2}],5:[function(t,e){"use strict";function i(t,e){this._easing=e||.1,this._value=t,this._targetValue=t,r.addEF(this,this._update)}var r=t("./Scheduler"),n=i.prototype;n._update=function(){this._checkLimit(),this._value+=(this._targetValue-this._value)*this._easing},n.setTo=function(t){this._targetValue=this._value=t},n.add=function(t){this._targetValue+=t},n.limit=function(t,e){this._min=t,this._max=e,this._checkLimit()},n._checkLimit=function(){void 0!==this._min&&this._targetValue<this._min&&(this._targetValue=this._min),void 0!==this._max&&this._targetValue>this._max&&(this._targetValue=this._max)},n.__defineGetter__("value",function(){return this._value}),n.__defineGetter__("targetValue",function(){return this._targetValue}),n.__defineSetter__("value",function(t){this._targetValue=t}),e.exports=i},{"./Scheduler":15}],6:[function(t,e){"use strict";var i=t("gl-matrix"),r=function(t,e,i){this._vertexA=t,this._vertexB=e,this._vertexC=i,this._init()},n=r.prototype;n._init=function(){var t=i.vec3.create(),e=i.vec3.create();i.vec3.sub(t,this._vertexB,this._vertexA),i.vec3.sub(e,this._vertexC,this._vertexA),this._faceNormal=i.vec3.create(),i.vec3.cross(this._faceNormal,t,e),i.vec3.normalize(this._faceNormal,this._faceNormal)},n.contains=function(t){return a(t,this._vertexA)||a(t,this._vertexB)||a(t,this._vertexC)},n.__defineGetter__("faceNormal",function(){return this._faceNormal});var a=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]};e.exports=r},{"gl-matrix":2}],7:[function(t,e){"use strict";var i,r=t("./GLTools"),n=t("./GLTexture"),a=function(t){return!(0===t||t&t-1)},s=function(t,e,n){i=r.gl,n=n||{},this.width=t,this.height=e,this.magFilter=n.magFilter||i.LINEAR,this.minFilter=n.minFilter||i.LINEAR,this.wrapS=n.wrapS||i.MIRRORED_REPEAT,this.wrapT=n.wrapT||i.MIRRORED_REPEAT,a(t)&&a(e)||(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)),this._init()},o=s.prototype;o._init=function(){if(this.texture=i.createTexture(),this.glTexture=new n(this.texture,!0),this.frameBuffer=i.createFramebuffer(),i.bindFramebuffer(i.FRAMEBUFFER,this.frameBuffer),this.frameBuffer.width=this.width,this.frameBuffer.height=this.height,i.bindTexture(i.TEXTURE_2D,this.texture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),r.depthTextureExt?i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,i.RGBA,i.FLOAT,null):i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.frameBuffer.width,this.frameBuffer.height,0,i.RGBA,i.UNSIGNED_BYTE,null),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,this.texture,0),null===r.depthTextureExt){var t=i.createRenderbuffer();i.bindRenderbuffer(i.RENDERBUFFER,t),i.renderbufferStorage(i.RENDERBUFFER,i.RGBA4,this.frameBuffer.width,this.frameBuffer.height)}else this.depthTexture=i.createTexture(),this.glDepthTexture=new n(this.depthTexture,!0),i.bindTexture(i.TEXTURE_2D,this.depthTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texImage2D(i.TEXTURE_2D,0,i.DEPTH_COMPONENT,this.width,this.height,0,i.DEPTH_COMPONENT,i.UNSIGNED_SHORT,null),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,this.depthTexture,0);i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null),i.bindFramebuffer(i.FRAMEBUFFER,null)},o.bind=function(){i.bindFramebuffer(i.FRAMEBUFFER,this.frameBuffer)},o.unbind=function(){i.bindFramebuffer(i.FRAMEBUFFER,null)},o.getTexture=function(){return this.glTexture},o.getDepthTexture=function(){return this.glDepthTexture},o.destroy=function(){i.deleteFramebuffer(this.frameBuffer),this.glTexture.destroy(),this.glDepthTexture&&this.glDepthTexture.destroy()},e.exports=s},{"./GLTexture":9,"./GLTools":10}],8:[function(t,e){"use strict";var i,r=t("./GLTools"),n=t("./ShaderLibs"),a=function(t){for(var e=t.split("\n"),i=0;i<e.length;i++)e[i]=i+1+": "+e[i];return e.join("\n")},s=function(t,e){i=r.gl,this.idVertex=t,this.idFragment=e,this.parameters=[],this.uniformValues={},this.uniformTextures=[],this.vertexShader=void 0,this.fragmentShader=void 0,this._isReady=!1,this._loadedCount=0,(void 0===t||null===t)&&this.createVertexShaderProgram(n.getShader("copyVert")),(void 0===e||null===t)&&this.createFragmentShaderProgram(n.getShader("copyFrag")),this.init()},o=s.prototype;o.init=function(){this.idVertex&&this.idVertex.indexOf("main(void)")>-1?this.createVertexShaderProgram(this.idVertex):this.getShader(this.idVertex,!0),this.idFragment&&this.idFragment.indexOf("main(void)")>-1?this.createFragmentShaderProgram(this.idFragment):this.getShader(this.idFragment,!1)},o.getShader=function(t,e){if(t){var i=new XMLHttpRequest;i.hasCompleted=!1;var r=this;i.onreadystatechange=function(t){4===t.target.readyState&&(e?r.createVertexShaderProgram(t.target.responseText):r.createFragmentShaderProgram(t.target.responseText))},i.open("GET",t,!0),i.send(null)}},o.createVertexShaderProgram=function(t){if(i){var e=i.createShader(i.VERTEX_SHADER);if(i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))return console.warn("Error in Vertex Shader : ",this.idVertex,":",i.getShaderInfoLog(e)),console.log(a(t)),null;this.vertexShader=e,void 0!==this.vertexShader&&void 0!==this.fragmentShader&&this.attachShaderProgram(),this._loadedCount++}},o.createFragmentShaderProgram=function(t){if(i){var e=i.createShader(i.FRAGMENT_SHADER);if(i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))return console.warn("Error in Fragment Shader: ",this.idFragment,":",i.getShaderInfoLog(e)),console.log(a(t)),null;this.fragmentShader=e,void 0!==this.vertexShader&&void 0!==this.fragmentShader&&this.attachShaderProgram(),this._loadedCount++}},o.attachShaderProgram=function(){this._isReady=!0,this.shaderProgram=i.createProgram(),i.attachShader(this.shaderProgram,this.vertexShader),i.attachShader(this.shaderProgram,this.fragmentShader),i.linkProgram(this.shaderProgram)},o.bind=function(){this._isReady&&(i.useProgram(this.shaderProgram),void 0===this.shaderProgram.pMatrixUniform&&(this.shaderProgram.pMatrixUniform=i.getUniformLocation(this.shaderProgram,"uPMatrix")),void 0===this.shaderProgram.mvMatrixUniform&&(this.shaderProgram.mvMatrixUniform=i.getUniformLocation(this.shaderProgram,"uMVMatrix")),r.setShader(this),r.setShaderProgram(this.shaderProgram),this.uniformTextures=[])},o.isReady=function(){return this._isReady},o.clearUniforms=function(){this.parameters=[],this.uniformValues={}},o.uniform=function(t,e,r){if(this._isReady){"texture"===e&&(e="uniform1i");for(var n,a=!1,s=0;s<this.parameters.length;s++)if(n=this.parameters[s],n.name===t){n.value=r,a=!0;break}a?this.shaderProgram[t]=n.uniformLoc:(this.shaderProgram[t]=i.getUniformLocation(this.shaderProgram,t),this.parameters.push({name:t,type:e,value:r,uniformLoc:this.shaderProgram[t]})),-1===e.indexOf("Matrix")?a?this.checkUniform(t,e,r)&&i[e](this.shaderProgram[t],r):(i[e](this.shaderProgram[t],r),this.uniformValues[t]=r):(i[e](this.shaderProgram[t],!1,r),a||(i[e](this.shaderProgram[t],r),this.uniformValues[t]=r)),"uniform1i"===e&&(this.uniformTextures[r]=this.shaderProgram[t])}},o.checkUniform=function(t,e,i){if(!this.uniformValues[t])return this.uniformValues[t]=i,!0;if("uniform1i"===e)return this.uniformValues[t]=i,!0;var r=this.uniformValues[t],n=r===i?!1:!0;return n&&(this.uniformValues[t]=i),n},o.unbind=function(){},o.destroy=function(){i.detachShader(this.shaderProgram,this.vertexShader),i.detachShader(this.shaderProgram,this.fragmentShader),i.deleteShader(this.vertexShader),i.deleteShader(this.fragmentShader),i.deleteProgram(this.shaderProgram)},e.exports=s},{"./GLTools":10,"./ShaderLibs":16}],9:[function(t,e){"use strict";var i,r=t("./GLTools"),n=function(t){var e=!(0===t||t&t-1);return e},a=function(t){var e=t.width||t.videoWidth,i=t.height||t.videoHeight;return e&&i?n(e)&&n(i):!1},s=function(t,e,n){if(e=e||!1,n=n||{},i=r.gl,e)this.texture=t;else{this._source=t,this.texture=i.createTexture(),this._isVideo="VIDEO"===t.tagName,this.magFilter=n.magFilter||i.LINEAR,this.minFilter=n.minFilter||i.LINEAR_MIPMAP_NEAREST,this.wrapS=n.wrapS||i.MIRRORED_REPEAT,this.wrapT=n.wrapT||i.MIRRORED_REPEAT;var s=t.width||t.videoWidth;s?a(t)||(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)):(this.wrapS=this.wrapT=i.CLAMP_TO_EDGE,this.minFilter===i.LINEAR_MIPMAP_NEAREST&&(this.minFilter=i.LINEAR)),i.bindTexture(i.TEXTURE_2D,this.texture),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,this.wrapS),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,this.wrapT),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null)}},o=s.prototype;o.updateTexture=function(t){t&&(this._source=t),i.bindTexture(i.TEXTURE_2D,this.texture),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!0),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,this._source),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,this.magFilter),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,this.minFilter),this.minFilter===i.LINEAR_MIPMAP_NEAREST&&i.generateMipmap(i.TEXTURE_2D),i.bindTexture(i.TEXTURE_2D,null)},o.bind=function(t){void 0===t&&(t=0),r.shader&&(i.activeTexture(i.TEXTURE0+t),i.bindTexture(i.TEXTURE_2D,this.texture),i.uniform1i(r.shader.uniformTextures[t],t),this._bindIndex=t)},o.unbind=function(){i.bindTexture(i.TEXTURE_2D,null)},o.destroy=function(){i.deleteTexture(this.texture)},e.exports=s},{"./GLTools":10}],10:[function(t,e){"use strict";function i(){this.aspectRatio=1,this.fieldOfView=45,this.zNear=5,this.zFar=3e3,this.canvas=null,this.gl=null,this.shader=null,this.shaderProgram=null}var r=t("gl-matrix"),n=i.prototype;n.init=function(t,e,i,n){this.canvas=t||document.createElement("canvas");var a=n||{};a.antialias=!0,this.gl=this.canvas.getContext("webgl",a)||this.canvas.getContext("experimental-webgl",a),console.log("GL TOOLS : ",this.gl),void 0!==e&&void 0!==i?this.setSize(e,i):this.setSize(window.innerWidth,window.innerHeight),this.gl.viewport(0,0,this.gl.viewportWidth,this.gl.viewportHeight),this.gl.enable(this.gl.DEPTH_TEST),this.gl.enable(this.gl.CULL_FACE),this.gl.enable(this.gl.BLEND),this.gl.clearColor(0,0,0,1),this.gl.clearDepth(1),this.matrix=r.mat4.create(),r.mat4.identity(this.matrix),this.normalMatrix=r.mat3.create(),this.depthTextureExt=this.gl.getExtension("WEBKIT_WEBGL_depth_texture"),this.floatTextureExt=this.gl.getExtension("OES_texture_float"),this.floatTextureLinearExt=this.gl.getExtension("OES_texture_float_linear"),this.standardDerivativesExt=this.gl.getExtension("OES_standard_derivatives"),this.enabledVertexAttribute=[],this.enableAlphaBlending(),this._viewport=[0,0,this.width,this.height]},n.getGL=function(){return this.gl},n.setShader=function(t){this.shader=t},n.setShaderProgram=function(t){this.shaderProgram=t},n.setViewport=function(t,e,i,r){var n=!1;t!==this._viewport[0]&&(n=!0),e!==this._viewport[1]&&(n=!0),i!==this._viewport[2]&&(n=!0),r!==this._viewport[3]&&(n=!0),n&&(this.gl.viewport(t,e,i,r),this._viewport=[t,e,i,r])},n.setMatrices=function(t){this.camera=t},n.rotate=function(t){r.mat4.copy(this.matrix,t),r.mat4.multiply(this.matrix,this.camera.getMatrix(),this.matrix),r.mat3.fromMat4(this.normalMatrix,this.matrix),r.mat3.invert(this.normalMatrix,this.normalMatrix),r.mat3.transpose(this.normalMatrix,this.normalMatrix)},n.enableAlphaBlending=function(){this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)},n.enableAdditiveBlending=function(){this.gl.blendFunc(this.gl.ONE,this.gl.ONE)},n.clear=function(t,e,i,r){this.gl.clearColor(t,e,i,r),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT)},n.draw=function(t){function e(t,e,i){return void 0===e.cacheAttribLoc&&(e.cacheAttribLoc={}),void 0===e.cacheAttribLoc[i]&&(e.cacheAttribLoc[i]=t.getAttribLocation(e,i)),e.cacheAttribLoc[i]}if(!this.shaderProgram)return void console.warn("Shader program not ready yet");if(this.shaderProgram.pMatrixValue){var i=this.camera.projection||this.camera.getMatrix();r.mat4.str(this.shaderProgram.pMatrixValue)!==r.mat4.str(i)&&(this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform,!1,this.camera.projection||this.camera.getMatrix()),r.mat4.copy(this.shaderProgram.pMatrixValue,i))}else this.shaderProgram.pMatrixValue=r.mat4.create(),this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform,!1,this.camera.projection||this.camera.getMatrix()),r.mat4.copy(this.shaderProgram.pMatrixValue,this.camera.projection||this.camera.getMatrix());this.shaderProgram.mvMatrixValue?r.mat4.str(this.shaderProgram.mvMatrixValue)!==r.mat4.str(this.matrix)&&(this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform,!1,this.matrix),r.mat4.copy(this.shaderProgram.mvMatrixValue,this.matrix)):(this.shaderProgram.mvMatrixValue=r.mat4.create(),this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform,!1,this.matrix),r.mat4.copy(this.shaderProgram.mvMatrixValue,this.matrix)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.vBufferPos);var n=e(this.gl,this.shaderProgram,"aVertexPosition");this.gl.vertexAttribPointer(n,t.vBufferPos.itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(n)&&(this.gl.enableVertexAttribArray(n),this.enabledVertexAttribute.push(n)),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.vBufferUV);var a=e(this.gl,this.shaderProgram,"aTextureCoord");this.gl.vertexAttribPointer(a,t.vBufferUV.itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(a)&&(this.gl.enableVertexAttribArray(a),this.enabledVertexAttribute.push(a)),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,t.iBuffer);for(var s=0;s<t.extraAttributes.length;s++){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t.extraAttributes[s].buffer);var o=e(this.gl,this.shaderProgram,t.extraAttributes[s].name);this.gl.vertexAttribPointer(o,t.extraAttributes[s].itemSize,this.gl.FLOAT,!1,0,0),-1===this.enabledVertexAttribute.indexOf(o)&&(this.gl.enableVertexAttribArray(o),this.enabledVertexAttribute.push(o))}t.drawType===this.gl.POINTS?this.gl.drawArrays(t.drawType,0,t.vertexSize):this.gl.drawElements(t.drawType,t.iBuffer.numItems,this.gl.UNSIGNED_SHORT,0)},n.setSize=function(t,e){this._width=t,this._height=e,this.canvas.width=this._width,this.canvas.height=this._height,this.gl.viewportWidth=this._width,this.gl.viewportHeight=this._height,this.gl.viewport(0,0,this._width,this._height),this.aspectRatio=this._width/this._height},n.__defineGetter__("width",function(){return this._width}),n.__defineGetter__("height",function(){return this._height}),n.__defineGetter__("viewport",function(){return this._viewport});var a=null;i.getInstance=function(){return null===a&&(a=new i),a},e.exports=i.getInstance()},{"gl-matrix":2}],11:[function(t,e){"use strict";var i=t("./Face"),r=t("./GLTools"),n=t("gl-matrix"),a=function(t,e,i){this.gl=r.gl,this.vertexSize=t,this.indexSize=e,this.drawType=i,this.extraAttributes=[],this.vBufferPos=void 0,this._floatArrayVertex=void 0,this._init()},s=a.prototype;s._init=function(){},s.bufferVertex=function(t,e){var i=[],r=e?this.gl.DYNAMIC_DRAW:this.gl.STATIC_DRAW;this._vertices=[];for(var a=0;a<t.length;a++){for(var s=0;s<t[a].length;s++)i.push(t[a][s]);this._vertices.push(n.vec3.clone(t[a]))}if(void 0===this.vBufferPos&&(this.vBufferPos=this.gl.createBuffer()),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferPos),void 0===this._floatArrayVertex)this._floatArrayVertex=new Float32Array(i);else if(t.length!==this._floatArrayVertex.length)this._floatArrayVertex=new Float32Array(i);else for(var o=0;o<t.length;o++)this._floatArrayVertex[o]=t[o];this.gl.bufferData(this.gl.ARRAY_BUFFER,this._floatArrayVertex,r),this.vBufferPos.itemSize=3},s.bufferTexCoords=function(t){for(var e=[],i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)e.push(t[i][r]);this.vBufferUV=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vBufferUV),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(e),this.gl.STATIC_DRAW),this.vBufferUV.itemSize=2},s.bufferData=function(t,e,i,r){var n=-1,a=r?this.gl.DYNAMIC_DRAW:this.gl.STATIC_DRAW,s=0;for(s=0;s<this.extraAttributes.length;s++)if(this.extraAttributes[s].name===e){this.extraAttributes[s].data=t,n=s;break}var o=[];for(s=0;s<t.length;s++)for(var h=0;h<t[s].length;h++)o.push(t[s][h]);var u,f;if(-1===n)u=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u),f=new Float32Array(o),this.gl.bufferData(this.gl.ARRAY_BUFFER,f,a),this.extraAttributes.push({name:e,data:t,itemSize:i,buffer:u,floatArray:f});else{for(u=this.extraAttributes[n].buffer,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u),f=this.extraAttributes[n].floatArray,s=0;s<o.length;s++)f[s]=o[s];this.gl.bufferData(this.gl.ARRAY_BUFFER,f,a)}},s.bufferIndices=function(t){this._indices=t,this.iBuffer=this.gl.createBuffer(),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.iBuffer),this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(t),this.gl.STATIC_DRAW),this.iBuffer.itemSize=1,this.iBuffer.numItems=t.length},s.computeNormals=function(){if(this.drawType===this.gl.TRIANGLES){void 0===this._faces&&this._generateFaces(),console.log("Start computing");var t=(new Date).getTime(),e=0;this._normals=[];for(var i=0;i<this._vertices.length;i++){var r=n.vec3.create(),a=0;for(e=0;e<this._faces.length;e++)this._faces[e].contains(this._vertices[i])&&(n.vec3.add(r,r,this._faces[e].faceNormal),a++);n.vec3.normalize(r,r),this._normals.push(r)}this.bufferData(this._normals,"aNormal",3);var s=(new Date).getTime()-t;console.log("Total Time : ",s)}},s.computeTangent=function(){},s._generateFaces=function(){this._faces=[];for(var t=0;t<this._indices.length;t+=3){var e=this._vertices[this._indices[t+0]],r=this._vertices[this._indices[t+1]],n=this._vertices[this._indices[t+2]];this._faces.push(new i(e,r,n))}},e.exports=a},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(t,e){"use strict";var i=t("./GLTools"),r=t("./Mesh"),n={};n.createPlane=function(t,e,n){for(var a=[],s=[],o=[],h=t/n,u=e/n,f=1/n,c=0,l=.5*-t,d=.5*-e,m=0;n>m;m++)for(var _=0;n>_;_++){var v=h*m+l,g=u*_+d;a.push([v,g,0]),a.push([v+h,g,0]),a.push([v+h,g+u,0]),a.push([v,g+u,0]);var p=m/n,x=_/n;s.push([p,x]),s.push([p+f,x]),s.push([p+f,x+f]),s.push([p,x+f]),o.push(4*c+0),o.push(4*c+1),o.push(4*c+2),o.push(4*c+0),o.push(4*c+2),o.push(4*c+3),c++}var M=new r(a.length,o.length,i.gl.TRIANGLES);return M.bufferVertex(a),M.bufferTexCoords(s),M.bufferIndices(o),M},n.createSphere=function(t,e){for(var n=[],a=[],s=[],o=0,h=1/e,u=function(i,r){var n=i/e*Math.PI-.5*Math.PI,a=r/e*Math.PI*2,s=t,o=[];o[1]=Math.sin(n)*s;var h=Math.cos(n)*s;o[0]=Math.cos(a)*h,o[2]=Math.sin(a)*h;var u=1e4;return o[0]=Math.floor(o[0]*u)/u,o[1]=Math.floor(o[1]*u)/u,o[2]=Math.floor(o[2]*u)/u,o},f=0;e>f;f++)for(var c=0;e>c;c++){n.push(u(f,c)),n.push(u(f+1,c)),n.push(u(f+1,c+1)),n.push(u(f,c+1));var l=c/e,d=f/e;a.push([1-l,d]),a.push([1-l,d+h]),a.push([1-l-h,d+h]),a.push([1-l-h,d]),s.push(4*o+0),s.push(4*o+1),s.push(4*o+2),s.push(4*o+0),s.push(4*o+2),s.push(4*o+3),o++}var m=new r(n.length,s.length,i.gl.TRIANGLES);return m.bufferVertex(n),m.bufferTexCoords(a),m.bufferIndices(s),m},e.exports=n},{"./GLTools":10,"./Mesh":11}],13:[function(t,e){"use strict";function i(t){void 0===t&&(t=document),this._isRotateZ=0,this.matrix=r.mat4.create(),this.m=r.mat4.create(),this._vZaxis=r.vec3.clone([0,0,0]),this._zAxis=r.vec3.clone([0,0,-1]),this.preMouse={x:0,y:0},this.mouse={x:0,y:0},this._isMouseDown=!1,this._rotation=r.quat.clone([0,0,1,0]),this.tempRotation=r.quat.clone([0,0,0,0]),this._rotateZMargin=0,this.diffX=0,this.diffY=0,this._currDiffX=0,this._currDiffY=0,this._offset=.004,this._easing=.1,this._slerp=-1,this._isLocked=!1;var e=this;t.addEventListener("mousedown",function(t){e._onMouseDown(t)}),t.addEventListener("touchstart",function(t){e._onMouseDown(t)}),t.addEventListener("mouseup",function(t){e._onMouseUp(t)}),t.addEventListener("touchend",function(t){e._onMouseUp(t)}),t.addEventListener("mousemove",function(t){e._onMouseMove(t)}),t.addEventListener("touchmove",function(t){e._onMouseMove(t)})}var r=t("gl-matrix"),n=i.prototype;n.inverseControl=function(t){this._isInvert=void 0===t?!0:t},n.lock=function(t){this._isLocked=void 0===t?!0:t},n.getMousePos=function(t){var e,i;return void 0!==t.changedTouches?(e=t.changedTouches[0].pageX,i=t.changedTouches[0].pageY):(e=t.clientX,i=t.clientY),{x:e,y:i}},n._onMouseDown=function(t){if(!this._isLocked&&!this._isMouseDown){var e=this.getMousePos(t),i=r.quat.clone(this._rotation);this._updateRotation(i),this._rotation=i,this._isMouseDown=!0,this._isRotateZ=0,this.preMouse={x:e.x,y:e.y},e.y<this._rotateZMargin||e.y>window.innerHeight-this._rotateZMargin?this._isRotateZ=1:(e.x<this._rotateZMargin||e.x>window.innerWidth-this._rotateZMargin)&&(this._isRotateZ=2),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0}},n._onMouseMove=function(t){this._isLocked||(t.touches&&t.preventDefault(),this.mouse=this.getMousePos(t))},n._onMouseUp=function(){this._isLocked||this._isMouseDown&&(this._isMouseDown=!1)},n.setCameraPos=function(t,e){if(e=e||this._easing,this._easing=e,!(this._slerp>0)){var i=r.quat.clone(this._rotation);this._updateRotation(i),this._rotation=r.quat.clone(i),this._currDiffX=this.diffX=0,this._currDiffY=this.diffY=0,this._isMouseDown=!1,this._isRotateZ=0,this._targetQuat=r.quat.clone(t),this._slerp=1}},n.resetQuat=function(){this._rotation=r.quat.clone([0,0,1,0]),this.tempRotation=r.quat.clone([0,0,0,0]),this._targetQuat=void 0,this._slerp=-1},n.update=function(){r.mat4.identity(this.m),void 0===this._targetQuat?(r.quat.set(this.tempRotation,this._rotation[0],this._rotation[1],this._rotation[2],this._rotation[3]),this._updateRotation(this.tempRotation)):(this._slerp+=.1*(0-this._slerp),this._slerp<.001?(r.quat.set(this._rotation,this._targetQuat[0],this._targetQuat[1],this._targetQuat[2],this._targetQuat[3]),this._targetQuat=void 0,this._slerp=-1):(r.quat.set(this.tempRotation,0,0,0,0),r.quat.slerp(this.tempRotation,this._targetQuat,this._rotation,this._slerp))),r.vec3.transformQuat(this._vZaxis,this._vZaxis,this.tempRotation),r.mat4.fromQuat(this.matrix,this.tempRotation)},n._updateRotation=function(t){this._isMouseDown&&!this._isLocked&&(this.diffX=-(this.mouse.x-this.preMouse.x),this.diffY=this.mouse.y-this.preMouse.y,this._isInvert&&(this.diffX=-this.diffX,this.diffY=-this.diffY)),this._currDiffX+=(this.diffX-this._currDiffX)*this._easing,this._currDiffY+=(this.diffY-this._currDiffY)*this._easing;var e,i;if(this._isRotateZ>0)1===this._isRotateZ?(e=-this._currDiffX*this._offset,e*=this.preMouse.y<this._rotateZMargin?-1:1,i=r.quat.clone([0,0,Math.sin(e),Math.cos(e)]),r.quat.multiply(i,t,i)):(e=-this._currDiffY*this._offset,e*=this.preMouse.x<this._rotateZMargin?1:-1,i=r.quat.clone([0,0,Math.sin(e),Math.cos(e)]),r.quat.multiply(i,t,i));else{var n=r.vec3.clone([this._currDiffX,this._currDiffY,0]),a=r.vec3.create();r.vec3.cross(a,n,this._zAxis),r.vec3.normalize(a,a),e=r.vec3.length(n)*this._offset,i=r.quat.clone([Math.sin(e)*a[0],Math.sin(e)*a[1],Math.sin(e)*a[2],Math.cos(e)]),r.quat.multiply(t,i,t)}},e.exports=i},{"gl-matrix":2}],14:[function(t,e){"use strict";var i=t("./GLTools"),r=t("./QuatRotation"),n=t("./Camera"),a=t("./SimpleCamera"),s=t("gl-matrix"),o=function(){null!==i.canvas&&(this.gl=i.gl,this._children=[],this._init())},h=o.prototype;h._init=function(){this.camera=new a(i.canvas),this.camera.setPerspective(45*Math.PI/180,i.aspectRatio,5,3e3),this.camera.lockRotation();var t=s.vec3.clone([0,0,500]),e=s.vec3.create(),o=s.vec3.clone([0,-1,0]);this.camera.lookAt(t,e,o),this.sceneRotation=new r(i.canvas),this.rotationFront=s.mat4.create(),s.mat4.identity(this.rotationFront),this.cameraOtho=new n,this._initTextures(),this._initViews(),window.addEventListener("resize",this._onResize.bind(this))},h._initTextures=function(){},h._initViews=function(){},h.loop=function(){this.update(),this.render()},h.update=function(){this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.sceneRotation.update(),i.setViewport(0,0,i.width,i.height),i.setMatrices(this.camera),i.rotate(this.sceneRotation.matrix)},h.resize=function(){this.camera.resize&&this.camera.resize(i.aspectRatio)},h.render=function(){},h._onResize=function(){},e.exports=o},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(t,e){"use strict";function i(){this.FRAMERATE=60,this._delayTasks=[],this._nextTasks=[],this._deferTasks=[],this._highTasks=[],this._usurpTask=[],this._enterframeTasks=[],this._idTable=0,window.requestAnimFrame(this._loop.bind(this))}void 0===window.requestAnimFrame&&(window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}());var r=i.prototype;r._loop=function(){window.requestAnimFrame(this._loop.bind(this)),this._process()},r._process=function(){var t,e,i,r=0;for(r=0;r<this._enterframeTasks.length;r++)t=this._enterframeTasks[r],null!==t&&void 0!==t&&t.func.apply(t.scope,t.params);for(;this._highTasks.length>0;)t=this._highTasks.pop(),t.func.apply(t.scope,t.params);var n=(new Date).getTime();for(r=0;r<this._delayTasks.length;r++)t=this._delayTasks[r],n-t.time>t.delay&&(t.func.apply(t.scope,t.params),this._delayTasks.splice(r,1));for(n=(new Date).getTime(),e=1e3/this.FRAMERATE;this._deferTasks.length>0;){if(t=this._deferTasks.shift(),i=(new Date).getTime(),!(e>i-n)){this._deferTasks.unshift(t);break}t.func.apply(t.scope,t.params)}for(n=(new Date).getTime(),e=1e3/this.FRAMERATE;this._usurpTask.length>0&&(t=this._usurpTask.shift(),i=(new Date).getTime(),e>i-n);)t.func.apply(t.scope,t.params);this._highTasks=this._highTasks.concat(this._nextTasks),this._nextTasks=[],this._usurpTask=[]},r.addEF=function(t,e,i){i=i||[];var r=this._idTable;return this._enterframeTasks[r]={scope:t,func:e,params:i},this._idTable++,r},r.removeEF=function(t){return void 0!==this._enterframeTasks[t]&&(this._enterframeTasks[t]=null),-1},r.delay=function(t,e,i,r){var n=(new Date).getTime(),a={scope:t,func:e,params:i,delay:r,time:n};this._delayTasks.push(a)},r.defer=function(t,e,i){var r={scope:t,func:e,params:i};this._deferTasks.push(r)},r.next=function(t,e,i){var r={scope:t,func:e,params:i};this._nextTasks.push(r)},r.usurp=function(t,e,i){var r={scope:t,func:e,params:i};this._usurpTask.push(r)};var n=null;i.getInstance=function(){return null===n&&(n=new i),n},e.exports=i.getInstance()},{}],16:[function(t,e){"use strict";var i=function(){};i.shaders={},i.shaders.copyVert="#define GLSLIFY 1\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i.shaders.generalVert="#define GLSLIFY 1\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}",i.shaders.copyFrag="#define GLSLIFY 1\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}",i.shaders.alphaFrag="#define GLSLIFY 1\n\n#define SHADER_NAME TEXTURE_WITH_ALPHA\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}",i.shaders.simpleColorFrag="#define GLSLIFY 1\n\n#define SHADER_NAME SIMPLE_COLOR_FRAGMENT\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}",i.shaders.depthFrag="#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n	return (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}",i.getShader=function(t){return this.shaders[t]},i.get=i.getShader,e.exports=i},{}],17:[function(t,e){"use strict";var i=t("gl-matrix"),r=t("./CameraPerspective"),n=t("./EaseNumber"),a=function(t){this._listenerTarget=t||window,r.call(this),this._isLocked=!1,this._init()},s=a.prototype=new r,o=r.prototype;s._init=function(){this.radius=new n(500),this.position[2]=this.radius.value,this.center=i.vec3.create(),this.up=i.vec3.clone([0,-1,0]),this.lookAt(this.position,this.center,this.up),this._mouse={},this._preMouse={},this._isMouseDown=!1,this._rx=new n(0),this._rx.limit(-Math.PI/2,Math.PI/2),this._ry=new n(0),this._preRX=0,this._preRY=0,this._isLocked=!1,this._isLockRotation=!1,this._isInvert=!1,this._listenerTarget.addEventListener("mousewheel",this._onWheel.bind(this)),this._listenerTarget.addEventListener("DOMMouseScroll",this._onWheel.bind(this)),this._listenerTarget.addEventListener("mousedown",this._onMouseDown.bind(this)),this._listenerTarget.addEventListener("touchstart",this._onMouseDown.bind(this)),this._listenerTarget.addEventListener("mousemove",this._onMouseMove.bind(this)),this._listenerTarget.addEventListener("touchmove",this._onMouseMove.bind(this)),window.addEventListener("mouseup",this._onMouseUp.bind(this)),window.addEventListener("touchend",this._onMouseUp.bind(this))},s.inverseControl=function(t){this._isInvert=void 0===t?!0:t},s.lock=function(t){this._isLocked=void 0===t?!0:t},s.lockRotation=function(t){this._isLockRotation=void 0===t?!0:t},s._onMouseDown=function(t){this._isLockRotation||this._isLocked||(this._isMouseDown=!0,h(t,this._mouse),h(t,this._preMouse),this._preRX=this._rx.targetValue,this._preRY=this._ry.targetValue)},s._onMouseMove=function(t){if(!this._isLockRotation&&!this._isLocked&&(h(t,this._mouse),t.touches&&t.preventDefault(),this._isMouseDown)){var e=this._mouse.x-this._preMouse.x;this._isInvert&&(e*=-1),this._ry.value=this._preRY-.01*e;var i=this._mouse.y-this._preMouse.y;this._isInvert&&(i*=-1),this._rx.value=this._preRX-.01*i,this._rx.targetValue>.5*Math.PI&&(this._rx.targetValue=Math)}},s._onMouseUp=function(){this._isLockRotation||this._isLocked||(this._isMouseDown=!1)},s._onWheel=function(t){if(!this._isLocked){var e=t.wheelDelta,i=t.detail,r=0;r=i?e?e/i/40*i>0?1:-1:-i/3:e/120,this.radius.add(5*-r)}},s.getMatrix=function(){return this._updateCameraPosition(),this.lookAt(this.position,this.center,this.up),o.getMatrix.call(this)
},s._updateCameraPosition=function(){this.position[2]=this.radius.value,this.position[1]=Math.sin(this._rx.value)*this.radius.value;var t=Math.cos(this._rx.value)*this.radius.value;this.position[0]=Math.cos(this._ry.value+.5*Math.PI)*t,this.position[2]=Math.sin(this._ry.value+.5*Math.PI)*t};var h=function(t,e){var i=e||{};return t.touches?(i.x=t.touches[0].pageX,i.y=t.touches[0].pageY):(i.x=t.clientX,i.y=t.clientY),i};s.__defineGetter__("rx",function(){return this._rx.targetValue}),s.__defineSetter__("rx",function(t){this._rx.value=t}),s.__defineGetter__("ry",function(){return this._ry.targetValue}),s.__defineSetter__("ry",function(t){this._ry.value=t}),e.exports=a},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(t,e){"use strict";var i=function(){this._imgs={},this._loadedCount=0,this._toLoadCount=0,this._scope=void 0,this._callback=void 0,this._callbackProgress=void 0},r=i.prototype;r.load=function(t,e,i,r){this._imgs={},this._loadedCount=0,this._toLoadCount=t.length,this._scope=e,this._callback=i,this._callbackProgress=r,this._imgLoadedBind=this._onImageLoaded.bind(this);for(var n=0;n<t.length;n++){var a=new Image;a.onload=this._imgLoadedBind;var s=t[n],o=s.split("/"),h=o[o.length-1].split(".")[0];this._imgs[h]=a,a.src=s}},r._onImageLoaded=function(){if(this._loadedCount++,this._loadedCount===this._toLoadCount)this._callback.call(this._scope,this._imgs);else{var t=this._loadedCount/this._toLoadCount;this._callbackProgress&&this._callbackProgress.call(this._scope,t)}},e.exports=i},{}],19:[function(t,e){"use strict";var i=t("./GLShader"),r=function(t,e){this.shader=new i(t,e),this._init()},n=r.prototype;n._init=function(){},n.render=function(){},e.exports=r},{"./GLShader":8}],20:[function(t,e){"use strict";var i=t("./GLTools"),r=t("./View"),n=t("./Mesh"),a="precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}",s="precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}",o=function(t,e){this.lineWidth=void 0===t?2:t;var i=void 0===e?s:e;r.call(this,a,i)},h=o.prototype=new r;h._init=function(){var t=[],e=[],r=[],a=[0,1,2,3,4,5],s=9999;t.push([-s,0,0]),t.push([s,0,0]),t.push([0,-s,0]),t.push([0,s,0]),t.push([0,0,-s]),t.push([0,0,s]),e.push([1,0,0]),e.push([1,0,0]),e.push([0,1,0]),e.push([0,1,0]),e.push([0,0,1]),e.push([0,0,1]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),r.push([0,0]),this.mesh=new n(t.length,a.length,i.gl.LINES),this.mesh.bufferVertex(t),this.mesh.bufferTexCoords(r),this.mesh.bufferIndices(a),this.mesh.bufferData(e,"aColor",3,!1)},h.render=function(){this.shader.isReady()&&(this.shader.bind(),i.gl.lineWidth(this.lineWidth),i.draw(this.mesh),i.gl.lineWidth(1))},e.exports=o},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(t,e){"use strict";var i=t("./View"),r=t("./GLTools"),n=t("./MeshUtils"),a=function(t,e){i.call(this,t,e)},s=a.prototype=new i;s._init=function(){this.mesh=n.createPlane(2,2,1)},s.render=function(t){this.shader.isReady()&&(this.shader.bind(),this.shader.uniform("texture","uniform1i",0),t.bind(0),r.draw(this.mesh))},e.exports=a},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(t,e){"use strict";var i=t("./GLTools"),r=t("./View"),n=t("./ShaderLibs"),a=t("./Mesh"),s=function(t,e){var i=.75;this.color=void 0===t?[i,i,i]:t;var a=void 0===e?n.get("simpleColorFrag"):e;r.call(this,null,a)},o=s.prototype=new r;o._init=function(){var t,e,r=[],n=[],s=[],o=0,h=100,u=3e3,f=u/h;for(t=-u/2;u>t;t+=f)for(e=-u/2;u>e;e+=f)r.push([t,e,0]),n.push([0,0]),s.push(o),o++,r.push([t,0,e]),n.push([0,0]),s.push(o),o++;this.mesh=new a(r.length,s.length,i.gl.DOTS),this.mesh.bufferVertex(r),this.mesh.bufferTexCoords(n),this.mesh.bufferIndices(s)},o.render=function(){this.shader.bind(),this.shader.uniform("color","uniform3fv",this.color),this.shader.uniform("opacity","uniform1f",1),i.draw(this.mesh)},e.exports=s},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
=======
>>>>>>> 0d24e4db386ca3d7a6c1602d8e4135b31428135c
// SceneApp.js

// var bongiovi = require("./libs/bongiovi");
var GL = bongiovi.GL;
var ViewPlane = require("./ViewPlane");

function SceneApp() {
	bongiovi.Scene.call(this);
	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();


p._initViews = function() {
	// this._vAxis = new bongiovi.ViewAxis(1);
	// this._vDotPlane = new bongiovi.ViewDotPlane();

	this._vPlane = new ViewPlane();
};


p._initTextures = function() {
};


p.render = function() {
	var grey = .11;
	GL.clear(grey, grey, grey, 1.0);

	// this._vAxis.render();
	// this._vDotPlane.render();
	this._vPlane.render();
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;
<<<<<<< HEAD
},{"./ViewPlane":4}],4:[function(require,module,exports){
=======
},{"./ViewPlane":2}],2:[function(require,module,exports){
>>>>>>> 0d24e4db386ca3d7a6c1602d8e4135b31428135c
// ViewPlane.js

var GL = bongiovi.GL;
var gl;


function ViewPlane() {
	gl = GL.gl;

	/*/
	bongiovi.View.call(this, glslify("../shaders/directionalLight.vert"), glslify("../shaders/directionalLight.frag"));
	new TangledShader(gl, this.shader.vertexShader, this._onShaderUpdate.bind(this));
	/*/
<<<<<<< HEAD
	bongiovi.View.call(this, "#define GLSLIFY 1\n\n#define SHADER_NAME DIRECTIONAL_LIGHTING_PER_FRAG_VERTEX\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vVertexPosition;\n\nvoid main(void) {\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\tvVertexPosition = aVertexPosition;\n\tvNormal = aNormal;\n}", "#define GLSLIFY 1\n\n#define SHADER_NAME DIRECTIONAL_LIGHTING_PER_FRAG_FRAGMENT\n\nprecision highp float;\n\nconst vec3 lightPos = vec3(30.0, 30.0, 30.0);\nconst float lightDist = 100.0;\n\nconst vec3 lightColor = vec3(1.0);\nconst vec3 ambientColor = vec3(.25);\nconst float lightAmt = 1.0;\n\n\nvarying vec3 vNormal;\nvarying vec3 vVertexPosition;\n\nvoid main(void) {\n\tfloat lightFactor = dot(vNormal, normalize(lightPos));\n\tfloat lengthToLight = distance(vVertexPosition, lightPos);\n\tfloat lightOffset = 0.0;\n\tif(lengthToLight < lightDist) {\n\t\tlightOffset = 1.0 - lengthToLight/lightDist;\n\t}\n\n\tvec3 color = ambientColor + lightFactor * lightColor * lightAmt * lightOffset;\n\n\n\tgl_FragColor = vec4(color, 1.0);\n}");
	// new TangledShader(gl, this.shader.fragmentShader, this._onShaderUpdate.bind(this));
=======
	bongiovi.View.call(this, "#define GLSLIFY 1\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\nvarying vec3 vVertexPosition;\n\nvoid main(void) {\n\tgl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n\tvTextureCoord = aTextureCoord;\n\tvVertexPosition = aVertexPosition;\n\tvNormal = aNormal;\n}", "#define GLSLIFY 1\n// directionalLight.frag\n\nprecision highp float;\n\nconst vec3 lightPos = vec3(30.0, 30.0, 30.0);\nconst float lightDist = 100.0;\n\nconst vec3 lightColor = vec3(1.0);\nconst vec3 ambientColor = vec3(.25);\nconst float lightAmt = 1.0;\n\n\nvarying vec3 vNormal;\nvarying vec3 vVertexPosition;\n\nvoid main(void) {\n\tfloat lightFactor = dot(vNormal, normalize(lightPos));\n\tfloat lengthToLight = distance(vVertexPosition, lightPos);\n\tfloat lightOffset = 0.0;\n\tif(lengthToLight < lightDist) {\n\t\tlightOffset = 1.0 - lengthToLight/lightDist;\n\t}\n\n\tvec3 color = ambientColor + lightFactor * lightColor * lightAmt * lightOffset;\n\n\n\tgl_FragColor = vec4(color, 1.0);\n}");
	new TangledShader(gl, this.shader.fragmentShader, this._onShaderUpdate.bind(this));
>>>>>>> 0d24e4db386ca3d7a6c1602d8e4135b31428135c
	//*/
}

var p = ViewPlane.prototype = new bongiovi.View();
p.constructor = ViewPlane;


p._onShaderUpdate = function() {
	this.shader.clearUniforms();
	this.shader.attachShaderProgram();
};


p._init = function() {
	var positions = [];
	var coords    = [];
	var indices   = []; 
	var normals   = [];
	var index     = 0;
	
	var size      = 300;
	var sx        = -size * .5;
	var y         = -30;
	var num       = 10;
	var uvGap     = 1/num;

	function getPos(i, j) {
		var x = sx + i/num * size;
		var z = sx + j/num * size;

		return [x, y, z];
	}


	for(var j=0; j<num; j++) {
		for(var i=0; i<num; i++) {
			positions.push(getPos(i, j+1));
			positions.push(getPos(i+1, j+1));
			positions.push(getPos(i+1, j));
			positions.push(getPos(i, j));

			coords.push([i/num, j/num]);
			coords.push([i/num+uvGap, j/num]);
			coords.push([i/num+uvGap, j/num+uvGap]);
			coords.push([i/num, j/num+uvGap]);

			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);
			normals.push([0, 1, 0]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index ++;
		}
	}


	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(normals, "aNormal", 3);
};

p.render = function() {
	this.shader.bind();
	// this.shader.uniform("color", "uniform3fv", [1, 1, .95]);
	// this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewPlane;
<<<<<<< HEAD
},{}]},{},[1]);
=======
},{}],3:[function(require,module,exports){
// app.js

// window.bongiovi = require("./libs/bongiovi.min");
window.bongiovi = require("./libs/bongiovi");

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		if(document.body) {
			this._init();	
		} else {
			window.addEventListener('load', this._init.bind(this));
		}
	}

	var p = App.prototype;


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
},{"./SceneApp":1,"./libs/bongiovi":4}],4:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bongiovi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var GLTools = _dereq_("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:_dereq_("./bongiovi/Scheduler"),
	SimpleImageLoader:_dereq_("./bongiovi/SimpleImageLoader"),
	EaseNumber:_dereq_("./bongiovi/EaseNumber"),
	QuatRotation:_dereq_("./bongiovi/QuatRotation"),
	Scene:_dereq_("./bongiovi/Scene"),
	Camera:_dereq_("./bongiovi/Camera"),
	SimpleCamera:_dereq_("./bongiovi/SimpleCamera"),
	CameraPerspective:_dereq_("./bongiovi/CameraPerspective"),
	Mesh:_dereq_("./bongiovi/Mesh"),
	Face:_dereq_("./bongiovi/Face"),
	GLShader:_dereq_("./bongiovi/GLShader"),
	GLTexture:_dereq_("./bongiovi/GLTexture"),
	ShaderLibs:_dereq_("./bongiovi/ShaderLibs"),
	View:_dereq_("./bongiovi/View"),
	ViewCopy:_dereq_("./bongiovi/ViewCopy"),
	ViewAxis:_dereq_("./bongiovi/ViewAxis"),
	ViewDotPlane:_dereq_("./bongiovi/ViewDotPlanes"),
	MeshUtils:_dereq_("./bongiovi/MeshUtils"),
	FrameBuffer:_dereq_("./bongiovi/FrameBuffer"),
	glm:_dereq_("gl-matrix")
};

module.exports = bongiovi;
},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(_dereq_,module,exports){
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/*
* Rotate a 3D vector around the x-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/*
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/*
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bongiovi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var GLTools = _dereq_("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:_dereq_("./bongiovi/Scheduler"),
	SimpleImageLoader:_dereq_("./bongiovi/SimpleImageLoader"),
	EaseNumber:_dereq_("./bongiovi/EaseNumber"),
	QuatRotation:_dereq_("./bongiovi/QuatRotation"),
	Scene:_dereq_("./bongiovi/Scene"),
	Camera:_dereq_("./bongiovi/Camera"),
	SimpleCamera:_dereq_("./bongiovi/SimpleCamera"),
	CameraPerspective:_dereq_("./bongiovi/CameraPerspective"),
	Mesh:_dereq_("./bongiovi/Mesh"),
	Face:_dereq_("./bongiovi/Face"),
	GLShader:_dereq_("./bongiovi/GLShader"),
	GLTexture:_dereq_("./bongiovi/GLTexture"),
	ShaderLibs:_dereq_("./bongiovi/ShaderLibs"),
	View:_dereq_("./bongiovi/View"),
	ViewCopy:_dereq_("./bongiovi/ViewCopy"),
	ViewAxis:_dereq_("./bongiovi/ViewAxis"),
	ViewDotPlane:_dereq_("./bongiovi/ViewDotPlanes"),
	MeshUtils:_dereq_("./bongiovi/MeshUtils"),
	FrameBuffer:_dereq_("./bongiovi/FrameBuffer"),
	glm:_dereq_("gl-matrix")
};

module.exports = bongiovi;
},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(_dereq_,module,exports){
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/*
* Rotate a 3D vector around the x-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/*
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/*
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[7]-m[5])*fRoot;
        out[1] = (m[2]-m[6])*fRoot;
        out[2] = (m[3]-m[1])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[k*3+j] - m[j*3+k]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

},{}],3:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Camera = function() {
	this.matrix = glm.mat4.create();
	glm.mat4.identity(this.matrix);

	this.position = glm.vec3.create();
};

var p = Camera.prototype;

p.lookAt = function(aEye, aCenter, aUp) {
	glm.vec3.copy(this.position, aEye);
	glm.mat4.identity(this.matrix);
	glm.mat4.lookAt(this.matrix, aEye, aCenter, aUp);
};

p.getMatrix = function() {
	return this.matrix;
};

module.exports = Camera;
},{"gl-matrix":2}],4:[function(_dereq_,module,exports){
// CameraPerspective.js
"use strict";

var Camera = _dereq_("./Camera");
var glm = _dereq_("gl-matrix");

var CameraPerspective = function() {
	Camera.call(this);

	this.projection = glm.mat4.create();
	this.mtxFinal = glm.mat4.create();
};

var p = CameraPerspective.prototype = new Camera();

p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
	this._fov = aFov;
	this._near = aNear;
	this._far = aFar;
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
};

p.getMatrix = function() {
	// mat4.multiply(this.mtxFinal, this.projection, this.matrix);
	return this.matrix;
};

p.resize = function(aAspectRatio) {
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
};

p.__defineGetter__("near", function() {
	return this._near;
});

p.__defineGetter__("far", function() {
	return this._far;
});

module.exports = CameraPerspective;
},{"./Camera":3,"gl-matrix":2}],5:[function(_dereq_,module,exports){
// EaseNumber.js

"use strict";

var Scheduler = _dereq_("./Scheduler");

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
},{"./Scheduler":15}],6:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Face = function(mA, mB, mC) {
	this._vertexA = mA;
	this._vertexB = mB;
	this._vertexC = mC;

	this._init();
};

var p = Face.prototype;


p._init = function() {
	var BA = glm.vec3.create();
	var CA = glm.vec3.create();
	glm.vec3.sub(BA, this._vertexB, this._vertexA);
	glm.vec3.sub(CA, this._vertexC, this._vertexA);

	this._faceNormal = glm.vec3.create();
	glm.vec3.cross(this._faceNormal, BA, CA);
	glm.vec3.normalize(this._faceNormal, this._faceNormal);
};


p.contains = function(mVertex) {
	return ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
};


p.__defineGetter__("faceNormal", function() {
	return this._faceNormal;
});

var equal = function(mV0, mV1) {
	return ( (mV0[0] === mV1[0]) && (mV0[1] === mV1[1]) && (mV0[2] === mV1[2]) );
};

module.exports = Face;
},{"gl-matrix":2}],7:[function(_dereq_,module,exports){
"use strict";

var gl, GL = _dereq_("./GLTools");
var GLTexture = _dereq_("./GLTexture");
var isPowerOfTwo = function(x) {	return !(x === 0) && !(x & (x - 1));	};

var FrameBuffer = function(width, height, options) {
	gl = GL.gl;
	options        = options || {};
	this.width     = width;
	this.height    = height;
	this.magFilter = options.magFilter || gl.LINEAR;
	this.minFilter = options.minFilter || gl.LINEAR;
	this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
	this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

	if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
		this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;

		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
			this.minFilter = gl.LINEAR;
		}
	} 

	this._init();
};

var p = FrameBuffer.prototype;

p._init = function() {
	this.texture            = gl.createTexture();
	
	this.glTexture			= new GLTexture(this.texture, true);
	
	this.frameBuffer        = gl.createFramebuffer();		
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
	this.frameBuffer.width  = this.width;
	this.frameBuffer.height = this.height;

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	if(GL.depthTextureExt) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	} else {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	
	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

	// if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	// 	console.debug("Both Nearest", this.floatTextureExt);
	// } else {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	// }

	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	if(GL.depthTextureExt === null) {
		var renderbuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
		// gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
		// gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);	
		// if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
	 //      throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
	 //    }

	 	gl.renderbufferStorage( gl.RENDERBUFFER, gl.RGBA4, this.frameBuffer.width, this.frameBuffer.height );
	} else {
		this.depthTexture       = gl.createTexture();
		this.glDepthTexture		= new GLTexture(this.depthTexture, true);

		gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};


p.bind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
};


p.unbind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
};


p.getTexture = function() {
	return this.glTexture;
};


p.getDepthTexture = function() {
	return this.glDepthTexture;
};


p.destroy = function() {
	gl.deleteFramebuffer(this.frameBuffer);

	this.glTexture.destroy();
	if(this.glDepthTexture) {
		this.glDepthTexture.destroy();
	}
};

module.exports = FrameBuffer;
},{"./GLTexture":9,"./GLTools":10}],8:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var gl;
var ShaderLibs = _dereq_("./ShaderLibs");

var GLShader = function(aVertexShaderId, aFragmentShaderId) {
	gl              	 = GL.gl;
	this.idVertex        = aVertexShaderId;
	this.idFragment      = aFragmentShaderId;
	this.parameters      = [];
	this.uniformValues   = {};
	
	this.uniformTextures = [];
	
	this.vertexShader    = undefined;
	this.fragmentShader  = undefined;
	this._isReady        = false;
	this._loadedCount    = 0;

	if(aVertexShaderId === undefined || aVertexShaderId === null ) {
		this.createVertexShaderProgram(ShaderLibs.getShader("copyVert"));
	}

	if(aFragmentShaderId === undefined || aVertexShaderId === null ) {
		this.createFragmentShaderProgram(ShaderLibs.getShader("copyFrag"));
	}

	this.init();
};


var p = GLShader.prototype;

p.init = function() {
	if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
		this.createVertexShaderProgram(this.idVertex);
	} else {
		this.getShader(this.idVertex, true);	
	}
	
	if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
		this.createFragmentShaderProgram(this.idFragment);
	} else {
		this.getShader(this.idFragment, false);	
	}
};

p.getShader = function(aId, aIsVertexShader) {
	if(!aId) {return;}
	var req = new XMLHttpRequest();
	req.hasCompleted = false;
	var that = this;
	req.onreadystatechange = function(e) {
		if(e.target.readyState === 4) {
			if(aIsVertexShader) {
				that.createVertexShaderProgram(e.target.responseText);
			} else {
				that.createFragmentShaderProgram(e.target.responseText);
			}
		}
	};
	req.open("GET", aId, true);
	req.send(null);
};

p.createVertexShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.VERTEX_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Vertex Shader : ", this.idVertex, ":", gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.vertexShader = shader;
	
	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};


p.createFragmentShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Fragment Shader: ", this.idFragment, ":" , gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.fragmentShader = shader;

	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};

p.attachShaderProgram = function() {
	this._isReady = true;
	this.shaderProgram = gl.createProgram();
	gl.attachShader(this.shaderProgram, this.vertexShader);
	gl.attachShader(this.shaderProgram, this.fragmentShader);
	gl.linkProgram(this.shaderProgram);
};

p.bind = function() {
	if(!this._isReady) {return;}
	gl.useProgram(this.shaderProgram);

	if(this.shaderProgram.pMatrixUniform === undefined) {	this.shaderProgram.pMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uPMatrix");}
	if(this.shaderProgram.mvMatrixUniform === undefined) {	this.shaderProgram.mvMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uMVMatrix");}

	GL.setShader(this);
	GL.setShaderProgram(this.shaderProgram);

	this.uniformTextures = [];
};

p.isReady = function() {	return this._isReady;	};


p.clearUniforms = function() {
	this.parameters    = [];
	this.uniformValues = {};
};

p.uniform = function(aName, aType, aValue) {
	if(!this._isReady) {return;}

	if(aType === "texture") {aType = "uniform1i";}

	var hasUniform = false;
	var oUniform;
	for(var i=0; i<this.parameters.length; i++) {
		oUniform = this.parameters[i];
		if(oUniform.name === aName) {
			oUniform.value = aValue;
			hasUniform = true;
			break;
		}
	}

	if(!hasUniform) {
		this.shaderProgram[aName] = gl.getUniformLocation(this.shaderProgram, aName);
		this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
	} else {
		this.shaderProgram[aName] = oUniform.uniformLoc;
	}

	// console.log('Uniform : ', aName);

	if(aType.indexOf("Matrix") === -1) {
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		} else {
			if(this.checkUniform(aName, aType, aValue)) {
				gl[aType](this.shaderProgram[aName], aValue);
				// console.debug('Set uniform', aName, aType, aValue);
			}
		}
	} else {
		gl[aType](this.shaderProgram[aName], false, aValue);
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		}
	}

	if(aType === "uniform1i") {
		// Texture
		this.uniformTextures[aValue] = this.shaderProgram[aName];
	}
};

p.checkUniform = function(aName, aType, aValue) {

	if(!this.uniformValues[aName]) {
		this.uniformValues[aName] = aValue;
		return true;
	}

	if(aType === "uniform1i") {
		this.uniformValues[aName] = aValue;
		return true;
	}

	var uniformValue = this.uniformValues[aName];
	var hasChanged = uniformValue === aValue ? false : true;
	
	if(hasChanged) {
		this.uniformValues[aName] = aValue;
	}
	return hasChanged;

};


p.unbind = function() {

};


p.destroy = function() {
	gl.detachShader(this.shaderProgram, this.vertexShader);
	gl.detachShader(this.shaderProgram, this.fragmentShader);
	gl.deleteShader(this.vertexShader);
	gl.deleteShader(this.fragmentShader);
	gl.deleteProgram(this.shaderProgram);
};

module.exports = GLShader;
},{"./GLTools":10,"./ShaderLibs":16}],9:[function(_dereq_,module,exports){
// GLTexture.js
"use strict";

var gl;
var GL = _dereq_("./GLTools");
var _isPowerOfTwo = function(x) {	
	var check = !(x === 0) && (!(x & (x - 1)));
	return check;
};
var isPowerOfTwo = function(obj) {	
	var w = obj.width || obj.videoWidth;
	var h = obj.height || obj.videoHeight;

	if(!w || !h) {return false;}

	return _isPowerOfTwo(w) && _isPowerOfTwo(h);
};

var GLTexture = function(source, isTexture, options) {
	isTexture = isTexture || false;
	options = options || {};
	gl = GL.gl;
	if(isTexture) {
		this.texture = source;
	} else {
		this._source   = source;
		this.texture   = gl.createTexture();
		this._isVideo  = (source.tagName === "VIDEO");
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
		
		this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
		this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;
		var width      = source.width || source.videoWidth;

		if(width) {
			if(!isPowerOfTwo(source)) {
				this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
				if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
					this.minFilter = gl.LINEAR;
				}
			} 	
		} else {
			this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
			if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
				this.minFilter = gl.LINEAR;
			}
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
		
		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
			gl.generateMipmap(gl.TEXTURE_2D);
		}

		gl.bindTexture(gl.TEXTURE_2D, null);
	}
};

var p = GLTexture.prototype;


p.updateTexture = function(source) {
	if(source){ this._source = source; }
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._source);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
};


p.bind = function(index) {
	if(index === undefined) {index = 0;}
	if(!GL.shader) {return;}

	gl.activeTexture(gl.TEXTURE0 + index);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.uniform1i(GL.shader.uniformTextures[index], index);
	this._bindIndex = index;
};


p.unbind = function() {
	gl.bindTexture(gl.TEXTURE_2D, null);
};

p.destroy = function() {
	gl.deleteTexture(this.texture);
};

module.exports = GLTexture;
},{"./GLTools":10}],10:[function(_dereq_,module,exports){
// GLTools.js
"use strict";

var glm = _dereq_("gl-matrix");

function GLTools() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTools.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	this.canvas      = mCanvas || document.createElement("canvas");
	var params       = parameters || {};
	params.antialias = true;
	this.gl          = this.canvas.getContext("experimental-webgl", params);

	console.log('GL TOOLS : ', this.gl);
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	this.matrix                = glm.mat4.create();
	glm.mat4.identity(this.matrix);
	this.normalMatrix          = glm.mat3.create();
	this.depthTextureExt       = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt       = this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt = this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix

	this.enabledVertexAttribute = [];
	this.enableAlphaBlending();
	this._viewport = [0, 0, this.width, this.height];
};


p.getGL = function() {	return this.gl;	};

p.setShader = function(aShader) {
	this.shader = aShader;
};

p.setShaderProgram = function(aShaderProgram) {
	this.shaderProgram = aShaderProgram;
};

p.setViewport = function(aX, aY, aW, aH) {
	var hasChanged = false;
	if(aX!==this._viewport[0]) {hasChanged = true;}
	if(aY!==this._viewport[1]) {hasChanged = true;}
	if(aW!==this._viewport[2]) {hasChanged = true;}
	if(aH!==this._viewport[3]) {hasChanged = true;}

	if(hasChanged) {
		this.gl.viewport(aX, aY, aW, aH);
		this._viewport = [aX, aY, aW, aH];
	}
};

p.setMatrices = function(aCamera) {
	this.camera = aCamera;	
};

p.rotate = function(aRotation) {
	glm.mat4.copy(this.matrix, aRotation);

	glm.mat4.multiply(this.matrix, this.camera.getMatrix(), this.matrix);
	glm.mat3.fromMat4(this.normalMatrix, this.matrix);
	glm.mat3.invert(this.normalMatrix, this.normalMatrix);
	glm.mat3.transpose(this.normalMatrix, this.normalMatrix);
};


//	BLEND MODES
p.enableAlphaBlending = function() {
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
};

p.enableAdditiveBlending = function() {
	this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
};

//	CLEAR CANVAS
p.clear = function(r, g, b, a) {
	this.gl.clearColor( r, g, b, a );
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
};

//	DRAWING ELEMENTS
p.draw = function(aMesh) {
	if(!this.shaderProgram) {
		console.warn("Shader program not ready yet");
		return;
	}

	if(!this.shaderProgram.pMatrixValue) {
		this.shaderProgram.pMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
		glm.mat4.copy(this.shaderProgram.pMatrixValue, this.camera.projection || this.camera.getMatrix());
	} else {
		var pMatrix = this.camera.projection || this.camera.getMatrix();
		if(glm.mat4.str(this.shaderProgram.pMatrixValue) !== glm.mat4.str(pMatrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
			glm.mat4.copy(this.shaderProgram.pMatrixValue, pMatrix);
		}
	}

	if(!this.shaderProgram.mvMatrixValue) {
		this.shaderProgram.mvMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
		glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
	} else {
		if(glm.mat4.str(this.shaderProgram.mvMatrixValue) !== glm.mat4.str(this.matrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
			glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
		}
	}


	// 	VERTEX POSITIONS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
	var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
	this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
	if(this.enabledVertexAttribute.indexOf(vertexPositionAttribute) === -1) {
		this.gl.enableVertexAttribArray(vertexPositionAttribute);	
		this.enabledVertexAttribute.push(vertexPositionAttribute);
	}
	

	//	TEXTURE COORDS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
	var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
	this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
	
	if(this.enabledVertexAttribute.indexOf(textureCoordAttribute) === -1) {
		this.gl.enableVertexAttribArray(textureCoordAttribute);
		this.enabledVertexAttribute.push(textureCoordAttribute);
	}

	//	INDICES
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

	//	EXTRA ATTRIBUTES
	for(var i=0; i<aMesh.extraAttributes.length; i++) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
		var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
		this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
		// this.gl.enableVertexAttribArray(attrPosition);	
		if(this.enabledVertexAttribute.indexOf(attrPosition) === -1) {
			this.gl.enableVertexAttribArray(attrPosition);
			this.enabledVertexAttribute.push(attrPosition);
		}	
	}

	//	DRAWING
	if(aMesh.drawType === this.gl.POINTS ) {
		this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
	} else {
		this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
	}


	function getAttribLoc(gl, shaderProgram, name) {
		if(shaderProgram.cacheAttribLoc === undefined) {	shaderProgram.cacheAttribLoc = {};	}
		if(shaderProgram.cacheAttribLoc[name] === undefined) {
			shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
		}

		return shaderProgram.cacheAttribLoc[name];
	}

};

//	CANVAS RESIZING
p.setSize = function(mWidth, mHeight) {
	this._width = mWidth;
	this._height = mHeight;

	this.canvas.width      = this._width;
	this.canvas.height     = this._height;
	this.gl.viewportWidth  = this._width;
	this.gl.viewportHeight = this._height;

	this.gl.viewport(0, 0, this._width, this._height);
	this.aspectRatio       = this._width / this._height;
};


p.__defineGetter__("width", function() {
	return this._width;
});

p.__defineGetter__("height", function() {
	return this._height;
});

p.__defineGetter__("viewport", function() {
	return this._viewport;
});

var instance = null;

GLTools.getInstance = function() {
	if(instance === null) {
		instance = new GLTools();
	}
	return instance;
};


module.exports = GLTools.getInstance();
},{"gl-matrix":2}],11:[function(_dereq_,module,exports){
"use strict";

var Face = _dereq_("./Face");
var GL = _dereq_("./GLTools");
var glm = _dereq_("gl-matrix");

var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

	this.gl = GL.gl;
	this.vertexSize = aVertexSize;
	this.indexSize = aIndexSize;
	this.drawType = aDrawType;
	this.extraAttributes = [];
	
	this.vBufferPos = undefined;
	this._floatArrayVertex = undefined;

	this._init();
};

var p = Mesh.prototype;

p._init = function() {

};

p.bufferVertex = function(aArrayVertices, isDynamic) {
	var vertices = [];
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._vertices = [];

	for(var i=0; i<aArrayVertices.length; i++) {
		for(var j=0; j<aArrayVertices[i].length; j++) {
			vertices.push(aArrayVertices[i][j]);
		}
		this._vertices.push(glm.vec3.clone(aArrayVertices[i]));
	}

	if(this.vBufferPos === undefined) {
		this.vBufferPos = this.gl.createBuffer();
	}
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

	if(this._floatArrayVertex === undefined) {
		this._floatArrayVertex = new Float32Array(vertices);
	} else {
		if(aArrayVertices.length !== this._floatArrayVertex.length) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			for(var k=0; k<aArrayVertices.length; k++) {
				this._floatArrayVertex[k] = aArrayVertices[k];
			}
		}
	}

	this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
	this.vBufferPos.itemSize = 3;
};

p.bufferTexCoords = function(aArrayTexCoords) {
	var coords = [];

	for(var i=0; i<aArrayTexCoords.length; i++) {
		for(var j=0; j<aArrayTexCoords[i].length; j++) {
			coords.push(aArrayTexCoords[i][j]);
		}
	}

	this.vBufferUV = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), this.gl.STATIC_DRAW);
	this.vBufferUV.itemSize = 2;
};

p.bufferData = function(aData, aName, aItemSize, isDynamic) {
	var index = -1;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	var i=0;

	for(i=0; i<this.extraAttributes.length; i++) {
		if(this.extraAttributes[i].name === aName) {
			this.extraAttributes[i].data = aData;
			index = i;
			break;
		}
	}

	var bufferData = [];
	for(i=0; i<aData.length; i++) {
		for(var j=0; j<aData[i].length; j++) {
			bufferData.push(aData[i][j]);
		}
	}

	var buffer, floatArray;
	if(index === -1) {
		buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = new Float32Array(bufferData);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
	} else {
		buffer = this.extraAttributes[index].buffer;
		// console.debug("Buffer exist", buffer);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = this.extraAttributes[index].floatArray;
		for(i=0; i<bufferData.length; i++) {
			floatArray[i] = bufferData[i];
		}
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
	}

};

p.bufferIndices = function(aArrayIndices) {
	this._indices = aArrayIndices;
	this.iBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
	this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
	this.iBuffer.itemSize = 1;
	this.iBuffer.numItems = aArrayIndices.length;
};


p.computeNormals = function() {
	if(this.drawType !== this.gl.TRIANGLES) {return;}

	if(this._faces === undefined) {	this._generateFaces();	}
	console.log("Start computing");

	var time = new Date().getTime();
	var j=0;

	this._normals = [];
	for(var i=0; i<this._vertices.length; i++) {
		var normal = glm.vec3.create();
		var faceCount = 0;
		for(j=0; j<this._faces.length; j++) {
			if(this._faces[j].contains(this._vertices[i])) {
				glm.vec3.add(normal, normal, this._faces[j].faceNormal);
				faceCount ++;
			}
		}

		glm.vec3.normalize(normal, normal);
		this._normals.push(normal);
	}

	this.bufferData(this._normals, "aNormal", 3);

	var totalTime = new Date().getTime() - time;
	console.log("Total Time : ", totalTime);
};


p.computeTangent = function() {
	
};


p._generateFaces = function() {
	this._faces = [];

	for(var i=0; i<this._indices.length; i+=3) {
		var p0 = this._vertices[this._indices[i+0]];
		var p1 = this._vertices[this._indices[i+1]];
		var p2 = this._vertices[this._indices[i+2]];

		this._faces.push(new Face(p0, p1, p2));
	}
};

module.exports = Mesh;
},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var Mesh = _dereq_("./Mesh");
var MeshUtils = {};

MeshUtils.createPlane = function(width, height, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];

	var gapX = width/numSegments;
	var gapY = height/numSegments;
	var gapUV = 1/numSegments;
	var index = 0;
	var sx = -width * 0.5;
	var sy = -height * 0.5;

	for(var i=0; i<numSegments; i++) {
		for (var j=0; j<numSegments; j++) {
			var tx = gapX * i + sx;
			var ty = gapY * j + sy;
			positions.push([tx, 		ty, 	0]);
			positions.push([tx+gapX, 	ty, 	0]);
			positions.push([tx+gapX, 	ty+gapY, 	0]);
			positions.push([tx, 		ty+gapY, 	0]);

			var u = i/numSegments;
			var v = j/numSegments;
			coords.push([u, v]);
			coords.push([u+gapUV, v]);
			coords.push([u+gapUV, v+gapUV]);
			coords.push([u, v+gapUV]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}

	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};

MeshUtils.createSphere = function(size, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;
	var gapUV = 1/numSegments;

	var getPosition = function(i, j) {	//	rx : -90 ~ 90 , ry : 0 ~ 360
		var rx = i/numSegments * Math.PI - Math.PI * 0.5;
		var ry = j/numSegments * Math.PI * 2;
		var r = size;
		var pos = [];
		pos[1] = Math.sin(rx) * r;
		var t = Math.cos(rx) * r;
		pos[0] = Math.cos(ry) * t;
		pos[2] = Math.sin(ry) * t;

		var precision = 10000;
		pos[0] = Math.floor(pos[0] * precision) / precision;
		pos[1] = Math.floor(pos[1] * precision) / precision;
		pos[2] = Math.floor(pos[2] * precision) / precision;

		return pos;
	};

	
	for(var i=0; i<numSegments; i++) {
		for(var j=0; j<numSegments; j++) {
			positions.push(getPosition(i, j));
			positions.push(getPosition(i+1, j));
			positions.push(getPosition(i+1, j+1));
			positions.push(getPosition(i, j+1));

			var u = j/numSegments;
			var v = i/numSegments;
			
			
			coords.push([1.0 - u, v]);
			coords.push([1.0 - u, v+gapUV]);
			coords.push([1.0 - u - gapUV, v+gapUV]);
			coords.push([1.0 - u - gapUV, v]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}


	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};


module.exports = MeshUtils;
},{"./GLTools":10,"./Mesh":11}],13:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

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
},{"gl-matrix":2}],14:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var QuatRotation = _dereq_("./QuatRotation");
var Camera = _dereq_("./Camera");
var SimpleCamera = _dereq_("./SimpleCamera");
var glm = _dereq_("gl-matrix");

var Scene = function() {
	if(GL.canvas === null) {return;}
	this.gl = GL.gl;
	this._children = [];
	this._init();
};

var p = Scene.prototype;

p._init = function() {
	this.camera = new SimpleCamera(GL.canvas);
	this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.camera.lockRotation();

	var eye            = glm.vec3.clone([0, 0, 500]  );
	var center         = glm.vec3.create( );
	var up             = glm.vec3.clone( [0,-1,0] );
	this.camera.lookAt(eye, center, up);
	
	this.sceneRotation = new QuatRotation(GL.canvas);
	this.rotationFront = glm.mat4.create();
	glm.mat4.identity(this.rotationFront);
	
	this.cameraOtho    = new Camera();

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
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera );
	GL.rotate(this.sceneRotation.matrix);

};

p.resize = function() {
	if(this.camera.resize) {
		this.camera.resize(GL.aspectRatio);
	}
};

p.render = function() {

};

p._onResize = function() {
};

module.exports = Scene;
},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(_dereq_,module,exports){
// Scheduler.js

"use strict";

if(window.requestAnimFrame === undefined) {
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
		};
	})();
}

function Scheduler() {
	this.FRAMERATE = 60;
	this._delayTasks = [];
	this._nextTasks = [];
	this._deferTasks = [];
	this._highTasks = [];
	this._usurpTask = [];
	this._enterframeTasks = [];
	this._idTable = 0;

	window.requestAnimFrame( this._loop.bind(this) );
}

var p = Scheduler.prototype;

p._loop = function() {
	window.requestAnimFrame( this._loop.bind(this) );
	this._process();
};


p._process = function() {
	var i = 0,
		task, interval, current;
	for ( i=0; i<this._enterframeTasks.length; i++) {
		task = this._enterframeTasks[i];
		if(task !== null && task !== undefined) {
			task.func.apply(task.scope, task.params);
		}
	}
	
	while ( this._highTasks.length > 0) {
		task = this._highTasks.pop();
		task.func.apply(task.scope, task.params);
	}
	

	var startTime = new Date().getTime();

	for ( i=0; i<this._delayTasks.length; i++) {
		task = this._delayTasks[i];
		if(startTime-task.time > task.delay) {
			task.func.apply(task.scope, task.params);
			this._delayTasks.splice(i, 1);
		}
	}

	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._deferTasks.length > 0) {
		task = this._deferTasks.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			this._deferTasks.unshift(task);
			break;
		}
	}


	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._usurpTask.length > 0) {
		task = this._usurpTask.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			// this._usurpTask.unshift(task);
			break;
		}
	}



	this._highTasks = this._highTasks.concat(this._nextTasks);
	this._nextTasks = [];
	this._usurpTask = [];
};


p.addEF = function(scope, func, params) {
	params = params || [];
	var id = this._idTable;
	this._enterframeTasks[id] = {scope:scope, func:func, params:params};
	this._idTable ++;
	return id;
};


p.removeEF = function(id) {
	if(this._enterframeTasks[id] !== undefined) {
		this._enterframeTasks[id] = null;
	}
	return -1;
};


p.delay = function(scope, func, params, delay) {
	var time = new Date().getTime();
	var t = {scope:scope, func:func, params:params, delay:delay, time:time};
	this._delayTasks.push(t);
};


p.defer = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._deferTasks.push(t);
};


p.next = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._nextTasks.push(t);
};


p.usurp = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._usurpTask.push(t);
};


var instance = null;

Scheduler.getInstance = function() {
	if(instance === null) {
		instance = new Scheduler();
	}
	return instance;
};

module.exports = Scheduler.getInstance();
},{}],16:[function(_dereq_,module,exports){
"use strict";


var ShaderLibs = function() { };

ShaderLibs.shaders = {};

ShaderLibs.shaders.copyVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.generalVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.copyFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";

ShaderLibs.shaders.alphaFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}";

ShaderLibs.shaders.simpleColorFrag = "#define GLSLIFY 1\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";

ShaderLibs.shaders.depthFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n\treturn (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}";


ShaderLibs.getShader = function(mId) {
	return this.shaders[mId];
};

ShaderLibs.get = ShaderLibs.getShader;
module.exports = ShaderLibs;
},{}],17:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");
var CameraPerspective = _dereq_("./CameraPerspective");
var EaseNumber = _dereq_("./EaseNumber");

var SimpleCamera = function(mListenerTarget) {
	this._listenerTarget = mListenerTarget || window;
	CameraPerspective.call(this);
	this._isLocked = false;
	this._init();
};

var p = SimpleCamera.prototype = new CameraPerspective();
var s = CameraPerspective.prototype;

p._init = function() {
	this.radius          = new EaseNumber(500);
	this.position[2]     = this.radius.value;
	this.center          = glm.vec3.create( );
	this.up              = glm.vec3.clone( [0,-1,0] );
	this.lookAt(this.position, this.center, this.up);
	this._mouse          = {};
	this._preMouse       = {};
	this._isMouseDown    = false;
	
	this._rx             = new EaseNumber(0);
	this._rx.limit(-Math.PI/2, Math.PI/2);
	this._ry             = new EaseNumber(0);
	this._preRX          = 0;
	this._preRY          = 0;
	this._isLocked       = false;
	this._isLockRotation = false;
	this._isInvert       = false;

	this._listenerTarget.addEventListener("mousewheel", this._onWheel.bind(this));
	this._listenerTarget.addEventListener("DOMMouseScroll", this._onWheel.bind(this));

	this._listenerTarget.addEventListener("mousedown", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("touchstart", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("mousemove", this._onMouseMove.bind(this));
	this._listenerTarget.addEventListener("touchmove", this._onMouseMove.bind(this));
	window.addEventListener("mouseup", this._onMouseUp.bind(this));
	window.addEventListener("touchend", this._onMouseUp.bind(this));
};

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

p.lockRotation = function(value) {
	if(value === undefined) {
		this._isLockRotation = true;
	} else {
		this._isLockRotation = value;
	}
};

p._onMouseDown = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = true;
	getMouse(mEvent, this._mouse);
	getMouse(mEvent, this._preMouse);
	this._preRX = this._rx.targetValue;
	this._preRY = this._ry.targetValue;
};


p._onMouseMove = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	getMouse(mEvent, this._mouse);
	if(mEvent.touches) {mEvent.preventDefault();}
	if(this._isMouseDown) {
		var diffX = this._mouse.x - this._preMouse.x;
		if(this._isInvert) {diffX *= -1;}
		this._ry.value = this._preRY - diffX * 0.01;

		var diffY = this._mouse.y - this._preMouse.y;
		if(this._isInvert) {diffY *= -1;}
		this._rx.value = this._preRX - diffY * 0.01;

		if(this._rx.targetValue > Math.PI * 0.5) {this._rx.targetValue = Math;	}
	}
};


p._onMouseUp = function() {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = false;
	// getMouse(mEvent, this._mouse);
};


p._onWheel = function(aEvent) {
	if(this._isLocked) {	return;	}
	var w = aEvent.wheelDelta;
	var d = aEvent.detail;
	var value = 0;
	if (d){
		if (w) {
			value = w/d/40*d>0?1:-1; // Opera
		} else {
			value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		}
	} else {
		value = w/120; 
	}

	// this._targetRadius -= value * 5;
	this.radius.add( -value * 5);
	
};


p.getMatrix = function() {
	this._updateCameraPosition();
	this.lookAt(this.position, this.center, this.up);
	return s.getMatrix.call(this);
};


p._updateCameraPosition = function() {
	this.position[2] 	= this.radius.value;

	this.position[1] = Math.sin(this._rx.value) * this.radius.value;
	var tr = Math.cos(this._rx.value) * this.radius.value;
	this.position[0] = Math.cos(this._ry.value + Math.PI*0.5) * tr;
	this.position[2] = Math.sin(this._ry.value + Math.PI*0.5) * tr;
};


var getMouse = function(mEvent, mTarget) {
	var o = mTarget || {};
	if(mEvent.touches) {
		o.x = mEvent.touches[0].pageX;
		o.y = mEvent.touches[0].pageY;
	} else {
		o.x = mEvent.clientX;
		o.y = mEvent.clientY;
	}

	return o;
};


p.__defineGetter__("rx", function() {
	return this._rx.targetValue;
});
 
p.__defineSetter__("rx", function(mValue) {
	this._rx.value = mValue;
});

p.__defineGetter__("ry", function() {
	return this._ry.targetValue;
});
 
p.__defineSetter__("ry", function(mValue) {
	this._ry.value = mValue;
});

module.exports = SimpleCamera;
},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(_dereq_,module,exports){
"use strict";

var SimpleImageLoader = function() {
	this._imgs             = {};
	this._loadedCount      = 0;
	this._toLoadCount      = 0;
	this._scope            = undefined;
	this._callback         = undefined;
	this._callbackProgress = undefined;
};

var p = SimpleImageLoader.prototype;


p.load = function(imgs, scope, callback, progressCallback) {
	this._imgs = {};
	this._loadedCount = 0;
	this._toLoadCount = imgs.length;
	this._scope = scope;
	this._callback = callback;
	this._callbackProgress = progressCallback;

	this._imgLoadedBind = this._onImageLoaded.bind(this);

	for ( var i=0; i<imgs.length ; i++) {
		var img         = new Image();
		img.onload      = this._imgLoadedBind;
		var path        = imgs[i];
		var tmp         = path.split("/");
		var ref         = tmp[tmp.length-1].split(".")[0];
		this._imgs[ref] = img;
		img.src         = path;
	}
};


p._onImageLoaded = function() {
	this._loadedCount++;

	if(this._loadedCount === this._toLoadCount) {
		this._callback.call(this._scope, this._imgs);
	} else {
		var p = this._loadedCount / this._toLoadCount;
		if(this._callbackProgress) {
			this._callbackProgress.call(this._scope, p);
		}
	}
};

module.exports = SimpleImageLoader;
},{}],19:[function(_dereq_,module,exports){
// View.js
"use strict";

var GLShader = _dereq_("./GLShader");

var View = function(aPathVert, aPathFrag) {
	this.shader = new GLShader(aPathVert, aPathFrag);
	this._init();
};

var p = View.prototype;

p._init = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.render = function() {
	// console.log("Should be overwritten by SuperClass");
};

module.exports = View;


},{"./GLShader":8}],20:[function(_dereq_,module,exports){
// ViewAxis.js

"use strict";
var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var Mesh = _dereq_("./Mesh");

var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewAxis = function(lineWidth, mFragShader) {
	this.lineWidth = lineWidth === undefined ? 2.0 : lineWidth;
	var fs = mFragShader === undefined ? fragShader : mFragShader;
	View.call(this, vertShader, fs);
};

var p = ViewAxis.prototype = new View();

p._init = function() {
	// this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);

	var positions = [];
	var colors = [];
	var coords = [];
	var indices = [0, 1, 2, 3, 4, 5];
	var r = 9999;

	positions.push([-r,  0,  0]);
	positions.push([ r,  0,  0]);
	positions.push([ 0, -r,  0]);
	positions.push([ 0,  r,  0]);
	positions.push([ 0,  0, -r]);
	positions.push([ 0,  0,  r]);


	colors.push([1, 0, 0]);
	colors.push([1, 0, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 0, 1]);
	colors.push([0, 0, 1]);


	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);


	this.mesh = new Mesh(positions.length, indices.length, GL.gl.LINES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(colors, "aColor", 3, false);
};

p.render = function() {
	if(!this.shader.isReady()) {return;}

	this.shader.bind();
	GL.gl.lineWidth(this.lineWidth);
	GL.draw(this.mesh);
	GL.gl.lineWidth(1.0);
};

module.exports = ViewAxis;

},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(_dereq_,module,exports){
"use strict";

var View = _dereq_("./View");
var GL = _dereq_("./GLTools");
var MeshUtils = _dereq_("./MeshUtils");

var ViewCopy = function(aPathVert, aPathFrag) {
	View.call(this, aPathVert, aPathFrag);
};

var p = ViewCopy.prototype = new View();

p._init = function() {
	this.mesh = MeshUtils.createPlane(2, 2, 1);
};

p.render = function(aTexture) {
	if(!this.shader.isReady()) {return;}
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	aTexture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewCopy;

},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(_dereq_,module,exports){
// ViewDotPlanes.js

"use strict";

var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var ShaderLibs = _dereq_("./ShaderLibs");
var Mesh = _dereq_("./Mesh");

// var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
// var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewDotPlanes = function(color, fragShader) {
	var grey = 0.75;
	this.color = color === undefined ? [grey, grey, grey] : color;
	var fs = fragShader === undefined ? ShaderLibs.get("simpleColorFrag") : fragShader;
	View.call(this, null, fs);
};

var p = ViewDotPlanes.prototype = new View();

p._init = function() {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;


	var numDots = 100;
	var size = 3000;
	var gap = size / numDots;
	var i, j;


	for(i=-size/2; i<size; i+=gap) {
		for(j=-size/2; j<size; j+=gap) {
			positions.push([i, j, 0]);
			coords.push([0, 0]);
			indices.push(index);
			index++;

			positions.push([i, 0, j]);
			coords.push([0, 0]);
			indices.push(index);
			index++;
		}
	}

	this.mesh = new Mesh(positions.length, indices.length, GL.gl.DOTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewDotPlanes;

},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)
});

;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[7]-m[5])*fRoot;
        out[1] = (m[2]-m[6])*fRoot;
        out[2] = (m[3]-m[1])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[k*3+j] - m[j*3+k]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

},{}],3:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Camera = function() {
	this.matrix = glm.mat4.create();
	glm.mat4.identity(this.matrix);

	this.position = glm.vec3.create();
};

var p = Camera.prototype;

p.lookAt = function(aEye, aCenter, aUp) {
	glm.vec3.copy(this.position, aEye);
	glm.mat4.identity(this.matrix);
	glm.mat4.lookAt(this.matrix, aEye, aCenter, aUp);
};

p.getMatrix = function() {
	return this.matrix;
};

module.exports = Camera;
},{"gl-matrix":2}],4:[function(_dereq_,module,exports){
// CameraPerspective.js
"use strict";

var Camera = _dereq_("./Camera");
var glm = _dereq_("gl-matrix");

var CameraPerspective = function() {
	Camera.call(this);

	this.projection = glm.mat4.create();
	this.mtxFinal = glm.mat4.create();
};

var p = CameraPerspective.prototype = new Camera();

p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
	this._fov = aFov;
	this._near = aNear;
	this._far = aFar;
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
};

p.getMatrix = function() {
	// mat4.multiply(this.mtxFinal, this.projection, this.matrix);
	return this.matrix;
};

p.resize = function(aAspectRatio) {
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
};

p.__defineGetter__("near", function() {
	return this._near;
});

p.__defineGetter__("far", function() {
	return this._far;
});

module.exports = CameraPerspective;
},{"./Camera":3,"gl-matrix":2}],5:[function(_dereq_,module,exports){
// EaseNumber.js

"use strict";

var Scheduler = _dereq_("./Scheduler");

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
},{"./Scheduler":15}],6:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Face = function(mA, mB, mC) {
	this._vertexA = mA;
	this._vertexB = mB;
	this._vertexC = mC;

	this._init();
};

var p = Face.prototype;


p._init = function() {
	var BA = glm.vec3.create();
	var CA = glm.vec3.create();
	glm.vec3.sub(BA, this._vertexB, this._vertexA);
	glm.vec3.sub(CA, this._vertexC, this._vertexA);

	this._faceNormal = glm.vec3.create();
	glm.vec3.cross(this._faceNormal, BA, CA);
	glm.vec3.normalize(this._faceNormal, this._faceNormal);
};


p.contains = function(mVertex) {
	return ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
};


p.__defineGetter__("faceNormal", function() {
	return this._faceNormal;
});

var equal = function(mV0, mV1) {
	return ( (mV0[0] === mV1[0]) && (mV0[1] === mV1[1]) && (mV0[2] === mV1[2]) );
};

module.exports = Face;
},{"gl-matrix":2}],7:[function(_dereq_,module,exports){
"use strict";

var gl, GL = _dereq_("./GLTools");
var GLTexture = _dereq_("./GLTexture");
var isPowerOfTwo = function(x) {	return !(x === 0) && !(x & (x - 1));	};

var FrameBuffer = function(width, height, options) {
	gl = GL.gl;
	options        = options || {};
	this.width     = width;
	this.height    = height;
	this.magFilter = options.magFilter || gl.LINEAR;
	this.minFilter = options.minFilter || gl.LINEAR;
	this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
	this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

	if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
		this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;

		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
			this.minFilter = gl.LINEAR;
		}
	} 

	this._init();
};

var p = FrameBuffer.prototype;

p._init = function() {
	this.texture            = gl.createTexture();
	
	this.glTexture			= new GLTexture(this.texture, true);
	
	this.frameBuffer        = gl.createFramebuffer();		
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
	this.frameBuffer.width  = this.width;
	this.frameBuffer.height = this.height;

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	if(GL.depthTextureExt) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	} else {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	
	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

	// if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	// 	console.debug("Both Nearest", this.floatTextureExt);
	// } else {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	// }

	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	if(GL.depthTextureExt === null) {
		var renderbuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
		// gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
		// gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);	
		// if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
	 //      throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
	 //    }

	 	gl.renderbufferStorage( gl.RENDERBUFFER, gl.RGBA4, this.frameBuffer.width, this.frameBuffer.height );
	} else {
		this.depthTexture       = gl.createTexture();
		this.glDepthTexture		= new GLTexture(this.depthTexture, true);

		gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};


p.bind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
};


p.unbind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
};


p.getTexture = function() {
	return this.glTexture;
};


p.getDepthTexture = function() {
	return this.glDepthTexture;
};


p.destroy = function() {
	gl.deleteFramebuffer(this.frameBuffer);

	this.glTexture.destroy();
	if(this.glDepthTexture) {
		this.glDepthTexture.destroy();
	}
};

module.exports = FrameBuffer;
},{"./GLTexture":9,"./GLTools":10}],8:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var gl;
var ShaderLibs = _dereq_("./ShaderLibs");

var GLShader = function(aVertexShaderId, aFragmentShaderId) {
	gl              	 = GL.gl;
	this.idVertex        = aVertexShaderId;
	this.idFragment      = aFragmentShaderId;
	this.parameters      = [];
	this.uniformValues   = {};
	
	this.uniformTextures = [];
	
	this.vertexShader    = undefined;
	this.fragmentShader  = undefined;
	this._isReady        = false;
	this._loadedCount    = 0;

	if(aVertexShaderId === undefined || aVertexShaderId === null ) {
		this.createVertexShaderProgram(ShaderLibs.getShader("copyVert"));
	}

	if(aFragmentShaderId === undefined || aVertexShaderId === null ) {
		this.createFragmentShaderProgram(ShaderLibs.getShader("copyFrag"));
	}

	this.init();
};


var p = GLShader.prototype;

p.init = function() {
	if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
		this.createVertexShaderProgram(this.idVertex);
	} else {
		this.getShader(this.idVertex, true);	
	}
	
	if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
		this.createFragmentShaderProgram(this.idFragment);
	} else {
		this.getShader(this.idFragment, false);	
	}
};

p.getShader = function(aId, aIsVertexShader) {
	if(!aId) {return;}
	var req = new XMLHttpRequest();
	req.hasCompleted = false;
	var that = this;
	req.onreadystatechange = function(e) {
		if(e.target.readyState === 4) {
			if(aIsVertexShader) {
				that.createVertexShaderProgram(e.target.responseText);
			} else {
				that.createFragmentShaderProgram(e.target.responseText);
			}
		}
	};
	req.open("GET", aId, true);
	req.send(null);
};

p.createVertexShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.VERTEX_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Vertex Shader : ", this.idVertex, ":", gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.vertexShader = shader;
	
	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};


p.createFragmentShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Fragment Shader: ", this.idFragment, ":" , gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.fragmentShader = shader;

	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};

p.attachShaderProgram = function() {
	this._isReady = true;
	this.shaderProgram = gl.createProgram();
	gl.attachShader(this.shaderProgram, this.vertexShader);
	gl.attachShader(this.shaderProgram, this.fragmentShader);
	gl.linkProgram(this.shaderProgram);
};

p.bind = function() {
	if(!this._isReady) {return;}
	gl.useProgram(this.shaderProgram);

	if(this.shaderProgram.pMatrixUniform === undefined) {	this.shaderProgram.pMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uPMatrix");}
	if(this.shaderProgram.mvMatrixUniform === undefined) {	this.shaderProgram.mvMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uMVMatrix");}

	GL.setShader(this);
	GL.setShaderProgram(this.shaderProgram);

	this.uniformTextures = [];
};

p.isReady = function() {	return this._isReady;	};


p.clearUniforms = function() {
	this.parameters    = [];
	this.uniformValues = {};
};

p.uniform = function(aName, aType, aValue) {
	if(!this._isReady) {return;}

	if(aType === "texture") {aType = "uniform1i";}

	var hasUniform = false;
	var oUniform;
	for(var i=0; i<this.parameters.length; i++) {
		oUniform = this.parameters[i];
		if(oUniform.name === aName) {
			oUniform.value = aValue;
			hasUniform = true;
			break;
		}
	}

	if(!hasUniform) {
		this.shaderProgram[aName] = gl.getUniformLocation(this.shaderProgram, aName);
		this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
	} else {
		this.shaderProgram[aName] = oUniform.uniformLoc;
	}

	// console.log('Uniform : ', aName);

	if(aType.indexOf("Matrix") === -1) {
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		} else {
			if(this.checkUniform(aName, aType, aValue)) {
				gl[aType](this.shaderProgram[aName], aValue);
				// console.debug('Set uniform', aName, aType, aValue);
			}
		}
	} else {
		gl[aType](this.shaderProgram[aName], false, aValue);
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		}
	}

	if(aType === "uniform1i") {
		// Texture
		this.uniformTextures[aValue] = this.shaderProgram[aName];
	}
};

p.checkUniform = function(aName, aType, aValue) {

	if(!this.uniformValues[aName]) {
		this.uniformValues[aName] = aValue;
		return true;
	}

	if(aType === "uniform1i") {
		this.uniformValues[aName] = aValue;
		return true;
	}

	var uniformValue = this.uniformValues[aName];
	var hasChanged = uniformValue === aValue ? false : true;
	
	if(hasChanged) {
		this.uniformValues[aName] = aValue;
	}
	return hasChanged;

};


p.unbind = function() {

};


p.destroy = function() {
	gl.detachShader(this.shaderProgram, this.vertexShader);
	gl.detachShader(this.shaderProgram, this.fragmentShader);
	gl.deleteShader(this.vertexShader);
	gl.deleteShader(this.fragmentShader);
	gl.deleteProgram(this.shaderProgram);
};

module.exports = GLShader;
},{"./GLTools":10,"./ShaderLibs":16}],9:[function(_dereq_,module,exports){
// GLTexture.js
"use strict";

var gl;
var GL = _dereq_("./GLTools");
var _isPowerOfTwo = function(x) {	
	var check = !(x === 0) && (!(x & (x - 1)));
	return check;
};
var isPowerOfTwo = function(obj) {	
	var w = obj.width || obj.videoWidth;
	var h = obj.height || obj.videoHeight;

	if(!w || !h) {return false;}

	return _isPowerOfTwo(w) && _isPowerOfTwo(h);
};

var GLTexture = function(source, isTexture, options) {
	isTexture = isTexture || false;
	options = options || {};
	gl = GL.gl;
	if(isTexture) {
		this.texture = source;
	} else {
		this._source   = source;
		this.texture   = gl.createTexture();
		this._isVideo  = (source.tagName === "VIDEO");
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
		
		this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
		this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;
		var width      = source.width || source.videoWidth;

		if(width) {
			if(!isPowerOfTwo(source)) {
				this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
				if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
					this.minFilter = gl.LINEAR;
				}
			} 	
		} else {
			this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
			if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
				this.minFilter = gl.LINEAR;
			}
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
		
		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
			gl.generateMipmap(gl.TEXTURE_2D);
		}

		gl.bindTexture(gl.TEXTURE_2D, null);
	}
};

var p = GLTexture.prototype;


p.updateTexture = function(source) {
	if(source){ this._source = source; }
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._source);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
};


p.bind = function(index) {
	if(index === undefined) {index = 0;}
	if(!GL.shader) {return;}

	gl.activeTexture(gl.TEXTURE0 + index);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.uniform1i(GL.shader.uniformTextures[index], index);
	this._bindIndex = index;
};


p.unbind = function() {
	gl.bindTexture(gl.TEXTURE_2D, null);
};

p.destroy = function() {
	gl.deleteTexture(this.texture);
};

module.exports = GLTexture;
},{"./GLTools":10}],10:[function(_dereq_,module,exports){
// GLTools.js
"use strict";

var glm = _dereq_("gl-matrix");

function GLTools() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTools.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	this.canvas      = mCanvas || document.createElement("canvas");
	var params       = parameters || {};
	params.antialias = true;
	this.gl          = this.canvas.getContext("experimental-webgl", params);

	console.log('GL TOOLS : ', this.gl);
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	this.matrix                = glm.mat4.create();
	glm.mat4.identity(this.matrix);
	this.normalMatrix          = glm.mat3.create();
	this.depthTextureExt       = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt       = this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt = this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix

	this.enabledVertexAttribute = [];
	this.enableAlphaBlending();
	this._viewport = [0, 0, this.width, this.height];
};


p.getGL = function() {	return this.gl;	};

p.setShader = function(aShader) {
	this.shader = aShader;
};

p.setShaderProgram = function(aShaderProgram) {
	this.shaderProgram = aShaderProgram;
};

p.setViewport = function(aX, aY, aW, aH) {
	var hasChanged = false;
	if(aX!==this._viewport[0]) {hasChanged = true;}
	if(aY!==this._viewport[1]) {hasChanged = true;}
	if(aW!==this._viewport[2]) {hasChanged = true;}
	if(aH!==this._viewport[3]) {hasChanged = true;}

	if(hasChanged) {
		this.gl.viewport(aX, aY, aW, aH);
		this._viewport = [aX, aY, aW, aH];
	}
};

p.setMatrices = function(aCamera) {
	this.camera = aCamera;	
};

p.rotate = function(aRotation) {
	glm.mat4.copy(this.matrix, aRotation);

	glm.mat4.multiply(this.matrix, this.camera.getMatrix(), this.matrix);
	glm.mat3.fromMat4(this.normalMatrix, this.matrix);
	glm.mat3.invert(this.normalMatrix, this.normalMatrix);
	glm.mat3.transpose(this.normalMatrix, this.normalMatrix);
};


//	BLEND MODES
p.enableAlphaBlending = function() {
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
};

p.enableAdditiveBlending = function() {
	this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
};

//	CLEAR CANVAS
p.clear = function(r, g, b, a) {
	this.gl.clearColor( r, g, b, a );
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
};

//	DRAWING ELEMENTS
p.draw = function(aMesh) {
	if(!this.shaderProgram) {
		console.warn("Shader program not ready yet");
		return;
	}

	if(!this.shaderProgram.pMatrixValue) {
		this.shaderProgram.pMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
		glm.mat4.copy(this.shaderProgram.pMatrixValue, this.camera.projection || this.camera.getMatrix());
	} else {
		var pMatrix = this.camera.projection || this.camera.getMatrix();
		if(glm.mat4.str(this.shaderProgram.pMatrixValue) !== glm.mat4.str(pMatrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
			glm.mat4.copy(this.shaderProgram.pMatrixValue, pMatrix);
		}
	}

	if(!this.shaderProgram.mvMatrixValue) {
		this.shaderProgram.mvMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
		glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
	} else {
		if(glm.mat4.str(this.shaderProgram.mvMatrixValue) !== glm.mat4.str(this.matrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
			glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
		}
	}


	// 	VERTEX POSITIONS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
	var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
	this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
	if(this.enabledVertexAttribute.indexOf(vertexPositionAttribute) === -1) {
		this.gl.enableVertexAttribArray(vertexPositionAttribute);	
		this.enabledVertexAttribute.push(vertexPositionAttribute);
	}
	

	//	TEXTURE COORDS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
	var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
	this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
	
	if(this.enabledVertexAttribute.indexOf(textureCoordAttribute) === -1) {
		this.gl.enableVertexAttribArray(textureCoordAttribute);
		this.enabledVertexAttribute.push(textureCoordAttribute);
	}

	//	INDICES
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

	//	EXTRA ATTRIBUTES
	for(var i=0; i<aMesh.extraAttributes.length; i++) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
		var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
		this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
		// this.gl.enableVertexAttribArray(attrPosition);	
		if(this.enabledVertexAttribute.indexOf(attrPosition) === -1) {
			this.gl.enableVertexAttribArray(attrPosition);
			this.enabledVertexAttribute.push(attrPosition);
		}	
	}

	//	DRAWING
	if(aMesh.drawType === this.gl.POINTS ) {
		this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
	} else {
		this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
	}


	function getAttribLoc(gl, shaderProgram, name) {
		if(shaderProgram.cacheAttribLoc === undefined) {	shaderProgram.cacheAttribLoc = {};	}
		if(shaderProgram.cacheAttribLoc[name] === undefined) {
			shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
		}

		return shaderProgram.cacheAttribLoc[name];
	}

};

//	CANVAS RESIZING
p.setSize = function(mWidth, mHeight) {
	this._width = mWidth;
	this._height = mHeight;

	this.canvas.width      = this._width;
	this.canvas.height     = this._height;
	this.gl.viewportWidth  = this._width;
	this.gl.viewportHeight = this._height;

	this.gl.viewport(0, 0, this._width, this._height);
	this.aspectRatio       = this._width / this._height;
};


p.__defineGetter__("width", function() {
	return this._width;
});

p.__defineGetter__("height", function() {
	return this._height;
});

p.__defineGetter__("viewport", function() {
	return this._viewport;
});

var instance = null;

GLTools.getInstance = function() {
	if(instance === null) {
		instance = new GLTools();
	}
	return instance;
};


module.exports = GLTools.getInstance();
},{"gl-matrix":2}],11:[function(_dereq_,module,exports){
"use strict";

var Face = _dereq_("./Face");
var GL = _dereq_("./GLTools");
var glm = _dereq_("gl-matrix");

var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

	this.gl = GL.gl;
	this.vertexSize = aVertexSize;
	this.indexSize = aIndexSize;
	this.drawType = aDrawType;
	this.extraAttributes = [];
	
	this.vBufferPos = undefined;
	this._floatArrayVertex = undefined;

	this._init();
};

var p = Mesh.prototype;

p._init = function() {

};

p.bufferVertex = function(aArrayVertices, isDynamic) {
	var vertices = [];
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._vertices = [];

	for(var i=0; i<aArrayVertices.length; i++) {
		for(var j=0; j<aArrayVertices[i].length; j++) {
			vertices.push(aArrayVertices[i][j]);
		}
		this._vertices.push(glm.vec3.clone(aArrayVertices[i]));
	}

	if(this.vBufferPos === undefined) {
		this.vBufferPos = this.gl.createBuffer();
	}
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

	if(this._floatArrayVertex === undefined) {
		this._floatArrayVertex = new Float32Array(vertices);
	} else {
		if(aArrayVertices.length !== this._floatArrayVertex.length) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			for(var k=0; k<aArrayVertices.length; k++) {
				this._floatArrayVertex[k] = aArrayVertices[k];
			}
		}
	}

	this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
	this.vBufferPos.itemSize = 3;
};

p.bufferTexCoords = function(aArrayTexCoords) {
	var coords = [];

	for(var i=0; i<aArrayTexCoords.length; i++) {
		for(var j=0; j<aArrayTexCoords[i].length; j++) {
			coords.push(aArrayTexCoords[i][j]);
		}
	}

	this.vBufferUV = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), this.gl.STATIC_DRAW);
	this.vBufferUV.itemSize = 2;
};

p.bufferData = function(aData, aName, aItemSize, isDynamic) {
	var index = -1;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	var i=0;

	for(i=0; i<this.extraAttributes.length; i++) {
		if(this.extraAttributes[i].name === aName) {
			this.extraAttributes[i].data = aData;
			index = i;
			break;
		}
	}

	var bufferData = [];
	for(i=0; i<aData.length; i++) {
		for(var j=0; j<aData[i].length; j++) {
			bufferData.push(aData[i][j]);
		}
	}

	var buffer, floatArray;
	if(index === -1) {
		buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = new Float32Array(bufferData);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
	} else {
		buffer = this.extraAttributes[index].buffer;
		// console.debug("Buffer exist", buffer);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = this.extraAttributes[index].floatArray;
		for(i=0; i<bufferData.length; i++) {
			floatArray[i] = bufferData[i];
		}
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
	}

};

p.bufferIndices = function(aArrayIndices) {
	this._indices = aArrayIndices;
	this.iBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
	this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
	this.iBuffer.itemSize = 1;
	this.iBuffer.numItems = aArrayIndices.length;
};


p.computeNormals = function() {
	if(this.drawType !== this.gl.TRIANGLES) {return;}

	if(this._faces === undefined) {	this._generateFaces();	}
	console.log("Start computing");

	var time = new Date().getTime();
	var j=0;

	this._normals = [];
	for(var i=0; i<this._vertices.length; i++) {
		var normal = glm.vec3.create();
		var faceCount = 0;
		for(j=0; j<this._faces.length; j++) {
			if(this._faces[j].contains(this._vertices[i])) {
				glm.vec3.add(normal, normal, this._faces[j].faceNormal);
				faceCount ++;
			}
		}

		glm.vec3.normalize(normal, normal);
		this._normals.push(normal);
	}

	this.bufferData(this._normals, "aNormal", 3);

	var totalTime = new Date().getTime() - time;
	console.log("Total Time : ", totalTime);
};


p.computeTangent = function() {
	
};


p._generateFaces = function() {
	this._faces = [];

	for(var i=0; i<this._indices.length; i+=3) {
		var p0 = this._vertices[this._indices[i+0]];
		var p1 = this._vertices[this._indices[i+1]];
		var p2 = this._vertices[this._indices[i+2]];

		this._faces.push(new Face(p0, p1, p2));
	}
};

module.exports = Mesh;
},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var Mesh = _dereq_("./Mesh");
var MeshUtils = {};

MeshUtils.createPlane = function(width, height, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];

	var gapX = width/numSegments;
	var gapY = height/numSegments;
	var gapUV = 1/numSegments;
	var index = 0;
	var sx = -width * 0.5;
	var sy = -height * 0.5;

	for(var i=0; i<numSegments; i++) {
		for (var j=0; j<numSegments; j++) {
			var tx = gapX * i + sx;
			var ty = gapY * j + sy;
			positions.push([tx, 		ty, 	0]);
			positions.push([tx+gapX, 	ty, 	0]);
			positions.push([tx+gapX, 	ty+gapY, 	0]);
			positions.push([tx, 		ty+gapY, 	0]);

			var u = i/numSegments;
			var v = j/numSegments;
			coords.push([u, v]);
			coords.push([u+gapUV, v]);
			coords.push([u+gapUV, v+gapUV]);
			coords.push([u, v+gapUV]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}

	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};

MeshUtils.createSphere = function(size, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;
	var gapUV = 1/numSegments;

	var getPosition = function(i, j) {	//	rx : -90 ~ 90 , ry : 0 ~ 360
		var rx = i/numSegments * Math.PI - Math.PI * 0.5;
		var ry = j/numSegments * Math.PI * 2;
		var r = size;
		var pos = [];
		pos[1] = Math.sin(rx) * r;
		var t = Math.cos(rx) * r;
		pos[0] = Math.cos(ry) * t;
		pos[2] = Math.sin(ry) * t;

		var precision = 10000;
		pos[0] = Math.floor(pos[0] * precision) / precision;
		pos[1] = Math.floor(pos[1] * precision) / precision;
		pos[2] = Math.floor(pos[2] * precision) / precision;

		return pos;
	};

	
	for(var i=0; i<numSegments; i++) {
		for(var j=0; j<numSegments; j++) {
			positions.push(getPosition(i, j));
			positions.push(getPosition(i+1, j));
			positions.push(getPosition(i+1, j+1));
			positions.push(getPosition(i, j+1));

			var u = j/numSegments;
			var v = i/numSegments;
			
			
			coords.push([1.0 - u, v]);
			coords.push([1.0 - u, v+gapUV]);
			coords.push([1.0 - u - gapUV, v+gapUV]);
			coords.push([1.0 - u - gapUV, v]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}


	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};


module.exports = MeshUtils;
},{"./GLTools":10,"./Mesh":11}],13:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

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
},{"gl-matrix":2}],14:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var QuatRotation = _dereq_("./QuatRotation");
var Camera = _dereq_("./Camera");
var SimpleCamera = _dereq_("./SimpleCamera");
var glm = _dereq_("gl-matrix");

var Scene = function() {
	if(GL.canvas === null) {return;}
	this.gl = GL.gl;
	this._children = [];
	this._init();
};

var p = Scene.prototype;

p._init = function() {
	this.camera = new SimpleCamera(GL.canvas);
	this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.camera.lockRotation();

	var eye            = glm.vec3.clone([0, 0, 500]  );
	var center         = glm.vec3.create( );
	var up             = glm.vec3.clone( [0,-1,0] );
	this.camera.lookAt(eye, center, up);
	
	this.sceneRotation = new QuatRotation(GL.canvas);
	this.rotationFront = glm.mat4.create();
	glm.mat4.identity(this.rotationFront);
	
	this.cameraOtho    = new Camera();

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
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera );
	GL.rotate(this.sceneRotation.matrix);

};

p.resize = function() {
	if(this.camera.resize) {
		this.camera.resize(GL.aspectRatio);
	}
};

p.render = function() {

};

p._onResize = function() {
};

module.exports = Scene;
},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(_dereq_,module,exports){
// Scheduler.js

"use strict";

if(window.requestAnimFrame === undefined) {
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
		};
	})();
}

function Scheduler() {
	this.FRAMERATE = 60;
	this._delayTasks = [];
	this._nextTasks = [];
	this._deferTasks = [];
	this._highTasks = [];
	this._usurpTask = [];
	this._enterframeTasks = [];
	this._idTable = 0;

	window.requestAnimFrame( this._loop.bind(this) );
}

var p = Scheduler.prototype;

p._loop = function() {
	window.requestAnimFrame( this._loop.bind(this) );
	this._process();
};


p._process = function() {
	var i = 0,
		task, interval, current;
	for ( i=0; i<this._enterframeTasks.length; i++) {
		task = this._enterframeTasks[i];
		if(task !== null && task !== undefined) {
			task.func.apply(task.scope, task.params);
		}
	}
	
	while ( this._highTasks.length > 0) {
		task = this._highTasks.pop();
		task.func.apply(task.scope, task.params);
	}
	

	var startTime = new Date().getTime();

	for ( i=0; i<this._delayTasks.length; i++) {
		task = this._delayTasks[i];
		if(startTime-task.time > task.delay) {
			task.func.apply(task.scope, task.params);
			this._delayTasks.splice(i, 1);
		}
	}

	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._deferTasks.length > 0) {
		task = this._deferTasks.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			this._deferTasks.unshift(task);
			break;
		}
	}


	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._usurpTask.length > 0) {
		task = this._usurpTask.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			// this._usurpTask.unshift(task);
			break;
		}
	}



	this._highTasks = this._highTasks.concat(this._nextTasks);
	this._nextTasks = [];
	this._usurpTask = [];
};


p.addEF = function(scope, func, params) {
	params = params || [];
	var id = this._idTable;
	this._enterframeTasks[id] = {scope:scope, func:func, params:params};
	this._idTable ++;
	return id;
};


p.removeEF = function(id) {
	if(this._enterframeTasks[id] !== undefined) {
		this._enterframeTasks[id] = null;
	}
	return -1;
};


p.delay = function(scope, func, params, delay) {
	var time = new Date().getTime();
	var t = {scope:scope, func:func, params:params, delay:delay, time:time};
	this._delayTasks.push(t);
};


p.defer = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._deferTasks.push(t);
};


p.next = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._nextTasks.push(t);
};


p.usurp = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._usurpTask.push(t);
};


var instance = null;

Scheduler.getInstance = function() {
	if(instance === null) {
		instance = new Scheduler();
	}
	return instance;
};

module.exports = Scheduler.getInstance();
},{}],16:[function(_dereq_,module,exports){
"use strict";


var ShaderLibs = function() { };

ShaderLibs.shaders = {};

ShaderLibs.shaders.copyVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.generalVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.copyFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";

ShaderLibs.shaders.alphaFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}";

ShaderLibs.shaders.simpleColorFrag = "#define GLSLIFY 1\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";

ShaderLibs.shaders.depthFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n\treturn (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}";


ShaderLibs.getShader = function(mId) {
	return this.shaders[mId];
};

ShaderLibs.get = ShaderLibs.getShader;
module.exports = ShaderLibs;
},{}],17:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");
var CameraPerspective = _dereq_("./CameraPerspective");
var EaseNumber = _dereq_("./EaseNumber");

var SimpleCamera = function(mListenerTarget) {
	this._listenerTarget = mListenerTarget || window;
	CameraPerspective.call(this);
	this._isLocked = false;
	this._init();
};

var p = SimpleCamera.prototype = new CameraPerspective();
var s = CameraPerspective.prototype;

p._init = function() {
	this.radius          = new EaseNumber(500);
	this.position[2]     = this.radius.value;
	this.center          = glm.vec3.create( );
	this.up              = glm.vec3.clone( [0,-1,0] );
	this.lookAt(this.position, this.center, this.up);
	this._mouse          = {};
	this._preMouse       = {};
	this._isMouseDown    = false;
	
	this._rx             = new EaseNumber(0);
	this._rx.limit(-Math.PI/2, Math.PI/2);
	this._ry             = new EaseNumber(0);
	this._preRX          = 0;
	this._preRY          = 0;
	this._isLocked       = false;
	this._isLockRotation = false;
	this._isInvert       = false;

	this._listenerTarget.addEventListener("mousewheel", this._onWheel.bind(this));
	this._listenerTarget.addEventListener("DOMMouseScroll", this._onWheel.bind(this));

	this._listenerTarget.addEventListener("mousedown", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("touchstart", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("mousemove", this._onMouseMove.bind(this));
	this._listenerTarget.addEventListener("touchmove", this._onMouseMove.bind(this));
	window.addEventListener("mouseup", this._onMouseUp.bind(this));
	window.addEventListener("touchend", this._onMouseUp.bind(this));
};

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

p.lockRotation = function(value) {
	if(value === undefined) {
		this._isLockRotation = true;
	} else {
		this._isLockRotation = value;
	}
};

p._onMouseDown = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = true;
	getMouse(mEvent, this._mouse);
	getMouse(mEvent, this._preMouse);
	this._preRX = this._rx.targetValue;
	this._preRY = this._ry.targetValue;
};


p._onMouseMove = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	getMouse(mEvent, this._mouse);
	if(mEvent.touches) {mEvent.preventDefault();}
	if(this._isMouseDown) {
		var diffX = this._mouse.x - this._preMouse.x;
		if(this._isInvert) {diffX *= -1;}
		this._ry.value = this._preRY - diffX * 0.01;

		var diffY = this._mouse.y - this._preMouse.y;
		if(this._isInvert) {diffY *= -1;}
		this._rx.value = this._preRX - diffY * 0.01;

		if(this._rx.targetValue > Math.PI * 0.5) {this._rx.targetValue = Math;	}
	}
};


p._onMouseUp = function() {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = false;
	// getMouse(mEvent, this._mouse);
};


p._onWheel = function(aEvent) {
	if(this._isLocked) {	return;	}
	var w = aEvent.wheelDelta;
	var d = aEvent.detail;
	var value = 0;
	if (d){
		if (w) {
			value = w/d/40*d>0?1:-1; // Opera
		} else {
			value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		}
	} else {
		value = w/120; 
	}

	// this._targetRadius -= value * 5;
	this.radius.add( -value * 5);
	
};


p.getMatrix = function() {
	this._updateCameraPosition();
	this.lookAt(this.position, this.center, this.up);
	return s.getMatrix.call(this);
};


p._updateCameraPosition = function() {
	this.position[2] 	= this.radius.value;

	this.position[1] = Math.sin(this._rx.value) * this.radius.value;
	var tr = Math.cos(this._rx.value) * this.radius.value;
	this.position[0] = Math.cos(this._ry.value + Math.PI*0.5) * tr;
	this.position[2] = Math.sin(this._ry.value + Math.PI*0.5) * tr;
};


var getMouse = function(mEvent, mTarget) {
	var o = mTarget || {};
	if(mEvent.touches) {
		o.x = mEvent.touches[0].pageX;
		o.y = mEvent.touches[0].pageY;
	} else {
		o.x = mEvent.clientX;
		o.y = mEvent.clientY;
	}

	return o;
};


p.__defineGetter__("rx", function() {
	return this._rx.targetValue;
});
 
p.__defineSetter__("rx", function(mValue) {
	this._rx.value = mValue;
});

p.__defineGetter__("ry", function() {
	return this._ry.targetValue;
});
 
p.__defineSetter__("ry", function(mValue) {
	this._ry.value = mValue;
});

module.exports = SimpleCamera;
},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(_dereq_,module,exports){
"use strict";

var SimpleImageLoader = function() {
	this._imgs             = {};
	this._loadedCount      = 0;
	this._toLoadCount      = 0;
	this._scope            = undefined;
	this._callback         = undefined;
	this._callbackProgress = undefined;
};

var p = SimpleImageLoader.prototype;


p.load = function(imgs, scope, callback, progressCallback) {
	this._imgs = {};
	this._loadedCount = 0;
	this._toLoadCount = imgs.length;
	this._scope = scope;
	this._callback = callback;
	this._callbackProgress = progressCallback;

	this._imgLoadedBind = this._onImageLoaded.bind(this);

	for ( var i=0; i<imgs.length ; i++) {
		var img         = new Image();
		img.onload      = this._imgLoadedBind;
		var path        = imgs[i];
		var tmp         = path.split("/");
		var ref         = tmp[tmp.length-1].split(".")[0];
		this._imgs[ref] = img;
		img.src         = path;
	}
};


p._onImageLoaded = function() {
	this._loadedCount++;

	if(this._loadedCount === this._toLoadCount) {
		this._callback.call(this._scope, this._imgs);
	} else {
		var p = this._loadedCount / this._toLoadCount;
		if(this._callbackProgress) {
			this._callbackProgress.call(this._scope, p);
		}
	}
};

module.exports = SimpleImageLoader;
},{}],19:[function(_dereq_,module,exports){
// View.js
"use strict";

var GLShader = _dereq_("./GLShader");

var View = function(aPathVert, aPathFrag) {
	this.shader = new GLShader(aPathVert, aPathFrag);
	this._init();
};

var p = View.prototype;

p._init = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.render = function() {
	// console.log("Should be overwritten by SuperClass");
};

module.exports = View;


},{"./GLShader":8}],20:[function(_dereq_,module,exports){
// ViewAxis.js

"use strict";
var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var Mesh = _dereq_("./Mesh");

var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewAxis = function(lineWidth, mFragShader) {
	this.lineWidth = lineWidth === undefined ? 2.0 : lineWidth;
	var fs = mFragShader === undefined ? fragShader : mFragShader;
	View.call(this, vertShader, fs);
};

var p = ViewAxis.prototype = new View();

p._init = function() {
	// this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);

	var positions = [];
	var colors = [];
	var coords = [];
	var indices = [0, 1, 2, 3, 4, 5];
	var r = 9999;

	positions.push([-r,  0,  0]);
	positions.push([ r,  0,  0]);
	positions.push([ 0, -r,  0]);
	positions.push([ 0,  r,  0]);
	positions.push([ 0,  0, -r]);
	positions.push([ 0,  0,  r]);


	colors.push([1, 0, 0]);
	colors.push([1, 0, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 0, 1]);
	colors.push([0, 0, 1]);


	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);


	this.mesh = new Mesh(positions.length, indices.length, GL.gl.LINES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(colors, "aColor", 3, false);
};

p.render = function() {
	if(!this.shader.isReady()) {return;}

	this.shader.bind();
	GL.gl.lineWidth(this.lineWidth);
	GL.draw(this.mesh);
	GL.gl.lineWidth(1.0);
};

module.exports = ViewAxis;

},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(_dereq_,module,exports){
"use strict";

var View = _dereq_("./View");
var GL = _dereq_("./GLTools");
var MeshUtils = _dereq_("./MeshUtils");

var ViewCopy = function(aPathVert, aPathFrag) {
	View.call(this, aPathVert, aPathFrag);
};

var p = ViewCopy.prototype = new View();

p._init = function() {
	this.mesh = MeshUtils.createPlane(2, 2, 1);
};

p.render = function(aTexture) {
	if(!this.shader.isReady()) {return;}
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	aTexture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewCopy;

},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(_dereq_,module,exports){
// ViewDotPlanes.js

"use strict";

var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var ShaderLibs = _dereq_("./ShaderLibs");
var Mesh = _dereq_("./Mesh");

// var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
// var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewDotPlanes = function(color, fragShader) {
	var grey = 0.75;
	this.color = color === undefined ? [grey, grey, grey] : color;
	var fs = fragShader === undefined ? ShaderLibs.get("simpleColorFrag") : fragShader;
	View.call(this, null, fs);
};

var p = ViewDotPlanes.prototype = new View();

p._init = function() {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;


	var numDots = 100;
	var size = 3000;
	var gap = size / numDots;
	var i, j;


	for(i=-size/2; i<size; i+=gap) {
		for(j=-size/2; j<size; j+=gap) {
			positions.push([i, j, 0]);
			coords.push([0, 0]);
			indices.push(index);
			index++;

			positions.push([i, 0, j]);
			coords.push([0, 0]);
			indices.push(index);
			index++;
		}
	}

	this.mesh = new Mesh(positions.length, indices.length, GL.gl.DOTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewDotPlanes;

},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[3]);
>>>>>>> 0d24e4db386ca3d7a6c1602d8e4135b31428135c
