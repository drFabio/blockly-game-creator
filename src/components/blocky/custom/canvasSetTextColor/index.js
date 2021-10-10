import { definition } from './definition';
export const canvasSetTextColor = (Blockly) => {
  Blockly.Blocks['canvas_set_text_color'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_set_text_color'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const color = Blockly.JavaScript.valueToCode(block, 'textColor', Blockly.JavaScript.ORDER_NONE) || "''";
    var code = `engine.setTextColor(${color});\n`;
    return code;
  };
};
