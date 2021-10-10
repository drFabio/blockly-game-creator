import duckImage from '/images/duck.png';
import chickenImage from '/images/chicken.png';

const PLAYER_DUCK = Symbol('PLAYER_DUCK');
const PLAYER_CHICKEN = Symbol('PLAYER_CHICKEN');

const imageMap = {
  [PLAYER_DUCK]: duckImage,
  [PLAYER_CHICKEN]: chickenImage,
};
export class Engine {
  canvas;
  ctx;
  textSizeInPercentage = 5;
  textCursor = [0, 0];
  textColor = 'black';
  textAlign = 'left';
  customCursor = false;
  scenario = {};
  currentCode;

  handleStart() {
    console.log(`Will start interactions`);
    this.proccessBlocks(this.currentCode);
  }
  listenToKeys() {}
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
    this.proccessBlocks(this.currentCode);
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
    const canvas = this.canvas;
    this.currentCode = code;
    console.log(`Interpreting code \n${code}`);
    this.textSizeInPercentage = 5;
    this.textCursor = [0, 0];
    this.textColor = 'black';
    this.textAlign = 'left';
    this.customCursor = false;
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
    const textSize = (canvas.height * this.textSizeInPercentage) / 100;
    ctx.font = `${textSize}px Arial`;
    ctx.fillStyle = this.textColor;
    ctx.textAlign = this.textAlign;
    const [x, y] = this.textCursor;

    let xPos = x;
    if (!this.customCursor) {
      switch (this.textAlign) {
        case 'left':
          xPos = 0;
          break;
        case 'center':
          xPos = canvas.width / 2;
          break;
        case 'right':
          xPos = canvas.width;
          break;
      }
    }
    ctx.fillText(text, xPos, y + textSize);
    this.textCursor[1] = y + textSize;

    this.customCursor = false;
  }
  setTextSize(size) {
    this.textSizeInPercentage = size;
  }
  setTextAlign(align) {
    this.textAlign = align;
  }
  setCursor(x = 0, y = 0) {
    this.textCursor = [x, y];
    this.customCursor = true;
  }

  setTextColor(color) {
    this.textColor = color;
  }

  setPlayer(player) {
    this.player = player;
  }

  setScenario(scenario) {
    this.scenario = { playerSize: 10, ...scenario };
    const { player } = scenario;
    console.log({ player });
    this.renderGame(this.scenario);
  }

  renderGame(scenario) {
    const { canvas } = this;
    const { player, playerSize } = scenario;
    console.log(`rendering the game`, scenario);
    if (!player) {
      console.log(`No game without a  player`);
      return;
    }
    const size = (canvas.height * playerSize) / 100;
    console.log({ size, image: imageMap[player] });
    this.drawImage(imageMap[player], 10, 10, size, size);
  }
}
