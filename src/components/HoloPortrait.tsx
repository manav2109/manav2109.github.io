import { useEffect, useRef } from 'react';

const VERT = `attribute vec2 a; varying vec2 v; void main(){ v=a; gl_Position=vec4(a,0.,1.); }`;

const FRAG = `
  precision highp float; varying vec2 v;
  uniform vec2 u_res; uniform vec2 u_mouse; uniform float u_t;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i=floor(p),f=fract(p); float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1)); vec2 u=f*f*(3.-2.*f); return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y; }
  vec3 holo(float h){
    h = mod(h, 1.0);
    vec3 a = vec3(1.00, 0.48, 0.90);
    vec3 b = vec3(0.00, 0.20, 1.00);
    vec3 c = vec3(0.47, 0.89, 1.00);
    vec3 d = vec3(0.71, 1.00, 0.69);
    vec3 e = vec3(1.00, 0.83, 0.00);
    if (h < 0.25)      return mix(a, b, h / 0.25);
    else if (h < 0.50) return mix(b, c, (h - 0.25) / 0.25);
    else if (h < 0.75) return mix(c, d, (h - 0.50) / 0.25);
    else               return mix(d, e, (h - 0.75) / 0.25);
  }
  void main(){
    vec2 uv = (gl_FragCoord.xy / u_res.xy) * 2.0 - 1.0;
    uv.x *= u_res.x / u_res.y;
    vec2 mo = (u_mouse / u_res.xy) * 2.0 - 1.0;
    mo.x *= u_res.x / u_res.y; mo.y = -mo.y;
    float t = u_t * 0.0002;
    vec2 p1 = vec2(sin(t*1.3)*0.6, cos(t*1.1)*0.5);
    vec2 p2 = vec2(cos(t*0.9)*0.7, sin(t*1.7)*0.4 + 0.2);
    float d1 = 0.20 / (length(uv - p1) + 0.05);
    float d2 = 0.18 / (length(uv - p2) + 0.05);
    float dm = 0.22 / (length(uv - mo) + 0.05);
    float field = d1 + d2 + dm * 0.5;
    float n = noise(uv * 1.6 + t * 5.0);
    field += n * 0.18;
    float hue = fract(field * 0.18 + t * 0.6);
    vec3 col = holo(hue);
    col = pow(col, vec3(0.85));
    col -= mod(gl_FragCoord.y, 2.0) < 1.0 ? 0.04 : 0.0;
    gl_FragColor = vec4(col, 1.0);
  }
`;

/**
 * WebGL holographic portrait. Renders just the <canvas>; the parent (.portrait-frame)
 * provides the framed container, corner crop marks, and the hover surface for the shader.
 * Falls back to a CSS gradient on the parent if WebGL isn't available.
 */
export function HoloPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const wrapper = canvas.parentElement;
    if (!wrapper) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: true });
    if (!gl) {
      wrapper.style.background =
        'linear-gradient(135deg, #ff7ae6 0%, #0033ff 35%, #79e4ff 65%, #b6ffb0 100%)';
      return;
    }

    const compile = (type: number, source: string) => {
      const sh = gl.createShader(type);
      if (!sh) throw new Error('Failed to create shader');
      gl.shaderSource(sh, source);
      gl.compileShader(sh);
      return sh;
    };

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const a = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(a);
    gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');
    const uT = gl.getUniformLocation(prog, 'u_t');

    let lmx = 0;
    let lmy = 0;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      lmx = e.clientX - r.left;
      lmy = e.clientY - r.top;
    };
    wrapper.addEventListener('mousemove', onMove);

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    fit();

    const start = performance.now();
    let raf = 0;
    const frame = () => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(
        uMouse,
        lmx * (canvas.width / canvas.clientWidth),
        lmy * (canvas.height / canvas.clientHeight),
      );
      gl.uniform1f(uT, performance.now() - start);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      wrapper.removeEventListener('mousemove', onMove);
      ro.disconnect();
      cancelAnimationFrame(raf);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={canvasRef} id="holoCanvas" />;
}
