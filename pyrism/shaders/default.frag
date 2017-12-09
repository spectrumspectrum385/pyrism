#version 430

in vec2 texCoord0;
out vec4 color;

uniform sampler2D sampler;

void main() {
    color = texture(sampler, texCoord0);
    //color = vec4(texCoord0, 0, 0);
}