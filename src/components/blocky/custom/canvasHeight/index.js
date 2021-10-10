import { definition } from './definition';

export const canvasHeight = (Blockly) => {
  Blockly.Blocks['canvas_height'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_height'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const code = 'canvas.width';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
};
