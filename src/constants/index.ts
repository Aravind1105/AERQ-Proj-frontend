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

export enum Options {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSOR = "SCISSOR",
  PENCIL = "PENCIL",
}
