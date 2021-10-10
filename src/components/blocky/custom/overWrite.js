export function overWrite(Blockly) {
  Blockly.JavaScript['text_print'] = function (block) {
    const msg = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "''";
    return `engine.writeText(${msg});\n`;
  };
}
