declare class WglData {
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
    texture_size: number;
    tile_size: number;
    tile_fraction: number;
    px_nudge: number;
    camera: {
        x: number;
        y: number;
        z: number;
    };
    constructor(ctx: WebGLRenderingContext, canvas: Partial<HTMLCanvasElement>);
    private load_image;
    push_quad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, nx: number, ny: number, nz: number, tile: number): void;
    private renderer_init;
    private renderer_bind_image;
    private renderer_prepare_frame;
    private renderer_end_frame;
    load_level(id: string): void;
    thick(): void;
}
export default class App {
    ctx: WebGLRenderingContext;
    audioSystem: any;
    canvas: Partial<HTMLCanvasElement>;
    glWrap: WglData;
    constructor(canvas: Partial<HTMLCanvasElement>);
    preload(): Promise<any>;
    resizeCanvas(): void;
    draw(): void;
    playLoadingScreen(): Promise<any>;
}
export {};
