//
//  CameraControl.h
//  cinder
//
//  Created by Li Yi-Wen on 23/07/2015.
//
//

#ifndef __cinder__CameraControl__
#define __cinder__CameraControl__

#include <stdio.h>
#include "cinder/Camera.h"
#include "EaseNumber.h"

using namespace ci;
using namespace ci::app;
using namespace std;

class CameraControl {
private:
    CameraPersp*    _camera;
    ci::app::WindowRef _window;
    void _init();
    
    
    void	mouseDown( ci::app::MouseEvent &event );
    void	mouseUp( ci::app::MouseEvent &event );
    void	mouseMove( ci::app::MouseEvent &event );
    void	mouseDrag( ci::app::MouseEvent &event );
    void	mouseWheel( ci::app::MouseEvent &event );
    

    
    ci::signals::scoped_connection	mCbMouseDown, mCbMouseDrag, mCbMouseUp, mCbMouseMove, mCbMouseWheel, mCbUpdate;
    
    EaseNumber *radius;
    
    bool    _lookZoom = false;
    bool    _lockRotation = false;
    
public:

    CameraControl();
    CameraControl(CameraPersp* camera);
    Vec3f				eye, center, up;
    
    void lockZoom(bool mValue) {
        _lookZoom = mValue;
    }
    
    void lockRotation(bool mValue) {
        _lockRotation = mValue;
    }
    
    void	update();
};

#endif /* defined(__cinder__CameraControl__) */
