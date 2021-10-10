export const definition = {
  type: 'canvas_set_text_align',
  message0: 'setTextAlign %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'align',
      options: [
        ['left', 'left'],
        ['right', 'right'],
        ['center', 'center'],
      ],
    },
  ],
  previousStatement: null,
  nextStatement: null,
  colour: '#6600cc',
  tooltip: '',
  helpUrl: '',
};
