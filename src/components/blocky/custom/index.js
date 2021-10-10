import { gameSetup } from './gameSetup';
import { playerDuck } from './playerDuck';
import { playerChicken } from './playerChicken';
import { overWrite } from './overWrite';
import { backgroundColor } from './backgroundColor';
import { textSize } from './textSize';
import { canvasWidth } from './canvasWidth';
import { canvasHeight } from './canvasHeight';

export function initializeCustomBlocks(Blockly) {
  gameSetup(Blockly);
  playerDuck(Blockly);
  playerChicken(Blockly);
  overWrite(Blockly);
  backgroundColor(Blockly);
  textSize(Blockly);
  canvasWidth(Blockly);
  canvasHeight(Blockly);
}
