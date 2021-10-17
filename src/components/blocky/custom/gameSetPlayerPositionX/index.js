import { definition } from "./definition";
export const gameSetPlayerPositionX = (Blockly) => {
  Blockly.Blocks["game_set_player_position_x"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };

  Blockly.JavaScript["game_set_player_position_x"] = function (block) {
    const x =
      Blockly.JavaScript.valueToCode(
        block,
        "x",
        Blockly.JavaScript.ORDER_ATOMIC
      ) || 0;

    return `engine.setPlayerPosition(${x});\n`;
  };
};
