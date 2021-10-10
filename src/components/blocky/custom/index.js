import { gameSetup } from './gameSetup';
import { playerDuck } from './playerDuck';
import { playerChicken } from './playerChicken';
import { overWrite } from './overWrite';
import { backgroundColor } from './backgroundColor';
import { textSize } from './textSize';
import { canvasWidth } from './canvasWidth';
import { canvasHeight } from './canvasHeight';
import { canvasSetTextColor } from './canvasSetTextColor';
import { canvasSetCursor } from './canvasSetCursor';
import { canvasSetTextAlign } from './canvasSetTextAlign';
import { playerX } from './playerX';
import { playerY } from './playerY';
import { gameSetPlayerPosition } from './gameSetPlayerPosition';

export function initializeCustomBlocks(Blockly) {
  gameSetup(Blockly);
  playerDuck(Blockly);
  playerChicken(Blockly);
  overWrite(Blockly);
  backgroundColor(Blockly);
  textSize(Blockly);
  canvasWidth(Blockly);
  canvasHeight(Blockly);
  canvasSetCursor(Blockly);
  canvasSetTextAlign(Blockly);
  canvasSetTextColor(Blockly);
  playerY(Blockly);
  playerX(Blockly);
  gameSetPlayerPosition(Blockly);
}
