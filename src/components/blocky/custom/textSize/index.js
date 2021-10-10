import { definition } from './definition';
export const textSize = (Blockly) => {
  Blockly.Blocks['canvas_text_size'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_text_size'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const size = Blockly.JavaScript.valueToCode(block, 'textSize', Blockly.JavaScript.ORDER_NONE) || "''";
    var code = `engine.setTextSize(${size});\n`;
    return code;
  };
};
