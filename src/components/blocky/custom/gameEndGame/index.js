import { definition } from './definition';

export const gameEndGame = (Blockly) => {
  Blockly.Blocks['game_end_game'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_end_game'] = function (block) {
    return `engine.endGame();\n`;
  };
};
