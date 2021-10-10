import { definition } from './definition';
export const canvasSetTextAlign = (Blockly) => {
  Blockly.Blocks['canvas_set_text_align'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['canvas_set_text_align'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const align = block.getFieldValue('align');
    return `engine.setTextAlign('${align}');\n`;
  };
};
