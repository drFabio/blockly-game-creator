import { definition } from "./definition";
export const playerDeadDuck = (Blockly) => {
  Blockly.Blocks["game_dead_duck"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript["game_dead_duck"] = function (block) {
    return "PLAYER_DEAD_DUCK";
  };
};
