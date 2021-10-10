import src from '/images/chicken.png';

export const definition = {
  type: 'game_chicken',
  message0: 'Chicken %1',
  args0: [
    {
      type: 'field_image',
      src,
      width: 40,
      height: 40,
      alt: 'chicken',
      flipRtl: false,
    },
  ],
  colour: '#FFAABB',
  tooltip: '',
  helpUrl: '',
  previousStatement: null,
};
