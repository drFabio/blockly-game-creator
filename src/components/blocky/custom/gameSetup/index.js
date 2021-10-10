import { definition } from './definition';
export const gameSetup = (Blockly) => {
  Blockly.Blocks['game_setup'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_setup'] = function (block) {
    const initialSpeed = block.getFieldValue('initialSpeedDefault');
    const player = Blockly.JavaScript.statementToCode(block, 'player');
    var onStart = Blockly.JavaScript.statementToCode(block, 'onStart');
    var onUpdate = Blockly.JavaScript.statementToCode(block, 'onUpdate');
    var onEnd = Blockly.JavaScript.statementToCode(block, 'onEnd');
    const onUpKey = Blockly.JavaScript.statementToCode(block, 'onUp');
    const onDownKey = Blockly.JavaScript.statementToCode(block, 'onDown');
    const onForwardKey = Blockly.JavaScript.statementToCode(block, 'onForward');
    const onBackwardKey = Blockly.JavaScript.statementToCode(block, 'onBackward');
    const onColision = Blockly.JavaScript.statementToCode(block, 'onColision');
    console.log({ onColision });
    // TODO: Assemble JavaScript into code variable.
    var code = `engine.setScenario(
      {
        initialSpeed: ${initialSpeed},
        player: ${player},
        onStart: () => {
          ${onStart}
        },
        onUpdate: () => {
          ${onUpdate}
        },
        onEnd: () => {
          ${onEnd}
        },
        onUpKey: () => {
          ${onUpKey}
        },
        onDownKey: () => {
          ${onDownKey}
        },
        onForwardKey: () => {
          ${onForwardKey}
        },
        onBackwardKey: () => {
          ${onBackwardKey}
        },
        onColision: () => {
          ${onColision}
        }
      });\n`;
    return code;
  };
};
