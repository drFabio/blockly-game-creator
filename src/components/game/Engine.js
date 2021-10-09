export class Engine {
  canvas;
  ctx;
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }
  drawImage(src, x, y, width = undefined, height = undefined) {
    const drawing = new Image();
    drawing.src = src; // can also be a remote URL e.g. http://
    drawing.onload = () => {
      this.ctx.drawImage(drawing, x, y, drawing.width, drawing.height, 0, 0, width, height);
    };
  }
}
