#include "cinder/app/AppNative.h"
#include "cinder/gl/gl.h"
#include "SceneApp.h"

using namespace ci;
using namespace ci::app;
using namespace std;

class cinderApp : public AppNative {
  public:
	void setup();
	void mouseDown( MouseEvent event );	
	void update();
	void draw();
    
    
private:
    SceneApp*       _scene;
};

void cinderApp::setup()
{
    setWindowSize(1920, 1080);
    setWindowPos(0, 0);
    setFrameRate(60);
    srand (time(NULL));
    
    _scene = new SceneApp(getWindow());
}

void cinderApp::mouseDown( MouseEvent event )
{
}

void cinderApp::update()
{
}

void cinderApp::draw()
{
	// clear out the window with black
	gl::clear( Color( 0, 0, 0 ) );
    _scene->render();
}

CINDER_APP_NATIVE( cinderApp, RendererGl )
