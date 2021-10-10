import { definition } from './definition';

export const canvasDrawRectangle = (Blockly) => {
  Blockly.Blocks['canvas_draw_rectangle'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_draw_rectangle'] = function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    const width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
    const height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
    const color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    return `engine.drawRectangle(${x || 0}, ${y || 0}, ${width || 0}, ${height || 0}, ${color})`;
  };
};
