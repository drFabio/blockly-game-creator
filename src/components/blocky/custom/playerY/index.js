import { definition } from './definition';

export const playerY = (Blockly) => {
  Blockly.Blocks['player_y'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['player_y'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const code = 'engine.getPlayerY()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
};
