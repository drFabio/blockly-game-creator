import { definition } from './definition';
export const gameSetup = (Blockly) => {
  Blockly.Blocks['game_setup'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_setup'] = function (block) {
    const text_initialspeeddefault = block.getFieldValue('initialSpeedDefault');
    const player = Blockly.JavaScript.statementToCode(block, 'player');
    var statements_onstart = Blockly.JavaScript.statementToCode(block, 'onStart');
    var statements_onupdate = Blockly.JavaScript.statementToCode(block, 'onUpdate');
    var statements_onend = Blockly.JavaScript.statementToCode(block, 'onEnd');
    const onUpKey = Blockly.JavaScript.statementToCode(block, 'onUp');
    const onDownKey = Blockly.JavaScript.statementToCode(block, 'onDown');
    const onForwardKey = Blockly.JavaScript.statementToCode(block, 'onForward');
    const onBackwardKey = Blockly.JavaScript.statementToCode(block, 'onBackward');
    // TODO: Assemble JavaScript into code variable.
    console.log({ onUpKey });
    var code = `engine.setScenario(
      {
        player: ${player},
        onUpKey: () => {
          ${onUpKey}
        },
        onDownKey: () => {
          ${onDownKey}
        },
        onForwardKey: () => {
          ${onForwardKey}
        },
        onBackwardKe: () => {
          ${onBackwardKey}
        }
      });\n`;
    return code;
  };
};
