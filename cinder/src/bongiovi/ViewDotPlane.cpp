//
//  ViewDotPlane.cpp
//  cinder
//
//  Created by Li Yi-Wen on 27/07/2015.
//
//

#include "ViewDotPlane.h"

ViewDotPlane::ViewDotPlane() : View("shaders/copy.vert", "shaders/axis.frag") {
    _init();
}

void ViewDotPlane::_init() {
    
    gl::VboMesh::Layout layout;
    layout.setStaticIndices();
    layout.setStaticColorsRGB();
    layout.setStaticPositions();
    
    vector<uint> indices;
    vector<Vec3f> positions;
    vector<Color> colors;
    
    int numDots = 100;
    int count = 0;
    float gap = 20.0f;
    float sx = -numDots/2.0f * gap;
    float grey = .5f;
    
    for(int j=0; j<numDots; j++) {
        for(int i=0; i<numDots; i++) {
            Vec3f p0(sx + i*gap, 0, sx + j*gap);
            Vec3f p1(sx + i*gap, sx + j*gap, 0);
            
            positions.push_back(p0);
            positions.push_back(p1);

            colors.push_back(Color(grey, grey, grey));
            colors.push_back(Color(grey, grey, grey));
            
            indices.push_back(count);
            indices.push_back(count+1);
            
            count += 2;
        }
    }
    
    
    mesh = gl::VboMesh(positions.size(), indices.size(), layout, GL_POINTS);
    mesh.bufferPositions(positions);
    mesh.bufferIndices(indices);
    mesh.bufferColorsRGB(colors);
}


void ViewDotPlane::render() {
    shader->bind();
    gl::draw(mesh);
    shader->unbind();
}