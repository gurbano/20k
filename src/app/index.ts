import AudioSystem from "./audio/AudioSystem";
import { U_VERTEX_SHADER, U_FRAGMENT_SHADER} from './shader';
const MAX_VERTS = 100 * 1000;
const MAX_LIGHTS = 64;

function compile_shader(
    gl: WebGLRenderingContext,
    shader_type: number, 
    shader_source: string) {
	var shader = gl.createShader(shader_type);
	gl.shaderSource(shader, shader_source);
	gl.compileShader(shader);
	// console.log(gl.getShaderInfoLog(shader));
	return shader;
};
function enable_vertex_attrib(
    gl: WebGLRenderingContext,
    attrib_name: string,
    count: number, 
    vertex_size: number, 
    offset: number,
    shader_program: WebGLProgram
    ) {
	var location = gl.getAttribLocation(shader_program, attrib_name);
	gl.enableVertexAttribArray(location);
	gl.vertexAttribPointer(location, count, gl.FLOAT, false, vertex_size * 4, offset * 4);
};

class WglData{
    gl: WebGLRenderingContext;
    index_buffer: WebGLBuffer;
    vertex_buffer: WebGLBuffer;
    vertexShader: WebGLShader;
    fragmentShader: WebGLShader;
    shaderProgram: WebGLProgram;
    buffer_data: Float32Array;
    camera_uniform: WebGLUniformLocation;
    light_uniform: WebGLUniformLocation;
    canvas: Partial<HTMLCanvasElement>;
    time_last: number;

    num_lights: number;
    num_verts: number;
    light_data: Float32Array;

