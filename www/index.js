'use strict'

const DEFAULT_MAX_ITER = 64;
const mandelbrot = import("../crate/pkg").catch(console.error);

Promise.all([mandelbrot]).then(async function([
    { draw_mandelbrot_set }
]) {
  const canvas = document.getElementById("canvas_wasm");
  const maxIterRange = document.getElementById("max_iter_range");
  const maxIterDisplay = document.getElementById("max_iter_display");

  maxIterRange.value = DEFAULT_MAX_ITER;
  maxIterDisplay.textContent = DEFAULT_MAX_ITER;
  draw_mandelbrot_set(canvas, DEFAULT_MAX_ITER);
  maxIterRange.addEventListener("input", () => {
    const maxIter = maxIterRange.value;
    maxIterDisplay.textContent = maxIter;
    draw_mandelbrot_set(canvas, maxIter);
  });
});

