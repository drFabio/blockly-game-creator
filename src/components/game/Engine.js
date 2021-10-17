import duckImage from "/images/duck.png";
import chickenImage from "/images/chicken.png";
import deadDuckImage from "/images/deadDuck.png";
import deadChickenImage from "/images/deadChicken.png";

const PLAYER_DUCK = Symbol("PLAYER_DUCK");
const PLAYER_CHICKEN = Symbol("PLAYER_CHICKEN");
const PLAYER_DEAD_DUCK = Symbol("PLAYER_DEAD_DUCK");
const PLAYER_DEAD_CHICKEN = Symbol("PLAYER_DEAD_CHICKEN");

const imageMap = {
  [PLAYER_DUCK]: duckImage,
  [PLAYER_CHICKEN]: chickenImage,
  [PLAYER_DEAD_DUCK]: deadDuckImage,
  [PLAYER_DEAD_CHICKEN]: deadChickenImage,
};
export class Engine {
  canvas;
  ctx;
  textSizeInPercentage = 5;
  textCursor = [0, 0];
  textColor = "black";
  textAlign = "left";
  customCursor = false;
  scenario = {};
  currentScenario = {};
  currentCode;
  isGameRunning = false;
  playerPosition = [10, 10];
  playerSize = 10;
  withinObstacleGuard = false;
  obstacles = [];
  gameInterval;
  enemyInterval;
  onGameStart = () => {};
  onGameEnd = () => {};
  handleStart() {
    console.log(`Will start interactions`);
    this.proccessBlocks(this.currentCode);
  }
  startGame() {
    console.log(`Should start the game with `, this.currentScenario);
    this.scenario = { ...this.currentScenario };
    if (!this.scenario || this.isGameRunning) {
      return;
    }
    this.onGameStart();
    console.log(`Starting game`);
    this.isGameRunning = true;
    this.obstacles = [];
    try {
      console.log(`Calling onStart`, this.scenario.onStart);
      this.intepretCode(this.scenario.onStart());
      this.renderFrame();
      this.gameInterval = setInterval(() => {
        this.intepretCode(this.scenario.onUpdate());
        this.renderFrame();
      }, this.scenario.initialSpeed || 500);
      this.enemyInterval = setInterval(() => {
        this.intepretCode(this.scenario.onEnemyGeneration());
        this.renderFrame();
      }, this.scenario.enemyGenerationSpeed || 500);
    } catch (error) {
      console.error(error);
    }
  }
  listenToKeys(ev) {
    if (ev.code === "Enter") {
      this.startGame();
    }
    const { scenario } = this;
    if (!this.isGameRunning) return;
    try {
      if (ev.code === "ArrowUp") {
        this.intepretCode(scenario.onUpKey());
      }
      if (ev.code === "ArrowDown") {
        this.intepretCode(scenario.onDownKey());
      }
      if (ev.code === "ArrowRight") {
        this.intepretCode(scenario.onForwardKey());
      }
      if (ev.code === "ArrowLeft") {
        this.intepretCode(scenario.onBackwardKey());
      }
    } catch (error) {
      console.error(error);
    }
  }
  resize(width, height) {
    if (!width && !height) {
      return;
    }
    const newSize = 100 * Math.floor(Math.min(height, width) / 100);
    if (newSize === this.size) return;
    this.size = newSize;
    console.log(`Resizing canvas to ${newSize}`);
    this.canvas.setAttribute("width", `${newSize}px`);
    this.canvas.setAttribute("height", `${newSize}px`);
    this.proccessBlocks(this.currentCode);
  }
  constructor(canvas, onGameStart, onGameEnd) {
    this.canvas = canvas;
    this.onGameStart = onGameStart;
    this.onGameEnd = onGameEnd;
    this.ctx = canvas.getContext("2d");
    this.ctx.font = "20px arial";
    document.addEventListener("keydown", this.listenToKeys.bind(this));
  }
  tearDown() {
    console.log(`Tearing game down`);
    this.clearGameLoop();
    document.removeEventListener("keydown", this.listenToKeys.bind(this));
  }
  clearGameLoop() {
    window.clearInterval(this.gameInterval);
    window.clearInterval(this.enemyInterval);
    this.isGameRunning = false;
  }
  drawImage(src, x, y, width = undefined, height = undefined) {
    const drawing = new Image();
    drawing.src = src; // can also be a remote URL e.g. http://
    drawing.onload = () => {
      this.ctx.drawImage(
        drawing,
        0,
        0,
        drawing.width,
        drawing.height,
        x,
        y,
        width,
        height
      );
    };
  }

  proccessBlocks(code) {
    const engine = this;
    const canvas = this.canvas;
    this.currentCode = code;
    console.log(`Interpreting code \n${code}`);
    this.textSizeInPercentage = 5;
    this.textCursor = [0, 0];
    this.textColor = "black";
    this.textAlign = "left";
    this.customCursor = false;
    this.playerPosition = [10, 10];
    this.playerSize = 10;
    this.intepretCode(code);
  }
  intepretCode(code) {
    "use strict";

    const engine = this;
    const canvas = this.canvas;
    if (engine && canvas) {
      // Useless if so optimization does not stip it
      try {
        eval(code);
      } catch (error) {
        console.error(error);
      }
    }
  }

  drawBackground(color) {
    if (!color) {
      color = this.backgroundColor;
    }
    if (!color) {
      return;
    }
    const { ctx, size } = this;
    ctx.fillStyle = color;
    this.backgroundColor = color;
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
        case "left":
          xPos = 0;
          break;
        case "center":
          xPos = canvas.width / 2;
          break;
        case "right":
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
    console.log(`settign scenario`, scenario);
    this.currentScenario = { ...scenario };
    const { player } = scenario;
    console.log({ player });
    this.renderGame(this.currentScenario);
  }

