export const definition = {
  type: 'game_set_player_position',
  message0: 'Set Player position %1 X %2 Y %3',
  args0: [
    {
      type: 'input_dummy',
    },
    {
      type: 'input_value',
      name: 'x',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'y',
      check: 'Number',
    },
  ],
  colour: '#FFAABB',
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null,
};
