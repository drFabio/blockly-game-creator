import { definition } from "./definition";

export const gameTarget = (Blockly) => {
  Blockly.Blocks["game_target"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript["game_target"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const target = Blockly.JavaScript.statementToCode(block, "target");
    // TODO: Assemble JavaScript into code variable.
    return `
    engine.setTarget(() => {
      ${target}
    })
    ;\n`;
  };
};
