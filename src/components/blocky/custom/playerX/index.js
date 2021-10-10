import { definition } from './definition';

export const playerX = (Blockly) => {
  Blockly.Blocks['player_x'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['player_x'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const code = 'engine.getPlayerX()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
};
