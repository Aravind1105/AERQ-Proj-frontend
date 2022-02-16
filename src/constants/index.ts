export enum Options {
  // add new options here
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSOR = "SCISSOR",
  PENCIL = "PENCIL",
  ALMOND = "ALMOND",
}

export const RuleDefinitions = {
  // add rule definitions here for new options
  [Options.ROCK]: {
    [Options.SCISSOR]: `${Options.ROCK} makes the ${Options.SCISSOR} dull`,
    [Options.PENCIL]: `${Options.ROCK} breaks ${Options.PENCIL}`,
  },
  [Options.SCISSOR]: {
    [Options.PENCIL]: `${Options.SCISSOR} makes the ${Options.PENCIL} dull`,
    [Options.PAPER]: `${Options.SCISSOR} cuts ${Options.PAPER}`,
  },
  [Options.PENCIL]: {
    [Options.PAPER]: `${Options.PENCIL} writes on ${Options.PAPER}`,
  },
  [Options.PAPER]: {
    [Options.ROCK]: `${Options.PAPER} wraps around ${Options.ROCK}`,
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
