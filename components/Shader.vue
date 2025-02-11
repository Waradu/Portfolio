<template>
  <canvas id="shaderCanvas"></canvas>
</template>

<script lang="ts" setup>
import vertexShaderSource from "~/assets/shader/vertex.glsl?raw";
import fragmentShaderSource from "~/assets/shader/fragment.glsl?raw";

onMounted(() => {
  const canvas = document.getElementById("shaderCanvas") as HTMLCanvasElement;

  if (!canvas) return;

  const gl = canvas.getContext("webgl");

  if (!gl) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);

  function compileShader(source: string, type: number) {
    if (!gl) return;

    const shader = gl.createShader(type);

    if (!shader) return;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  }

  const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
  const fragmentShader = compileShader(
    fragmentShaderSource,
    gl.FRAGMENT_SHADER
  );

  if (!vertexShader || !fragmentShader) return;

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );

  const positionLocation = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const timeUniform = gl.getUniformLocation(program, "u_time");
  const resolutionUniform = gl.getUniformLocation(program, "u_resolution");
  gl.uniform2f(resolutionUniform, canvas.width, canvas.height);

  function render(time: number) {
    if (!gl) return;

    gl.uniform1f(timeUniform, time * 0.001);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
});
</script>

<style lang="scss">
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  mix-blend-mode: multiply;
  z-index: 1000;
}
</style>
