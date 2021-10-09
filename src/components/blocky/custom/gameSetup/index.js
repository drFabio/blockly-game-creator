import { definition } from './definition';
export const gameSetup = (Blockly) => {
  Blockly.Blocks['game_setup'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_setup'] = function (block) {
    const text_initialspeeddefault = block.getFieldValue('initialSpeedDefault');
    const statements_player = Blockly.JavaScript.statementToCode(block, 'player');
    const statements_onupdate = Blockly.JavaScript.statementToCode(block, 'onUpdate');
    const statements_onup = Blockly.JavaScript.statementToCode(block, 'onUp');
    const statements_ondown = Blockly.JavaScript.statementToCode(block, 'onDown');
    const statements_onforward = Blockly.JavaScript.statementToCode(block, 'onForward');
    const statements_onbackward = Blockly.JavaScript.statementToCode(block, 'onBackward');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
};
