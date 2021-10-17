import duckImage from "/images/deadDuck.svg";

export const definition = {
  type: "game_dead_duck",
  message0: "Dead Duck %1",
  args0: [
    {
      type: "field_image",
      src: duckImage,
      width: 40,
      height: 40,
      alt: "dead duck",
      flipRtl: false,
    },
  ],
  colour: "#FFAABB",
  tooltip: "",
  helpUrl: "",
  previousStatement: null,
};
