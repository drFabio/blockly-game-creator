export const definition = {
  type: 'game_setup',
  colour: '#FFAABB',
  hat: 'cap',
  message0:
    'Game setup %1 initial speed %2 %3 player %4 on start %5 on update %6 on end %7 on up key %8 on down key %9 on forward key %10 on back key %11',
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
      name: 'onEnd',
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
