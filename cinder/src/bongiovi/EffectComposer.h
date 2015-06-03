//
//  EffectComposer.h
//  NikeCityAttack
//
//  Created by Yiwen on 05/08/2014.
//
//

#ifndef __NikeCityAttack__EffectComposer__
#define __NikeCityAttack__EffectComposer__

#include <iostream>
#include "cinder/gl/Texture.h"
#include "cinder/gl/Fbo.h"
#include "View.h"
#include "ViewCopy.h"

using namespace ci;
using namespace ci::app;
using namespace std;

namespace bongiovi {
    namespace post {
        
        class Pass {
            public :
            Pass();
            Pass(string);
            Pass(ViewCopy*);
            
            Pass(int);
            Pass(string, int);
            Pass(ViewCopy*, int);
            
            
            int fboSize             = 1024;
            Area                    getBounds();
            
            virtual gl::Texture     render(gl::Texture);
            virtual gl::Texture     getTexture();
            
        private:
            gl::Fbo*        _fboPass;
            void            _init();
            ViewCopy*       _view;
            
        };
        
        class EffectComposer : public Pass {
            public :
            EffectComposer();
            void addPass(Pass* pass);
            gl::Texture render(gl::Texture);
            gl::Texture process(gl::Texture);
            Area                getBounds();
            
            private :
            vector<Pass*>       _passes;
            void                _init();
        };
        
    }
}

#endif /* defined(__NikeCityAttack__EffectComposer__) */
