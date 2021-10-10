export class Engine {
  canvas;
  ctx;
  textSizeInPercentage = 5;
  textCursor = [0, 0];

  resize(width, height) {
    if (!width && !height) {
      return;
    }
    const newSize = 100 * Math.floor(Math.min(height, width) / 100);
    if (newSize === this.size) return;
    this.size = newSize;
    console.log(`Resizing canvas to ${newSize}`);
    this.canvas.setAttribute('width', `${newSize}px`);
    this.canvas.setAttribute('height', `${newSize}px`);
  }
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.ctx.font = '20px arial';
  }
  drawImage(src, x, y, width = undefined, height = undefined) {
    const drawing = new Image();
    drawing.src = src; // can also be a remote URL e.g. http://
    drawing.onload = () => {
      this.ctx.drawImage(drawing, x, y, drawing.width, drawing.height, 0, 0, width, height);
    };
  }

  proccessBlocks(code) {
    const engine = this;
    console.log(`Interpreting code \n${code}`);
    try {
      eval(code);
    } catch (error) {}
  }

  drawBackground(color) {
    const { ctx, size } = this;
    ctx.fillStyle = color;
    console.log({ color, size });
    ctx.fillRect(0, 0, size, size);
  }

  writeText(text) {
    const { ctx, canvas } = this;
    ctx.font = '30px Comic Sans MS';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }
  promptText(text) {}
}
