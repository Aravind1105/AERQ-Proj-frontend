export enum Options {
  // add new options here
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSOR = "SCISSOR",
  PENCIL = "PENCIL",
}

export const RuleDefinitions = {
  // add rule definitions here for new options
  [Options.ROCK]: {
    [Options.SCISSOR]: `Because ${Options.ROCK} makes the ${Options.SCISSOR} dull`,
    [Options.PENCIL]: `Because ${Options.ROCK} breaks ${Options.PENCIL}`,
  },
  [Options.SCISSOR]: {
    [Options.PENCIL]: `Because ${Options.SCISSOR} makes the ${Options.PENCIL} dull`,
    [Options.PAPER]: `Because ${Options.SCISSOR} cuts ${Options.PAPER}`,
  },
  [Options.PENCIL]: {
    [Options.PAPER]: `Because ${Options.PENCIL} writes on ${Options.PAPER}`,
  },
  [Options.PAPER]: {
    [Options.ROCK]: `Because ${Options.PAPER} wraps around ${Options.ROCK}`,
  },
};

export const Paths = {
  GAME_TYPE: "/game/type",
  GAME_START: "/game/start",
};

export const Variables = {
  PLAYER_VS_COMP: {
    type: "playvscomp",
    players: {
      play1: "Player",
      play2: "Computer",
    },
  },
  COMP_VS_COMP: {
    type: "compvscomp",
    players: {
      play1: "Computer 1",
      play2: "Computer 2",
    },
  },
};
