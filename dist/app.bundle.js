!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,u)}l((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=document.getElementById("canvas"),u=new o.default(a);!function(){n(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,u.playLoadingScreen()];case 1:return e.sent(),[4,u.preload()];case 2:return e.sent(),[4,u.draw()];case 3:return e.sent(),[2]}})})}()},function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function u(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(a,u)}l((n=n.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=r(3),u=1e5,l=64;function c(e,t,r){var n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),n}function s(e,t,r,n,i,o){var a=e.getAttribLocation(o,t);e.enableVertexAttribArray(a),e.vertexAttribPointer(a,r,e.FLOAT,!1,4*n,4*i)}var f=function(){function e(e,t){this.texture_size=102,this.tile_size=16,this.tile_fraction=this.tile_size/this.texture_size,this.px_nudge=.5/this.texture_size,this.gl=e,this.canvas=t,this.buffer_data=new Float32Array(8*u),this.light_data=new Float32Array(7*l),this.renderer_init(),console.log("WebGL handler v.0.1 - ready")}return e.prototype.load_image=function(e,t){var r=new Image;r.src="m/"+e+".png",r.onload=t},e.prototype.push_quad=function(e,t,r,n,i,o,a,u,l,c,s,f,h,_,d,v){var p=v*this.tile_fraction+this.px_nudge;this.buffer_data.set([e,t,r,p,0,h,_,d,n,i,o,p+this.tile_fraction-this.px_nudge,0,h,_,d,a,u,l,p,1,h,_,d,n,i,o,p+this.tile_fraction-this.px_nudge,0,h,_,d,a,u,l,p,1,h,_,d,c,s,f,p+this.tile_fraction-this.px_nudge,1,h,_,d],8*this.num_verts),this.num_verts+=6},e.prototype.renderer_init=function(){var e=this.gl,t=this.vertex_buffer,r=this.buffer_data,n=this.shaderProgram,i=this.vertexShader,o=this.fragmentShader,u=this.canvas;t=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,r,e.DYNAMIC_DRAW),n=e.createProgram(),i=c(e,e.VERTEX_SHADER,a.U_VERTEX_SHADER),e.attachShader(n,i),o=c(e,e.FRAGMENT_SHADER,a.U_FRAGMENT_SHADER),e.attachShader(n,o),e.linkProgram(n),e.useProgram(n),this.camera_uniform=e.getUniformLocation(n,"cam"),this.light_uniform=e.getUniformLocation(n,"l"),e.enable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.viewport(0,0,u.width,u.height),s(e,"p",3,8,0,n),s(e,"uv",2,8,3,n),s(e,"n",3,8,5,n)},e.prototype.renderer_bind_image=function(e){var t=this.gl,r=t.TEXTURE_2D;t.bindTexture(r,t.createTexture()),t.texImage2D(r,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.texParameteri(r,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(r,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(r,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(r,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},e.prototype.renderer_prepare_frame=function(){this.num_verts=0,this.num_lights=0,this.light_data.fill(1)},e.prototype.renderer_end_frame=function(){var e=this.gl;e.uniform3f(this.camera_uniform,this.camera.x,this.camera.y-10,this.camera.z-30),e.uniform1fv(this.light_uniform,this.light_data),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.bufferData(e.ARRAY_BUFFER,this.buffer_data,e.DYNAMIC_DRAW),e.drawArrays(e.TRIANGLES,0,this.num_verts)},e.prototype.load_level=function(e){var t=this;this.load_image(e,function(){console.log(t)})},e.prototype.thick=function(){var e=performance.now();this.time_last;this.time_last=e,this.renderer_prepare_frame(),this.renderer_end_frame(),requestAnimationFrame(this.thick)},e}(),h=function(){function e(e){this.canvas=e,this.resizeCanvas(),window.addEventListener("resize",this.resizeCanvas,!1),this.ctx=e.getContext("webgl")||e.getContext("experimental-webgl"),this.audioSystem=new o.default,this.glWrap=new f(this.ctx,e)}return e.prototype.preload=function(){return n(this,void 0,void 0,function(){var e=this;return i(this,function(t){return[2,new Promise(function(t,r){console.log("import texture"),console.log("load music"),console.log("load level"),e.glWrap.load_level("l1"),t()})]})})},e.prototype.resizeCanvas=function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},e.prototype.draw=function(){},e.prototype.playLoadingScreen=function(){return n(this,void 0,void 0,function(){var e=this;return i(this,function(t){return[2,new Promise(function(t,r){e.ctx;t()})]})})},e}();t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(){}}();t.default=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEF_VERTEX_SHADER="attribute vec2 coordinates;void main(void) { gl_Position = vec4(coordinates, 0.0, 1.0);}",t.DEF_FRAGMENT_SHADER="void main(void) { gl_FragColor = vec4(0, 0.8, 0, 1);}";var n="precision highp float;varying vec3 vl;varying vec2 vuv;";t.U_VERTEX_SHADER=n+"attribute vec3 p;attribute vec2 uv;attribute vec3 n;uniform vec3 cam;uniform float l[7*32];const mat4 v=mat4(1,0,0,0,0,.707,.707,0,0,-.707,.707,0,0,-22.627,-22.627,1);const mat4 r=mat4(.977,0,0,0,0,1.303,0,0,0,0,-1,-1,0,0,-2,0);void main(void){vl=vec3(0.3,0.3,0.6);for(int i=0; i<32; i++) {vec3 lp=vec3(l[i*7],l[i*7+1],l[i*7+2]);vl+=vec3(l[i*7+3],l[i*7+4],l[i*7+5])*max(dot(n,normalize(lp-p)),0.)*(1./(l[i*7+6]*(length(lp-p))));}vuv=uv;gl_Position=r*v*(vec4(p+cam,1.));}",t.U_FRAGMENT_SHADER=n+"uniform sampler2D s;void main(void){vec4 t=texture2D(s,vuv);if(t.a<.8)discard;if(t.r>0.95&&t.g>0.25&&t.b==0.0)gl_FragColor=t;else{gl_FragColor=t*vec4(vl,1.);gl_FragColor.rgb*=smoothstep(112.,16.,gl_FragCoord.z/gl_FragCoord.w);}gl_FragColor.rgb=floor(gl_FragColor.rgb*6.35)/6.35;}"}]);