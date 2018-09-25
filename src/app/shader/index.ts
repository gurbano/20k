export const DEF_VERTEX_SHADER = 
    'attribute vec2 coordinates;' + 
    'void main(void) {' +
    ' gl_Position = vec4(coordinates, 0.0, 1.0);' +
    '}';

export const DEF_FRAGMENT_SHADER = 
    'void main(void) {' +
    ' gl_FragColor = vec4(0, 0.8, 0, 1);' +
    '}';


let shader_attribute_vec = 'attribute vec',
    shader_varying = 
		'precision highp float;' +
		'varying vec3 vl;' +
		'varying vec2 vuv;',
	shader_uniform = 'uniform ',
	shader_const_mat4 = "const mat4 ";


let max_lights = 32;

export const U_VERTEX_SHADER = 
		shader_varying + 
		shader_attribute_vec + "3 p;" +
		shader_attribute_vec + "2 uv;" +
		shader_attribute_vec + "3 n;" +
		shader_uniform + "vec3 cam;" +
		shader_uniform + "float l[7*"+max_lights+"];" +
		shader_const_mat4 + "v=mat4(1,0,0,0,0,.707,.707,0,0,-.707,.707,0,0,-22.627,-22.627,1);" + // view
		shader_const_mat4 + "r=mat4(.977,0,0,0,0,1.303,0,0,0,0,-1,-1,0,0,-2,0);"+ // projection
		"void main(void){" +
			"vl=vec3(0.3,0.3,0.6);" + // ambient color
			"for(int i=0; i<"+max_lights+"; i++) {"+
				"vec3 lp=vec3(l[i*7],l[i*7+1],l[i*7+2]);" + // light position
				"vl+=vec3(l[i*7+3],l[i*7+4],l[i*7+5])" + // light color *
					"*max(dot(n,normalize(lp-p)),0.)" + // diffuse *
					"*(1./(l[i*7+6]*(" + // attentuation *
						"length(lp-p)" + // distance
					")));" + 
			"}" +
			"vuv=uv;" +
			"gl_Position=r*v*(vec4(p+cam,1.));" +
		"}";

export const U_FRAGMENT_SHADER =
		shader_varying + 
		shader_uniform + "sampler2D s;" +
		"void main(void){" +
			"vec4 t=texture2D(s,vuv);" +
			"if(t.a<.8)" + // 1) discard alpha
				"discard;" + 
			"if(t.r>0.95&&t.g>0.25&&t.b==0.0)" + // 2) red glowing spider eyes
				"gl_FragColor=t;" +
			"else{" +  // 3) calculate color with lights and fog
				"gl_FragColor=t*vec4(vl,1.);" +
				"gl_FragColor.rgb*=smoothstep(" +
					"112.,16.," + // fog far, near
					"gl_FragCoord.z/gl_FragCoord.w" + // fog depth
				");" +
			"}" +
			"gl_FragColor.rgb=floor(gl_FragColor.rgb*6.35)/6.35;" + // reduce colors to ~256
		"}";
