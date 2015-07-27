//
//  ViewDotPlane.h
//  cinder
//
//  Created by Li Yi-Wen on 27/07/2015.
//
//

#ifndef __cinder__ViewDotPlane__
#define __cinder__ViewDotPlane__

#include <stdio.h>

#include "View.h"
#include "cinder/gl/Texture.h"

using namespace ci;
using namespace bongiovi;

class ViewDotPlane : public View {
    public :
    ViewDotPlane();
    void                render();
    
    private :
    void                _init();
};

#endif /* defined(__cinder__ViewDotPlane__) */
