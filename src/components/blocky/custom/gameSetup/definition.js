export const definition = {
  type: 'game_setup',
  colour: '#FFAABB',
  hat: 'cap',
  message0:
    'Game setup %1 initial speed %2 %3 enemy_generation_speed %4 %5 player %6 on start %7 on update %8 onEnemyGeneration %9 on end %10 on colision %11 on up key %12 on down key %13 on forward key %14 on back key %15',
  args0: [
    {
      type: 'input_dummy',
    },
    {
      type: 'field_input',
      name: 'initialSpeedDefault',
      text: '500',
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'field_input',
      name: 'enemyGenerationSpeed',
      text: '500',
    },
    {
      type: 'input_dummy',
    },
    {
      type: 'input_statement',
      name: 'player',
      check: ['game_duck', 'game_chicken'],
    },
    {
      type: 'input_statement',
      name: 'onStart',
    },
    {
      type: 'input_statement',
      name: 'onUpdate',
    },
    {
      type: 'input_statement',
      name: 'onEnemyGeneration',
    },
    {
      type: 'input_statement',
      name: 'onEnd',
    },
    {
      type: 'input_statement',
      name: 'onColision',
    },
    {
      type: 'input_statement',
      name: 'onUp',
    },
    {
      type: 'input_statement',
      name: 'onDown',
    },
    {
      type: 'input_statement',
      name: 'onForward',
    },
    {
      type: 'input_statement',
      name: 'onBackward',
    },
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  tooltip: 'Configures the game settings',
  helpUrl: '',
};
