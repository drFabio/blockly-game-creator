import { definition } from './definition';
export const gameSetPlayerPosition = (Blockly) => {
  Blockly.Blocks['game_set_player_position'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };

  Blockly.JavaScript['game_set_player_position'] = function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `engine.setPlayerPosition(${x}, ${y});\n`;
  };
};
