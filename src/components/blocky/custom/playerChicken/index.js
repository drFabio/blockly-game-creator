import { definition } from './definition';
export const playerChicken = (Blockly) => {
  Blockly.Blocks['game_chicken'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_chicken'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'PLAYER_CHICKEN';
    return code;
  };
};
