// bongiovi.js

import GLM from 'gl-matrix';
import GLTool from './bongiovi/GLTool';
import Scheduler from './bongiovi/tools/Scheduler';

class bongiovi {
	constructor() {
		this.glm = GLM;
		this.GL = GLTool;
		this.GLTool = GLTool;
		this.scheduler = Scheduler;

		console.log(this.GL);
	}
}

module.exports = new bongiovi();
