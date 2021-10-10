import duckImage from '/images/duck.png';

export const definition = {
  type: 'game_duck',
  message0: 'Duck %1',
  args0: [
    {
      type: 'field_image',
      src: duckImage,
      width: 40,
      height: 40,
      alt: 'duck',
      flipRtl: false,
    },
  ],
  colour: 230,
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
  nextStatement: null,
};
