//
//  SceneApp.h
//  cinder
//
//  Created by Li Yi-Wen on 03/06/2015.
//
//

#ifndef __cinder__SceneApp__
#define __cinder__SceneApp__

#include <stdio.h>


#include "cinder/gl/Texture.h"
#include "cinder/gl/Fbo.h"
#include "Scene.h"
#include "ViewCopy.h"
#include "ViewAxis.h"
#include "ViewDotPlane.h"

using namespace bongiovi;
using namespace ci;
using namespace gl;


class SceneApp : public Scene {
public:
    SceneApp(app::WindowRef);
    void                    render();
    void                    initTextures();
    void                    initViews();
    
    
private:
    ViewCopy*               _vCopy;
    ViewAxis*               _vAxis;
    ViewDotPlane*           _vDotPlane;
};


#endif /* defined(__cinder__SceneApp__) */
