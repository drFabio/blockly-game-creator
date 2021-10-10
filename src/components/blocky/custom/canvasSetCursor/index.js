import { definition } from './definition';
export const canvasSetCursor = (Blockly) => {
  Blockly.Blocks['canvas_set_cursor'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };

  Blockly.JavaScript['canvas_set_cursor'] = function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `engine.setCursor(${x}, ${y});\n`;
  };
};
