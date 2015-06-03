#include "cinder/app/AppNative.h"
#include "cinder/gl/gl.h"

using namespace ci;
using namespace ci::app;
using namespace std;

class cinderApp : public AppNative {
  public:
	void setup();
	void mouseDown( MouseEvent event );	
	void update();
	void draw();
};

void cinderApp::setup()
{
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
}

CINDER_APP_NATIVE( cinderApp, RendererGl )
