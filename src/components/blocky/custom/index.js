import { gameSetup } from './gameSetup';
import { playerDuck } from './playerDuck';
import { playerChicken } from './playerChicken';
export function initializeCustomBlocks(Blockly) {
  gameSetup(Blockly);
  playerDuck(Blockly);
  playerChicken(Blockly);
}
