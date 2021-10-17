import src from "/images/deadChicken.svg";

export const definition = {
  type: "game_dead_chicken",
  message0: "Dead Chicken %1",
  args0: [
    {
      type: "field_image",
      src,
      width: 40,
      height: 40,
      alt: "dead chicken",
      flipRtl: false,
    },
  ],
  colour: "#FFAABB",
  tooltip: "",
  helpUrl: "",
  previousStatement: null,
};
