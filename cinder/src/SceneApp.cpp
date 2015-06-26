//
//  SceneApp.cpp
//  cinder
//
//  Created by Li Yi-Wen on 03/06/2015.
//
//

#include "SceneApp.h"

SceneApp::SceneApp(app::WindowRef window) : Scene(window) {
    initTextures();
    initViews();
}


void SceneApp::initTextures() {
    cout << "Init Textures" << endl;
}

void SceneApp::initViews() {
    cout << "Init Views" << endl;
    
    _vAxis = new ViewAxis();
}

void SceneApp::render() {
//    gl::clear(Colorf(.96f, .96f, .96f));
    
    _vAxis->render();
}