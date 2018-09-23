export const DEF_VERTEX_SHADER = 
    'attribute vec2 coordinates;' + 
    'void main(void) {' +
    ' gl_Position = vec4(coordinates, 0.0, 1.0);' +
    '}';

export const DEF_FRAGMENT_SHADER = 
    'void main(void) {' +
    ' gl_FragColor = vec4(0, 0.8, 0, 1);' +
    '}';