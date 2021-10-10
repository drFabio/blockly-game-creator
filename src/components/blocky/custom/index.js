import { gameSetup } from './gameSetup';
import { playerDuck } from './playerDuck';
import { playerChicken } from './playerChicken';
import { overWrite } from './overWrite';
import { backgroundColor } from './backgroundColor';

export function initializeCustomBlocks(Blockly) {
  gameSetup(Blockly);
  playerDuck(Blockly);
  playerChicken(Blockly);
  overWrite(Blockly);
  backgroundColor(Blockly);
}
