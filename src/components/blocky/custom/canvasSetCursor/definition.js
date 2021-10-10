export const definition = {
  type: 'canvas_set_cursor',
  message0: 'Set Text Cursor %1 X %2 Y %3',
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
  colour: 230,
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null,
};