    texture_size = 102;
	tile_size = 16;
	tile_fraction = this.tile_size / this.texture_size;
	px_nudge = 0.5 / this.texture_size;
    camera: {
        x: number;
        y: number;
        z: number;
    }
    lvl_texture: HTMLImageElement;
    constructor(ctx: WebGLRenderingContext, canvas: Partial<HTMLCanvasElement>){
        this.gl = ctx;
        this.canvas = canvas;
        this.buffer_data = new Float32Array(MAX_VERTS*8);
        this.light_data = new Float32Array(MAX_LIGHTS*7);
        this.renderer_init();
        console.log('WebGL handler v.0.1 - ready')
       
    }
    private load_image(name: string, callback: (ev: Event) => any) {
        this.lvl_texture  = new Image();
        this.lvl_texture.src = 'm/'+name+'.png';
        this.lvl_texture.onload = callback.bind(this.lvl_texture);
    }
    push_quad(
        x1: number, y1: number, z1: number, 
        x2: number, y2: number, z2: number, 
        x3: number, y3: number, z3: number, 
        x4: number, y4: number, z4: number, 
        nx: number, ny: number, nz: number, 
        tile: number) {
        
            var u = tile * this.tile_fraction + this.px_nudge;
            this.buffer_data.set([
                x1, y1, z1, u, 0, nx, ny, nz,
                x2, y2, z2, u + this.tile_fraction - this.px_nudge, 0, nx, ny, nz,
                x3, y3, z3, u, 1, nx, ny, nz,
                x2, y2, z2, u + this.tile_fraction - this.px_nudge, 0, nx, ny, nz,
                x3, y3, z3, u, 1, nx, ny, nz,
                x4, y4, z4, u + this.tile_fraction - this.px_nudge, 1, nx, ny, nz
            ], this.num_verts * 8);
            this.num_verts += 6;
    };
    private renderer_init() {
        let gl = this.gl;
        let vertex_buffer = this.vertex_buffer;
        let buffer_data = this.buffer_data;
        let shader_program = this.shaderProgram;
        let vertex_shader = this.vertexShader;
        let fragment_shader = this.fragmentShader;
        let canavs = this.canvas;

        vertex_buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
        gl.bufferData(gl.ARRAY_BUFFER, buffer_data, gl.DYNAMIC_DRAW);
    
        shader_program = gl.createProgram();
        vertex_shader = compile_shader(gl, gl.VERTEX_SHADER, U_VERTEX_SHADER);
        gl.attachShader(shader_program, vertex_shader);
        fragment_shader = compile_shader(gl, gl.FRAGMENT_SHADER, U_FRAGMENT_SHADER);
        gl.attachShader(shader_program, fragment_shader);
        gl.linkProgram(shader_program);
        gl.useProgram(shader_program);
    
        this.camera_uniform = gl.getUniformLocation(shader_program, "cam");
        this.light_uniform = gl.getUniformLocation(shader_program, "l");
    
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.viewport(0,0,canavs.width,canavs.height);
    
        enable_vertex_attrib(gl, 'p', 3, 8, 0, shader_program);
        enable_vertex_attrib(gl, 'uv', 2, 8, 3, shader_program);
        enable_vertex_attrib(gl, 'n', 3, 8, 5, shader_program);
    }
    private renderer_bind_image(image: HTMLImageElement) {
        let gl = this.gl;
        var texture_2d = gl.TEXTURE_2D;
        gl.bindTexture(texture_2d, gl.createTexture());
        gl.texImage2D(texture_2d, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.texParameteri(texture_2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(texture_2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(texture_2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(texture_2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    private renderer_prepare_frame() {
        this.num_verts = 0; //level_num_verts;
        this.num_lights = 0;
    
        // reset all lights
        this.light_data.fill(1);
    }
    private renderer_end_frame() {
        let gl = this.gl;
        gl.uniform3f(this.camera_uniform, this.camera.x, this.camera.y - 10, this.camera.z-30);
        gl.uniform1fv(this.light_uniform, this.light_data);
    
        gl.clearColor(0,0,0,1);
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    
        gl.bufferData(gl.ARRAY_BUFFER, this.buffer_data, gl.DYNAMIC_DRAW);
        gl.drawArrays(gl.TRIANGLES, 0, this.num_verts);
    }
    private getLvlData(){
        let _temp = document.createElement('canvas');
		_temp.width = _temp.height = 64; //level_width; // assume square levels
		let ctx = _temp.getContext('2d')
		ctx.drawImage(this.lvl_texture, 0, 0);
		return ctx.getImageData(0, 0, 64, 64).data;
    }
    load_level(id: string){
        this.load_image(id, (ev: Event)=>{
            // console.log(this.lvl_texture, ev);
            this.renderer_bind_image(this.lvl_texture);
            console.log(this.getLvlData());
        });
    }
    thick(){
        
        let time_now = performance.now();
        let time_elapsed = (time_now - this.time_last)/1000;
        this.time_last = time_now;
        this.renderer_prepare_frame();
        // ENTITIES.FOREACH _UPDATE && _RENDER

        // center camera on player, apply damping
 /*        camera_x = camera_x * 0.92 - entity_player.x * 0.08;
        camera_y = camera_y * 0.92 - entity_player.y * 0.08;
        camera_z = camera_z * 0.92 - entity_player.z * 0.08; 
        // add camera shake
        camera_shake *= 0.9;
        camera_x += camera_shake * (_math.random()-0.5);
        camera_z += camera_shake * (_math.random()-0.5);
    */
        // PUSH UI

        this.renderer_end_frame();
        requestAnimationFrame(this.thick);
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
        this.glWrap = new WglData(this.ctx, canvas);
        
    }
    async preload(): Promise<any> {
        //load texture
        //load music
        //init buffer

        return new Promise((ok, ko) => {
            console.log('import texture');

            console.log('load music');

            console.log('load level');
            this.glWrap.load_level('l1');
            ok();
            
        });
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    draw(){

        
    }

    async playLoadingScreen(): Promise<any> {
        return new Promise((ok, ko) => {
            let ctx = this.ctx;
            
            ok();
        });
    }
}