import { definition } from "./definition";
export const gameSetPlayerPositionY = (Blockly) => {
  Blockly.Blocks["game_set_player_position_y"] = {
    init: function () {
      this.jsonInit(definition);
    },
  };

  Blockly.JavaScript["game_set_player_position_y"] = function (block) {
    const y =
      Blockly.JavaScript.valueToCode(
        block,
        "y",
        Blockly.JavaScript.ORDER_ATOMIC
      ) || 0;

    return `engine.setPlayerPosition(undefined,${y});\n`;
  };
};
