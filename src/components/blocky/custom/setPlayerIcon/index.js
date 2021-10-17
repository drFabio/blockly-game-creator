import { definition } from "./definition";
export const setPlayerIcon = (Blockly) => {
  Blockly.Blocks["game_set_player_icon"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };

  Blockly.JavaScript["game_set_player_icon"] = function (block) {
    const avatar = Blockly.JavaScript.statementToCode(block, "playerIcon");
    return `engine.setAvatar(${avatar});\n`;
  };
};
