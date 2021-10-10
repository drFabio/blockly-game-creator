import { definition } from './definition';

export const gameMoveObstacleX = (Blockly) => {
  Blockly.Blocks['game_move_obstacle_x'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_move_obstacle_x'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Change ORDER_NONE to the correct strength.
    return `engine.moveObstacleX(${x})`;
  };
};
