import { definition } from './definition';

export const gameObstacle = (Blockly) => {
  Blockly.Blocks['game_obstacle'] = {
    init: function () {
      this.jsonInit(definition);
    },
  };
  Blockly.JavaScript['game_obstacle'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    const obstacles = Blockly.JavaScript.statementToCode(block, 'obstacle');
    // TODO: Assemble JavaScript into code variable.
    return `
    engine.setObstacles(() => {
      ${obstacles}
    })
    ;\n`;
  };
};
