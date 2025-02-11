precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float wave = sin(uv.x * 6.0 + u_time * 0.5) * cos(uv.y * 6.0 + u_time * 0.3);

  vec3 color = vec3(sin(u_time + uv.x * 3.0) * 0.5 + 0.5, sin(u_time + uv.y * 3.0) * 0.5 + 0.5, sin(u_time + uv.x * 3.0 + uv.y * 3.0) * 0.5 + 0.5);

  gl_FragColor = vec4(color * 0.3 + wave * 0.1, 0.2);
}