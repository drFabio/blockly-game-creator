import { definition } from './definition';

export const gameMoveObstacleY = (Blockly) => {
  Blockly.Blocks['game_move_obstacle_y'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_move_obstacle_y'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Change ORDER_NONE to the correct strength.
    return `engine.moveObstacleY(${y})`;
  };
};
