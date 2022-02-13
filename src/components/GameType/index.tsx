import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Header, Button } from "./styles";
import { Paths, Types } from "../../constants";

const GameType: FC = () => {
  const navigate = useNavigate();

  const startGame = (PlayVsComp: boolean) => {
    if (PlayVsComp) {
      navigate(`${Paths.GAME_START}/${Types.PLAYER_VS_COMP}`);
    } else {
      navigate(`${Paths.GAME_START}/${Types.COMP_VS_COMP}`);
    }
  };
  return (
    <Container>
      <Header>Welcome to the Roshambo Game</Header>
      <Button onClick={() => startGame(true)}>Player vs Computer</Button>
      <Button onClick={() => startGame(false)}>Computer vs Computer</Button>
    </Container>
  );
};

export default GameType;
