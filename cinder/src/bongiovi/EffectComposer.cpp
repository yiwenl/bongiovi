//
//  EffectComposer.cpp
//  NikeCityAttack
//
//  Created by Yiwen on 05/08/2014.
//
//

#include "EffectComposer.h"

using namespace bongiovi::post;

Pass::Pass() {
    _init();
}

Pass::Pass(int size) : fboSize(size) {
    _init();
}


Pass::Pass(string fragPath) {
    _view = new ViewCopy("shaders/copy.vert", fragPath);
    _init();
}


Pass::Pass(string fragPath, int size) : fboSize(size) {
    _view = new ViewCopy("shaders/copy.vert", fragPath);
    _init();
}


Pass::Pass(ViewCopy* view) : _view(view) {
    _init();
}


Pass::Pass(ViewCopy* view, int size) : _view(view), fboSize(size) {
    _init();
}


void Pass::_init() {
    gl::Fbo::Format format;
    format.setColorInternalFormat( GL_RGBA16F_ARB );
    format.setMinFilter(GL_LINEAR);
    format.setMagFilter(GL_LINEAR);
    format.setSamples( 4 );
    format.enableMipmapping();
    
    int size        = fboSize;
    _fboPass        = new gl::Fbo(size, size, format);
    _fboPass->bindFramebuffer();
    gl::clear(ColorAf(0.0, 0.0, 0.0, 0.0));
    _fboPass->unbindFramebuffer();
    
    glTexParameteri( GL_TEXTURE_2D, GL_TEXTURE_COMPARE_MODE, GL_COMPARE_R_TO_TEXTURE );
	glTexParameteri( GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR );
}


gl::Texture Pass::render(gl::Texture texture) {
    Area viewport = gl::getViewport();
    _fboPass->bindFramebuffer();
    gl::setViewport(_fboPass->getBounds());
    gl::clear(ColorAf(0.0, 0.0, 0.0, 0.0));
    _view->render(texture);
    _fboPass->unbindFramebuffer();
    gl::setViewport(viewport);
    return _fboPass->getTexture();
}


gl::Texture Pass::getTexture() {
    return _fboPass->getTexture();
}

Area Pass::getBounds() {
    return _fboPass->getBounds();
}





EffectComposer::EffectComposer() {
    _init();
}

void EffectComposer::_init() {
    _passes.empty();
    _passes.clear();
}

void EffectComposer::addPass(Pass* pass) {
    _passes.push_back(pass);
}


gl::Texture EffectComposer::render(gl::Texture texture) {
    gl::Texture tex(texture);
    
    for(int i=0; i<_passes.size(); i++) {
        tex = _passes[i]->render(tex);
    }
    
    return tex;
}


gl::Texture EffectComposer::process(gl::Texture texture) {
    gl::Texture tex(texture);
    
    for(int i=0; i<_passes.size(); i++) {
        tex = _passes[i]->render(tex);
    }
    
    return tex;
}

Area EffectComposer::getBounds() {
    return _passes[0]->getBounds();
}

