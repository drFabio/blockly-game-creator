import { definition } from './definition';
export const backgroundColor = (Blockly) => {
  Blockly.Blocks['canvas_background_color'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_background_color'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const color = Blockly.JavaScript.valueToCode(block, 'backgroundColor', Blockly.JavaScript.ORDER_NONE) || "''";
    var code = `engine.drawBackground(${color});\n`;
    return code;
  };
};
