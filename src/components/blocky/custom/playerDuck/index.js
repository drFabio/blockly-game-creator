import { definition } from './definition';
export const playerDuck = (Blockly) => {
  Blockly.Blocks['game_duck'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_duck'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'PLAYER_DUCK';
    return code;
  };
};
