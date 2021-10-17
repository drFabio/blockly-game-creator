import { definition } from "./definition";
export const playerDeadChicken = (Blockly) => {
  Blockly.Blocks["game_dead_chicken"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript["game_dead_chicken"] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "PLAYER_DEAD_CHICKEN";
    return code;
  };
};
