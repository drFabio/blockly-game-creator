export const definition = {
  type: 'canvas_draw_rectangle',
  message0: 'drawRectangle %1 x %2 y %3 width %4 height %5 Colour %6',
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
    {
      type: 'input_value',
      name: 'width',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'height',
      check: 'Number',
    },
    {
      type: 'input_value',
      name: 'color',
      check: 'Colour',
    },
  ],
  colour: '#6600cc',
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null,
};
