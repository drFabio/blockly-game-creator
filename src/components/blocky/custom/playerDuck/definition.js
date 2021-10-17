import duckImage from "/images/duck.svg";

export const definition = {
  type: "game_duck",
  message0: "Duck %1",
  args0: [
    {
      type: "field_image",
      src: duckImage,
      width: 40,
      height: 40,
      alt: "duck",
      flipRtl: false,
    },
  ],
  colour: "#FFAABB",
  tooltip: "",
  helpUrl: "",
  previousStatement: null,
};