  renderGame(scenarioToRender) {
    try {
      const { player } = scenarioToRender;
      console.log(`rendering the game`, scenarioToRender);
      if (!player) {
        console.log(`No game without a  player`);
        return;
      }
      this.renderFrame(scenarioToRender);
    } catch (error) {
      console.error(error);
    }
  }
  getPlayerX() {
    return this.playerPosition[0];
  }
  getPlayerY() {
    return this.playerPosition[1];
  }
  setPlayerPosition(x, y) {
    if (typeof x === "undefined") {
      x = this.getPlayerX();
    }
    if (typeof y === "undefined") {
      y = this.getPlayerY();
    }
    this.playerPosition = [x, y];
    console.log(`Setting player to ${(x, y)}`);
    this.renderFrame();
  }
  renderPlayer(scenarioToRender) {
    const { player } = scenarioToRender || this.scenario;

    const { canvas, ctx } = this;

    const size = (canvas.height * this.playerSize) / 100;
    const [percentX, percentY] = this.playerPosition;
    // position is always in porcentages
    const x = Math.min(
      canvas.width,
      Math.max(0, (canvas.width * percentX) / 100 - size / 2)
    );
    const y = Math.min(
      canvas.height,
      Math.max(0, (canvas.height * percentY) / 100 - size / 2)
    );
    console.log(`SHOULD DEAW ${imageMap[player]}`, player);
    this.drawImage(imageMap[player], x, y, size, size);
  }
  setAvatar(newAvatar) {
    console.log(`SET AVATAR ,`, newAvatar);
    this.scenario.player = newAvatar;
  }

  renderFrame(scenarioToRender) {
    console.log(`Render frame`);
    const { ctx, canvas } = this;
    this.clearFrame();
    this.drawBackground();
    this.renderPlayer(scenarioToRender);
    this.obstacles.forEach(({ x, y, recWidth, recHeight, color }) => {
      this.drawRectangle(x, y, recWidth, recHeight, color, true);
    });
  }
  clearFrame() {
    const { ctx, canvas } = this;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();
  }
  drawRectangle(x, y, recWidth, recHeight, color, forceObstacle) {
    const { ctx, canvas } = this;
    const { height, width } = canvas;
    const isObstacle = forceObstacle || this.withinObstacleGuard;
    ctx.fillStyle = color;
    if (this.withinObstacleGuard) {
      this.obstacles.push({ x, y, recWidth, recHeight, color });
    }
    const absoluteX = (x * width) / 100;
    const absoluteY = (y * height) / 100;
    const absoluteWidth = (recWidth * width) / 100;
    const absoluteHeight = (recHeight * height) / 100;
    ctx.fillRect(absoluteX, absoluteY, absoluteWidth, absoluteHeight);

    if (isObstacle) {
      this.checkColision(absoluteX, absoluteY, absoluteWidth, absoluteHeight);
    }
  }

  checkColision(obstacleX, obstacleY, obstacleWidth, obstacleHeight) {
    if (!this.isGameRunning) {
      return;
    }
    const { canvas } = this;
    const size = (canvas.height * this.playerSize) / 100;
    const [percentX, percentY] = this.playerPosition;
    // position is always in porcentages
    const x = Math.min(
      canvas.width,
      Math.max(0, (canvas.width * percentX) / 100 - size / 2)
    );
    const y = Math.min(
      canvas.height,
      Math.max(0, (canvas.height * percentY) / 100 - size / 2)
    );

    if (
      x < obstacleX + obstacleWidth &&
      x + size > obstacleX &&
      y < obstacleY + obstacleHeight &&
      size + y > obstacleY
    ) {
      this.intepretCode(this.scenario.onColision());

      console.log("Colisao!");
    } else {
      console.log("SEM COLISAO", {
        x,
        y,
        size,
        obstacleX,
        obstacleY,
        obstacleWidth,
        obstacleHeight,
      });
    }
  }
  setObstacles(obstacleRender) {
    if (!obstacleRender) return;
    this.withinObstacleGuard = true;
    obstacleRender();
    this.withinObstacleGuard = false;
  }
  moveObstacleX(deltaX) {
    const { width } = this.canvas;

    const newObstacles = [];
    this.obstacles.forEach(({ x, recWidth, ...other }, index) => {
      const obstacle = { x: x + deltaX, recWidth, ...other };
      const absoluteX = (x * width) / 100;
      const absoluteWidth = (recWidth * width) / 100;
      if (absoluteX + absoluteWidth > 0) {
        newObstacles.push(obstacle);
      } else {
        console.log(`removing obstacle`);
      }
    });
    this.obstacles = newObstacles;
  }
  moveObstacleY(deltaY) {
    const { height } = this.canvas;

    const newObstacles = [];
    this.obstacles.forEach(({ y, recHeight, ...other }, index) => {
      const obstacle = { y: y + deltaY, recHeight, ...other };
      const absoluteY = (y * height) / 100;
      const absoluteHeight = (recHeight * height) / 100;
      if (absoluteY + absoluteHeight > 0) {
        newObstacles.push(obstacle);
      } else {
        console.log(`removing obstacle`);
      }
    });
    this.obstacles = newObstacles;
  }
  endGame() {
    this.clearGameLoop();
    window.setTimeout(() => {
      this.intepretCode(this.scenario.onEnd());
      this.renderFrame();
    }, 100);

    this.onGameEnd();
  }
}
