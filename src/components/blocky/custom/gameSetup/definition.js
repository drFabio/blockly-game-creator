export const definition = {
  type: 'game_setup',
  colour: '#FFAABB',
  hat: 'cap',
  message0:
    'Game setup %1 initial speed %2 %3 player %4 on update %5 on up key %6 on down key %7 on forward key %8 on back key %9',
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
    },
    {
      type: 'input_statement',
      name: 'onUpdate',
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
  tooltip: 'Configures the game settings',
  helpUrl: '',
};
