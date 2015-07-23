//
//  CameraControl.cpp
//  cinder
//
//  Created by Li Yi-Wen on 23/07/2015.
//
//

#include "CameraControl.h"

CameraControl::CameraControl(CameraPersp* camera) : _camera(camera) {
    _init();
}

void CameraControl::_init() {
    radius          = new EaseNumber(500.0, .1f);
    rx              = new EaseNumber(0);
    ry              = new EaseNumber(0);
    rx->limit(-M_PI/2, M_PI/2);
    _preRx          = 0;
    _preRy          = 0;

    eye             = Vec3f( 0.0f, 0.0f, radius->getValue() );
    center			= Vec3f::zero();
    up				= Vec3f::yAxis();

    
    _window = ci::app::getWindow();
    mCbMouseDown    = _window->getSignalMouseDown().connect( std::bind( &CameraControl::mouseDown, this, std::placeholders::_1 ) );
    mCbMouseDrag    = _window->getSignalMouseDrag().connect( std::bind( &CameraControl::mouseDrag, this, std::placeholders::_1 ) );
    mCbMouseUp      = _window->getSignalMouseUp().connect( std::bind( &CameraControl::mouseUp, this, std::placeholders::_1 ) );
    mCbMouseMove    = _window->getSignalMouseMove().connect( std::bind( &CameraControl::mouseMove, this, std::placeholders::_1 ) );
    mCbMouseWheel   = _window->getSignalMouseWheel().connect( std::bind( &CameraControl::mouseWheel, this, std::placeholders::_1 ) );
    mCbUpdate       = _window->getSignalDraw().connect( std::bind(&CameraControl::update, this ) );
}



void CameraControl::mouseDown( MouseEvent &event ) {
}

void CameraControl::mouseUp( MouseEvent &event ) {
}

void CameraControl::mouseMove( MouseEvent &event ) {
}

void CameraControl::mouseDrag( MouseEvent &event ) {
}

void CameraControl::mouseWheel( MouseEvent &event ) {
    if(_lookZoom) return;
    radius->add(event.getWheelIncrement());
    cout << radius->getValue() << endl;
}

void CameraControl::update() {
    eye = Vec3f( 0.0f, 0.0f, radius->getValue() );
    _camera->lookAt(eye, center, up);
}