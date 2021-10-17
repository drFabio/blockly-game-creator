export const definition = {
  type: "game_setup",
  colour: "#FFAABB",
  hat: "cap",
  message0:
    "Game setup %1 initial speed %2 Enemy generation speed %3  target generation speed %4 %5 player %6 on start %7 on update %8 onEnemyGeneration %9 on end %10 on colision %11 on up key %12 on down key %13 on forward key %14 on back key %15 on obstacle outside %16  on target generation %17  on target grabbed %18",
  args0: [
    {
      type: "input_dummy",
    },
    {
      type: "input_value",
      name: "initialSpeedDefault",
    },
    {
      type: "input_value",
      name: "enemyGenerationSpeed",
      check: "Number",
    },
    {
      type: "input_value",
      name: "targetGenerationSpeed",
      check: "Number",
    },
    {
      type: "input_dummy",
    },
    {
      type: "input_statement",
      name: "player",
      check: [
        "game_duck",
        "game_chicken",
        "game_dead_duck",
        "game_dead_chicken",
      ],
    },
    {
      type: "input_statement",
      name: "onStart",
    },
    {
      type: "input_statement",
      name: "onUpdate",
    },
    {
      type: "input_statement",
      name: "onEnemyGeneration",
    },
    {
      type: "input_statement",
      name: "onEnd",
    },
    {
      type: "input_statement",
      name: "onColision",
    },
    {
      type: "input_statement",
      name: "onUp",
    },
    {
      type: "input_statement",
      name: "onDown",
    },
    {
      type: "input_statement",
      name: "onForward",
    },
    {
      type: "input_statement",
      name: "onBackward",
    },
    {
      type: "input_statement",
      name: "onObstacleOutside",
    },
    {
      type: "input_statement",
      name: "onTargetGenerated",
    },
    {
      type: "input_statement",
      name: "onTargetGrabbed",
    },
  ],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  tooltip: "Configures the game settings",
  helpUrl: "",
};
