import AudioSystem from "./audio/AudioSystem";
import {DEF_VERTEX_SHADER, DEF_FRAGMENT_SHADER} from './shader';

class WglData{
    gl: WebGLRenderingContext;
    n_indices: number;
    n_vertices: number;
    index_buffer: WebGLBuffer;
    vertex_buffer: WebGLBuffer;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    shaderProgram: WebGLProgram;
    constructor(ctx: WebGLRenderingContext){
        this.gl = ctx;
        console.log('WebGL handler v.0.1')
    }
    setVertexBuffer(vertices: Array<number>) {
        let gl = this.gl;
        this.n_vertices = vertices.length;
        this.vertex_buffer = gl.createBuffer();   
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertex_buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }
    setIndexBuffer(indices: Array<number>) {
        let gl = this.gl;
        this.n_indices = indices.length;
        this.index_buffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.index_buffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Float32Array(indices), gl.STATIC_DRAW);
       //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);       
    }
    setVertexShader(shaderSrc: string){
        let gl = this.gl;
        let shaderObj = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(shaderObj, shaderSrc);
        gl.compileShader(shaderObj);
        this.vertexShader = shaderObj;       
    }
    setFragmentShader(shaderSrc: string){
        let gl = this.gl;
        let shaderObj = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(shaderObj, shaderSrc);
        gl.compileShader(shaderObj);
        this.fragmentShader = shaderObj;
    }
    combineShader(){
        let gl = this.gl;
        var shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, this.vertexShader);
        gl.attachShader(shaderProgram, this.fragmentShader);
        gl.linkProgram(shaderProgram);
        gl.useProgram(shaderProgram); 
        this.shaderProgram = shaderProgram;
    }
    associateAttributes(){
        let gl = this.gl;
        // Bind vertex buffer object
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertex_buffer);
        var coordinatesVar = gl.getAttribLocation(this.shaderProgram, "coordinates"); 
        gl.vertexAttribPointer(coordinatesVar, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(coordinatesVar); 
    }
    postInit(){
        let gl = this.gl;
        gl.clearColor(0.5, 0.5, .5, 1);
        gl.enable(gl.DEPTH_TEST); 
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.viewport(0,0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        console.log(`w: ${this.gl.drawingBufferWidth}, h: ${this.gl.drawingBufferHeight}`);
    }
    draw(){
        let gl = this.gl;

         /*=========================Shaders========================*/

         // vertex shader source code
         var vertCode =
            'attribute vec3 coordinates;' +

            'void main(void) {' +
               ' gl_Position = vec4(coordinates, 1.0);' +
               'gl_PointSize = 10.0;'+
            '}';

         // Create a vertex shader object
         var vertShader = gl.createShader(gl.VERTEX_SHADER);
         
         // Attach vertex shader source code
         gl.shaderSource(vertShader, vertCode);

         // Compile the vertex shader
         gl.compileShader(vertShader);

         // fragment shader source code
         var fragCode =
            'void main(void) {' +
               ' gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
            '}';

         // Create fragment shader object
         var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

         // Attach fragment shader source code
         gl.shaderSource(fragShader, fragCode);

         // Compile the fragmentt shader
         gl.compileShader(fragShader);
         
         // Create a shader program object to store
         // the combined shader program
         var shaderProgram = gl.createProgram();

         // Attach a vertex shader
         gl.attachShader(shaderProgram, vertShader); 

         // Attach a fragment shader
         gl.attachShader(shaderProgram, fragShader);

         // Link both programs
         gl.linkProgram(shaderProgram);

         // Use the combined shader program object
         gl.useProgram(shaderProgram);

         
        var vertices = [
            -0.5,0.5,0.0,
            0.0,0.5,0.0,
            -0.25,0.25,0.0, 
         ];

         // Create an empty buffer object to store the vertex buffer
         var vertex_buffer = gl.createBuffer();

         //Bind appropriate array buffer to it
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Pass the vertex data to the buffer
         gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

         // Unbind the buffer
         gl.bindBuffer(gl.ARRAY_BUFFER, null);

        
         /*======== Associating shaders to buffer objects ========*/

         // Bind vertex buffer object
         gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

         // Get the attribute location
         var coord = gl.getAttribLocation(shaderProgram, "coordinates");

         // Point an attribute to the currently bound VBO
         gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0);

         // Enable the attribute
         gl.enableVertexAttribArray(coord);

         /*============= Drawing the primitive ===============*/

         // Clear the canvas
         gl.clearColor(0.5, 0.5, 0.5, 0.9);

         // Enable the depth test
         gl.enable(gl.DEPTH_TEST);
 
         // Clear the color buffer bit
         gl.clear(gl.COLOR_BUFFER_BIT);

         // Set the view port
          gl.viewport(0,0, gl.drawingBufferWidth, gl.drawingBufferHeight);

         // Draw the triangle
         gl.drawArrays(gl.POINTS, 0, 3);
    }
}

export default class App{
    ctx: WebGLRenderingContext;
    audioSystem: any;
    canvas: Partial<HTMLCanvasElement>;
    glWrap: WglData;
    constructor(canvas: Partial<HTMLCanvasElement>){
        this.canvas = canvas;
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas, false);
        this.ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        this.audioSystem = new AudioSystem();
        this.glWrap = new WglData(this.ctx);
        
    }
    async preload(): Promise<any> {
        //load texture
        //load music
        //init buffer

        return new Promise((ok, ko) => {
            this.glWrap.setVertexShader(DEF_VERTEX_SHADER);
            this.glWrap.setFragmentShader(DEF_FRAGMENT_SHADER);
            this.glWrap.combineShader();
            this.glWrap.postInit();
            console.log('import texture');

            console.log('load music');

            ok();
            
        });
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw(){
        var vertices = [
            -0.5,-0.5,0.0,
            -0.25,0.5,0.0,
            0.0,-0.5,0.0,
            0.25,0.5,0.0,
            0.5,-0.5,0.0 
         ];
         this.glWrap.setVertexBuffer(vertices);
         this.glWrap.draw();
    }

    async playLoadingScreen(): Promise<any> {
        return new Promise((ok, ko) => {
            let ctx = this.ctx;
            
            ok();
        });
    }
}